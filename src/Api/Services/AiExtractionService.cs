using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using JsonLdRecipeParser;
using Kokbok.Api.Models;
using Kokbok.Api.Utils;
using Microsoft.Extensions.AI;

namespace Kokbok.Api.Services;

public sealed class AiExtractionService(IChatClient chatClient, TimeProvider timeProvider)
{
    public async Task<Models.Recipe> Extract(
        Guid id,
        User owner,
        Source source,
        IEnumerable<ChatMessage> messages,
        CancellationToken cancellationToken
    )
    {
        var response = await chatClient.GetResponseAsync<AiRecipe>(
            [
                new ChatMessage(
                    ChatRole.System,
                    """
                    You are a system build for extracting recipes from various sources. You will be presented with a source and your task is to respond with a name, an optional description, and one or more ingredient and instructions sections respectively. You should not infer any information, and all text you output must be directly lifted from the source (with minimal formatting changes if necessary).

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
                .. messages,
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
            Owner = owner,
            CreatedAt = timeProvider.GetUtcNow(),
            Source = source,
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
