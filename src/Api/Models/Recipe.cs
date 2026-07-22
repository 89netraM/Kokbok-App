using System;
using System.Collections.Generic;

namespace Kokbok.Api.Models;

public sealed class Recipe
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public string? Description { get; set; }
    public required User Owner { get; set; }
    public required DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public List<User> SharedWith { get; } = [];
    public Visibility Visibility { get; set; } = Visibility.Private;
    public Source? Source { get; set; }
    public Asset? Image { get; set; }

    public List<Section<Instruction>> Instructions { get; } = [];
    public List<Section<Ingredient>> Ingredients { get; } = [];
}
