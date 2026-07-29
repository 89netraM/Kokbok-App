using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Kokbok.Api.Database;
using Kokbok.Api.Endpoints;
using Kokbok.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.AI;

namespace Kokbok.Api.Services;

public sealed class ImageReaderService(
    KokbokDbContext dbContext,
    AssetService assetService,
    AiExtractionService aiExtractionService
)
{
    internal async Task<Models.Recipe> CreateRecipeFromImages(
        Guid recipeId,
        Guid[] assetIds,
        Models.User owner,
        CancellationToken cancellationToken
    )
    {
        var assets = await dbContext.Assets.Where(a => assetIds.Contains(a.Id)).ToArrayAsync(cancellationToken);
        var imageContents = await assets
            .ToAsyncEnumerable()
            .Select(
                async (Models.Asset asset, CancellationToken ct) =>
                {
                    using var stream = assetService.GetStream(asset);
                    using var ms = new MemoryStream();
                    await stream.CopyToAsync(ms, ct);
                    var data = ms.ToArray().AsMemory();
                    return new DataContent(data, asset.ContentType);
                }
            )
            .ToArrayAsync(cancellationToken);

        return await aiExtractionService.Extract(
            recipeId,
            owner,
            new Models.Images { Assets = assets },
            [
                new ChatMessage(
                    ChatRole.User,
                    [
                        new TextContent(
                            $"Please extract a recipe from the attached image{(imageContents.Length > 1 ? "s" : "")}."
                        ),
                        .. imageContents,
                    ]
                ),
            ],
            cancellationToken
        );
    }
}
