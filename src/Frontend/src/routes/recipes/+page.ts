import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { resolve } from "$app/paths";

export const load: PageLoad = () => {
  redirect(308, resolve("/"));
};
