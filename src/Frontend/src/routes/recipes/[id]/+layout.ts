import type { Recipe } from "$lib/models/Recipe";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch, params: { id } }) => {
  const response = await fetch(`/api/recipes/${id}`);
  if (response.status === 404) {
    error(404, "Receptet hittades inte");
  }
  const recipe: Recipe = await response.json();
  return { recipe };
};
