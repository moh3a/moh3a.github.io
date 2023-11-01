import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightTransparent: "rgb(0 0 0 / 0.05)",
        darkTransparent: "rgb(0 0 0 / 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
