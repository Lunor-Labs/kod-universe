"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "zoomIn" | "zoomOut" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  width?: "fit-content" | "100%";
}

export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  width = "100%",
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (variant) {
      case "up":
        return { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -50 }, show: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } };
      case "zoomIn":
        return { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } };
      case "zoomOut":
        return { hidden: { opacity: 0, scale: 1.2 }, show: { opacity: 1, scale: 1 } };
      case "fade":
      default:
        return { hidden: { opacity: 0 }, show: { opacity: 1 } };
    }
  };

  return (
    <div style={{ width }} className={`relative ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
