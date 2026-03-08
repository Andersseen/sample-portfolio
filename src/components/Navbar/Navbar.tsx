import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
import "./Navbar.scss";

type LangCode = "UA" | "EN" | "ES";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

const LANG_OPTIONS: LangCode[] = ["UA", "EN", "ES"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LangCode>("EN");
  const [activeHash, setActiveHash] = useState("#home");
  const langPickerRef = useRef<HTMLDivElement>(null);

  const sectionIds = useMemo(
    () => NAV_LINKS.map((link) => link.href.slice(1)),
    [],
  );

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 920) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    onHashChange();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, [sectionIds]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!langPickerRef.current) return;
      const target = event.target as Node;
      if (!langPickerRef.current.contains(target)) {
        setLangOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setLangOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <a className="site-nav__brand" href="#home" onClick={handleNavClick}>
          <span className="site-nav__logo" aria-hidden="true">
            YM
          </span>
          <span className="site-nav__brand-text">
            <span className="site-nav__brand-name">Yuliia Martynovych</span>
            <span className="site-nav__brand-role">Portfolio</span>
          </span>
        </a>

        <button
          className="site-nav__menu-btn"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
          <span className="site-nav__menu-text">Menu</span>
        </button>

        <div
          id="site-nav-links"
          className={`site-nav__panel ${menuOpen ? "is-open" : ""}`}
        >
          <ul className="site-nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className={
                    activeHash === link.href
                      ? "site-nav__link is-active"
                      : "site-nav__link"
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-nav__controls">
            <div className="lang-picker" ref={langPickerRef}>
              <button
                className="lang-picker__trigger"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((prev) => !prev)}
              >
                {selectedLang}
                <ChevronDown
                  size={15}
                  className={
                    langOpen
                      ? "lang-picker__chevron is-open"
                      : "lang-picker__chevron"
                  }
                />
              </button>

              {langOpen && (
                <ul
                  className="lang-picker__menu"
                  role="listbox"
                  aria-label="Select language"
                >
                  {LANG_OPTIONS.map((lang) => (
                    <li key={lang}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={selectedLang === lang}
                        className={
                          selectedLang === lang
                            ? "lang-picker__option is-selected"
                            : "lang-picker__option"
                        }
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
