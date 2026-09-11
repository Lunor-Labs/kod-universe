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
      { label: "Social Media Management", href: "/portfolio?category=SOCIAL+MEDIA" },
      { label: "Brand Identity & Systems", href: "/portfolio?category=BRANDING" },
      { label: "Packaging & Structural Craft", href: "/portfolio?category=PACKAGE+DESIGN" },
      { label: "3D & Motion Graphics", href: "/portfolio?category=3D+%26+MOTION" },
      { label: "Architectural & Spatial Design", href: "/portfolio?category=SPATIAL+DESIGN" },
    ],
    secondaryHeading: "",
    secondaryLinks: [],
    spotlight: {
      tag: "",
      title: "",
      description: "",
      href: "/portfolio",
    },
  },
  SERVICES: {
    primaryHeading: "Explore Capabilities",
    primaryLinks: [
      { label: "All Creative Services", href: "/services" },
      { label: "Content Marketing & Social", href: "/services#marketing" },
      { label: "Branding & Visual Systems", href: "/services#designing" },
      { label: "Package Design & Craft", href: "/services#beyond" },
      { label: "3D & Motion Graphics", href: "/services#motion-3d" },
      { label: "Architectural & Spatial Design", href: "/services#spatial-design" },
    ],
    secondaryHeading: "Our Disciplines",
    secondaryLinks: [
      { label: "Creative Direction & Art", href: "/services" },
      { label: "Digital Growth & Media", href: "/services#marketing" },
      { label: "Tactile Structural Box Dies", href: "/services#beyond" },
      { label: "Brand Guidelines & Vector Kits", href: "/services#designing" },
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
      { label: "Studio Philosophy & Origins", href: "/about-us#philosophy" },
      { label: "Core Creative Pillars", href: "/about-us#pillars" },
      { label: "Client Wall & Collaborators", href: "/about-us#wall" },
    ],
    secondaryHeading: "Studio Insights",
    secondaryLinks: [
      { label: "Why KOD Universe", href: "/about-us" },
      { label: "Creative Process & Rhythm", href: "/services" },
      { label: "Careers & Internships", href: "/contact-us#careers" },
      { label: "Press & Media Inquiries", href: "/contact-us#press" },
    ],
    spotlight: {
      tag: "Studio Manifesto",
      title: "Crafting Brands That Endure",
      description: "We partner with visionary founders to build identities with soul, weight, and longevity.",
      href: "/about-us",
    },
  },
};
