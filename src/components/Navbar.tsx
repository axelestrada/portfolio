import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <input id="navbarInput" type="checkbox" />

      <label className="menu-toggle" htmlFor="navbarInput">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>

      <ul className="menu">
        <NavbarLink href="/" title="Inicio" />
        <NavbarLink href="/curriculum" title="Curriculum" />
        <NavbarLink href="/portafolio" title="Portafolio" />
        <NavbarLink href="/blog" title="Blog" />
        <NavbarLink href="/contacto" title="Contacto" />
      </ul>
    </nav>
  );
}

const NavbarLink: FC<{ href: string; title: string }> = ({ href, title }) => {
  const router = useRouter();

  return (
    <li className={router.pathname === href ? "link active" : "link"}>
      <Link href={href}>{title}</Link>
    </li>
  );
};
