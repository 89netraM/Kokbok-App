using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Kokbok.Api.Services;

public sealed class OllamaOptions
{
    [Required]
    public required Uri BaseAddress { get; set; }

    [Required]
    public required string Model { get; set; }

    public string? Authorization { get; set; }
}

[OptionsValidator]
public sealed partial class OllamaOptionsValidator : IValidateOptions<OllamaOptions>;

public static class OllamaOptionsServiceCollectionExtensions
{
    public static IServiceCollection AddOllamaOptions(this IServiceCollection services)
    {
        services
            .AddOptions<OllamaOptions>()
            .BindConfiguration("Ollama")
            .Validate<OllamaOptionsValidator>()
            .ValidateOnStart();

        return services;
    }
}
