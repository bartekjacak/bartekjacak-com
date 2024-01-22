"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavLinks } from "~/content/useNavLinks";

type Props = ReturnType<typeof useNavLinks>[0];

export default function NavLink({ to, label, isExternal = false }: Props) {
  const currentPathname = usePathname();

  if (isExternal) {
    return (
      // reduce the gap between links if there's the external link icon
      // applied for better visual alignment
      <li className="mr-[-6px] flex gap-[6px] text-18 leading-tight">
        <a href={String(to)} target="_blank" rel="nofollow noopener">
          {label}
        </a>
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
    return "text-green-400";
  }

  return "";
}
