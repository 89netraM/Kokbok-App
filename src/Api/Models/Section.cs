using System;
using System.Collections.Generic;

namespace Kokbok.Api.Models;

public sealed class Section<T>
{
    public Guid Id { get; set; }
    public int Order { get; set; }
    public string? Name { get; set; }
    public List<T> Values { get; } = [];
}
