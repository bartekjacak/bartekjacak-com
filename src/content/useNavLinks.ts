import { LinkProps } from "next/link";

type NavLink = {
  to: LinkProps["href"];
  label: string;
  isExternal?: boolean;
};

export function useNavLinks(): NavLink[] {
  return [
    {
      to: "/",
      label: "home",
    },
    {
      to: "/about",
      label: "about",
    },
    {
      to: "https://github.com/bartekjacak",
      label: "github",
      isExternal: true,
    },
    {
      to: "https://bartek.cc",
      label: "email",
      isExternal: true,
    },
  ];
}
