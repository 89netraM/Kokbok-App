using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Kokbok.Api.Database;
using Kokbok.Api.Endpoints;
using Kokbok.Api.Models;
using Kokbok.Api.Utils;
using Microsoft.EntityFrameworkCore;

namespace Kokbok.Api.Services;

public sealed class RecipeService(KokbokDbContext dbContext, TimeProvider timeProvider)
{
    public IAsyncEnumerable<Models.Recipe> GetLatestRecipes(Models.User? user)
    {
        IQueryable<Models.Recipe> query = dbContext
            .Recipes.AsNoTracking()
            .Include(r => r.Image)
            .Include(r => r.Owner)
            .Where(r => r.DeletedAt == null)
            .OrderByDescending(r => r.CreatedAt)
            .ThenBy(r => r.Name);
        if (user is null)
        {
            query = query.Where(r => r.Visibility == Visibility.Public);
        }
        else
        {
            query = query.Where(r =>
                r.Visibility == Visibility.Public || r.Owner == user || r.SharedWith.Contains(user)
            );
        }
        return query.AsAsyncEnumerable();
    }

    public async Task<Models.Recipe?> GetRecipe(Models.User? user, Guid id, CancellationToken cancellationToken)
    {
        IQueryable<Models.Recipe> query = dbContext
            .Recipes.AsNoTracking()
            .Include(r => r.Image)
            .Include(r => r.Owner)
            .Include(r => r.Source)
            .Include(r => r.Ingredients.OrderBy(s => s.Order))
                .ThenInclude(s => s.Values.OrderBy(i => i.Order))
                    .ThenInclude(i => i.Amount)
                        .ThenInclude(a => a!.Value)
            .Include(r => r.Instructions.OrderBy(s => s.Order))
                .ThenInclude(s => s.Values.OrderBy(i => i.Order))
            .Where(r => r.Id == id && r.DeletedAt == null);
        if (user is null)
        {
            query = query.Where(r => r.Visibility == Visibility.Public);
        }
        else
        {
            query = query.Where(r =>
                r.Visibility == Visibility.Public || r.Owner == user || r.SharedWith.Contains(user)
            );
        }
        return await query.FirstOrDefaultAsync(cancellationToken);
    }

    public async Task<Models.Recipe> CreateRecipe(
        Models.User owner,
        CreateRecipeRequest request,
        CancellationToken cancellationToken
    )
    {
        var recipe = new Models.Recipe
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            Description = request.Description,
            Owner = owner,
            CreatedAt = timeProvider.GetUtcNow(),
            Image = request.ImageId is not Guid imageId
                ? null
                : await dbContext.Assets.FirstAsync(i => i.Id == imageId, cancellationToken),
            Ingredients =
            {
                request.Ingredients.Select(
                    (s, o) =>
                        new Models.Section<Models.Ingredient>
                        {
                            Id = Guid.NewGuid(),
                            Order = o,
                            Name = s.Name,
                            Values =
                            {
                                s.Values.Select(
                                    (i, o) =>
                                        new Models.Ingredient
                                        {
                                            Id = Guid.NewGuid(),
                                            Order = o,
                                            Name = i.Name,
                                            Amount = i.Amount is not { } amount
                                                ? null
                                                : new Models.Amount
                                                {
                                                    Value = amount.Value switch
                                                    {
                                                        Endpoints.ExactValue(var value) => new Models.ExactValue(value),
                                                        Endpoints.RangeValue(var from, var to) => new Models.RangeValue(
                                                            from,
                                                            to
                                                        ),
                                                    },
                                                    Unit = amount.Unit,
                                                },
                                        }
                                ),
                            },
                        }
                ),
            },
            Instructions =
            {
                request.Instructions.Select(
                    (s, o) =>
                        new Models.Section<Models.Instruction>
                        {
                            Id = Guid.NewGuid(),
                            Order = o,
                            Name = s.Name,
                            Values =
                            {
                                s.Values.Select(
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

        dbContext.Recipes.Add(recipe);
        await dbContext.SaveChangesAsync(cancellationToken);

        return recipe;
    }
}
