import { useNavLinks } from "~/content/useNavLinks";

import { InteractiveSmiley } from "./InteractiveSmiley";
import NavLink from "./NavLink";

export default function PageHeader() {
  const navLinks = useNavLinks();

  return (
    <header className="flex flex-col items-start gap-5">
      <div className="xsm:flex-col-reverse xsm:gap-0 flex gap-2">
        <h1>bartekjacak.com</h1>
        <div className="mt-[2px]" aria-hidden="true">
          <InteractiveSmiley />
        </div>
      </div>

      <nav>
        <ul className="xsm:flex-col xsm:gap-4 flex gap-8">
          {navLinks.map((props) => (
            <NavLink key={String(props.to)} {...props} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
