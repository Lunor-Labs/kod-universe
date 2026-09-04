import {
  Target,
  Sparkles,
  Compass,
  Volume2,
  Sliders,
  BookOpen,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import { type FaqItem } from "@/components/ui/FaqAccordion";
import {
  type DeliverableItem,
  type ProcessStep,
  type QualificationPoint,
  type SelectedProject,
  type ServiceDetailConfig,
} from "@/components/services/types";

export const brandingDeliverables: DeliverableItem[] = [
  {
    num: "01",
    icon: Target,
    title: "Brand Strategy",
    description: "We define your purpose, audience, position, and clear path to market impact.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Creative Direction",
    description: "We guide the look, tone, and storytelling expression across your entire brand world.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Naming & Positioning",
    description: "We craft distinctive names, territories, and taglines that resonate and differentiate.",
  },
  {
    num: "05",
    icon: Volume2,
    title: "Brand Voice",
    description: "We shape the words, key messaging pillars, and language that articulate your character.",
  },
  {
    num: "03",
    icon: Sliders,
    title: "Visual Identity",
    description: "We build iconic marks, custom typography, color systems, and dynamic brand assets.",
  },
  {
    num: "06",
    icon: BookOpen,
    title: "Brand Guidelines",
    description: "We document standards, design systems, and rules to protect and scale your identity seamlessly.",
  },
];

export const defaultFaqs: FaqItem[] = [
  {
    question: "What does a branding project include?",
    answer:
      "A complete engagement typically includes research and positioning strategy, full visual identity (primary & secondary marks, color architecture, typography), brand voice guidelines, design systems, and core collateral touchpoints tailored to your business.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Our standard identity cycle spans 4 to 8 weeks depending on scope, deliverables, and alignment sprints. We operate with focused momentum without compromising artistic craft or strategic depth.",
  },
  {
    question: "Can you refresh an existing identity?",
    answer:
      "Absolutely. We specialize in both ground-up zero-to-one brand creation and evolutionary identity evolutions that honor your existing market equity while modernizing for future expansion.",
  },
  {
    question: "What will we need from you?",
    answer:
      "Active collaboration at key milestone reviews, candid insights into your long-term business goals, and designated decision-makers to ensure rapid, unblocked momentum throughout discovery and rollout.",
  },
];

export const brandingProcess: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Find the truth",
    description: "We explore your world, audience, competitors, and core opportunities to uncover what truly matters.",
    imageSrc: "/cave-painting-bento.jpg",
  },
  {
    number: "02",
    title: "DEFINE",
    subtitle: "Choose the position",
    description: "We distill insights and define a clear, defensible position that sets you apart with deliberate purpose.",
    imageSrc: "/project-cosmic.jpg",
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "Craft the system",
    description: "We build the visual and verbal universe—from primary marks to expressive typography and motion gestures.",
    imageSrc: "/service-hero-3d.jpg",
  },
  {
    number: "04",
    title: "DEPLOY",
    subtitle: "Create consistency",
    description: "We roll out the complete identity across physical and digital touchpoints, empowering your team to scale.",
    imageSrc: "/project-corepoint-mockup.jpg",
  },
];

export const brandingQualifications: QualificationPoint[] = [
  {
    icon: Sparkles,
    title: "You are launching something new.",
    description: "Stepping into market with an ambitious product, service, or venture that demands instant recognition.",
  },
  {
    icon: TrendingUp,
    title: "Your identity no longer reflects your growth.",
    description: "Your business has matured and outgrown its original look, requiring an elevated, enterprise-grade presence.",
  },
  {
    icon: RefreshCw,
    title: "Your brand feels fragmented or inconsistent.",
    description: "Multiple teams and agencies have created disjointed assets, leaving customers confused by mixed signals.",
  },
];

export const selectedWorkProjects: SelectedProject[] = [
  {
    id: "1",
    slug: "aurelia-hotels",
    title: "Aurelia Hotels",
    category: "HOSPITALITY — IDENTITY & DIRECTION",
    imageSrc: "/project-soluna.jpg",
  },
  {
    id: "2",
    slug: "terra-loom",
    title: "Terra Loom",
    category: "SUSTAINABLE LIVING — IDENTITY & PACKAGING",
    imageSrc: "/project-terra.jpg",
  },
  {
    id: "3",
    slug: "liora-botanicals",
    title: "Liora Botanicals",
    category: "SOCIAL WELLNESS — IDENTITY & PACKAGING",
    imageSrc: "/project-bio-oil.jpg",
  },
];

export function getServiceDetailConfig(
  slug: string,
  capTitle: string,
  capDescription: string
): ServiceDetailConfig {
  const isBranding = slug === "branding-and-identity";

  return {
    serviceNumber: isBranding ? "02" : "01",
    categoryTrack: ["Strategy", "Identity", "Systems"],
    eyebrow: `SERVICE ${isBranding ? "02" : "01"} / ${capTitle.toUpperCase()}`,
    heroTitlePrefix: isBranding ? "Build a brand " : `${capTitle} `,
    heroTitleItalic: "remember.",
    heroDescription: isBranding
      ? "We blend strategy and storytelling to create brands with meaning, clarity, and emotional connection — so your audience remembers you for the right reasons."
      : capDescription,
    philosophyNumber: "02",
    philosophyTitlePrefix: "A brand is more than ",
    philosophyTitleItalic: "a mark.",
    philosophyCol1:
      "It's clarity that connects people to purpose. A recognizable signal that stands out in noise, speaks with conviction, and earns lasting customer trust.",
    philosophyCol2:
      "Great identities create consistency across every touchpoint so your story lives, moves, and grows with you as your business reaches new horizons.",
    deliverables: brandingDeliverables,
    featuredCaseStudy: {
      badge: "FEATURED TRANSFORMATION",
      client: "Nova Origin",
      tagline: "Strategy, Identity & Direction",
      description:
        "We partnered with Nova Origin to articulate their vision of advancing human potential through discovery. The result is a cohesive identity system that communicates ambition, precision, and timeless possibility.",
      deliverables: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Voice",
        "Creative Direction",
        "Guidelines",
        "Key Applications",
      ],
      palette: ["#161616", "#2D2825", "#B8532F", "#D68D6A", "#EDEAEA", "#F7F3F1"],
      headlineFont: "Cormorant Garamond",
      bodyFont: "Metropolis",
      slug: "nova-origin",
      imageSrc: "/project-corepoint-mockup.jpg",
    },
    process: brandingProcess,
    qualificationPoints: brandingQualifications,
    faqs: defaultFaqs,
  };
}
