"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/types/project";

const CATEGORIES = [
  "ALL",
  "SOCIAL MEDIA",
  "BRANDING & IDENTITY",
  "PACKAGE DESIGN",
  "CREATIVE WORK",
  "DIGITAL EXPERIENCES",
] as const;

interface ProjectGridProps {
  projects: Project[];
  featuredProject: Project;
}

export function ProjectGrid({ projects, featuredProject }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = useMemo(
    () =>
      activeCategory === "ALL"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [projects, activeCategory]
  );

  // Remove featured from grid (shown above)
  const gridProjects = filtered.filter((p) => p.id !== featuredProject.id);

  return (
    <>
      {/* Filters bar */}
      <div className="border-t border-b border-border-warm py-4 mb-8">
        <div className="container-site">
          <div className="flex items-center justify-between gap-4">
            <CategoryFilter
              categories={[...CATEGORIES]}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </div>
      </div>

      <div className="container-site">
        {/* Featured project highlight — shown only when All or matching category */}
        {(activeCategory === "ALL" || featuredProject.category === activeCategory) && (
          <div className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-border-warm rounded-sm overflow-hidden bg-white">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto img-zoom min-h-[280px]">
                <Image
                  src={featuredProject.heroImage.src}
                  alt={featuredProject.heroImage.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <SectionLabel>Featured project</SectionLabel>
                <h2 className="font-metropolis font-semibold text-earth text-display-md mb-3">
                  {featuredProject.title}
                </h2>
                <p className="text-signal-orange text-xs font-semibold tracking-[0.12em] uppercase mb-4">
                  {featuredProject.category}
                </p>
                <p className="text-secondary text-sm leading-relaxed mb-8 max-w-xs">
                  {featuredProject.shortDescription}
                </p>
                <Link
                  href={`/work/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 border border-earth text-earth 
                             px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase
                             hover:bg-earth hover:text-canvas transition-all duration-200 group w-fit"
                >
                  View case study
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Project grid */}
        {gridProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gridProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-secondary text-sm">
              No projects in this category yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
