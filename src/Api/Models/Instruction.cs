using System;

namespace Kokbok.Api.Models;

public sealed class Instruction
{
    public Guid Id { get; set; }
    public int Order { get; set; }
    public string? Name { get; set; }
    public required string Text { get; set; }
}
