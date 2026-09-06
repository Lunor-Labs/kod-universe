// Project type definitions

export type ProjectCategory =
  | "SOCIAL MEDIA"
  | "BRANDING & IDENTITY"
  | "PACKAGE DESIGN"
  | "CREATIVE WORK"
  | "DIGITAL EXPERIENCES";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectPillar {
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  location?: string;
  timeline?: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  pillars?: ProjectPillar[];
  heroImage: ProjectImage;
  cardImage?: ProjectImage;
  galleryImages: ProjectImage[];
  tags: string[];
  featured: boolean;
  relatedSlugs: string[];
}

