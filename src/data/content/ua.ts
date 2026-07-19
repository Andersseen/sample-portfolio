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
    role: "Frontend UI розробниця / Web Layout Developer",
    tagline:
      "Від дизайну у Figma до адаптивного, доступного інтерфейсу з увагою до деталей.",
  },
  about: {
    title: "Про мене",
    description:
      "Я Frontend UI розробниця з фокусом на вебверстці та створенні сучасних, доступних і адаптивних інтерфейсів. Працюю з HTML5, CSS3, SCSS і методологією BEM, уважно ставлюся до візуальних деталей, mobile-first підходу та коректної роботи в різних браузерах. Також маю знання JavaScript для базової інтерактивності й досвід із WordPress, Divi та Elementor.",
    stats: [
      { value: "UA", label: "Рідна" },
      { value: "C2", label: "Іспанська" },
      { value: "B2", label: "Англійська" },
    ],
    cta: "Мої роботи",
    cvCta: "Завантажити CV",
  },
  skills: {
    title: "Навички та Інструменти",
    categories: {
      frontend: { label: "Верстка та Frontend UI", tools: [] },
      backend: { label: "Інструменти", tools: [] },
      other: { label: "Додаткові знання", tools: [] },
    },
  },
  experience: {
    eyebrow: "Мій шлях досі",
    title: "Освіта та Навчання",
    items: [
      {
        period: "2024 — 2025",
        title: "Front-end Developer",
        org: "Mate academy",
        description:
          "Навчання з front-end розробки, адаптивної верстки, JavaScript, HTML, CSS і Figma з фокусом на сучасні інтерфейси та найкращі практики.",
        kind: "education",
      },
      {
        period: "2025",
        title: "Розробка вебзастосунків із вебтехнологіями",
        org: "GRUPO FIDSOFT",
        description:
          "Професійний сертифікат рівня 3, еквівалент вищої професійної освіти. 590 годин програмування для клієнтської та серверної частини й розгортання застосунків.",
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
        title: "Каталог телефонів",
        description:
          "Адаптивний інтерфейс каталогу з переліком товарів, зрозумілою навігацією та багаторазовими React-компонентами.",
        stack: ["React", "JavaScript", "CSS", "Responsive"],
        href: LINKS.projects.catalogPhone,
      },
      {
        title: "Гра 2048",
        description:
          "Реалізація класичної гри 2048 із плавною взаємодією, логікою гри та чистим інтерфейсом, зручним для мобільних екранів.",
        stack: ["JavaScript", "HTML", "SCSS", "Game UI"],
        href: LINKS.projects.game2048,
      },
    ],
  },
  contact: {
    eyebrow: "Відкрита до можливостей",
    title: "Поговорімо про ваш наступний інтерфейс.",
    lead: "Відкрита до можливостей як Frontend UI розробниця, web layout developer або junior frontend спеціалістка. Приношу увагу до візуальних деталей, охайний код і сильну мотивацію розвиватися.",
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
