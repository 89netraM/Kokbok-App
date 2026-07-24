export declare interface Amount {
  value: AmountValue;
  unit?: string;
}

export declare interface AmountValue {
  type: string;
}

export namespace AmountValue {
  export function isExactValue(value: AmountValue | undefined): value is ExactValue {
    return value?.type === "exact";
  }

  export function isRangeValue(value: AmountValue | undefined): value is RangeValue {
    return value?.type === "range";
  }
}

export declare interface ExactValue extends AmountValue {
  type: "exact";
  value: number;
}

export declare interface RangeValue extends AmountValue {
  type: "range";
  from: number;
  to: number;
}
