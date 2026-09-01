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

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  shortDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  heroImage: ProjectImage;
  galleryImages: ProjectImage[];
  tags: string[];
  featured: boolean;
  relatedSlugs: string[];
}
