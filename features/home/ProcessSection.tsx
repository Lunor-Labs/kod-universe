"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive deep to understand your goals, audience, and opportunities.",
    iconPath: "/icons/Discover-Icon.png",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the strategy and creative direction with clarity and intent.",
    iconPath: "/icons/Define.png",
  },
  {
    number: "03",
    title: "Create",
    description: "We design, craft, and refine ideas that connect and convert.",
    iconPath: "/icons/Create.png",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We launch with precision and support your growth every step ahead.",
    iconPath: "/icons/Deliver.png",
  },
];

export function ProcessSection() {
  return (
    <section
      className="section-padding"
      aria-label="Our creative process"
    >
      <div className="container-site">
        <div className="relative backdrop-blur-sm">
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
                    className="flex-shrink-0
                               flex items-center justify-center bg-white rounded-full shadow-xs transition-colors p-3 overflow-hidden"
                  >
                    <Image
                      src={step.iconPath}
                      alt={step.title}
                      width={72}
                      height={72}
                      className="object-contain w-full h-full"
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
