import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
// import vercel from "@astrojs/vercel/serverless";

// import { SITE_URL } from "~/consts";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.reglini-dz.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // output: "server",
  // adapter: vercel()
});
