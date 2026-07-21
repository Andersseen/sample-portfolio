import { expect, test } from "@playwright/test";

// Regression guard for a palette clash that only shows up when the *operating
// system* prefers dark. Importing one of the library's `colors/*.css` palettes
// alongside this site's own tokens brought in a
// `@media (prefers-color-scheme: dark)` block selecting
// `:root:not([and-mode='light']):not([data-mode='light'])` — specificity (0,3,0),
// which beat the site's overrides and repainted every and-* element indigo while
// the surrounding page stayed warm rose. A browser whose OS is in light mode
// never triggers it, so both color schemes are asserted here.

const SITE_PALETTE = {
  // Warm rose / plum, from src/styles/andersseen-theme.scss.
  light: { primary: "341 37% 48%", card: "27 40% 98%" },
  dark: { primary: "343 59% 76%", card: "315 13% 11%" },
};

for (const colorScheme of ["light", "dark"] as const) {
  test(`and-* components use the site palette when the OS prefers ${colorScheme}`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto("/#projects");
    await page.locator("and-button").first().waitFor();

    const probe = await page.evaluate(() => {
      const root = getComputedStyle(document.documentElement);
      const filled = [...document.querySelectorAll("and-button")].find(
        (b) => b.getAttribute("variant") === "default",
      );
      const inner = filled?.shadowRoot?.querySelector("button, a");

      return {
        isDark: document.documentElement.classList.contains("dark"),
        primary: root.getPropertyValue("--primary").trim(),
        card: root.getPropertyValue("--card").trim(),
        // Read through the shadow boundary: the tokens have to survive the trip,
        // which is exactly what the clashing palette import broke.
        filledButtonBg: inner
          ? getComputedStyle(inner).backgroundColor
          : null,
      };
    });

    const expected = SITE_PALETTE[probe.isDark ? "dark" : "light"];
    expect(probe.primary).toBe(expected.primary);
    expect(probe.card).toBe(expected.card);

    // hsl(--primary) rendered as rgb; indigo would land near rgb(99, 102, 241).
    const [r, g, b] = (probe.filledButtonBg ?? "")
      .match(/\d+/g)!
      .slice(0, 3)
      .map(Number);
    expect(r, "filled button should be rose-dominant, not indigo").toBeGreaterThan(b);
  });
}
