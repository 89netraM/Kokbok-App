using System.Collections.Generic;

namespace Kokbok.Api.Utils;

public static class ListExtensions
{
    public static void Add<T>(this List<T> list, IEnumerable<T> collection) => list.AddRange(collection);
}
