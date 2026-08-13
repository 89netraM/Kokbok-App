using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Kokbok.Api.Database;
using Kokbok.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.AI;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;

namespace Kokbok.Api.Services;

public sealed class ImageReaderService(
    KokbokDbContext dbContext,
    AssetService assetService,
    AiExtractionService aiExtractionService
)
{
    internal async Task<Recipe> CreateRecipeFromImages(
        Guid recipeId,
        Guid[] assetIds,
        User owner,
        CancellationToken cancellationToken
    )
    {
        var assets = await dbContext.Assets.Where(a => assetIds.Contains(a.Id)).ToArrayAsync(cancellationToken);
        var imageContents = await assets.ToAsyncEnumerable().Select(ProcessImage).ToArrayAsync(cancellationToken);

        return await aiExtractionService.Extract(
            recipeId,
            owner,
            new Images { Assets = assets },
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

    private async ValueTask<DataContent> ProcessImage(Asset asset, CancellationToken cancellationToken)
    {
        Image image;
        using (var stream = assetService.GetStream(asset))
        {
            image = await Image.LoadAsync(stream, cancellationToken);
        }
        image.Mutate(ctx =>
        {
            if (image.Width > image.Height)
            {
                ctx.Resize(0, 1080);
            }
            else
            {
                ctx.Resize(1080, 0);
            }
        });
        ReadOnlyMemory<byte> data;
        using (var ms = new MemoryStream())
        {
            await image.SaveAsJpegAsync(ms, cancellationToken);
            data = ms.ToArray().AsMemory();
        }
        return new DataContent(data, asset.ContentType);
    }
}
