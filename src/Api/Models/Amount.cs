namespace Kokbok.Api.Models;

public sealed class Amount
{
    public required AmountValue Value { get; set; }
    public string? Unit { get; set; }
}
