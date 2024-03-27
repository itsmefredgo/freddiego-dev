import Link from "next/link";
import { links } from "../../../lib/data";

function Header() {
  return (
    <header className=" h-10">
      <ul className=" flex gap-8">
        {links.map(({ name, address }, index) => (
          <li key={index}>
            <Link href={address}>{name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;

