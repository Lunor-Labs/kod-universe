// Capability type definitions

export interface Deliverable {
  label: string;
}

export interface Capability {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  relatedProjectSlugs: string[];
  parentCategory?: string;
  subCategory?: string;
}

export interface ServiceContentSection {
  title: string;
  badge?: string;
  description: string;
  deliverables: string[];
  iconName?: string;
}

export interface ServiceCluster {
  title: string;
  badge?: string;
  description?: string;
  services: Capability[];
}

export interface ServiceGroup {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName?: string;
  tags?: string[];
  contentSections: ServiceContentSection[];
  clusters?: ServiceCluster[];
  services: Capability[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
  iconPath?: string;
}
