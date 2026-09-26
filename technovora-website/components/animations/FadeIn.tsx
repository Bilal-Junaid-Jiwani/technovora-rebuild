"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Override y distance (default 40px for cinematic feel) */
  y?: number;
}

export function FadeIn({ children, delay = 0, className, y = 40 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom cubic — fast start, cinematic settle
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
