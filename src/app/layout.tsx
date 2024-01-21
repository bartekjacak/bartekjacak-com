import type { Metadata } from "next";

import { PageHeader } from "~/components/PageHeader";

import { PAGE_DESCRIPTION, PAGE_TITLE_BASE } from "~/utils/seo";
import "./globals.css";

export const metadata: Metadata = {
  title: PAGE_TITLE_BASE,
  description: PAGE_DESCRIPTION,
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
    </html>
  );
}
