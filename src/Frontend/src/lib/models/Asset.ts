export declare interface Asset {
  id: string;
  filename: string;
  uploadedAt: Date;
}

export namespace Asset {
  export function reviver(key: string, value: any): any {
    if ((key === "uploadedAt") && typeof value === "string") {
      return new Date(value);
    }

    return value;
  }
}
