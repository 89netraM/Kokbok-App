using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Cache;
using System.Net.Http;
using System.Net.Mime;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using HtmlAgilityPack;
using JsonLdRecipeParser;
using Kokbok.Api.Models;
using Kokbok.Api.Utils;
using Microsoft.Extensions.AI;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Playwright;

namespace Kokbok.Api.Services;

public sealed class LinkScraperService(IServiceProvider serviceProvider)
{
    public async Task<Models.Recipe> CreateRecipeFromLink(
        Guid id,
        Uri url,
        User user,
        CancellationToken cancellationToken
    )
    {
        await using var instance = ActivatorUtilities.CreateInstance<LinkScraperInstance>(
            serviceProvider,
            id,
            url,
            user
        );
        return await instance.CreateRecipeFromLink(cancellationToken);
    }
}

file sealed class LinkScraperInstance : IAsyncDisposable
{
    private readonly Guid id;
    private readonly Uri url;
    private readonly User user;
    private readonly ILogger<LinkScraperService> logger;
    private readonly HttpClient httpClient;
    private readonly PlaywrightService playwrightService;
    private readonly AssetService assetService;
    private readonly TimeProvider timeProvider;
    private readonly IChatClient chatClient;

    private readonly Lazy<Task<IPage>> page;

    public LinkScraperInstance(
        Guid id,
        Uri url,
        User user,
        ILogger<LinkScraperService> logger,
        [FromKeyedServices(nameof(LinkScraperService))] HttpClient httpClient,
        PlaywrightService playwrightService,
        AssetService assetService,
        TimeProvider timeProvider,
        IChatClient chatClient
    )
    {
        this.id = id;
        this.url = url;
        this.user = user;
        this.logger = logger;
        this.httpClient = httpClient;
        this.playwrightService = playwrightService;
        this.assetService = assetService;
        this.timeProvider = timeProvider;
        this.chatClient = chatClient;

        page = new(async () =>
        {
            var page = await this.playwrightService.NewPageAsync();
            await page.GotoAsync(this.url.ToString());
            return page;
        });
    }

    public async Task<Models.Recipe> CreateRecipeFromLink(CancellationToken cancellationToken)
    {
        var exceptions = new List<Exception>();

        try
        {
            return await CreateRecipeFromJsonLd(cancellationToken);
        }
        catch (Exception ex)
        {
            exceptions.Add(ex);
        }

        try
        {
            return await CreateRecipeFromWebpage(cancellationToken);
        }
        catch (Exception ex)
        {
            exceptions.Add(ex);
        }

        throw new AggregateException("Failed scraping recipe.", exceptions);
    }

    private async Task<Models.Recipe> CreateRecipeFromJsonLd(CancellationToken cancellationToken)
    {
        var json = await GetJsonLd(cancellationToken) ?? throw new Exception("No JSON-LD element.");
        var jsonLdRecipe = JsonLdRecipeParser.Recipe.Parse(
            JsonSerializer.Deserialize<JsonDocument>(json) ?? throw new Exception("Null JSON-LD document.")
        );

        var recipe = new Models.Recipe
        {
            Id = id,
            Name = jsonLdRecipe.Name,
            Description = jsonLdRecipe.Description,
            Owner = user,
            CreatedAt = timeProvider.GetUtcNow(),
            Source = new Link { Url = url },
            Ingredients =
            {
                new()
                {
                    Id = Guid.NewGuid(),
                    Order = 0,
                    Values =
                    {
                        jsonLdRecipe.Ingredients.Select(
                            (i, o) =>
                                new Models.Ingredient
                                {
                                    Id = Guid.NewGuid(),
                                    Order = o,
                                    Name = i.Name,
                                    Amount = i.Amount is null
                                        ? null
                                        : new()
                                        {
                                            Value = i.Amount.Value switch
                                            {
                                                ExactAmountValue(var value) => new ExactValue(value),
                                                RangeAmountValue(var from, var to) => new RangeValue(from, to),
                                            },
                                            Unit = i.Amount.Unit,
                                        },
                                }
                        ),
                    },
                },
            },
            Instructions =
            {
                jsonLdRecipe.InstructionSections.Select(
                    (s, o) =>
                        new Section<Models.Instruction>()
                        {
                            Id = Guid.NewGuid(),
                            Order = o,
                            Name = s.Name,
                            Values =
                            {
                                s.Instructions.Select(
                                    (i, o) =>
                                        new Models.Instruction
                                        {
                                            Id = Guid.NewGuid(),
                                            Order = o,
                                            Name = i.Name,
                                            Text = i.Text,
                                        }
                                ),
                            },
                        }
                ),
            },
        };

        if (jsonLdRecipe.Images.Length > 0)
        {
            recipe.Image = await DownloadImage(recipe.Name, jsonLdRecipe.Images, cancellationToken);
        }

        return recipe;
    }

    private async Task<JsonNode?> GetJsonLd(CancellationToken cancellationToken) =>
        await GetStaticJsonLd(cancellationToken) ?? await GetClientSideJsonLd(cancellationToken);

    private async Task<JsonNode?> GetStaticJsonLd(CancellationToken cancellationToken)
    {
        logger.LogDebug("Reading JSON-LD from static source {URL}", url);
        var html = await httpClient.GetStringAsync(url, cancellationToken);
        var document = new HtmlDocument();
        document.LoadHtml(html);
        var nodes = document
            .DocumentNode.SelectNodes("//script[@type=\"application/ld+json\"]/text()")
            ?.OfType<HtmlTextNode>()
            .SelectMany(n =>
                JsonNode.Parse(n.Text) switch
                {
                    JsonObject obj => [obj.DeepClone()],
                    JsonArray array => array.DeepClone().AsArray(),
                    _ => [],
                }
            )
            .OfType<JsonNode>()
            .ToArray();
        return nodes?.Length is > 0 ? nodes.ToJsonArray() : null;
    }

    private async Task<JsonNode?> GetClientSideJsonLd(CancellationToken cancellationToken)
    {
        logger.LogDebug("Reading JSON-LD from client side source {URL}", url);
        var page = await this.page.Value;
        var locator = page.Locator("script[type=\"application/ld+json\"]");
        await locator.First.WaitForAsync(new() { State = WaitForSelectorState.Attached });
        var nodes = (await locator.AllTextContentsAsync())
            .SelectMany(t =>
                JsonNode.Parse(t) switch
                {
                    JsonObject obj => [obj],
                    JsonArray array => array,
                    _ => [],
                }
            )
            .OfType<JsonNode>()
            .ToArray();
        return nodes.Length > 0 ? nodes.ToJsonArray() : null;
    }

    private async Task<Models.Recipe> CreateRecipeFromWebpage(CancellationToken cancellationToken)
    {
        logger.LogDebug("Scraping text from client side webpage {URL}", url);
        var page = await this.page.Value;
        var text = await page.InnerTextAsync("body");
        var response = await chatClient.GetResponseAsync<AiRecipe>(
            [
                new ChatMessage(
                    ChatRole.System,
                    """
                    You are a system build for extracting recipes from webpages. You will be presented with the text contents of a webpage and your task is to respond with a name, an optional description, and one or more ingredient and instructions sections respectively. You should not infer any information, and all text you output must be directly lifted from the webpage (with minimal formatting changes if necessary).

                    Here are two brief examples of the expected JSON output structure.

                    With a description and only one (unnamed) section for both instructions and ingredients.
                    {
                      "title": "Scones grundrecept",
                      "description": "Scones är perfekta att baka till helgfrukosten. Det är så enkelt att baka scones, allt du behöver göra är att blanda ihop alla ingredienser, forma till små bullar och sen grädda färdigt sconesen i ugnen. Servera med ost och marmelad.",
                      "ingredients": [
                        {
                          "items": [
                            "4 tsk bakpulver",
                            "1 tsk salt",
                            "4 dl vetemjöl"
                          ]
                        }
                      ],
                      "instructions": [
                        {
                          "items": [
                            "Värm ugnen till 225°.",
                            "Mät upp mjöl, bakpulver, och salt i en bunke eller en matberedare.",
                          ]
                        }
                      ]
                    }

                    Without a description but with multiple named sections for ingredients and instructions. When there are multiple section, you must try to find "names" for the sections.
                    {
                      "name": "Haloumi med vitlökssås",
                      "ingredients": [
                        {
                          "name": "Haloumi",
                          "items": [
                            "1 st Haloumi",
                            "Olja",
                            "Smör"
                          ]
                        },
                        {
                          "name": "Vitlökssås",
                          "items": [
                            "1,5 dl Gräddfil",
                            "1 msk Majonnäs",
                            "1 st Medelstor vitlöksklyfta"
                          ]
                        }
                      ],
                      "instructions": [
                        {
                          "name: "Haloumi"
                          "items": [
                            "Skär haloumin i tunna skivor och lägg i kallt vatten i 5 minuter.",
                            "Stek skivorna i het panna med mycket olja och lite smör tills de får färg och mjuknar."
                          ]
                        },
                        {
                          "name: "Vitlökssås"
                          "items": [
                            "Blanda gräddfilen och majonnäsen.",
                            "Pressa vitlöken och blanda i, krydda efter smak."
                          ]
                        }
                      ]
                    }
                    """
                ),
                new ChatMessage(
                    ChatRole.User,
                    [
                        new TextContent("Please extract a recipe from the attached webpage text content."),
                        new TextContent(
                            """
                            HÖGREVSBURGARE MED PICKLAD RÖDLÖK

                            Burgare med extra allt, och här under hittar ni mitt bästa recept på hamburgerdressing oxå.
                            Psst…. Lovar att återkomma med veckomatsedlarna i mitten av Augusti igen.

                            Det här behöver du till 8  burgare :
                            1 kilo högrevsfärs
                            2-3 msk med barbequesås eller Hp-sause
                            salt och peppar

                            Goda hamburgerbröd
                            Sallad, tomat, gurka och dressing *

                            Dressing:
                            1 dl creme fraiche
                            4 msk majonäs
                            4 msk bostongurka
                            1 msk ketchup
                            1 msk chilisås
                            1 tsk senap
                            salt

                            Picklad rödlök – klicka här

                            Gör så här:
                            Rör ihop och ställ kallt fram till servering.

                            Gör så här :
                            Rör ihop ingredienserna till hamburgarna, låt stå en timme i kylen innan du formar burgare och steker dem klara.
                            Jag vill ha mina lite rosa i mitten – men det är en smak sak.

                            Servera med bröd , grönsaker och en god dessing.
                            """
                        ),
                    ]
                ),
                new ChatMessage(
                    ChatRole.Assistant,
                    [
                        new TextContent(
                            """
                            {
                              "name": "Högrevsburgare med picklad rödlök",
                              "ingredients": [
                                {
                                  "name": "Burgare",
                                  "items": [
                                    "1 kilo högrevsfärs",
                                    "2-3 msk med barbequesås eller Hp-sause",
                                    "Salt",
                                    "Peppar"
                                  ]
                                },
                                {
                                  "items": [
                                    "Goda hamburgerbröd",
                                    "Sallad",
                                    "Tomat",
                                    "Gurka",
                                    "Dressing"
                                  ]
                                },
                                {
                                  "name": "Dressing",
                                  "items": [
                                      "1 dl creme fraiche",
                                      "4 msk majonäs",
                                      "4 msk bostongurka",
                                      "1 msk ketchup",
                                      "1 msk chilisås",
                                      "1 tsk senap",
                                      "salt"
                                  ]
                                },
                              ],
                              "instructions": [
                                {
                                  "items": [
                                    "Rör ihop och ställ kallt fram till servering."
                                  ]
                                },
                                {
                                  "items": [
                                    "Rör ihop ingredienserna till hamburgarna, låt stå en timme i kylen innan du formar burgare och steker dem klara.\nJag vill ha mina lite rosa i mitten - men det är en smak sak.",
                                    "Servera med bröd , grönsaker och en god dessing."
                                  ]
                                }
                              ]
                            }
                            """
                        ),
                    ]
                ),
                new ChatMessage(
                    ChatRole.User,
                    [
                        new TextContent("Please extract a recipe from the attached webpage text content."),
                        new TextContent(text),
                    ]
                ),
            ],
            options: new() { AdditionalProperties = new() { ["num_ctx"] = 65536 } },
            cancellationToken: cancellationToken
        );

        if (response.FinishReason != ChatFinishReason.Stop)
        {
            throw new Exception("Chat agent returned before finishing.");
        }

        return new Models.Recipe
        {
            Id = id,
            Name = response.Result.Name,
            Description = response.Result.Description,
            Owner = user,
            CreatedAt = timeProvider.GetUtcNow(),
            Source = new Link { Url = url },
            Ingredients =
            {
                response.Result.Ingredients.Select(
                    (s, o) =>
                        new Section<Models.Ingredient>()
                        {
                            Id = Guid.NewGuid(),
                            Order = o,
                            Name = s.Name,
                            Values =
                            {
                                s.Items.Select(
                                    (i, o) =>
                                        JsonLdRecipeParser.Ingredient.TryParse(i, out var ingredient)
                                            ? new Models.Ingredient
                                            {
                                                Id = Guid.NewGuid(),
                                                Order = o,
                                                Amount = ingredient.Amount is null
                                                    ? null
                                                    : new()
                                                    {
                                                        Value = ingredient.Amount.Value switch
                                                        {
                                                            ExactAmountValue(var value) => new ExactValue(value),
                                                            RangeAmountValue(var from, var to) => new RangeValue(
                                                                from,
                                                                to
                                                            ),
                                                        },
                                                        Unit = ingredient.Amount.Unit,
                                                    },
                                                Name = ingredient.Name,
                                            }
                                            : new Models.Ingredient
                                            {
                                                Id = Guid.NewGuid(),
                                                Order = o,
                                                Name = i,
                                            }
                                ),
                            },
                        }
                ),
            },
            Instructions =
            {
                response.Result.Instructions.Select(
                    (s, o) =>
                        new Section<Models.Instruction>()
                        {
                            Id = Guid.NewGuid(),
                            Order = o,
                            Name = s.Name,
                            Values =
                            {
                                s.Items.Select(
                                    (i, o) =>
                                        new Models.Instruction
                                        {
                                            Id = Guid.NewGuid(),
                                            Order = o,
                                            Text = i,
                                        }
                                ),
                            },
                        }
                ),
            },
        };
    }

    private async Task<Asset?> DownloadImage(
        string recipeName,
        IEnumerable<Uri> imageUris,
        CancellationToken cancellationToken
    )
    {
        using var response = await imageUris
            .ToAsyncEnumerable()
            .Select(
                async (iu, ct) =>
                {
                    if (!iu.IsAbsoluteUri)
                    {
                        if (iu.OriginalString.StartsWith("//"))
                        {
                            iu = new("https:" + iu.OriginalString);
                        }
                        else
                        {
                            iu = new($"{url.Scheme}://{url.Host}{iu.OriginalString}");
                        }
                    }
                    return await httpClient.GetAsync(iu, ct);
                }
            )
            .Where(r => r.IsSuccessStatusCode)
            // Assume the longest image in byte count is the largest/best quality image
            .MaxByAsync(r => r.Content.Headers.ContentLength ?? 0L, cancellationToken: cancellationToken);
        if (response is null)
        {
            return null;
        }

        var filename =
            response.Content.Headers.ContentDisposition?.FileName
            ?? response.RequestMessage?.RequestUri?.Segments.LastOrDefault(s => !s.EndsWith('/'));
        var contentType =
            response.Content.Headers.ContentType?.MediaType
            ?? GuessMimeType(filename)
            ?? MediaTypeNames.Application.Octet;
        filename ??= recipeName + (MimeTypeToExtension(contentType) ?? "");
        await using var stream = await response.Content.ReadAsStreamAsync(cancellationToken);
        return await assetService.UploadAsset(user, filename, contentType, stream, cancellationToken);
    }

    private static string? GuessMimeType(string? filename) =>
        !string.IsNullOrWhiteSpace(filename) && Path.GetExtension(filename) is string extension
            ? ExtensionToMimeType(extension)
            : null;

    private static string? ExtensionToMimeType(string extension) =>
        extension switch
        {
            ".apng" => "image/apng",
            ".avif" => "image/avif",
            ".bmp" => "image/bmp",
            ".gif" => "image/gif",
            ".ico" => "image/vnd.microsoft.icon",
            ".jpeg" or ".jpg" => "image/jpeg",
            ".png" => "image/png",
            ".svg" => "image/svg+xml",
            ".tif" or ".tiff" => "image/tiff",
            ".webp" => "image/webp",
            _ => null,
        };

    private static string? MimeTypeToExtension(string? mimeType) =>
        mimeType switch
        {
            "image/apng" => ".apng",
            "image/avif" => ".avif",
            "image/bmp" => ".bmp",
            "image/gif" => ".gif",
            "image/vnd.microsoft.icon" => ".ico",
            "image/jpeg" => ".jpg",
            "image/png" => ".png",
            "image/svg+xml" => ".svg",
            "image/tiff" => ".tiff",
            "image/webp" => ".webp",
            _ => null,
        };

    public ValueTask DisposeAsync() => page.IsValueCreated ? DisposePage() : ValueTask.CompletedTask;

    private async ValueTask DisposePage()
    {
        var page = await this.page.Value;
        await page.DisposeAsync();
    }
}

public sealed record AiRecipe(
    [property: JsonPropertyName("name")] string Name,
    [property: JsonPropertyName("description")] string Description,
    [property: JsonPropertyName("ingredients")] AiSection[] Ingredients,
    [property: JsonPropertyName("instructions")] AiSection[] Instructions
);

public sealed record AiSection(
    [property: JsonPropertyName("name")] string? Name,
    [property: JsonPropertyName("items")] string[] Items
);
