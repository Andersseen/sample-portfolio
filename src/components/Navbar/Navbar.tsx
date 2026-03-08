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
  const [isDesktop, setIsDesktop] = useState(false);
  const [desktopNavOpen, setDesktopNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LangCode>("EN");
  const [activeHash, setActiveHash] = useState("#home");
  const langPickerRef = useRef<HTMLDivElement>(null);

  const sectionIds = useMemo(
    () => NAV_LINKS.map((link) => link.href.slice(1)),
    [],
  );

  const panelOpen = isDesktop ? desktopNavOpen : menuOpen;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 920px)");

    const syncViewportMode = () => {
      setIsDesktop(mediaQuery.matches);
    };

    syncViewportMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncViewportMode);
      return () => mediaQuery.removeEventListener("change", syncViewportMode);
    }

    mediaQuery.addListener(syncViewportMode);
    return () => mediaQuery.removeListener(syncViewportMode);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setMenuOpen(false);
    } else {
      setDesktopNavOpen(false);
      setLangOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!panelOpen) {
      setLangOpen(false);
    }
  }, [panelOpen]);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const onResize = () => {
      if (window.innerWidth < 920) {
        setDesktopNavOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isDesktop]);

  useEffect(() => {
    let rafId = 0;

    const getCurrentHashFromScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (!sections.length) return "#home";

      const probe = window.scrollY + 140;
      let current = `#${sections[0].id}`;

      for (const section of sections) {
        if (probe >= section.offsetTop) {
          current = `#${section.id}`;
        } else {
          break;
        }
      }

      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (nearBottom) {
        current = `#${sections[sections.length - 1].id}`;
      }

      return current;
    };

    const syncActiveFromScroll = () => {
      const next = getCurrentHashFromScroll();
      setActiveHash((prev) => (prev === next ? prev : next));
    };

    const onScrollOrResize = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(syncActiveFromScroll);
    };

    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash && NAV_LINKS.some((link) => link.href === hash)) {
        setActiveHash(hash);
      } else {
        syncActiveFromScroll();
      }
    };

    // Some sections are client-only and appear a bit later; re-sync after hydration.
    const hydrationRetries = [80, 280, 700, 1300].map((delay) =>
      window.setTimeout(syncActiveFromScroll, delay),
    );

    syncActiveFromScroll();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      hydrationRetries.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", onHashChange);
      if (rafId) window.cancelAnimationFrame(rafId);
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

  const handleNavClick = (targetHash?: string) => {
    if (targetHash) {
      setActiveHash(targetHash);
    }
    if (!isDesktop) {
      setMenuOpen(false);
    }
    setLangOpen(false);
  };

  const handlePrimaryToggle = () => {
    if (isDesktop) {
      setDesktopNavOpen((prev) => !prev);
      return;
    }

    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`site-header ${isDesktop ? "site-header--desktop" : "site-header--mobile"} ${panelOpen ? "is-open" : ""}`}
    >
      <div className="site-header__dock">
        {(!isDesktop || !desktopNavOpen) && (
          <button
            className={`site-header__trigger ${isDesktop ? "site-header__trigger--avatar" : "site-header__trigger--menu"}`}
            type="button"
            aria-expanded={panelOpen}
            aria-controls="site-nav-panel"
            onClick={handlePrimaryToggle}
            aria-label={
              isDesktop
                ? panelOpen
                  ? "Collapse navigation"
                  : "Expand navigation"
                : panelOpen
                  ? "Close menu"
                  : "Open menu"
            }
          >
            {isDesktop ? (
              <span className="site-header__avatar" aria-hidden="true">
                YM
              </span>
            ) : panelOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        )}

        <nav
          id="site-nav-panel"
          className={`site-nav ${panelOpen ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <a
            className="site-nav__brand"
            href="#home"
            onClick={() => handleNavClick("#home")}
          >
            <span className="site-nav__logo" aria-hidden="true">
              YM
            </span>
            <span className="site-nav__brand-text">
              <span className="site-nav__brand-name">Yuliia Martynovych</span>
              <span className="site-nav__brand-role">Portfolio</span>
            </span>
          </a>

          <ul className="site-nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
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
            {isDesktop && desktopNavOpen && (
              <button
                type="button"
                className="site-nav__collapse"
                onClick={() => setDesktopNavOpen(false)}
                aria-label="Collapse navigation"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
