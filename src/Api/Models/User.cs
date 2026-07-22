using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Kokbok.Api.Models;

public sealed class User : IdentityUser
{
    public string? Name { get; init; }

    public List<Asset> Assets { get; } = [];

    public List<Recipe> OwnedRecipes { get; } = [];
    public List<Recipe> SharedRecipes { get; } = [];
}
