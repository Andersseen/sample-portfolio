import type { Content } from "./types";
import { LINKS, mailto } from "./links";

export const ua: Content = {
  nav: {
    home: "Головна",
    about: "Про мене",
    skills: "Навички",
    experience: "Досвід",
    projects: "Проєкти",
    contact: "Контакти",
  },
  hero: {
    role: "Junior Full-Stack розробниця",
    tagline:
      "Створюю чисті та доступні веб-інтерфейси на React і TypeScript.",
  },
  about: {
    title: "Про мене",
    description:
      "Я junior full-stack розробниця, яка закохалася у створення для вебу. Після інтенсивного буткемпу та кількох власних проєктів я зосереджуюсь на чистому й доступному коді на React і TypeScript — і навчаюся чомусь новому з кожним комітом. Шукаю команду, де зможу зростати й приносити користь із першого дня.",
    stats: [
      { value: "12+", label: "Проєктів" },
      { value: "10+", label: "Технологій" },
      { value: "3", label: "Сертифікати" },
    ],
    cta: "Мої роботи",
    cvCta: "Завантажити CV",
  },
  skills: {
    title: "Інструменти, Якими Користуюсь",
    categories: {
      frontend: { label: "Frontend", tools: [] },
      backend: { label: "Backend", tools: [] },
      other: { label: "Інше", tools: [] },
    },
  },
  experience: {
    eyebrow: "Мій шлях досі",
    title: "Освіта та Навчання",
    items: [
      {
        period: "2024",
        title: "Буткемп Full-Stack веброзробки",
        org: "Сертифікована випускниця",
        description:
          "Понад 600 годин JavaScript, React, Node.js та баз даних із фінальним командним проєктом, випущеним у продакшн.",
        kind: "education",
      },
      {
        period: "2024",
        title: "Фриланс та волонтерські проєкти",
        org: "Самозайнята",
        description:
          "Створювала адаптивні лендінги й невеликі вебзастосунки для місцевого бізнесу та неприбуткової організації — від дизайну до деплою.",
        kind: "work",
      },
      {
        period: "2023 — Зараз",
        title: "Завжди навчаюсь",
        org: "Самонавчання",
        description:
          "Щотижня вдосконалююсь через пет-проєкти, open source і курси. Зараз заглиблююсь у TypeScript і тестування.",
        kind: "education",
      },
    ],
  },
  projects: {
    eyebrow: "Вибрані роботи",
    title: "Обрані Проєкти",
    description:
      "Кілька проєктів, які я створила, щоб учитися на практиці — з акцентом на чистий UI, доступність і зрозумілий код.",
    cta: "Переглянути проєкт",
    items: [
      {
        title: "Пошук рецептів (PWA)",
        description:
          "Пошук тисяч рецептів за інгредієнтом через публічний API, збереження улюблених офлайн і встановлення як застосунку на будь-якому пристрої.",
        stack: ["React", "TypeScript", "REST API", "PWA"],
        href: LINKS.projects.recipes,
      },
      {
        title: "Менеджер завдань (Kanban)",
        description:
          "Дошка з drag-and-drop для впорядкування завдань по колонках, зі збереженням стану та адаптивним, доступним із клавіатури інтерфейсом.",
        stack: ["React", "TypeScript", "Zustand", "CSS"],
        href: LINKS.projects.tasks,
      },
      {
        title: "Демо-магазин",
        description:
          "Невеликий e-commerce фронтенд із каталогом, кошиком і оформленням замовлення — для практики керування станом і чистих компонентів.",
        stack: ["Next.js", "TypeScript", "Stripe"],
        href: LINKS.projects.shop,
      },
      {
        title: "Це портфоліо",
        description:
          "Сайт, на якому ви зараз — на островах Astro, SCSS і вручну налаштованій системі кольорів oklch, повністю адаптивний зі світлою й темною темами.",
        stack: ["Astro", "React", "SCSS"],
        href: LINKS.projects.portfolio,
      },
    ],
  },
  contact: {
    eyebrow: "Відкрита до можливостей",
    title: "Створімо щось разом.",
    lead: "Шукаю свою першу роль junior-розробниці й відкрита до фрилансу. Якщо вважаєте, що я підійду вашій команді, буду рада вашому повідомленню.",
    ctaPrimary: "Написати мені",
    ctaSecondary: "Завантажити CV",
    panelKicker: "Бажані канали",
    panelTitle: "Найкращі способи зв'язатися зі мною",
    actions: [
      {
        key: "email",
        title: "Надіслати email",
        description: "Найкраще для вакансій, запитань і довгих повідомлень.",
        href: mailto("Вітаю, Юліє — вакансія"),
      },
      {
        key: "linkedin",
        title: "Додати в LinkedIn",
        description: "Чудово для нетворкінгу та рекрутингових розмов.",
        href: LINKS.linkedin,
      },
      {
        key: "github",
        title: "Переглянути GitHub",
        description: "Подивіться код моїх проєктів і контрибуції.",
        href: LINKS.github,
      },
    ],
    socials: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
};
