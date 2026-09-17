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
  WORK: {
    primaryHeading: "Explore Work",
    primaryLinks: [
      { label: "All Selected Work", href: "/work" },
      { label: "Design Projects", href: "/work?category=BRANDING" },
      { label: "Marketing & Social", href: "/work?category=SOCIAL+MEDIA" },
      { label: "Packaging & Craft", href: "/work?category=PACKAGE+DESIGN" },
      { label: "3D & Motion", href: "/work?category=3D+%26+MOTION" },
      {
        label: "Spatial & Architectural",
        href: "/work?category=SPATIAL+DESIGN",
      },
    ],
    secondaryHeading: "",
    secondaryLinks: [],
    spotlight: {
      tag: "",
      title: "",
      description: "",
      href: "/work",
    },
  },
  SERVICES: {
    primaryHeading: "KoD Creative",
    primaryLinks: [
      { label: "All Services", href: "/services" },
      { label: "Design", href: "/services/design" },
      { label: "Marketing", href: "/services/marketing" },
      { label: "Visual Storytelling", href: "/services/visual-storytelling" },
    ],
    secondaryHeading: "What We Do",
    secondaryLinks: [
      { label: "Branding & Identity", href: "/services/design" },
      { label: "Brand Strategy & Campaigns", href: "/services/marketing" },
      { label: "Film, Photo & Motion", href: "/services/visual-storytelling" },
      { label: "Digital Design & Development", href: "/services/design" },
      { label: "Start a Project", href: "/contact" },
    ],
    spotlight: {
      tag: "Studio Philosophy",
      title: "360° Creative Agency.",
      description:
        "Design, marketing and visual storytelling - one coherent creative universe.",
      href: "/services",
      image:
        "/portfolio/branding-identity/logo-design/area-6/area-6-fitness-equipment-showcase.webp",
    },
  },
  STUDIO: {
    primaryHeading: "The Studio",
    primaryLinks: [
      { label: "Our Story & Vision", href: "/studio" },
      { label: "Studio Philosophy", href: "/studio#philosophy" },
      { label: "Why KoD", href: "/studio#why-kod" },
      { label: "Our Process", href: "/studio#process" },
      { label: "Founder & Team", href: "/studio/founder" },
      { label: "Client Stories", href: "/studio#clients" },
    ],
    secondaryHeading: "Studio Insights",
    secondaryLinks: [
      { label: "KoD Creative - Agency Arm", href: "/services" },
      { label: "KoD Gallery - Art & Commerce", href: "/gallery" },
      { label: "Careers & Internships", href: "/contact#careers" },
      { label: "Press & Media Inquiries", href: "/contact#press" },
    ],
    spotlight: {
      tag: "Studio Manifesto",
      title: "Crafting Brands That Endure",
      description:
        "We partner with visionary founders to build identities with soul, weight, and longevity.",
      href: "/studio",
    },
  },
  GALLERY: {
    primaryHeading: "KoD Gallery",
    primaryLinks: [
      { label: "All Gallery", href: "/gallery" },
      { label: "Original Art & Prints", href: "/gallery/art" },
      { label: "Merch & Objects", href: "/gallery/merch" },
      { label: "Limited Drops", href: "/gallery/drops" },
      { label: "Artist Collaborations", href: "/gallery/drops#collabs" },
    ],
    secondaryHeading: "Gallery World",
    secondaryLinks: [
      { label: "KoD Originals", href: "/gallery/art" },
      { label: "Seasonal Collections", href: "/gallery/drops" },
      { label: "Apparel & Accessories", href: "/gallery/merch" },
      { label: "Creative Objects", href: "/gallery/merch" },
    ],
    spotlight: {
      tag: "Art + Commerce",
      title: "A Creative-Commercial World.",
      description:
        "Original art, objects, merch and limited drops inside KoD Universe.",
      href: "/gallery",
    },
  },
  NEWS: {
    primaryHeading: "Latest from KoD",
    primaryLinks: [
      { label: "All Articles", href: "/news" },
      { label: "KoD POV", href: "/news?category=KoD+POV" },
      { label: "Creative Culture", href: "/news?category=Creative+Culture" },
    ],
    secondaryHeading: "",
    secondaryLinks: [],
    spotlight: {
      tag: "Culture + Updates",
      title: "Inside the Universe.",
      description:
        "Thoughts, process stories, and creative culture from the KoD studio.",
      href: "/news",
    },
  },
};
