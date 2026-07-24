using System;
using System.Text.Json.Serialization;

namespace Kokbok.Api.Models;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "type")]
[JsonDerivedType(typeof(Link), "link")]
public closed record RecipeCreationTask()
{
    public record Link(Uri Url) : RecipeCreationTask();
}
