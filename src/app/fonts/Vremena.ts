import localFont from "next/font/local";

export const Vremena = localFont({
  src: [
    {
      path: "./VremenaGroteskBook.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./VremenaGroteskBookItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./VremenaGroteskMedium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./VremenaGroteskBold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
