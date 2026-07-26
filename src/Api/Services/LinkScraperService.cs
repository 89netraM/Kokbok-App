using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Mime;
using System.Net.NetworkInformation;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using HtmlAgilityPack;
using JsonLdRecipeParser;
using Kokbok.Api.Models;
using Kokbok.Api.Utils;
using Microsoft.Extensions.Logging;
using Microsoft.Playwright;

namespace Kokbok.Api.Services;

public sealed class LinkScraperService(
    ILogger<LinkScraperService> logger,
    HttpClient httpClient,
    PlaywrightService playwrightService,
    AssetService assetService,
    TimeProvider timeProvider
)
{
    public async Task<Models.Recipe> CreateRecipeFromLink(
        Guid id,
        Uri url,
        User user,
        CancellationToken cancellationToken
    )
    {
        var json = await GetJsonLd(url, cancellationToken) ?? throw new Exception("No JSON-LD element.");
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
            recipe.Image = await DownloadImage(user, recipe.Name, url, jsonLdRecipe.Images, cancellationToken);
        }

        return recipe;
    }

    private async Task<string?> GetJsonLd(Uri url, CancellationToken cancellationToken) =>
        await GetStaticJsonLd(url, cancellationToken) ?? await GetClientSideJsonLd(url, cancellationToken);

    private async Task<string?> GetStaticJsonLd(Uri url, CancellationToken cancellationToken)
    {
        logger.LogDebug("Reading JSON-LD from static source {URL}", url);
        var html = await httpClient.GetStringAsync(url, cancellationToken);
        var document = new HtmlDocument();
        document.LoadHtml(html);
        var node = document.DocumentNode.SelectSingleNode("//script[@type=\"application/ld+json\"]/text()");
        return (node as HtmlTextNode)?.Text;
    }

    private async Task<string?> GetClientSideJsonLd(Uri url, CancellationToken cancellationToken)
    {
        logger.LogDebug("Reading JSON-LD from client side source {URL}", url);
        await using var page = await playwrightService.NewPageAsync();
        await page.GotoAsync(url.ToString());
        await using var element = await page.WaitForSelectorAsync(
            "script[type=\"application/ld+json\"]",
            new() { State = WaitForSelectorState.Attached }
        );
        if (element is null)
        {
            return null;
        }
        return await element.InnerTextAsync();
    }

    private async Task<Asset?> DownloadImage(
        User user,
        string recipeName,
        Uri url,
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
}
