using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
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

public static class Assets
{
    extension(IEndpointRouteBuilder builder)
    {
        public RouteGroupBuilder MapAssetEndpoints()
        {
            var group = builder.MapGroup("assets");

            group.MapGet("", GetAssets).RequireAuthorization();
            group.MapPut("", UploadAsset).RequireAuthorization();
            group.MapGet("{id}", GetAsset);

            return group;
        }
    }

    private static async IAsyncEnumerable<Asset> GetAssets(
        [FromServices] UserManager<Models.User> userManager,
        [FromServices] AssetService assetService,
        HttpContext httpContext,
        [EnumeratorCancellation] CancellationToken cancellationToken
    )
    {
        // Endpoint requires authenticated users
        var user = (await userManager.GetUserAsync(httpContext.User))!;
        var assets = assetService.GetAssets(user);
        await foreach (var asset in assets.WithCancellation(cancellationToken))
        {
            yield return Asset.FromModel(asset);
        }
    }

    private static async Task<Ok<Asset>> UploadAsset(
        [FromServices] UserManager<Models.User> userManager,
        [FromServices] AssetService assetService,
        HttpContext httpContext,
        [FromForm] IFormFile file,
        CancellationToken cancellationToken
    )
    {
        // Endpoint requires authenticated users
        var user = (await userManager.GetUserAsync(httpContext.User))!;
        await using var fileStream = file.OpenReadStream();
        var asset = await assetService.UploadAsset(
            user,
            file.FileName,
            file.ContentType,
            fileStream,
            cancellationToken
        );
        return TypedResults.Ok(Asset.FromModel(asset));
    }

    private static async Task<Results<FileStreamHttpResult, NotFound>> GetAsset(
        [FromServices] AssetService assetService,
        [FromRoute] Guid id,
        CancellationToken cancellationToken
    )
    {
        var assetStream = await assetService.TryGetAssetStream(id, cancellationToken);
        if (assetStream is null)
        {
            return TypedResults.NotFound();
        }

        return TypedResults.File(
            fileDownloadName: assetStream.Filename,
            contentType: assetStream.ContentType,
            fileStream: assetStream.FileStream
        );
    }
}

public sealed class Asset
{
    public static Asset FromModel(Models.Asset asset) =>
        new()
        {
            Id = asset.Id,
            Filename = asset.Filename,
            UploadedAt = asset.UploadedAt,
        };

    public required Guid Id { get; init; }
    public required string Filename { get; init; }
    public required DateTimeOffset UploadedAt { get; init; }
}
