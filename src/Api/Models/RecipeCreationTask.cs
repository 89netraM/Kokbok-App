using System;
using System.Text.Json.Serialization;

namespace Kokbok.Api.Models;

[JsonPolymorphic(TypeDiscriminatorPropertyName = "type")]
[JsonDerivedType(typeof(Link), "link")]
[JsonDerivedType(typeof(Images), "images")]
public closed record RecipeCreationTask()
{
    public record Link(Uri Url) : RecipeCreationTask();

    public record Images(Guid[] AssetIds) : RecipeCreationTask();
}
