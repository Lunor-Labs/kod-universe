"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("latest");

  const filtered = useMemo(() => {
    let result = projects;

    if (activeCategory !== "ALL") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortOption === "az") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "oldest") {
        return a.year === b.year ? a.id.localeCompare(b.id) : a.year - b.year;
      }
      return a.year === b.year ? b.id.localeCompare(a.id) : b.year - a.year;
    });

    return result;
  }, [projects, activeCategory, searchQuery, sortOption]);

  const gridProjects = filtered.filter((p) => p.id !== featuredProject.id);

  return (
    <>
      <div className=" py-4 mb-8">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <CategoryFilter
              categories={[...CATEGORIES]}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="relative flex items-center">
                <Search size={16} className="absolute left-0 text-kod-earth/50" />
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-b border-border-warm pb-1 pl-6 outline-none focus:border-kod-orange transition-colors text-sm w-full sm:w-48 placeholder:text-kod-earth/50 text-kod-earth"
                />
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.1em] uppercase text-earth">
                <label htmlFor="sort-work">Sort by:</label>
                <select 
                  id="sort-work"
                  className="bg-transparent border-none outline-none cursor-pointer hover:text-signal-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="az">A-Z</option>
                </select>
              </div>
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
                <h2 className="heading-card text-earth mb-2">
                  {featuredProject.title}
                </h2>
                <p className="text-signal-orange text-sm font-semibold tracking-[0.12em] uppercase mb-4">
                  {featuredProject.category}
                </p>
                <p className="text-body text-kod-earth/85 mb-6 max-w-sm">
                  {featuredProject.shortDescription}
                </p>
                <Link
                  href={`/portfolio/${featuredProject.slug}`}
                  className="btn-secondary w-fit"
                >
                  <span>View case study</span>
                  <span className="btn-badge">
                    <ArrowRight
                      size={13}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </div>
            </div>

            <div className="border border-border-warm rounded-sm bg-canvas p-8 flex flex-col relative overflow-hidden texture-grain">
              <SectionLabel>Our Philosophy</SectionLabel>
              <h3 className="heading-card font-editorial text-earth mb-4 italic mt-2 leading-tight">
                Ideas are ancient.<br/>
                Execution is modern.<br/>
                <span className="font-bold">Impact is timeless.</span>
              </h3>
              <p className="text-body text-kod-earth/85 mb-auto">
                We believe every brand has a story worth telling. Our work blends strategy, creativity, and craftsmanship to build experiences that resonate and endure.
              </p>
              <div className="mt-8 flex items-end justify-between">
                <span className="font-editorial italic text-base text-earth opacity-70">The KOD Universe</span>
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
            <p className="text-kod-earth/80 text-base font-medium">
              No projects in this category yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

