import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import "./About.scss";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    { label: "Projects Built", value: "15+" },
    { label: "Technologies", value: "8+" },
    { label: "Certifications", value: "3" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="about" id="about" aria-labelledby="about-title">
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
        <motion.div variants={itemVariants}>
          <h2 className="about__title" id="about-title">
            About Me
          </h2>
        </motion.div>

        <motion.p className="about__description" variants={itemVariants}>
          I'm a junior developer passionate about building beautiful and
          functional web experiences with React, TypeScript, and Node.js.
          Currently exploring full-stack development, always learning and
          excited to tackle new challenges.
        </motion.p>

        <motion.div className="about__stats" variants={itemVariants}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="about__stat-item"
              variants={itemVariants}
            >
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          className="about__cta"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
