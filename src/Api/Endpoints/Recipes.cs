using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using Kokbok.Api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace Kokbok.Api.Endpoints;

public static class Recipes
{
    extension(IEndpointRouteBuilder builder)
    {
        public RouteGroupBuilder MapRecipeEndpoints()
        {
            var group = builder.MapGroup("recipes");

            group.MapGet("", GetLatestRecipes);
            group.MapPut("", CreateRecipe).RequireAuthorization();
            group.MapGet("{id}", GetRecipe);

            var jobs = group.MapGroup("jobs").RequireAuthorization();
            jobs.MapPut("", CreateRecipeJob);
            jobs.MapGet("{id}", GetRecipeJob).WithName(nameof(GetRecipeJob));

            return group;
        }
    }

    private static async IAsyncEnumerable<LightRecipe> GetLatestRecipes(
        [FromServices] UserManager<Models.User> userManager,
        [FromServices] RecipeService recipeService,
        HttpContext httpContext,
        [EnumeratorCancellation] CancellationToken cancellationToken
    )
    {
        var user = await userManager.GetUserAsync(httpContext.User);
        var recipes = recipeService.GetLatestRecipes(user);
        await foreach (var recipe in recipes.WithCancellation(cancellationToken))
        {
            yield return LightRecipe.FromModel(recipe);
        }
    }

    private static async Task<Ok<LightRecipe>> CreateRecipe(
        [FromServices] UserManager<Models.User> userManager,
        [FromServices] RecipeService recipeService,
        HttpContext httpContext,
        [FromBody] CreateRecipeRequest request,
        CancellationToken cancellationToken
    )
    {
        // Endpoint requires authenticated users
        var user = (await userManager.GetUserAsync(httpContext.User))!;
        var recipe = await recipeService.CreateRecipe(user, request, cancellationToken);
        return TypedResults.Ok(LightRecipe.FromModel(recipe));
    }

    private static async Task<AcceptedAtRoute<RecipeCreationJob>> CreateRecipeJob(
        [FromServices] UserManager<Models.User> userManager,
        [FromServices] RecipeCreationJobService recipeCreationJobService,
        HttpContext httpContext,
        [FromBody] CreateRecipeFromLinkRequest request,
        CancellationToken cancellationToken
    )
    {
        // Endpoint requires authenticated users
        var user = (await userManager.GetUserAsync(httpContext.User))!;
        var job = await recipeCreationJobService.StartCreationFromLink(user, request.Link, cancellationToken);
        return TypedResults.AcceptedAtRoute(
            RecipeCreationJob.FromModel(job),
            nameof(GetRecipeJob),
            new RouteValueDictionary { ["id"] = job.Id }
        );
    }

    private static async Task<Results<Ok<RecipeCreationJob>, NotFound>> GetRecipeJob(
        [FromServices] UserManager<Models.User> userManager,
        [FromServices] RecipeCreationJobService recipeCreationJobService,
        HttpContext httpContext,
        [FromRoute] Guid id,
        CancellationToken cancellationToken
    )
    {
        // Endpoint requires authenticated users
        var user = (await userManager.GetUserAsync(httpContext.User))!;
        var job = await recipeCreationJobService.GetRecipeJob(user, id, cancellationToken);
        return job is null ? TypedResults.NotFound() : TypedResults.Ok(RecipeCreationJob.FromModel(job));
    }

    private static async Task<Results<Ok<Recipe>, NotFound>> GetRecipe(
        [FromServices] UserManager<Models.User> userManager,
        [FromServices] RecipeService recipeService,
        HttpContext httpContext,
        [FromRoute] Guid id,
        CancellationToken cancellationToken
    )
    {
        var user = await userManager.GetUserAsync(httpContext.User);
        var recipe = await recipeService.GetRecipe(user, id, cancellationToken);
        return recipe is not null ? TypedResults.Ok(Recipe.FromModel(recipe)) : TypedResults.NotFound();
    }
}

