import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import { PageHeader } from "~/components/PageHeader";

import { PAGE_DESCRIPTION, PAGE_TITLE_BASE } from "~/utils/seo";
import "./globals.css";

export const metadata: Metadata = {
  // @todo: next has their way for title templates
  title: PAGE_TITLE_BASE,
  description: PAGE_DESCRIPTION,
  // @todo: use env variable
  metadataBase: new URL("https://bartekjacak-com.vercel.app/"),
  keywords: [
    "Bartek",
    "Jacak",
    "software",
    "engineer",
    "frontend",
    "web",
    "developer",
    "portfolio",
    "projects",
    "blog",
    "about",
    "contact",
    "warsaw",
    "poland",
  ],
  creator: "Bartek Jacak",
  icons: {
    icon: [
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "200x200",
        type: "image/png",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: light)",
        sizes: "200x200",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/preview.png",
    description: PAGE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="m-auto flex min-h-screen w-full max-w-[664px] flex-col gap-10 px-8 pt-[58px]">
          <PageHeader />
          <main>{children}</main>
        </div>
      </body>
      {/* @todo: move to env */}
      <GoogleAnalytics gaId="G-2YT5QLHL2N" />
    </html>
  );
}
