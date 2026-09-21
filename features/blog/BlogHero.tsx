"use client";

import { Search, X } from "lucide-react";
import type { PostCategory } from "@/types/post";

const CATEGORIES: PostCategory[] = [
  "ALL",
  "STUDIO NEWS",
  "DESIGN ESSAYS",
  "SPATIAL & ARCHITECTURE",
  "BRAND STRATEGY",
  "PACKAGING & CRAFT",
];

interface BlogHeroProps {
  activeCategory: PostCategory;
  onSelectCategory: (category: PostCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalPostsCount: number;
}

export function BlogHero({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalPostsCount,
}: BlogHeroProps) {
  return (
    <section className="relative pt-32 pb-12 md:pt-30 md:pb-10 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kod-clay/10 border border-kod-clay/20 text-kod-clay text-xs font-bold tracking-[0.2em] uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-kod-orange animate-pulse" />
          KOD Journal & Dispatches
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-kod-earth uppercase mb-6 font-metropolis">
          Thoughts, Stories <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-kod-orange via-kod-clay to-kod-earth">
            & Studio News
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-kod-text-2 leading-relaxed max-w-6xl mx-auto mb-10">
          Explorations in architectural space, sensory packaging, brand
          engineering, and reflections from the creative journey of Ishara
          Kodithuwakku and KOD Universe.
        </p>

        <div className="relative max-w-md mx-auto mb-10">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-kod-text-2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles by topic, title, or tag..."
              className="w-full pl-11 pr-10 py-3.5 rounded bg-white border border-kod-border/80 text-kod-earth placeholder-kod-text-2/60 text-sm focus:outline-none focus:ring-2 focus:ring-kod-orange/40 focus:border-kod-orange shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3.5 p-1 rounded text-kod-text-2 hover:text-kod-earth hover:bg-kod-mist transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`px-4 py-2 rounded text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-kod-earth text-white shadow-md scale-[1.02]"
                    : "bg-white text-kod-earth/80 hover:text-kod-orange hover:bg-kod-canvas border border-kod-border/60"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
