import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        grim: "#1b1f23",
        success: "#16a34a",
        danger: "#ed3737",
        warning: "#eab308",
        lightTransparent: "rgb(0 0 0 / 0.05)",
        darkTransparent: "rgb(0 0 0 / 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
