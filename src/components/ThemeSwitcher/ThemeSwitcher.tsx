import { useEffect, useState } from "react";
import { AndButton } from "@andersseen/react-components/components/and-button";
import { AndIcon } from "@andersseen/react-components/components/and-icon";

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
      document.documentElement.setAttribute("and-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("and-mode", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AndButton
      onAndButtonClick={toggleTheme}
      customClass="hover:bg-primary hover:text-primary-foreground"
      size="icon"
      variant="outline"
      // and-button only forwards `aria-label` to its internal <button>; state
      // attributes such as `aria-pressed` stay on the host where they mean
      // nothing, so the label itself has to carry the current state.
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      <AndIcon name={theme === "light" ? "moon" : "sun"} size={18} />
    </AndButton>
  );
}
