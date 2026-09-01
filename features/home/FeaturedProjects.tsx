"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types/project";

const CATEGORIES = ["ALL", "SOCIAL MEDIA", "BRANDING & IDENTITY", "PACKAGE DESIGN", "CREATIVE WORK"] as const;

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const display = filtered.slice(0, 3);

  return (
    <section className="section-padding border-t border-border-warm" aria-label="Selected projects">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: filters + grid */}
          <div className="lg:col-span-2">
            {/* Filters */}
            <div className="mb-8">
              <CategoryFilter
                categories={[...CATEGORIES]}
                active={activeCategory}
                onChange={setActiveCategory}
              />
            </div>

            {/* Grid */}
            {display.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {display.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    priority={i === 0}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-secondary text-sm">
                  No projects in this category yet.
                </p>
              </div>
            )}

            {/* View all */}
            <div className="mt-8 flex justify-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.1em] 
                           uppercase text-earth hover:text-signal-orange transition-colors duration-200 group"
              >
                View all projects
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right: Our Universe intro */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="bg-white border border-border-warm rounded-sm p-8 relative overflow-hidden">
              {/* Decorative SVG cosmic ring */}
              <div
                className="absolute -right-12 -top-12 w-40 h-40 rounded-full border border-border-warm/60 opacity-50"
                aria-hidden="true"
              />
              <div
                className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-border-warm/40 opacity-40"
                aria-hidden="true"
              />

              <p className="eyebrow mb-4">Our origin. Your impact.</p>
              <h2 className="font-metropolis font-semibold text-earth text-display-sm mb-4 text-balance">
                We are messengers of creative forces.
              </h2>
              <p className="text-secondary text-sm leading-relaxed mb-8">
                From the vast universe, ideas spark — seeds of potential. We receive them with purpose and shape them into work that connects, inspires, and leaves a lasting mark.
              </p>
              <Link
                href="/our-universe"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.1em] 
                           uppercase text-earth border border-earth px-5 py-2.5 rounded-sm
                           hover:bg-earth hover:text-canvas transition-all duration-200 group"
              >
                Our Story
                <ArrowRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
