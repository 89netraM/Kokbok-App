using System;
using System.Collections.Generic;

namespace Kokbok.Api.Models;

public sealed class Section<T>
{
    public Guid Id { get; }
    public string? Name { get; set; }
    public List<T> Values { get; set; } = [];
}
