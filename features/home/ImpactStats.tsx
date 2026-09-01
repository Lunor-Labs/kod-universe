"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

function Counter({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const current = Math.floor(progress * (to - from) + from);
      if (nodeRef.current) {
        nodeRef.current.textContent = current.toString();
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else if (nodeRef.current) {
        nodeRef.current.textContent = to.toString();
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [to, from, duration, isInView]);

  return <span ref={nodeRef}>{from}</span>;
}

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 45, suffix: "", label: "Industry Awards" },
];

export function ImpactStats() {
  return (
    <section className="pb-6  text-canvas" aria-label="Impact statistics">
      <div className="container-site bg-secondary rounded-sm p-4 ">
        <ScrollReveal variant="up">
          <div className="text-center mb-6">
            <SectionLabel className="!text-canvas border-canvas/30">
              By the numbers
            </SectionLabel>
            <h2 className="font-editorial text-4xl md:text-4xl mt-2">
              Our impact at a glance.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-canvas/10">
          {stats.map((stat, idx) => (
            <ScrollReveal key={stat.label} variant="up" delay={idx * 0.15}>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <div className=" font-bold text-6xl md:text-6xl lg:text-7xl mb-4 flex items-center">
                  <Counter to={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-canvas/70 uppercase tracking-widest text-sm font-semibold">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
