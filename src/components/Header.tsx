import { useState } from "react";
import { useScrollState } from "../hooks";

const links = [
  { href: "#about", label: "О книге" },
  { href: "#chapters", label: "Содержание" },
  { href: "#author", label: "Автор" },
  { href: "#listen", label: "Слушать" },
];

export function Header() {
  const scrolled = useScrollState();
  const [open, setOpen] = useState(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="logo">
          Цидукция<span>.</span>
        </a>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#read"
            className="btn btn--primary btn--sm nav__cta"
            onClick={() => setOpen(false)}
          >
            Читать бесплатно
          </a>
        </nav>

        <button
          className="burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
