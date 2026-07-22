namespace Kokbok.Api.Models;

public closed record AmountValue();

public record ExactValue(double Value) : AmountValue();

public record RangeValue(double From, double To) : AmountValue();
