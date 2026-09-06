import { type FaqItem } from "@/components/ui/FaqAccordion";

export interface DeliverableItem {
  num: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface FeaturedCaseStudy {
  badge: string;
  client: string;
  tagline: string;
  description: string;
  deliverables: string[];
  palette: string[];
  headlineFont: string;
  bodyFont: string;
  slug: string;
  imageSrc: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export interface QualificationPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface SelectedProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageSrc: string;
}

export interface ServiceDiscipline {
  title: string;
  badge?: string;
  description: string;
  deliverables: string[];
  iconName?: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

export interface ServiceDetailConfig {
  serviceNumber: string;
  categoryTrack: string[];
  eyebrow: string;
  heroTitlePrefix: string;
  heroTitleItalic: string;
  heroDescription: string;
  philosophyNumber: string;
  philosophyTitlePrefix: string;
  philosophyTitleItalic: string;
  philosophyCol1: string;
  philosophyCol2: string;
  disciplines?: ServiceDiscipline[];
  impactMetrics?: ImpactMetric[];
  selectedWorkTitle?: string;
  selectedWorkSubtitle?: string;
  selectedWorkProjects?: SelectedProject[];
  ctaTitle?: string;
  ctaDescription?: string;
  deliverables: DeliverableItem[];
  featuredCaseStudy: FeaturedCaseStudy;
  process: ProcessStep[];
  qualificationPoints: QualificationPoint[];
  faqs: FaqItem[];
}
