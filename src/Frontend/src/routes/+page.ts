import type { LightRecipe } from "$lib/models/Recipe";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch("/api/recipes");
  const recipes: LightRecipe[] = await response.json();
  return { recipes };
};
