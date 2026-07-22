using System;

namespace Kokbok.Api.Models;

public sealed class Asset
{
    public Guid Id { get; set; }
    public required string Filename { get; init; }
    public required string ContentType { get; init; }
    public required User UploadedBy { get; init; }
    public required DateTimeOffset UploadedAt { get; init; }
    public DateTimeOffset? RemovedAt { get; set; }
}
