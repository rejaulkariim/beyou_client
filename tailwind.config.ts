import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111618",
        light: "#F4F4F4",
        grey: "#E2E2E2",
        red: "#C3315D",
        orange: "#FE7A15",
        pink: "#F06292",
        green: "#00B79F",
        blue: "#075571",
        violet: "#2B2F6C",
      },
    },
  },
  plugins: [],
};
export default config;
