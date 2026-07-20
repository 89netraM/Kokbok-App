using Microsoft.AspNetCore.Identity;

namespace Kokbok.Api.Models;

public sealed class User : IdentityUser
{
    public string? Name { get; init; }
}
