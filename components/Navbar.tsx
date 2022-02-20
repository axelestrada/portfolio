import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./styles/Navbar.module.sass";

export default function Navbar() {
  return (
    <nav className={styles["nav"]}>
      <input
        className={`${styles["menu-toggle__input"]}`}
        id="menu-toggle__input"
        type="checkbox"
      />

      <label className={styles["menu-toggle"]} htmlFor="menu-toggle__input">
        <div className={styles["menu-toggle__hamburger"]}>
          <span className={styles["line"]}></span>
          <span className={`${styles["line"]} ${styles["line--small"]}`}></span>
          <span className={styles["line"]}></span>
        </div>
      </label>

      <ul className={styles["navbar"]}>
       <NavbarLink href="/" title="Inicio"/>
       <NavbarLink href="/curriculum" title="Curriculum"/>
       <NavbarLink href="/portafolio" title="Portafolio"/>
       <NavbarLink href="/blog" title="Blog"/>
       <NavbarLink href="/contacto" title="Contacto"/>
      </ul>
    </nav>
  );
}

const NavbarLink: FC<{ href: string; title: string }> = ({ href, title }) => {
  const router = useRouter();

  return (
    <li className={`${styles["navbar__link"]} ${router.pathname === href && styles["navbar__link--active"]}`}>
      <Link href={href}>{title}</Link>
    </li>
  );
};
