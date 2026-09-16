import type { Project } from "@/types/project";
import type { FeaturedCaseStudy } from "@/components/services/types";

interface CaseStudyPreset {
  badge?: string;
  tagline?: string;
  description?: string;
  deliverables?: string[];
  palette: string[];
  headlineFont: string;
  bodyFont: string;
  imageSrc?: string;
}

const PROJECT_CASE_STUDY_MAP: Record<string, CaseStudyPreset> = {
  "bio-oil-skincare-campaign": {
    badge: "FEATURED CAMPAIGN",
    tagline: "Omnichannel Social Activation",
    description:
      "We developed an authentic social content strategy, creative direction, and promotional campaign that amplified brand trust and retail engagement.",
    deliverables: [
      "Content Strategy",
      "Creative Direction",
      "Retail Creatives",
      "Community Growth",
    ],
    palette: ["#E54C2A", "#F4A261", "#E9C46A", "#2A9D8F", "#264653"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/projects/social-media/bio-oil-social-media-content-highlights/01-01.webp",
  },
  "area-6-social-media": {
    badge: "FEATURED SOCIAL STRATEGY",
    tagline: "Community & High-Impact Fitness Visuals",
    description:
      "Constructed a dynamic social presence and motivational aesthetic combining athlete spotlights, promotional energy, and modern typography.",
    deliverables: [
      "Social Architecture",
      "Motion Posters",
      "Campaign Art Direction",
      "Community Strategy",
    ],
    palette: ["#0F172A", "#E11D48", "#FB7185", "#334155", "#F1F5F9"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc: "/portfolio/social-media/area-6/area-6-single-post-01.webp",
  },
  "coats-sri-lanka-campaign": {
    badge: "FEATURED BRAND STORYTELLING",
    tagline: "Industrial Craftsmanship & Global Impact",
    description:
      "Captured the rich heritage and technological precision of Coats through high-production industrial storytelling and human-centric narratives.",
    deliverables: [
      "Brand Narrative",
      "Documentary Art Direction",
      "Heritage Campaign",
      "Visual Collateral",
    ],
    palette: ["#0B2545", "#134074", "#8DA9C4", "#EE6C4D", "#EEF4F8"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc: "/portfolio/social-media/coats/01.webp",
  },
  "niwarthana-packaging-design": {
    badge: "FEATURED PACKAGING",
    tagline: "Sustainable Packaging & Identity Architecture",
    description:
      "Engineered tactile, artisanal packaging architecture for Niwarthana with intricate foil stamping, custom die cuts, and memorable unboxing layers.",
    deliverables: [
      "Packaging Dielines",
      "Unboxing Architecture",
      "Label Hierarchy",
      "Print Specifications",
    ],
    palette: ["#2C3531", "#116466", "#D9B08C", "#FFCB9A", "#D1E8E2"],
    headlineFont: "Cormorant Garamond",
    bodyFont: "Metropolis",
    imageSrc: "/projects/branding-identity/package-design/niwarthana-1.webp",
  },
  "rouka-brand-identity": {
    badge: "FEATURED BRAND ARCHITECTURE",
    tagline: "Contemporary Spatial Signage & Fashion Identity",
    description:
      "Engineered end-to-end visual storytelling, spatial signage concepts, and cohesive brand touchpoints for ROUKA.",
    deliverables: [
      "Spatial Concepts",
      "Brand Signage",
      "Identity Systems",
      "Digital Experience",
    ],
    palette: ["#1F2937", "#4B5563", "#D97706", "#F59E0B", "#FEF3C7"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc: "/projects/branding-identity/branding/rouka-1.webp",
  },
  "slsa-uk-identity": {
    badge: "SPORTS IDENTITY & REBRANDING",
    tagline: "United Diaspora & Athletic Modernism",
    description:
      "Crafted an iconic sports identity connecting Sri Lankan heritage with modern British athletic culture.",
    deliverables: [
      "Logomark Evolution",
      "Emblem Architecture",
      "Jersey Typography",
      "Event Brand Assets",
    ],
    palette: ["#0A192F", "#1E3A8A", "#D97706", "#F3F4F6", "#111827"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/portfolio/branding-identity/logo-design/slsa-logo/slsa-logo-mock-1.webp",
  },
  "coffee-1911-identity": {
    badge: "ARTISANAL BRAND IDENTITY",
    tagline: "Heritage Roasting & Contemporary Packaging",
    description:
      "Blended century-old artisanal heritage with clean minimalist packaging, gold accents, and bespoke iconography.",
    deliverables: [
      "Brand Positioning",
      "Packaging Architecture",
      "Label Systems",
      "Custom Typography",
    ],
    palette: ["#2B1B17", "#5D4037", "#8D6E63", "#D7CCC8", "#EFEBE9"],
    headlineFont: "Cormorant Garamond",
    bodyFont: "Metropolis",
    imageSrc:
      "/portfolio/branding-identity/logo-design/coffee-1911/coffee-1911-brand-showcase.webp",
  },
  "cool-step-identity": {
    badge: "STREET CULTURE & IDENTITY",
    tagline: "Dynamic Rhythm & Urban Footwear Identity",
    description:
      "Engineered a high-voltage streetwear logomark, motion branding, and packaging system celebrating urban movement.",
    deliverables: [
      "Urban Logomark",
      "Packaging Concept",
      "Subculture Graphics",
      "Motion Systems",
    ],
    palette: ["#121212", "#E11D48", "#06B6D4", "#F4F4F5", "#27272A"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/portfolio/branding-identity/logo-design/cool-step-final/cool-step-dance-studio-sneaker-showcase.webp",
  },
  "focal-logo-identity": {
    badge: "CREATIVE TECH IDENTITY",
    tagline: "Precision Optical Engineering & Digital Mark",
    description:
      "A high-precision geometric identity engineered for digital clarity, product hardware integration, and app ecosystems.",
    deliverables: [
      "Optical Logomark",
      "Hardware Badging",
      "Design Guidelines",
      "Vector Kit",
    ],
    palette: ["#09090B", "#2563EB", "#60A5FA", "#E2E8F0", "#18181B"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/portfolio/branding-identity/logo-design/focal/focal-camera-and-controller-showcase.webp",
  },
  "frans-niwasa-identity": {
    badge: "ARCHITECTURAL EXHIBITION IDENTITY",
    tagline: "Tropical Modernism & Spatial Typography",
    description:
      "Framed spatial architectural narratives through understated modernist typography, tactile stock paper, and architectural exhibition posters.",
    deliverables: [
      "Exhibition Identity",
      "Editorial Posters",
      "Wayfinding Signage",
      "Spatial Collateral",
    ],
    palette: ["#1C1917", "#78716C", "#D97706", "#E7E5E4", "#292524"],
    headlineFont: "Cormorant Garamond",
    bodyFont: "Metropolis",
    imageSrc:
      "/portfolio/branding-identity/logo-design/frans-niwasa/frans-niwasa-framed-poster-showcase.webp",
  },
  "kaiz-brand-identity": {
    badge: "LIFESTYLE & APPAREL IDENTITY",
    tagline: "Monarch Craftsmanship & Urban Crown Mark",
    description:
      "Engineered an authoritative crown monogram and streetwear visual identity for modern lifestyle apparel.",
    deliverables: [
      "Crown Monogram",
      "Apparel Tags",
      "Merch Packaging",
      "Social Assets",
    ],
    palette: ["#0A0A0A", "#EAB308", "#CA8A04", "#FAFAFA", "#262626"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/portfolio/branding-identity/logo-design/kaiz/kaiz-apparel-merch-showcase.webp",
  },
  "maya-brand-identity": {
    badge: "ORGANIC SPICE IDENTITY",
    tagline: "Ceylon Spice Heritage & Earth Palettes",
    description:
      "Celebrated ancient botanical lore through warm earth pigments, artisanal jar labelling, and organic spice packaging.",
    deliverables: [
      "Spice Jar Architecture",
      "Pouch Packaging",
      "Brand Storytelling",
      "Print Finishes",
    ],
    palette: ["#3D1E06", "#B45309", "#D97706", "#FDE68A", "#78350F"],
    headlineFont: "Cormorant Garamond",
    bodyFont: "Metropolis",
    imageSrc:
      "/portfolio/branding-identity/logo-design/maya/maya-spice-packaging-showcase.webp",
  },
  "area-6-brand-identity": {
    badge: "PERFORMANCE BRAND IDENTITY",
    tagline: "Kinetic Momentum & Athlete Packaging",
    description:
      "Engineered a spiral icon system, gym merchandise, and nutrition packaging designed for elite athletic performance.",
    deliverables: [
      "Spiral Logomark",
      "Tub & Pouch Labels",
      "Merch Badges",
      "Brand System",
    ],
    palette: ["#0F172A", "#E11D48", "#FB7185", "#334155", "#F8FAFC"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/portfolio/branding-identity/logo-design/area-6/area-6-fitness-products-showcase.webp",
  },
  "bito-brand-identity": {
    badge: "MODERN FOOTWEAR IDENTITY",
    tagline: "Minimalist Geometry & Sustainable Packaging",
    description:
      "Crafted a bold minimalist footwear brand mark, premium shoe box packaging, and tactile lifestyle collaterals.",
    deliverables: [
      "Geometric Logomark",
      "Shoebox Architecture",
      "Shoe Badging",
      "Retail Touchpoints",
    ],
    palette: ["#171717", "#E11D48", "#F43F5E", "#F5F5F5", "#404040"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/portfolio/branding-identity/logo-design/bito/bito-footwear-and-packaging-showcase.webp",
  },
  "coco-brand-identity": {
    badge: "NATURAL LIVING BRAND IDENTITY",
    tagline: "Pure Coastal Botanicals & Tropical Craft",
    description:
      "Engineered an organic botanical aesthetic for pure virgin coconut oils, eco jars, and sustainable lifestyle branding.",
    deliverables: [
      "Botanical Logomark",
      "Jar Packaging",
      "Eco Pouch Design",
      "Market Guidelines",
    ],
    palette: ["#064E3B", "#059669", "#34D399", "#ECFDF5", "#1E293B"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc:
      "/portfolio/branding-identity/logo-design/coco/coco-packaging-and-jar-showcase.webp",
  },
  "ibiza-mirissa-architectural-design": {
    badge: "FEATURED SPATIAL ARCHITECTURE",
    tagline: "Oceanfront Luxury Villa & 3D Spatial Masterplan",
    description:
      "KOD Universe conceptualized 3D architectural masterplanning, atmospheric sunset lighting, open-air pavilion structures, and photorealistic CGI environments for IBIZA Mirissa.",
    deliverables: [
      "3D Architectural Visualization",
      "Spatial Masterplanning",
      "Luxury Villa Architecture",
      "Atmospheric CGI Rendering",
    ],
    palette: ["#0E1F1A", "#1C382E", "#C89D66", "#DFC39A", "#F5EFE6"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc: "/portfolio/architectural-design/ibiza-mirissa/m5.webp",
  },
  "pissu-kanna-brand-merchandise": {
    badge: "STREETWEAR MERCHANDISE IDENTITY",
    tagline: "Subculture Expression & Graphic Artboards",
    description:
      "Created an irreverent underground street brand mark, oversized apparel graphics, and packaging accessories.",
    deliverables: [
      "Streetwear Logomark",
      "Graphic Artboards",
      "Garment Typography",
      "Packaging Tags",
    ],
    palette: ["#0A0A0A", "#FF2A2A", "#FFE500", "#FFFFFF", "#262626"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc: "/portfolio/pissu-kanna/mock.webp",
  },
  "digital-art-visual-explorations": {
    badge: "FEATURED DIGITAL ART",
    tagline: "Surreal Worlds & Cybernetic Concept Direction",
    description:
      "Pushed digital art boundaries with luminescent portraits, biomechanical forms, and vivid color theory studies.",
    deliverables: [
      "Concept Visuals",
      "Character Direction",
      "Lighting Studies",
      "Digital Art Kits",
    ],
    palette: ["#05050D", "#7C3AED", "#EC4899", "#38BDF8", "#F1F5F9"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc: "/portfolio/digital-art/digital-art-1.webp",
  },
  "union-assurance-commercial": {
    badge: "COMMERCIAL STORYTELLING",
    tagline: "Cinematic Film Direction & Brand Campaign",
    description:
      "Crafted an emotionally resonant visual commercial, storyboard keyframes, and campaign assets exploring human protection and enduring family legacy.",
    deliverables: [
      "Commercial Storyboarding",
      "Visual Keyframing",
      "Art Direction",
      "Campaign Assets",
    ],
    palette: ["#081B33", "#0070F3", "#00DFD8", "#F0F4F8", "#1A2E44"],
    headlineFont: "Metropolis",
    bodyFont: "Inter",
    imageSrc: "/portfolio/story-telling/union-assuranse-commercial.webp",
  },
};

export function getCaseStudyForProject(project: Project): FeaturedCaseStudy {
  const preset = PROJECT_CASE_STUDY_MAP[project.slug];

  return {
    badge:
      preset?.badge ||
      (project.category === "ARCHITECTURAL DESIGNING / SPATIAL DESIGNING"
        ? "FEATURED SPATIAL ARCHITECTURE"
        : `${project.category} TRANSFORMATION`),
    client: project.client || project.title,
    tagline:
      preset?.tagline ||
      project.shortDescription ||
      "Strategy, Identity & Direction",
    description:
      preset?.description ||
      project.overview ||
      project.shortDescription,
    deliverables:
      preset?.deliverables ||
      project.deliverables.slice(0, 4),
    palette: preset?.palette || [
      "#161616",
      "#2D2825",
      "#E54C2A",
      "#F4A261",
      "#EDEAEA",
    ],
    headlineFont: preset?.headlineFont || "Metropolis",
    bodyFont: preset?.bodyFont || "Inter",
    slug: project.slug,
    imageSrc:
      preset?.imageSrc ||
      project.cardImage?.src ||
      project.heroImage.src,
  };
}
