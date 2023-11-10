import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://moh3a.github.io",
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'fr',
          fr: 'ar',
        },
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    preact(),
  ],
});
