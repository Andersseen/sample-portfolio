import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import { Download } from "lucide-react";
import { useLang } from "@/lib/useLang";
import { LINKS } from "@/data/content";
import "./About.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { content } = useLang();
  const about = content.about;

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/about-animation.json",
    });

    return () => animation.destroy();
  }, []);

  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__animation">
        <div ref={containerRef} className="about__lottie" />
      </div>
      <motion.div
        className="about__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 className="about__title" id="about-title" variants={itemVariants}>
          {about.title}
        </motion.h2>

        <motion.p className="about__description" variants={itemVariants}>
          {about.description}
        </motion.p>

        <motion.div className="about__stats" variants={itemVariants}>
          {about.stats.map((stat) => (
            <div className="about__stat-item" key={stat.label}>
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="about__actions" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="about__cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {about.cta}
          </motion.a>
          <a href={LINKS.cv} className="about__cv" download>
            <Download size={17} aria-hidden="true" />
            {about.cvCta}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
