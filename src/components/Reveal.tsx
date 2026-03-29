import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const directions = {
  up: { y: 25, x: 0 },
  left: { y: 0, x: -25 },
  right: { y: 0, x: 25 },
};

const Reveal = ({ children, delay = 0, direction = "up", className = "" }: RevealProps) => {
  const offset = directions[direction];
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      // Trigger reveal earlier (before fully in viewport) so it fades in
      // gradually as user scrolls, preventing a sudden "pop" appearance
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
