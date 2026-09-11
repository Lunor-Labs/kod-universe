export interface DropdownLink {
  label: string;
  href: string;
  badge?: string;
}

export interface DropdownSpotlight {
  title: string;
  description: string;
  href: string;
  tag: string;
  image?: string;
}

export interface DropdownSectionData {
  primaryHeading: string;
  primaryLinks: DropdownLink[];
  secondaryHeading: string;
  secondaryLinks: DropdownLink[];
  spotlight: DropdownSpotlight;
}

export const navigationDropdowns: Record<string, DropdownSectionData> = {
  PORTFOLIO: {
    primaryHeading: "Explore Portfolio",
    primaryLinks: [
      { label: "All Selected Work", href: "/portfolio" },
      { label: "Social Media Management", href: "/work?category=SOCIAL+MEDIA" },
      { label: "Brand Identity & Systems", href: "/work?category=BRANDING" },
      { label: "Packaging & Structural Craft", href: "/work?category=PACKAGE+DESIGN" },
    ],
    secondaryHeading: "Featured Case Studies",
    secondaryLinks: [
      { label: "Bio-Oil Social Media", href: "/portfolio/bio-oil-skincare-campaign" },
      { label: "Area 6 Brand Campaign", href: "/portfolio/area-6-social-media" },
      { label: "Coats Sri Lanka Post", href: "/portfolio/coats-sri-lanka-campaign" },
      { label: "Niwarthana Packaging", href: "/portfolio/niwarthana-packaging-design" },
      { label: "Frans Niwasa Identity", href: "/portfolio/frans-niwasa-identity" },
    ],
    spotlight: {
      tag: "Case Study Spotlight",
      title: "Bio-Oil Social Media Management",
      description: "A transformative digital presence built on authentic skincare narratives.",
      href: "/portfolio/bio-oil-skincare-campaign",
      image: "/projects/social-media/bio-oil-social-media-content-highlights/bio-oil-podium-showcase.webp",
    },
  },
  SERVICES: {
    primaryHeading: "Explore Capabilities",
    primaryLinks: [
      { label: "All Creative Services", href: "/services" },
      { label: "Content Marketing & Social", href: "/capabilities#marketing" },
      { label: "Branding & Visual Systems", href: "/capabilities#designing" },
      { label: "Package Design & Craft", href: "/capabilities#beyond" },
    ],
    secondaryHeading: "Our Disciplines",
    secondaryLinks: [
      { label: "Creative Direction & Art", href: "/services" },
      { label: "Digital Growth & Media", href: "/capabilities#marketing" },
      { label: "Tactile Structural Box Dies", href: "/capabilities#beyond" },
      { label: "Brand Guidelines & Vector Kits", href: "/capabilities#designing" },
      { label: "Bespoke Studio Inquiry", href: "/contact-us" },
    ],
    spotlight: {
      tag: "Studio Philosophy",
      title: "Ancient Ideas. Modern Impact.",
      description: "Rooted in timeless creative principles, engineered for modern brand dominance.",
      href: "/services",
      image: "/projects/branding-identity/logo-design/area-6/area-6-fitness-equipment-showcase.webp",
    },
  },
  "OUR STORY": {
    primaryHeading: "The Studio",
    primaryLinks: [
      { label: "Our Story & Vision", href: "/about-us" },
      { label: "Studio Philosophy & Origins", href: "/our-universe#philosophy" },
      { label: "Core Creative Pillars", href: "/our-universe#pillars" },
      { label: "Client Wall & Collaborators", href: "/our-universe#wall" },
    ],
    secondaryHeading: "Studio Insights",
    secondaryLinks: [
      { label: "Why KOD Universe", href: "/about-us" },
      { label: "Creative Process & Rhythm", href: "/services" },
      { label: "Careers & Internships", href: "/connect#careers" },
      { label: "Press & Media Inquiries", href: "/connect#press" },
    ],
    spotlight: {
      tag: "Studio Manifesto",
      title: "Crafting Brands That Endure",
      description: "We partner with visionary founders to build identities with soul, weight, and longevity.",
      href: "/about-us",
    },
  },
};
