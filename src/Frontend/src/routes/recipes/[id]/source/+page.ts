import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const { recipe } = await parent();
  if (recipe.source == null) {
    error(404, "Ingen källa hittades");
  }
};
