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
      "Верстаю сучасні, адаптивні та доступні інтерфейси за дизайнами з Figma.",
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
        period: "2024",
        title: "Frontend Developer",
        org: "Mate Academy",
        description:
          "Практичне навчання з вебверстки, адаптивних інтерфейсів, HTML, CSS, JavaScript і найкращих практик frontend-розробки.",
        kind: "education",
      },
      {
        period: "2024",
        title: "Розробка вебзастосунків",
        org: "Grupo Fidsoft",
        description:
          "Навчання, орієнтоване на створення вебзастосунків, структуру проєктів, роботу з інтерфейсами та основи програмування.",
        kind: "education",
      },
      {
        period: "2023",
        title: "Bienestar Integral",
        org: "IES La Arboleda",
        description:
          "Додаткове навчання, що посилило комунікацію, особисту організацію та уважність до деталей у професійному середовищі.",
        kind: "education",
      },
      {
        period: "Україна",
        title: "Complete Secondary School I-III",
        org: "Середня освіта",
        description:
          "Загальна академічна база, завершена перед подальшим технічним і професійним навчанням в Іспанії.",
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
