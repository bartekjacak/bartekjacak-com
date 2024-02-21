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
        text: {
          primary: "#000000",
          secondary: "#727272",
        },
        green: {
          100: "#31ff3f",
          400: "#007a14",
          500: "#00500d",
        },
      },
      fontSize: {
        18: "18px",
        20: "20px",
        24: "24px",
        28: "28px",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
      },
      letterSpacing: {
        tight: "-0.9px",
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xsm: { max: "420px" },
    },
  },
  plugins: [],
};
export default config;
