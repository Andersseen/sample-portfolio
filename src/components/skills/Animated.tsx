import React, { useEffect } from "react";
import {
  useAnimation,
  motion,
  type Transition,
  type Variants,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedProps = {
  className?: string;
  delay?: number;
  stepSize?: number;
  iconSize?: number;
  children: React.ReactNode;
};

const HOVER_COLOR = "#ff5733";

const animatedVariants: Variants = {
  hidden: { opacity: 0, y: "1em" },
  visible: { opacity: 1, y: "0em" },
};

const Animated: React.FC<AnimatedProps> = ({
  className,
  delay,
  iconSize = 50,
  children,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const transition: Transition = {
    delay: delay || 0,
    duration: 1,
    ease: [0.2, 0.65, 0.3, 0.9],
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animatedVariants}
      transition={transition}
    >
      {React.Children.map(children, (child, index) => {
        const icon = child as React.ReactElement;
        return (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, color: HOVER_COLOR }}
            whileTap={{ scale: 0.9 }}
            style={{ width: iconSize, height: iconSize }}
          >
            {icon}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Animated;
