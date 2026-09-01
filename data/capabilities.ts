import type { Capability, ProcessStep } from "@/types/capability";

export const capabilities: Capability[] = [
  {
    id: "1",
    slug: "social-media",
    title: "Social Media",
    iconName: "Share2",
    description: "Scroll-stopping content that sparks conversations and builds communities.",
    longDescription:
      "We craft platform-native content strategies that align your brand's story with the rhythms of each channel. From Instagram to TikTok to LinkedIn, we build the visual language, editorial calendar, and community framework that turns followers into advocates.",
    deliverables: [
      "Content strategy and editorial calendar",
      "Photography and video art direction",
      "Platform-specific template systems",
      "Caption writing and brand voice guide",
      "Community management framework",
      "Campaign concepts and execution",
      "Analytics and performance reporting",
    ],
    relatedProjectSlugs: ["bio-oil-skincare-campaign", "glow-naturally-campaign"],
  },
  {
    id: "2",
    slug: "branding-and-identity",
    title: "Branding & Identity",
    iconName: "Fingerprint",
    description: "Purpose-driven brands with identity systems that inspire trust and leave a lasting mark.",
    longDescription:
      "Great brands are not designed — they are uncovered. We start with strategy and research, move through positioning and naming, and arrive at visual systems that are as functional as they are beautiful. Everything from logo to typeface to tone of voice is considered, tested, and refined.",
    deliverables: [
      "Brand strategy and positioning",
      "Naming and tagline development",
      "Logo and brand mark system",
      "Typography and colour palette",
      "Brand guidelines document",
      "Stationery and collateral design",
      "Digital asset library",
    ],
    relatedProjectSlugs: ["corepoint-fitness-identity", "terra-origins-brand-kit", "soluna-wellness-identity"],
  },
  {
    id: "3",
    slug: "package-design",
    title: "Package Design",
    iconName: "Package",
    description: "Packaging that protects, persuades, and elevates your product on every shelf.",
    longDescription:
      "Packaging is your product's first handshake. We design primary and secondary packaging that communicates quality at three distances — shelf, arm's length, in hand — while navigating regulatory requirements, production constraints, and sustainability goals.",
    deliverables: [
      "Structural and graphic packaging design",
      "Label and tag design",
      "Retail display systems",
      "Unboxing experience design",
      "Regulatory text layout",
      "Print production specification and management",
    ],
    relatedProjectSlugs: ["threadline-textiles-packaging", "bio-oil-retail-packaging"],
  },
  {
    id: "4",
    slug: "creative-work",
    title: "Creative Work",
    iconName: "Palette",
    description: "Campaigns, content, and visuals that tell powerful stories across any medium.",
    longDescription:
      "Some work defies categories. Our creative team produces editorial series, campaigns, art direction, exhibition design, and other culture-adjacent projects that build brand reputation through genuine creative contribution rather than advertising alone.",
    deliverables: [
      "Campaign concept and strategy",
      "Art direction and photography",
      "Editorial design and publishing",
      "Exhibition and installation design",
      "Creative writing and copy",
      "Print and digital publication design",
    ],
    relatedProjectSlugs: ["origins-concept-series", "cosmic-explorations", "editorial-campaign"],
  },
  {
    id: "5",
    slug: "digital-experiences",
    title: "Digital Experiences",
    iconName: "Globe",
    description: "Websites and digital experiences crafted for clarity, connection, and conversion.",
    longDescription:
      "We design and develop digital experiences that are as considered as they are performant. From portfolio sites to brand platforms to campaign microsites, we build with purpose — every interaction, transition, and page serves a clear human and business goal.",
    deliverables: [
      "Website design and UX strategy",
      "Design systems and component libraries",
      "Next.js and React development",
      "CMS integration and training",
      "SEO and performance optimisation",
      "Analytics setup and reporting",
    ],
    relatedProjectSlugs: [],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep to understand your goals, audience, and opportunities.",
    iconName: "Search",
  },
  {
    number: "02",
    title: "Define",
    description: "We shape the strategy and creative direction with clarity and intent.",
    iconName: "Compass",
  },
  {
    number: "03",
    title: "Create",
    description: "We design, craft, and refine ideas that connect and convert.",
    iconName: "Pen",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We launch with precision and support your growth every step ahead.",
    iconName: "Rocket",
  },
];
