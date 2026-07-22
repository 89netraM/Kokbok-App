using System;

namespace Kokbok.Api.Models;

public sealed class Ingredient
{
    public Guid Id { get; }
    public required string Name { get; set; }
    public Amount? Amount { get; set; }
}
