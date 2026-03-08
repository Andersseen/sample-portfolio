import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  text: string;
  className: string;
  wordSpace: string;
  charSpace: string;
};

const characterAnimation = {
  hidden: { opacity: 0, y: "0.25em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const wordAnimation = { hidden: {}, visible: {} };

export default function AnimatedTitle({
  text,
  className,
  wordSpace,
  charSpace,
}: AnimatedTitleProps) {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  useEffect(() => {
    ctrls.start(inView ? "visible" : "hidden");
  }, [ctrls, inView]);

  return (
    <h2 aria-label={text} className={className}>
      {text.split(" ").map((word, wordIdx) => (
        <motion.span
          ref={ref}
          aria-hidden="true"
          key={wordIdx}
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            delayChildren: wordIdx * 0.25,
            staggerChildren: 0.05,
          }}
          className={wordSpace}
        >
          {word.split("").map((character, charIdx) => (
            <motion.span
              aria-hidden="true"
              key={charIdx}
              variants={characterAnimation}
              className={charSpace}
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h2>
  );
}
