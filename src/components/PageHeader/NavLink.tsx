"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavLinks } from "~/content/useNavLinks";
import ExternalLinkIcon from "~/icons/ExternalLinkIcon";

type Props = ReturnType<typeof useNavLinks>[0];

export default function NavLink({ to, label, isExternal = false }: Props) {
  const currentPathname = usePathname();

  if (isExternal) {
    return (
      // reduce the gap between links if there's the external link icon
      // applied for better visual alignment
      <li className="text-18 mr-[-6px] flex gap-[6px] leading-tight">
        <a href={String(to)} target="_blank" rel="noopener">
          {label}
        </a>
        <div className="mt-[3px]">
          <ExternalLinkIcon />
        </div>
      </li>
    );
  }

  return (
    <li
      className={`text-18 ${getClassNameForActiveLink(currentPathname, String(to))}`}
    >
      <Link href={to}>{label}</Link>
    </li>
  );
}

const PATHNAMES_WITHOUT_ACTIVE_STYLE = ["/"];

function getClassNameForActiveLink(
  currentPathname: string,
  linkPathname: string,
) {
  if (
    currentPathname === linkPathname &&
    !PATHNAMES_WITHOUT_ACTIVE_STYLE.includes(currentPathname)
  ) {
    return "text-green";
  }

  return "";
}
