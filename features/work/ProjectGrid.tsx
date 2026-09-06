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

  const gridProjects = filtered.filter((p) => p.id !== featuredProject.id);

  return (
    <>
      <div className=" py-4 mb-8">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CategoryFilter
              categories={[...CATEGORIES]}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.1em] uppercase text-earth">
              <label htmlFor="sort-work">Sort by:</label>
              <select 
                id="sort-work"
                className="bg-transparent border-none outline-none cursor-pointer hover:text-signal-orange focus-visible:outline-solar-gold"
                defaultValue="latest"
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="az">A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site">
        {(activeCategory === "ALL" || featuredProject.category === activeCategory) && (
          <div className="mb-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 border border-border-warm rounded-sm overflow-hidden bg-white">
              <div className="relative aspect-square img-zoom min-h-[260px] bg-[#FBF9F5] flex items-center justify-center">
                <Image
                  src={featuredProject.cardImage?.src ?? featuredProject.heroImage.src}
                  alt={featuredProject.heroImage.alt}
                  fill
                  priority
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <SectionLabel>Featured project</SectionLabel>
                <h2 className="font-metropolis font-semibold text-earth text-display-sm mb-2">
                  {featuredProject.title}
                </h2>
                <p className="text-signal-orange text-sm font-semibold tracking-[0.12em] uppercase mb-4">
                  {featuredProject.category}
                </p>
                <p className="text-secondary text-sm leading-relaxed mb-6 max-w-xs">
                  {featuredProject.shortDescription}
                </p>
                <Link
                  href={`/work/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 border border-earth text-earth 
                             px-5 py-2 rounded-sm text-sm font-semibold tracking-[0.12em] uppercase
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

            <div className="border border-border-warm rounded-sm bg-canvas p-8 flex flex-col relative overflow-hidden texture-grain">
              <SectionLabel>Our Philosophy</SectionLabel>
              <h3 className="font-editorial text-2xl lg:text-3xl text-earth mb-4 italic mt-2 leading-tight">
                Ideas are ancient.<br/>
                Execution is modern.<br/>
                <span className="font-bold">Impact is timeless.</span>
              </h3>
              <p className="text-secondary text-sm mb-auto">
                We believe every brand has a story worth telling. Our work blends strategy, creativity, and craftsmanship to build experiences that resonate and endure.
              </p>
              <div className="mt-8 flex items-end justify-between">
                <span className="font-editorial italic text-earth opacity-60">The KOD Universe</span>
                <div className="w-16 h-16 opacity-10 relative">
                   <Image src="/icon_astrolabe.svg" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        )}
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
