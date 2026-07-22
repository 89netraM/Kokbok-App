using System;

namespace Kokbok.Api.Models;

public sealed class Ingredient
{
    public Guid Id { get; set; }
    public int Order { get; set; }
    public required string Name { get; set; }
    public Amount? Amount { get; set; }
}
