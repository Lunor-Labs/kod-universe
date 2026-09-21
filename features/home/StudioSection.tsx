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

// Pinned slugs shown in the static project row - edit order here to change display
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
    <section
      className="section-padding-top"
      aria-label="Studio origin and process"
    >
      <div className="container-site space-y-10">
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

            <div className="md:hidden -mx-4 px-4">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4
                           [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <motion.div
                  className="snap-center shrink-0 w-[85vw]"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <ProjectCard
                    project={featured}
                    priority={true}
                    size="default"
                    className="h-full"
                  />
                </motion.div>

                {otherProjects.slice(0, 5).map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="snap-center shrink-0 w-[85vw]"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <ProjectCard
                      project={project}
                      priority={false}
                      size="default"
                      className="h-full"
                    />
                  </motion.div>
                ))}

                <motion.div
                  className="snap-center shrink-0 w-[85vw] flex items-center justify-center"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.48, ease: "easeOut" }}
                >
                  <Link
                    href="/portfolio"
                    className="group w-full h-full min-h-[200px] bg-earth rounded flex flex-col items-center justify-center gap-3 p-8 text-center hover:bg-signal-orange transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full border-2 border-canvas/40 flex items-center justify-center group-hover:border-white transition-all duration-300">
                      <ArrowRight
                        size={18}
                        className="text-canvas"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-canvas/70 group-hover:text-white/80 transition-colors">
                      See more
                    </span>
                    <span className="heading-card text-canvas group-hover:text-white transition-colors">
                      View all projects
                    </span>
                  </Link>
                </motion.div>
              </div>

              <p className="text-center text-xs text-earth/40 tracking-widest uppercase mt-1 select-none">
                swipe to explore
              </p>
            </div>

            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

            <div className="mt-6 hidden sm:flex justify-center md:hidden">
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
