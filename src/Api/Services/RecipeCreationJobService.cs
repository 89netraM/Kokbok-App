using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Kokbok.Api.Database;
using Kokbok.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Kokbok.Api.Services;

public sealed class RecipeCreationJobService(KokbokDbContext dbContext, TimeProvider timeProvider)
{
    public async Task<RecipeCreationJob> StartCreationFromLink(User user, Uri url, CancellationToken cancellationToken)
    {
        var job = new RecipeCreationJob
        {
            Id = Guid.NewGuid(),
            RecipeId = Guid.NewGuid(),
            Owner = user,
            Task = new RecipeCreationTask.Link(url),
            ScheduledAt = timeProvider.GetUtcNow(),
        };
        dbContext.RecipeCreationJobs.Add(job);
        await dbContext.SaveChangesAsync(cancellationToken);
        return job;
    }

    public async Task<RecipeCreationJob?> GetRecipeJob(User user, Guid id, CancellationToken cancellationToken) =>
        await dbContext
            .RecipeCreationJobs.AsNoTracking()
            .Where(j => j.Owner == user && j.Id == id)
            .Include(j => j.Owner)
            .FirstOrDefaultAsync(cancellationToken);

    public async Task<RecipeCreationJob?> GetNextRecipeJob(CancellationToken cancellationToken) =>
        await dbContext
            .RecipeCreationJobs.Where(j => j.CompletedAt == null)
            .Include(j => j.Owner)
            .OrderBy(j => j.ScheduledAt)
            .FirstOrDefaultAsync(cancellationToken);

    public async Task StartRecipeJob(RecipeCreationJob job, CancellationToken cancellationToken)
    {
        job.StartedAt = timeProvider.GetUtcNow();
        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task CompleteRecipeJob(RecipeCreationJob job, Recipe? recipe, CancellationToken cancellationToken)
    {
        job.CompletedAt = timeProvider.GetUtcNow();
        job.Recipe = recipe;
        if (recipe is not null)
        {
            dbContext.Recipes.Add(recipe);
        }
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}
