"use client";

import { motion } from "framer-motion";
import { Sun, Asterisk, PenTool, Target } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive deep to understand your goals, audience, and opportunities.",
    Icon: Sun,
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the strategy and creative direction with clarity and intent.",
    Icon: Asterisk,
  },
  {
    number: "03",
    title: "Create",
    description: "We design, craft, and refine ideas that connect and convert.",
    Icon: PenTool,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We launch with precision and support your growth every step ahead.",
    Icon: Target,
  },
];

export function ProcessSection() {
  return (
    <section
      className="section-padding border-t border-border-warm"
      aria-label="Our creative process"
    >
      <div className="container-site">
        <div className="relative backdrop-blur-sm py-10">
          <div className="text-center mb-14">
            <SectionLabel>Our process</SectionLabel>
            <h2 className="font-metropolis font-semibold text-earth text-display-lg text-balance">
              A clear path from spark to{" "}
              <em className="font-serif italic font-normal">impact.</em>
            </h2>
          </div>

          <motion.ol
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8 lg:gap-0"
            role="list"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                className={`relative flex items-center w-full lg:w-auto ${index < steps.length - 1 ? "lg:flex-1" : ""}`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <div className="flex items-start sm:items-center gap-5 z-10 bg-transparent lg:pr-2 w-full lg:w-auto">
                  <div
                    className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-signal-orange/20 bg-signal-orange/5 
                               flex items-center justify-center transition-colors"
                  >
                    <step.Icon
                      size={24}
                      className="text-signal-orange stroke-[1.25]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-col text-left flex-1 lg:flex-none">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-signal-orange font-bold tracking-wider">
                        {step.number}
                      </span>
                      <h3 className="font-metropolis font-bold text-earth tracking-[0.1em] uppercase">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-secondary text-sm leading-[1.6] max-w-[280px] lg:max-w-[140px]">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex flex-1 items-center px-4 opacity-60">
                    <div className="w-full border border-dashed border-secondary" />
                    <div className="w-2 h-2 flex-shrink-0 rounded-full border border-secondary bg-transparent ml-1" />
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
