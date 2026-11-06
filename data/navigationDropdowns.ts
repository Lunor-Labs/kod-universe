export interface DropdownLink {
  label: string;
  href: string;
  badge?: string;
}

export interface DropdownSectionData {
  primaryHeading: string;
  primaryLinks: DropdownLink[];
  secondaryHeading: string;
  secondaryLinks: DropdownLink[];
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
      { label: "Start a Project", href: "/contact-us" },
    ],
  },
  "ABOUT US": {
    primaryHeading: "About Us",
    primaryLinks: [
      { label: "Our Story & Vision", href: "/about-us" },
      { label: "Our Philosophy", href: "/about-us#philosophy" },
      { label: "Why KoD", href: "/about-us#why-kod" },
      { label: "Our Process", href: "/about-us#process" },
      { label: "Founder & Team", href: "/about-us/founder" },
      { label: "Client Stories", href: "/about-us#clients" },
    ],
    secondaryHeading: "Explore KoD",
    secondaryLinks: [
      { label: "KoD Creative - Agency Arm", href: "/services" },
      { label: "KoD Gallery - Art & Commerce", href: "/gallery" },
      { label: "Careers & Internships", href: "/contact-us#careers" },
      { label: "Press & Media Inquiries", href: "/contact-us#press" },
    ],
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
  },
};
