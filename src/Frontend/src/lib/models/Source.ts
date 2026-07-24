export declare interface Source {
  type: string;
}

export namespace Source {
  export function isPlaintext(source: Source | undefined): source is Plaintext {
    return source?.type === "plaintext";
  }

  export function isPdf(source: Source | undefined): source is Pdf {
    return source?.type === "pdf";
  }

  export function isImages(source: Source | undefined): source is Images {
    return source?.type === "images";
  }

  export function isLink(source: Source | undefined): source is Link {
    return source?.type === "link";
  }
}

export declare interface Plaintext {
  type: "plaintext";
  assetId: string;
}

export declare interface Pdf {
  type: "pdf";
  assetId: string;
}

export declare interface Images {
  type: "images";
  assetIds: string[];
}

export declare interface Link {
  type: "link";
  url: string;
}
