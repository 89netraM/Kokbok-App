using System;

namespace Kokbok.Api.Models;

public closed class Source();

public sealed class Plaintext : Source
{
    public required Asset Asset { get; init; }
}

public sealed class Pdf : Source
{
    public required Asset Asset { get; init; }
}

public sealed class Images : Source
{
    public required Asset[] Assets { get; init; }
}

public sealed class Link : Source
{
    public required Uri Url { get; init; }
}
