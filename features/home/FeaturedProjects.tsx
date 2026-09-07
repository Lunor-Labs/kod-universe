"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types/project";
import Image from "next/image";

const CATEGORIES = [
  "ALL",
  "SOCIAL MEDIA",
  "BRANDING & IDENTITY",
  "PACKAGE DESIGN",
  "CREATIVE WORK",
] as const;

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const display = filtered.slice(0, 2);

  return (
    <section className="section-padding-top " aria-label="Selected projects">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <CategoryFilter
                categories={[...CATEGORIES]}
                active={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
            {display.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                <AnimatePresence mode="popLayout">
                  {display.map((project, i) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <ProjectCard project={project} priority={i === 0} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-kod-earth/80 text-base font-medium">
                  No projects in this category yet.
                </p>
              </div>
            )}
            <div className="mt-8 flex justify-start">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] 
                           uppercase text-earth hover:text-signal-orange transition-colors duration-200 group"
              >
                View all projects
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1 rounded-full p-1 border w-6 h-6"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="bg-white/70 p-8 sm:flex justify-between">
              <div className="">
                <div
                  className="absolute -right-12 -top-12 w-40 h-40 rounded-full border border-border-warm/60 opacity-50"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-border-warm/40 opacity-40"
                  aria-hidden="true"
                />

                <p className="eyebrow mb-4">Our origin. Your impact.</p>
                <h2 className="heading-section text-earth mb-4 text-balance">
                  We are messengers of creative forces.
                </h2>
                <p className="text-body text-kod-earth/85 mb-8">
                  From the vast universe, ideas spark - seeds of potential. We
                  receive them with purpose and shape them into work that
                  connects, inspires, and leaves a lasting mark.
                </p>
                <Link
                  href="/our-universe"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] 
                           uppercase text-earth border border-earth/40 px-5 py-2.5 rounded-3xl
                           hover:bg-earth hover:text-canvas transition-all duration-200 group"
                >
                  Our Story
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-1 rounded-full p-1 border border-earth/40 w-6 h-6"
                    aria-hidden="true"
                  />
                </Link>
              </div>
              <div className="pt-10 sm:pt-0">
                <Image
                  src={"/main/circle.png"}
                  alt={""}
                  width={1500}
                  height={1500}
                  className="object-cover animate-spin-slower"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
