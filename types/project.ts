// Project type definitions

export type MainCategory = "DESIGN" | "MARKETING" | "VISUAL STORYTELLING";

export type SubCategory =
  | "Branding"
  | "Packaging"
  | "Editorial"
  | "Web & Digital"
  | "Spatial / Architecture"
  | "Merchandise"
  | "Social Media"
  | "Campaigns"
  | "Content Marketing"
  | "Brand Strategy"
  | "Activations"
  | "Photography"
  | "Film & Video"
  | "TVC"
  | "Motion"
  | "Illustration"
  | "Social Content";

export type ProjectCategory = MainCategory | string;

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
  subCategory?: string;
  subCategories?: string[];
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

