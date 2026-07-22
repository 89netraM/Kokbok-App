using System;

namespace Kokbok.Api.Models;

public sealed class Instruction
{
    public Guid Id { get; }
    public string? Name { get; set; }
    public required string Text { get; set; }
}
