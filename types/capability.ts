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
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
