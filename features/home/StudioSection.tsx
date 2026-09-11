"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "@/types/project";

// Pinned slugs shown in the static project row — edit order here to change display
const FEATURED_SLUGS = [
  "area-6-brand-identity",
  "bio-oil-skincare-campaign",
  "niwarthana-packaging-design",
  "rouka-brand-identity",
];

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

interface StudioSectionProps {
  projects: Project[];
}

export function StudioSection({ projects }: StudioSectionProps) {
  const featured = (() => {
    const pinned = FEATURED_SLUGS.map((slug) =>
      projects.find((p) => p.slug === slug),
    ).filter(Boolean) as Project[];
    return pinned.length > 0 ? pinned[0] : projects[0];
  })();

  const otherProjects = projects.filter((p) => p.id !== featured?.id);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (otherProjects.length <= 2) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % otherProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [otherProjects.length]);

  const displayOthers = [];
  if (otherProjects.length > 0) {
    for (let i = 0; i < Math.min(2, otherProjects.length); i++) {
      displayOthers.push(
        otherProjects[(currentIndex + i) % otherProjects.length],
      );
    }
  }

  return (
    <section className="section-padding-top" aria-label="Studio origin and process">
      <div className="container-site space-y-10">
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

        {featured && (
          <div>
            <ScrollReveal variant="up" delay={0.05}>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <SectionLabel>Selected work</SectionLabel>
                  <h3 className="heading-section text-earth mt-1 text-balance">
                    Work that{" "}
                    <em className="font-serif italic font-normal">matters.</em>
                  </h3>
                </div>
                <Link
                  href="/portfolio"
                  className="btn-link hidden sm:inline-flex"
                >
                  <span>View all projects</span>
                  <span className="btn-icon-circle">
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2 h-full">
                <ScrollReveal variant="up" delay={0}>
                  <ProjectCard
                    project={featured}
                    priority={true}
                    size="large"
                    className="h-full"
                  />
                </ScrollReveal>
              </div>

              <AnimatePresence mode="popLayout">
                {displayOthers.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="lg:col-span-1 h-full"
                  >
                    <ProjectCard
                      project={project}
                      priority={false}
                      size="default"
                      className="h-full"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-6 flex justify-center sm:hidden">
              <Link href="/portfolio" className="btn-link">
                <span>View all projects</span>
                <span className="btn-icon-circle">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
