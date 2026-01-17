import React, { useEffect, useRef, useState } from "react";
import { motion as Motion, useMotionValue, animate, useInView } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return controls.stop;
  }, [isInView, value, count]);

  return (
    <Motion.span ref={ref}>
      {display}
      {suffix}
    </Motion.span>
  );
};

export default AnimatedCounter;
