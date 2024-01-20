import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import ExternalLinkIcon from "~/icons/ExternalLinkIcon";

interface Props {
  to: LinkProps["href"];
  children: ReactNode;
  isExternal?: boolean;
}

export default function NavLink({ to, children, isExternal = false }: Props) {
  if (isExternal) {
    return (
      // reduce the gap between links if there's the external link icon
      // applied for better visual alignment
      <li className="text-18 mr-[-6px] flex gap-[6px] leading-tight">
        <a href={String(to)} target="_blank" rel="noopener">
          {children}
        </a>
        <div className="mt-[3px]">
          <ExternalLinkIcon />
        </div>
      </li>
    );
  }

  return (
    <li className="text-18">
      <Link href={to}>{children}</Link>
    </li>
  );
}
