using System;

namespace Kokbok.Api.Models;

public sealed class RecipeCreationJob
{
    public required Guid Id { get; init; }
    public required Guid RecipeId { get; init; }
    public required User Owner { get; init; }
    public required RecipeCreationTask Task { get; init; }
    public required DateTimeOffset ScheduledAt { get; init; }
    public DateTimeOffset? StartedAt { get; set; }
    public DateTimeOffset? CompletedAt { get; set; }
    public Recipe? Recipe { get; set; }
}
