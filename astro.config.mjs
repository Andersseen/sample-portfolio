import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import andersseen from "@andersseen/astro";

export default defineConfig({
  // TODO(yuliia): set this to your final domain for correct canonical/OG URLs.
  site: "https://yuliiamartynovych.dev",
  integrations: [
    react(),
    andersseen({
      components: [
        "and-button",
        "and-icon",
        "and-card",
        "and-card-header",
        "and-card-title",
        "and-card-description",
        "and-card-content",
        "and-card-footer",
        "and-badge",
      ],
    }),
  ],
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
