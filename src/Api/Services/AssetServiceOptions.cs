using System.IO;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Kokbok.Api.Services;

public sealed class AssetServiceOptions
{
    public required string Directory { get; set; }
}

file sealed class AssetServiceOptionsValidator : IValidateOptions<AssetServiceOptions>
{
    public ValidateOptionsResult Validate(string? name, AssetServiceOptions options)
    {
        var builder = new ValidateOptionsResultBuilder();

        ValidateUploadsPath(name, options.Directory, builder);

        return builder.Build();
    }

    private static void ValidateUploadsPath(string? name, string uploadsPath, ValidateOptionsResultBuilder builder)
    {
        string propertyName = string.IsNullOrEmpty(name)
            ? nameof(AssetServiceOptions.Directory)
            : $"{name}.{nameof(AssetServiceOptions.Directory)}";

        if (string.IsNullOrWhiteSpace(uploadsPath))
        {
            builder.AddError("Cannot be null or empty.", propertyName);
            return;
        }

        if (!Directory.Exists(uploadsPath))
        {
            builder.AddError("Directory must exist.", propertyName);
            return;
        }
    }
}

public static class AssetServiceOptionsServiceExtensions
{
    public static IServiceCollection AddAssetServiceOptions(this IServiceCollection services)
    {
        services
            .AddOptions<AssetServiceOptions>()
            .BindConfiguration("Storage")
            .Validate<AssetServiceOptionsValidator>()
            .ValidateOnStart();
        return services;
    }
}
