import { InteractiveSmiley } from "../InteractiveSmiley";
import { useNavLinks } from "./Navbar.hooks";
import NavLink from "./NavLink";

export default function Navbar() {
  const navLinks = useNavLinks();

  return (
    <nav className="flex flex-col items-start gap-5">
      <header className="flex gap-2">
        <h2>bartekjacak.com</h2>
        <div className="mt-[2px]">
          <InteractiveSmiley />
        </div>
      </header>

      <ul className="flex gap-8">
        {navLinks.map((props) => (
          <NavLink key={String(props.to)} {...props} />
        ))}
      </ul>
    </nav>
  );
}
