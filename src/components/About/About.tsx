import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import { CONTENT } from "@/data/content";
import "./About.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { about } = CONTENT;

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
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__visual" aria-hidden="true">
        <div ref={containerRef} className="about__lottie" />
      </div>
      <motion.div
        className="about__content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p className="about__eyebrow" variants={itemVariants}>
          {about.eyebrow}
        </motion.p>
        <motion.h2
          className="about__title"
          id="about-title"
          variants={itemVariants}
        >
          {about.title}
        </motion.h2>
        <motion.p className="about__description" variants={itemVariants}>
          {about.description}
        </motion.p>
        <motion.ul className="about__details" variants={itemVariants}>
          {about.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </motion.ul>
        <motion.dl className="about__stats" variants={itemVariants}>
          {about.stats.map((stat) => (
            <div className="about__stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
};

export default About;
