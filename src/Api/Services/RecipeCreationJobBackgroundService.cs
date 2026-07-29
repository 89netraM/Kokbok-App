using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Kokbok.Api.Services;

public sealed class RecipeCreationJobBackgroundService(
    ILogger<RecipeCreationJobBackgroundService> logger,
    IServiceProvider serviceProvider
) : BackgroundService
{
    private static readonly ActivitySource activitySource = new("Kokbok");

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            using (var scope = serviceProvider.CreateScope())
            {
                var recipeCreationJobService = scope.ServiceProvider.GetRequiredService<RecipeCreationJobService>();

                var job = await recipeCreationJobService.GetNextRecipeJob(stoppingToken);
                if (job is not null)
                {
                    using var activity = activitySource.StartActivity("RecipeCreationJob", ActivityKind.Internal);
                    activity?.SetTag("JobId", job.Id);
                    await Work(scope.ServiceProvider, recipeCreationJobService, job, stoppingToken);
                }
            }

            await Task.Delay(TimeSpan.FromSeconds(1), stoppingToken);
        }
    }

    private async Task Work(
        IServiceProvider sp,
        RecipeCreationJobService recipeCreationJobService,
        Models.RecipeCreationJob job,
        CancellationToken cancellationToken
    )
    {
        if (job.Recipe is not null)
        {
            await recipeCreationJobService.CompleteRecipeJob(job, job.Recipe, cancellationToken);
            return;
        }

        try
        {
            await recipeCreationJobService.StartRecipeJob(job, cancellationToken);
            var recipe = await CreateRecipe(sp, job, cancellationToken);
            await recipeCreationJobService.CompleteRecipeJob(job, recipe, cancellationToken);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed when working on job {JobId}.", job.Id);
            await recipeCreationJobService.CompleteRecipeJob(job, ex, cancellationToken);
        }
    }

    private static async Task<Models.Recipe> CreateRecipe(
        IServiceProvider sp,
        Models.RecipeCreationJob job,
        CancellationToken cancellationToken
    ) =>
        job.Task switch
        {
            Models.RecipeCreationTask.Link(var url) => await sp.GetRequiredService<LinkScraperService>()
                .CreateRecipeFromLink(job.RecipeId, url, job.Owner, cancellationToken),
            Models.RecipeCreationTask.Images(var assets) => await sp.GetRequiredService<ImageReaderService>()
                .CreateRecipeFromImages(job.RecipeId, assets, job.Owner, cancellationToken),
        };
}
