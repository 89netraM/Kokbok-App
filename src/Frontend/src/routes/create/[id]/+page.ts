import { RecipeCreationJob } from "$lib/models/RecipeCreationJob";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(`/api/recipes/jobs/${params.id}`);
  const json = await response.text();
  const job: RecipeCreationJob = JSON.parse(json, RecipeCreationJob.reviver);
  return { job };
};
