"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  duration = 0.55,
  className = "",
  width = "100%",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const getVariants = () => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      };
    }

    switch (variant) {
      case "up":
        return { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
      case "down":
        return { hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } };
      case "left":
        return { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } };
      case "right":
        return { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } };
      case "zoomIn":
        return { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } };
      case "zoomOut":
        return { hidden: { opacity: 0, scale: 1.04 }, show: { opacity: 1, scale: 1 } };
      case "fade":
      default:
        return { hidden: { opacity: 0 }, show: { opacity: 1 } };
    }
  };

  return (
    <div style={{ width }} className="relative">
      <motion.div
        className={`${className} transform-gpu backface-hidden`}
        variants={getVariants()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

