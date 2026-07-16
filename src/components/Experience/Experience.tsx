import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLang } from "@/lib/useLang";
import "./Experience.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Experience = () => {
  const { content } = useLang();
  const experience = content.experience;

  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="experience__container">
        <p className="experience__eyebrow">{experience.eyebrow}</p>
        <h2 className="experience__title" id="experience-title">
          {experience.title}
        </h2>

        <ul className="experience__grid">
          {experience.items.map((item, index) => {
            const Icon = item.kind === "education" ? GraduationCap : Briefcase;

            return (
              <motion.li
                className="experience__card"
                key={`${item.period}-${item.title}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08 }}
              >
                <span
                  className={`experience__icon experience__icon--${item.kind}`}
                  aria-hidden="true"
                >
                  <Icon size={18} />
                </span>
                <span className="experience__period">{item.period}</span>
                <h3 className="experience__role">{item.title}</h3>
                <p className="experience__org">{item.org}</p>
                <p className="experience__description">{item.description}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
