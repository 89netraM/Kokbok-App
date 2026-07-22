using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Kokbok.Api.Database;
using Kokbok.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Kokbok.Api.Services;

public sealed class AssetService(
    KokbokDbContext dbContext,
    IOptions<AssetServiceOptions> options,
    TimeProvider timeProvider
)
{
    private readonly string directory = options.Value.Directory;

    public IAsyncEnumerable<Asset> GetAssets(User user) =>
        dbContext
            .Assets.AsNoTracking()
            .Where(a => a.RemovedAt == null && a.UploadedBy == user)
            .OrderByDescending(a => a.UploadedAt)
            .AsAsyncEnumerable();

    public async Task<Asset> UploadAsset(
        User user,
        string filename,
        string contentType,
        Stream stream,
        CancellationToken cancellationToken
    )
    {
        var id = Guid.NewGuid();
        await using var fileStream = new FileStream(
            Path.Join(directory, id.ToString()),
            FileMode.CreateNew,
            FileAccess.Write,
            FileShare.None,
            bufferSize: 4096,
            FileOptions.Asynchronous
        );
        await stream.CopyToAsync(fileStream, cancellationToken);
        var asset = new Asset
        {
            Id = id,
            Filename = filename,
            ContentType = contentType,
            UploadedAt = timeProvider.GetUtcNow(),
            UploadedBy = user,
        };
        dbContext.Assets.Add(asset);
        await dbContext.SaveChangesAsync(cancellationToken);
        return asset;
    }

    public async Task<AssetStream?> TryGetAssetStream(Guid id, CancellationToken cancellationToken)
    {
        var path = Path.Join(directory, id.ToString());
        if (!File.Exists(path))
        {
            return null;
        }
        var asset = await dbContext
            .Assets.AsNoTracking()
            .Where(a => a.RemovedAt == null && a.Id == id)
            .FirstOrDefaultAsync(cancellationToken);
        if (asset is null)
        {
            return null;
        }

        return new(
            asset.Filename,
            asset.ContentType,
            new FileStream(
                path,
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read,
                bufferSize: 4096,
                FileOptions.Asynchronous
            )
        );
    }
}

public record AssetStream(string Filename, string ContentType, Stream FileStream);
