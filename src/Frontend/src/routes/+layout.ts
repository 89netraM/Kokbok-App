import type { User } from "$lib/models/User";
import type { LayoutLoad } from "./$types";

export const prerender = true;
export const trailingSlash = "always";

export const load: LayoutLoad = async ({ fetch }) => {
  const response = await fetch("/auth/about");
  if (!response.ok) {
    return;
  }

  const user: User = await response.json();
  return { user };
};
