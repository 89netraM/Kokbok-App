import type { Ingredient } from "./Ingredient";
import type { Instruction } from "./Instruction";
import type { Section } from "./Section";
import type { Source } from "./Source";
import type { User } from "./User";

export declare interface LightRecipe {
  id: string;
  name: string;
  description?: string;
  imageId?: string;
  owner: User;
}

export declare interface Recipe extends LightRecipe {
  source?: Source;
  ingredients: Section<Ingredient>[];
  instructions: Section<Instruction>[];
}
