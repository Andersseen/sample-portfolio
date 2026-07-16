import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  // TODO(yuliia): set this to your final domain for correct canonical/OG URLs.
  site: "https://yuliiamartynovych.dev",
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
