export const LINKS = {
  email: "yuliiamartynovych@gmail.com",
  github: "https://github.com/yuliimar",
  linkedin: "https://www.linkedin.com/in/yuliia-martynovych-01570817b/",
  cv: "/cv-yuliia-martynovych.pdf",
  projects: {
    recipes: "https://github.com/yuliimar",
    tasks: "https://github.com/yuliimar",
    shop: "https://github.com/yuliimar",
  },
} as const;

export const mailto = (subject: string) =>
  `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}`;
