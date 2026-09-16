"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Target, PenTool, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types/project";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const DEFAULT_HIGHLIGHTED_SLUGS = [
  "area-6-brand-identity",
  "bio-oil-skincare-campaign",
  "niwarthana-packaging-design",
  "rouka-brand-identity",
  "coffee-1911-identity",
];

interface InfoCardsProps {
  featuredProject?: Project;
  projects?: Project[];
  highlightedProjects?: Project[];
}

export function InfoCards({
  featuredProject,
  projects = [],
  highlightedProjects,
}: InfoCardsProps) {
  const items = useMemo(() => {
    if (highlightedProjects && highlightedProjects.length > 0) {
      return highlightedProjects.slice(0, 5);
    }
    if (projects.length > 0) {
      const selected = DEFAULT_HIGHLIGHTED_SLUGS.map((slug) =>
        projects.find((p) => p.slug === slug)
      ).filter(Boolean) as Project[];

      if (selected.length < 5) {
        const remaining = projects.filter((p) => !selected.some((s) => s.id === p.id));
        selected.push(...remaining.slice(0, 5 - selected.length));
      }
      return selected.slice(0, 5);
    }
    return featuredProject ? [featuredProject] : [];
  }, [highlightedProjects, projects, featuredProject]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = items.length;
  const currentProject = items[currentIndex] || items[0] || featuredProject;

  const nextSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, total]);

  const processCards = [
    {
      label: "DISCOVER",
      title: "Uncover insight\nand opportunity.",
      icon: <Search className="w-5 h-5 text-signal-orange" />,
    },
    {
      label: "DEFINE",
      title: "Build strategy\nwith clarity.",
      icon: <Target className="w-5 h-5 text-signal-orange" />,
    },
    {
      label: "CREATE",
      title: "Craft ideas\nthat connect.",
      icon: <PenTool className="w-5 h-5 text-signal-orange" />,
    },
    {
      label: "DELIVER",
      title: "Launch, refine,\nand elevate.",
      icon: <Rocket className="w-5 h-5 text-signal-orange" />,
    },
  ];

  return (
    <section
      className="section-padding-top bg-transparent"
      aria-label="Story and project highlights"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ScrollReveal variant="up" delay={0}>
            <Link
              href="/about-us"
              className="group relative bg-white rounded p-6 lg:p-8 
                         overflow-hidden hover:border-dust-rose transition-all duration-300 
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50 col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between h-full"
            >
              <div className="relative z-10 w-[60%]">
                <p className="eyebrow mb-4">OUR STORY</p>
                <h3 className="heading-card font-editorial font-normal text-earth mb-4 leading-tight">
                  Rooted in curiosity. Driven by purpose.
                </h3>
                <p className="text-body text-kod-earth/85">
                  Discover our journey, values, and the philosophy that guides
                  everything we create.
                </p>
              </div>

              <div className="relative z-10 mt-8 w-12 h-12 rounded-full border border-border-warm flex items-center justify-center group-hover:border-signal-orange group-hover:text-signal-orange bg-white transition-colors duration-200">
                <ArrowRight size={16} aria-hidden="true" />
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 w-[50%] pointer-events-none opacity-90 mix-blend-multiply"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 60%)",
                }}
              >
                <Image
                  src="/assets/hero.webp"
                  alt=""
                  fill
                  className="object-cover object-right"
                />
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={0.08}>
            <div className="group bg-white rounded p-6 lg:p-8 col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between relative overflow-hidden h-full">
              <div>
                <div className="flex justify-between">
                  <div>
                    <p className="eyebrow mb-4">OUR PROCESS</p>
                    <h3 className="heading-card font-editorial font-normal text-earth mb-10 leading-tight">
                      From spark
                      <br />
                      to impact.
                    </h3>
                  </div>
                  <Link
                    href="/services"
                    className="mt-6 w-12 h-12 rounded-full border border-border-warm flex items-center justify-center hover:border-signal-orange hover:text-signal-orange bg-white transition-colors duration-200"
                    aria-label="View our process"
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <div className="relative flex justify-between items-start mt-6">
                  <div className="absolute top-[18px] left-[15%] right-[15%] h-[1px] border-t border-dashed border-border-warm z-0" />

                  {processCards.map((step) => (
                    <div
                      key={step.label}
                      className="relative z-10 flex flex-col items-center text-center flex-1 px-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-white border border-border-warm flex items-center justify-center mb-3">
                        {step.icon}
                      </div>
                      <p className="eyebrow !text-sm !font-bold mb-2 tracking-wide">
                        {step.label}
                      </p>
                      <p className="text-kod-earth/85 text-sm sm:text-base font-medium leading-snug whitespace-pre-line hidden sm:block">
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          {currentProject && (
            <ScrollReveal variant="up" delay={0.16}>
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="h-full"
              >
                <Link
                  href={`/portfolio/${currentProject.slug}`}
                  className="group relative bg-white rounded p-6 lg:p-8 
                             overflow-hidden hover:border-dust-rose transition-all duration-300 
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50 col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between h-full select-none"
                >
                  <div className="relative z-10 w-[55%] sm:w-[50%]">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <p className="eyebrow text-signal-orange">PROJECT DETAIL</p>
                      {total > 1 && (
                        <span className="text-sm font-mono tracking-widest text-earth/70 font-semibold">
                          0{currentIndex + 1} / 0{total}
                        </span>
                      )}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentProject.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="heading-card font-editorial font-normal text-earth mb-2 leading-tight group-hover:text-signal-orange transition-colors">
                          {currentProject.title}
                        </h3>
                        <p className="text-signal-orange text-sm font-semibold mb-4 tracking-wider uppercase">
                          {currentProject.category}
                        </p>
                        <p className="text-body text-kod-earth/85 line-clamp-3">
                          {currentProject.shortDescription}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="relative z-10 mt-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-border-warm flex items-center justify-center group-hover:border-signal-orange group-hover:text-signal-orange bg-white transition-colors duration-200">
                        <ArrowRight size={16} aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold tracking-wider uppercase text-earth group-hover:text-signal-orange transition-colors hidden sm:inline-block">
                        View Project
                      </span>
                    </div>

                    {total > 1 && (
                      <div
                        className="flex items-center gap-1.5 z-20 py-2"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        {items.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setCurrentIndex(idx);
                            }}
                            aria-label={`Go to highlighted project ${idx + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === currentIndex
                                ? "w-6 bg-signal-orange"
                                : "w-2 bg-border-warm hover:bg-earth/40"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="absolute top-0 right-0 bottom-0 w-[45%] sm:w-[50%] pointer-events-none p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentProject.id}
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, x: -20 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={
                            currentProject.slug === "bio-oil-skincare-campaign"
                              ? "/assets/bio-oils.webp"
                              : currentProject.cardImage?.src ||
                                currentProject.heroImage.src
                          }
                          alt={currentProject.title}
                          fill
                          className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal variant="up" delay={0.24}>
            <Link
              href="/contact-us"
              className="group relative bg-white rounded p-6 lg:p-8 
                         overflow-hidden hover:border-dust-rose transition-all duration-300 
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50 col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between h-full"
            >
              <div className="relative z-10 w-[60%]">
                <p className="eyebrow mb-4">LET&apos;S CONNECT</p>
                <h3 className="heading-card font-editorial font-normal text-earth mb-4 leading-tight">
                  Have a project
                  <br />
                  in mind?
                </h3>
                <p className="text-body text-kod-earth/85">
                  We&apos;d love to hear about your goals and explore how we can
                  create something extraordinary together.
                </p>
              </div>

              <div className="relative z-10 mt-8 w-12 h-12 rounded-full border border-border-warm flex items-center justify-center group-hover:border-signal-orange group-hover:text-signal-orange bg-white transition-colors duration-200">
                <ArrowRight size={16} aria-hidden="true" />
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 w-[50%] pointer-events-none opacity-90 mix-blend-multiply"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 60%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 60%)",
                }}
              >
                <Image
                  src="/assets/project-origins.webp"
                  alt=""
                  fill
                  className="object-cover object-right"
                />
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

