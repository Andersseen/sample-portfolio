export const LINKS = {
  email: "yuliiamartynovych@gmail.com",
  github: "https://github.com/yuliimar",
  linkedin: "https://www.linkedin.com/in/yuliia-martynovych-01570817b/",
  cv: "/cv-yuliia-martynovych.pdf",
  projects: {
    catalogPhone: "https://yuliimar.github.io/catalog-phone-react/",
    game2048: "https://yuliimar.github.io/game-2048/",
  },
} as const;

export const mailto = (subject: string) =>
  `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}`;
