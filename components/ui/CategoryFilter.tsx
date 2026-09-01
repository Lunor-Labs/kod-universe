"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={cn(
              "px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase",
              "transition-all duration-200 focus-visible:outline-solar-gold",
              isActive
                ? "bg-earth text-canvas"
                : "bg-transparent text-earth border border-border-warm hover:border-dust-rose hover:text-signal-orange"
            )}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
