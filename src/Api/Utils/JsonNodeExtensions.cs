using System.Buffers;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace Kokbok.Api.Utils;

public static class JsonNodeExtensions
{
    public static JsonArray ToJsonArray(this IEnumerable<JsonNode> nodes)
    {
        var output = new ArrayBufferWriter<byte>();
        using (var writer = new Utf8JsonWriter(output))
        {
            writer.WriteStartArray();
            foreach (var node in nodes)
            {
                node.WriteTo(writer);
            }
            writer.WriteEndArray();
        }
        return JsonNode.Parse(output.WrittenSpan)!.AsArray();
    }
}
