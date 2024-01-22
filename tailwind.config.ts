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
        green: {
          100: "#31ff3f",
          400: "#007a14",
          500: "#00500d",
        },
      },
      fontFamily: {
        sans: ["Vremena Grotesk", "sans-serif"],
      },
      fontSize: {
        18: "18px",
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
  },
  plugins: [],
};
export default config;
