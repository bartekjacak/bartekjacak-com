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
      to: "/",
      children: "about",
    },
    {
      // @todo: change to /projects once ready
      to: "/",
      children: "projects",
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
