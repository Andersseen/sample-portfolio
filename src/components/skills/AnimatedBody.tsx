import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedBodyProps = {
  text: string;
  className?: string;
  delay?: number;
};

const bodyAnimation = {
  hidden: { opacity: 0, y: "1em" },
  visible: (delay: number) => ({
    opacity: 1,
    y: "0em",
    transition: { delay, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
  }),
};

export default function AnimatedBody({
  text,
  className,
  delay = 0,
}: AnimatedBodyProps) {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    ctrls.start(inView ? "visible" : "hidden");
  }, [ctrls, inView]);

  return (
    <motion.p
      aria-label={text}
      className={className}
      ref={ref}
      initial="hidden"
      animate={ctrls}
      custom={delay}
      variants={bodyAnimation}
    >
      {text}
    </motion.p>
  );
}
