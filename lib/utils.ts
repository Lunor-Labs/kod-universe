import type { ClassValue } from "clsx";

// Simple cn utility — avoids importing tailwind-merge to keep bundle lean
export function cn(...inputs: ClassValue[]): string {
  return inputs.flat().filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

// Slugify a string
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Format a year range or single year
export function formatYear(year: number): string {
  return String(year);
}

// Clamp a number between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
