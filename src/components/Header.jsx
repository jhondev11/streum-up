import { useState, useEffect } from "react";
import { Smartphone, Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { languages } from "../i18n/translations";
import { telegramLink } from "../utils/whatsapp";
import "./Header.css";

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#plans", label: t.nav.plans },
    { href: "#covered", label: t.nav.covered },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          <Smartphone size={20} strokeWidth={2.4} />
          <span>
            StreamUp<span className="header__logo-dot">.</span>
          </span>
        </a>

        <nav className="header__nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__right">
          <div className="header__langs">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`header__lang ${lang === l.code ? "header__lang--active" : ""}`}
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href={telegramLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warm btn-sm header__cta"
          >
            {t.nav.cta}
          </a>
          <button
            className="header__burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="header__mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="header__mobile-langs">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`header__lang ${lang === l.code ? "header__lang--active" : ""}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href={telegramLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warm"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
