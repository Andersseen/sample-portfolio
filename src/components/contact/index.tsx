import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck2,
  Download,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import { useLang } from "@/lib/useLang";
import { LINKS, mailto } from "@/data/content/links";
import "./contact.scss";

const FADE_UP = {
  initial: { opacity: 0, y: 56 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
};

const ACTION_ICONS: Record<string, LucideIcon> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  call: CalendarCheck2,
};

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
  const dragBoundsRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { content } = useLang();
  const contact = content.contact;

  return (
    <section
      className="contact"
      aria-labelledby="contact-title"
      ref={dragBoundsRef}
    >
      <div className="contact__radial-bg" aria-hidden="true" />
      <div className="contact__container">
        <div className="contact__layout">
          <div className="contact__intro">
            <motion.p
              className="contact__eyebrow"
              {...FADE_UP}
              transition={fadeTransition(0.08)}
            >
              {contact.eyebrow}
            </motion.p>
            <motion.h2
              className="contact__title"
              id="contact-title"
              {...FADE_UP}
              transition={fadeTransition(0.16)}
            >
              {contact.title}
            </motion.h2>
            <motion.p
              className="contact__lead"
              {...FADE_UP}
              transition={fadeTransition(0.24)}
            >
              {contact.lead}
            </motion.p>

            <motion.div
              className="contact__cta-row"
              {...FADE_UP}
              transition={fadeTransition(0.32)}
            >
              <a
                className="contact__cta contact__cta--primary"
                href={mailto("Hello Yuliia")}
              >
                {contact.ctaPrimary}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="contact__cta contact__cta--ghost"
                href={LINKS.cv}
                download
              >
                <Download size={17} aria-hidden="true" />
                {contact.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              className="contact__socials"
              {...FADE_UP}
              transition={fadeTransition(0.4)}
            >
              <a
                className="contact__social-link"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} aria-hidden="true" />
                {contact.socials.github}
              </a>
              <a
                className="contact__social-link"
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
                {contact.socials.linkedin}
              </a>
            </motion.div>
          </div>

          <motion.aside
            className="contact__panel"
            {...FADE_UP}
            transition={fadeTransition(0.22)}
            aria-label={contact.panelTitle}
          >
            <p className="contact__panel-kicker">{contact.panelKicker}</p>
            <h3 className="contact__panel-title">{contact.panelTitle}</h3>
            <div className="contact__actions">
              {contact.actions.map((action) => {
                const Icon = ACTION_ICONS[action.key] ?? Mail;
                const external = action.key !== "email";

                return (
                  <a
                    key={action.key}
                    className="contact__action"
                    href={action.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
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
        </div>
      </div>

      <motion.div
        className="contact__draggable contact__draggable--cursor"
        drag
        dragConstraints={dragBoundsRef}
        dragElastic={0.16}
        dragMomentum
        dragTransition={{ bounceStiffness: 220, bounceDamping: 18 }}
        whileDrag={{ scale: 1.08, rotate: -8 }}
        animate={shouldReduceMotion ? undefined : { y: [0, -16], rotate: [0, -2] }}
        transition={shouldReduceMotion ? undefined : floatTransition(4.4)}
      >
        <img
          src="/cursor.png"
          alt=""
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
        animate={shouldReduceMotion ? undefined : { y: [0, -12], rotate: [0, 2] }}
        transition={shouldReduceMotion ? undefined : floatTransition(5.2)}
      >
        <img
          src="/message.png"
          alt=""
          height={200}
          width={200}
          className="contact__draggable-img"
          draggable="false"
        />
        <span className="contact__draggable-label">Drop anywhere</span>
      </motion.div>
    </section>
  );
};

export default Contact;
