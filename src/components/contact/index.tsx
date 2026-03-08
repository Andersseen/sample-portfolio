import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck2,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import "./contact.scss";

const FADE_UP = {
  initial: { opacity: 0, y: 56 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
};

type ContactAction = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const CONTACT_ACTIONS: ContactAction[] = [
  {
    icon: Mail,
    title: "Send an email",
    description: "Best for proposals, scope details and long-form context.",
    href: "mailto:hello@johndoe.dev",
  },
  {
    icon: CalendarCheck2,
    title: "Book a strategy call",
    description: "30-minute discovery session to shape your roadmap.",
    href: "https://cal.com",
    external: true,
  },
  {
    icon: Linkedin,
    title: "Connect on LinkedIn",
    description: "Ideal for networking, hiring and collaboration chats.",
    href: "https://www.linkedin.com",
    external: true,
  },
];

const floatTransition = (duration: number) => ({
  duration,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
});

const fadeTransition = (delay: number) => ({
  delay,
  duration: 0.7,
  ease: "easeOut" as const,
});

export const Contact = () => {
  const dragBoundsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__radial-bg" aria-hidden="true" />
      <div className="contact__container" ref={dragBoundsRef}>
        <div className="contact__layout">
          <div className="contact__intro">
            <motion.p
              className="contact__eyebrow"
              {...FADE_UP}
              transition={fadeTransition(0.08)}
            >
              Available for selected projects
            </motion.p>
            <motion.h1
              className="contact__title"
              id="contact-title"
              {...FADE_UP}
              transition={fadeTransition(0.16)}
            >
              Let&apos;s craft a product people remember.
            </motion.h1>
            <motion.p
              className="contact__lead"
              {...FADE_UP}
              transition={fadeTransition(0.24)}
            >
              I help teams design and build performant interfaces with solid UX.
              From strategy to shipping, we can move fast without sacrificing
              quality.
            </motion.p>

            <motion.div
              className="contact__cta-row"
              {...FADE_UP}
              transition={fadeTransition(0.32)}
            >
              <a
                className="contact__cta contact__cta--primary"
                href="mailto:hello@johndoe.dev"
              >
                Start a project
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="contact__cta contact__cta--ghost"
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a call
              </a>
            </motion.div>

            <motion.div
              className="contact__socials"
              {...FADE_UP}
              transition={fadeTransition(0.4)}
            >
              <a
                className="contact__social-link"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <a
                className="contact__social-link"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.aside
            className="contact__panel"
            {...FADE_UP}
            transition={fadeTransition(0.22)}
            aria-label="Contact options"
          >
            <p className="contact__panel-kicker">Preferred channels</p>
            <h2 className="contact__panel-title">
              Choose the best way to reach me
            </h2>
            <div className="contact__actions">
              {CONTACT_ACTIONS.map((action) => {
                const Icon = action.icon;

                return (
                  <a
                    key={action.title}
                    className="contact__action"
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                  >
                    <span className="contact__action-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <span className="contact__action-copy">
                      <span className="contact__action-title">
                        {action.title}
                      </span>
                      <span className="contact__action-description">
                        {action.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="contact__action-arrow"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </motion.aside>

          <motion.div
            className="contact__draggable contact__draggable--cursor"
            drag
            dragConstraints={dragBoundsRef}
            dragElastic={0.16}
            dragMomentum
            dragTransition={{ bounceStiffness: 220, bounceDamping: 18 }}
            whileDrag={{ scale: 1.08, rotate: -8 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -16],
                    rotate: [0, -2],
                  }
            }
            transition={shouldReduceMotion ? undefined : floatTransition(4.4)}
          >
            <img
              src="/cursor.png"
              alt="Decorative cursor"
              height={200}
              width={200}
              className="contact__draggable-img"
              draggable="false"
            />
            <span className="contact__draggable-label">Drag me</span>
          </motion.div>

          <motion.div
            className="contact__draggable contact__draggable--message"
            drag
            dragConstraints={dragBoundsRef}
            dragElastic={0.2}
            dragMomentum
            dragTransition={{ bounceStiffness: 220, bounceDamping: 18 }}
            whileDrag={{ scale: 1.08, rotate: 8 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -12],
                    rotate: [0, 2],
                  }
            }
            transition={shouldReduceMotion ? undefined : floatTransition(5.2)}
          >
            <img
              src="/message.png"
              alt="Decorative chat bubble"
              height={200}
              width={200}
              className="contact__draggable-img"
              draggable="false"
            />
            <span className="contact__draggable-label">Drop anywhere</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
