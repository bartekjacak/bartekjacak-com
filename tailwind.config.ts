import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        text: "#000000",
        green: "#007a14",
        lime: "#31ff3f",
      },
      fontFamily: {
        sans: ["Vremena Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
