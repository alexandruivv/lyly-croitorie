import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#FADCC3",
        brownHover: "#844008",
        secondary: "#97D0FF",
        secondary43: "rgba(151, 208, 255, 0.43)",
        secondary60: "rgba(151, 208, 255, 0.60)",
      },
    },
  },
  plugins: [],
} satisfies Config;
