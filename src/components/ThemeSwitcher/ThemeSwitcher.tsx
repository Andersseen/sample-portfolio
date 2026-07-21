import { useEffect, useState } from "react";
import { AndButton } from "@andersseen/react-components/components/and-button";
import { AndIcon } from "@andersseen/react-components/components/and-icon";
import "./ThemeSwitcher.scss";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-mode", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AndButton
      onAndButtonClick={toggleTheme}
      customClass="theme-switcher hover:bg-primary hover:text-primary-foreground"
      size="icon"
      variant="outline"
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
    >
      {theme === "light" ? (
        <AndIcon name="moon" size={20} />
      ) : (
        <AndIcon name="sun" size={20} />
      )}
    </AndButton>
  );
}
