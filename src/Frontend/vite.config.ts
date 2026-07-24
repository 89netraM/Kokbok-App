import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/auth": {
        target: "https://localhost:5164",
      },
      "/api": {
        target: "https://localhost:5164",
      },
    },
  },
  plugins: [
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) => (filename.split(/[/\\]/).includes("node_modules") ? undefined : true),
      },
      adapter: adapter({
        pages: "build",
        assets: "build",
        fallback: undefined,
        precompress: false,
        strict: true,
      }),
      prerender: {
        handleHttpError: ({ path, message }) => {
          if (path.startsWith("/auth")) {
            return;
          }

          throw new Error(message);
        },
      },
    }),
  ],
});
