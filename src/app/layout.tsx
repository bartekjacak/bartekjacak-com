import type { Metadata } from "next";

import { Navbar } from "~/components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bartek Jacak — software engineer personal website",
  description:
    "Hey, I'm Bartek I work as a software engineer at an American InsurTech company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="m-auto flex min-h-screen w-full max-w-[664px] flex-col gap-10 px-8 pt-[58px]">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
