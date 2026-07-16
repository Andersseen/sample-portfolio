# Yuliia Martynovych — Portfolio

Personal landing portfolio for a junior full-stack developer, built with **Astro 5** (islands architecture), **React** and **SCSS**. Fully responsive, light/dark themed, and available in **English, Spanish and Ukrainian**.

## Sections

- **Hero** — animated lava-lamp background, name, role and tagline.
- **About** — intro, key stats, "View my work" CTA and a **Download CV** button.
- **Skills** — animated tools grid (Frontend / Backend / Other) with a Lottie illustration.
- **Experience** — vertical timeline of education and work.
- **Projects** — featured project cards with tech-stack tags.
- **Contact** — reach-out channels, socials and playful draggable stickers.

## Tech

- [Astro](https://astro.build) with the React integration (client islands)
- SCSS with a theme-aware **oklch** colour system (`src/styles/global.scss`)
- [framer-motion](https://www.framer.com/motion/) for animations
- [lottie-web](https://airbnb.io/lottie/) for illustrations
- [lucide-react](https://lucide.dev) & [react-icons](https://react-icons.github.io/react-icons/) for icons

## Getting started

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build to ./dist
pnpm preview    # preview the production build
pnpm astro check
```

## Customising the content

All copy lives in `src/data/content/` — one file per language (`en.ts`, `es.ts`, `ua.ts`)
sharing the `Content` type in `types.ts`. Language switching is handled by the
`useLang()` hook (`src/lib/useLang.ts`), which keeps every React island in sync and
persists the choice in `localStorage`.

Personal links, email and the CV path are centralised in `src/data/content/links.ts` —
**update the `TODO` placeholders there** with the real profiles.

### Things to replace before publishing

- `src/data/content/links.ts` — GitHub, LinkedIn, email and project URLs.
- `public/cv-yuliia-martynovych.pdf` — placeholder CV (swap for the real PDF).
- `public/about-animation.json` / `public/skills-animation.json` — Lottie illustrations
  (currently free-tier placeholders from [LottieFiles](https://lottiefiles.com); double-check the
  licence or swap for your own before publishing).
- `astro.config.mjs` — set `site` to the final domain for correct canonical/OG URLs.
