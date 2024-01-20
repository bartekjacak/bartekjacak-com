import { ComponentProps } from "react";
import NavLink from "./NavLink";

export function useNavLinks(): ComponentProps<typeof NavLink>[] {
  return [
    {
      to: "/",
      children: "home",
    },
    {
      // @todo: change to /about once ready
      to: "/about",
      children: "about",
    },
    {
      to: "https://github.com/bartekjacak",
      children: "github",
      isExternal: true,
    },
    {
      to: "https://bartek.cc",
      children: "email",
      isExternal: true,
    },
  ];
}
