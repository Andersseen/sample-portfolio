import React, { cloneElement } from "react";
import Animated from "./Animated";

type AnimatedToolsProps = {
  delay: number;
  stepSize: number;
  children: React.ReactElement[];
  iconSize: number;
  className?: string;
};

const AnimatedTools: React.FC<AnimatedToolsProps> = ({
  delay,
  stepSize,
  children,
  iconSize,
  className,
}) => (
  <div className={className}>
    {children.map((child, index) => (
      <Animated
        key={index}
        delay={delay + index * stepSize}
        iconSize={iconSize}
      >
        {cloneElement(child, { size: iconSize })}
      </Animated>
    ))}
  </div>
);

export default AnimatedTools;
