// Language-neutral links and contact details.
// TODO(yuliia): replace these placeholders with your real profiles before publishing.
export const LINKS = {
  email: "yuliia.martynovych@gmail.com",
  github: "https://github.com/yuliiamartynovych",
  linkedin: "https://www.linkedin.com/in/yuliiamartynovych",
  cv: "/cv-yuliia-martynovych.pdf",
  projects: {
    recipes: "https://github.com/yuliiamartynovych",
    tasks: "https://github.com/yuliiamartynovych",
    shop: "https://github.com/yuliiamartynovych",
    portfolio: "https://github.com/yuliiamartynovych",
  },
} as const;

export const mailto = (subject: string) =>
  `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}`;