public class LightRecipe
{
    public static LightRecipe FromModel(Models.Recipe recipe) =>
        new()
        {
            Id = recipe.Id,
            Name = recipe.Name,
            Description = recipe.Description,
            ImageId = recipe.Image?.Id,
            Owner = User.FromModel(recipe.Owner),
        };

    public required Guid Id { get; init; }
    public required string Name { get; init; }
    public required string? Description { get; init; }
    public required Guid? ImageId { get; init; }
    public required User Owner { get; init; }
}

public sealed class Recipe : LightRecipe
{
    public static new Recipe FromModel(Models.Recipe recipe) =>
        new()
        {
            Id = recipe.Id,
            Name = recipe.Name,
            Description = recipe.Description,
            ImageId = recipe.Image?.Id,
            Owner = User.FromModel(recipe.Owner),
            Instructions =
            [
                .. recipe.Instructions.Select(s => new Section<Instruction>
                {
                    Name = s.Name,
                    Values = [.. s.Values.Select(i => new Instruction { Name = i.Name, Text = i.Text })],
                }),
            ],
            Ingredients =
            [
                .. recipe.Ingredients.Select(s => new Section<Ingredient>
                {
                    Name = s.Name,
                    Values =
                    [
                        .. s.Values.Select(i => new Ingredient
                        {
                            Name = i.Name,
                            Amount = i.Amount is null
                                ? null
                                : new Amount
                                {
                                    Value = i.Amount.Value switch
                                    {
                                        Models.ExactValue(var value) => new ExactValue(value),
                                        Models.RangeValue(var from, var to) => new RangeValue(from, to),
                                    },
                                    Unit = i.Amount.Unit,
                                },
                        }),
                    ],
                }),
            ],
        };

    public required Section<Instruction>[] Instructions { get; init; }
    public required Section<Ingredient>[] Ingredients { get; init; }
}

public sealed class User
{
    public static User FromModel(Models.User user) =>
        new()
        {
            Id = Guid.Parse(user.Id),
            // All users are created with usernames and names
            Username = user.UserName!,
            Name = user.Name!,
        };

    public required Guid Id { get; init; }
    public required string Username { get; init; }
    public required string Name { get; init; }
}

public sealed class CreateRecipeRequest
{
    public required string Name { get; init; }
    public string? Description { get; init; }
    public Guid? ImageId { get; init; }
    public Section<Ingredient>[] Ingredients { get; init; } = [];
    public Section<Instruction>[] Instructions { get; init; } = [];
}

public sealed class CreateRecipeFromLinkRequest
{
    public required Uri Link { get; init; }
}

public sealed class Section<T>
{
    public string? Name { get; init; }
    public T[] Values { get; init; } = [];
}

public sealed class Ingredient
{
    public required string Name { get; init; }
    public Amount? Amount { get; init; }
}

public sealed class Amount
{
    public required AmountValue Value { get; init; }
    public string? Unit { get; init; }
}

[JsonPolymorphic(TypeDiscriminatorPropertyName = "type")]
[JsonDerivedType(typeof(ExactValue), "exact")]
[JsonDerivedType(typeof(RangeValue), "range")]
public closed record AmountValue();

public record ExactValue(double Value) : AmountValue();

public record RangeValue(double From, double To) : AmountValue();

public sealed class Instruction
{
    public string? Name { get; init; }
    public required string Text { get; init; }
}

public sealed class RecipeCreationJob
{
    public static RecipeCreationJob FromModel(Models.RecipeCreationJob job) =>
        new()
        {
            Id = job.Id,
            RecipeId = job.Recipe?.Id,
            ScheduledAt = job.ScheduledAt,
            StartedAt = job.StartedAt,
            CompletedAt = job.CompletedAt,
        };

    public required Guid Id { get; init; }
    public required Guid? RecipeId { get; init; }
    public required DateTimeOffset ScheduledAt { get; init; }
    public required DateTimeOffset? StartedAt { get; set; }
    public required DateTimeOffset? CompletedAt { get; set; }
}
