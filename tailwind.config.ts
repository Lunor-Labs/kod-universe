import type { Config } from "tailwindcss";

// In Tailwind v4, theme tokens are defined in globals.css via @theme.
// This file is kept for content path scanning compatibility.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
