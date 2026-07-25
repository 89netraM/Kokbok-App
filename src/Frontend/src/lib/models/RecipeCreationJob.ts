export declare interface RecipeCreationJob {
  id: string;
  recipeId?: string;
  scheduledAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  errorMessage?: string;
}

export namespace RecipeCreationJob {
  export function reviver(key: string, value: any): any {
    if ((key === "scheduledAt" || key === "startedAt" || key === "completedAt") && typeof value === "string") {
      return new Date(value);
    }

    return value;
  }
}
