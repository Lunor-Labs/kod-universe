"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive deep to understand your goals, audience, and opportunities.",
    iconPath: "/icons/discover-icon.webp",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the strategy and creative direction with clarity and intent.",
    iconPath: "/icons/define.webp",
  },
  {
    number: "03",
    title: "Create",
    description: "We design, craft, and refine ideas that connect and convert.",
    iconPath: "/icons/create.webp",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We launch with precision and support your growth every step ahead.",
    iconPath: "/icons/deliver.webp",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding-top" aria-label="Our creative process">
      {/* <div className="container-site">
        <div className="relative backdrop-blur-sm rounded p-4 bg-white/80">
          <div className="text-center mb-14">
            <SectionLabel>Our process</SectionLabel>
            <h2 className="heading-section text-earth text-balance">
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
                      <span className="text-signal-orange font-bold text-base tracking-wider">
                        {step.number}
                      </span>
                      <h3 className="heading-item text-earth tracking-[0.05em] uppercase">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-body text-kod-earth/85 max-w-[280px] lg:max-w-[230px]">
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
      </div> */}
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="hidden sm:block lg:col-span-1 h-full">
            <ScrollReveal variant="up">
              <div className="relative  bg-white/80 rounded p-8 lg:p-10 flex flex-col justify-center min-h-[556px] overflow-hidden items-center">
                <div
                  className="absolute -right-10 -top-10 w-40 h-40 rounded-full border border-border-warm/50 opacity-40 pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-4 -top-4 w-24 h-24 rounded-full border border-border-warm/30 opacity-30 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex  gap-6">
                  <div className="flex-1">
                    {/* <p className="eyebrow mb-4">Our origin. Your impact.</p> */}
                    <h2 className="heading-section text-earth mb-4 text-balance">
                      We are messengers of{" "}
                      <em className="font-serif italic font-normal">
                        creative forces.
                      </em>
                    </h2>
                    <p className="text-body text-kod-earth/85 mb-8 max-w-xs">
                      From the vast universe, ideas spark - seeds of potential.
                      We receive them with purpose and shape them into work that
                      connects, inspires, and leaves a lasting mark.
                    </p>
                    <Link href="/about-us" className="btn-secondary">
                      <span>Our Story</span>
                      <span className="btn-badge">
                        <ArrowRight size={13} aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                  {/* <div className="flex-shrink-0 w-28 h-28 sm:w-72 sm:h-72 self-center">
                  <Image
                    src="/main/circle.webp"
                    alt=""
                    width={300}
                    height={300}
                    className="object-contain animate-spin-slower"
                    aria-hidden="true"
                  />
                </div> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-2 h-full">
            <ScrollReveal variant="up" delay={0.1}>
              <div className="relative bg-white/80 rounded p-8 lg:p-10 h-full">
                <SectionLabel>Our process</SectionLabel>
                <h3 className="heading-section text-earth mb-8 mt-1 text-balance">
                  A clear path from spark to{" "}
                  <em className="font-serif italic font-normal">impact.</em>
                </h3>

                <motion.ol
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
                  role="list"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15 },
                    },
                  }}
                >
                  {steps.map((step, index) => (
                    <motion.li
                      key={step.number}
                      className="flex flex-col items-start"
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }}
                    >
                      <div className="flex items-center justify-center overflow-hidden">
                        <Image
                          src={step.iconPath}
                          alt={step.title}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-signal-orange font-bold text-sm tracking-wider">
                            {step.number}
                          </span>
                          <h4 className="heading-item text-earth tracking-[0.05em] uppercase">
                            {step.title}
                          </h4>
                        </div>
                      </div>
                      <div className="flex">
                        <p className="text-body text-kod-earth/80">
                          {step.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
