import type { Capability, ServiceGroup, ProcessStep } from "@/types/capability";

/* ── 3 Main Services ── */

export const serviceGroups: ServiceGroup[] = [
  {
    id: "marketing",
    number: "01",
    title: "Marketing",
    tagline: "Content Marketing",
    description:
      "Strategic content and community growth that transforms audience attention into lasting brand loyalty.",
    iconName: "SOCIAL MEDIA",
    tags: ["Content Marketing"],
    contentSections: [
      {
        title: "Content Marketing",
        badge: "Content Marketing",
        iconName: "SOCIAL MEDIA",
        description:
          "Strategic content that sparks conversations, builds engaged communities, and drives scalable brand growth.",
        deliverables: [
          "Content marketing strategy & editorial calendar",
          "Photography and video art direction",
          "Platform template systems",
          "Caption writing and brand voice guide",
          "Community engagement framework",
          "Campaign concepts and execution",
          "Analytics and performance reporting",
        ],
      },
    ],
    services: [
      {
        id: "marketing",
        slug: "marketing",
        title: "Marketing",
        iconName: "SOCIAL MEDIA",
        description:
          "Strategic content that sparks conversations, builds engaged communities, and drives scalable brand growth.",
        longDescription:
          "We craft high-impact content marketing strategies that align your brand's story with modern audience rhythms. We build the visual language, editorial calendar, and community framework that turn followers into brand advocates.",
        deliverables: [
          "Content marketing strategy & editorial calendar",
          "Photography and video art direction",
          "Platform template systems",
          "Caption writing and brand voice guide",
          "Community engagement framework",
          "Campaign concepts and execution",
          "Analytics and performance reporting",
        ],
        relatedProjectSlugs: ["bio-oil-skincare-campaign", "area-6-social-media"],
      },
    ],
  },
  {
    id: "designing",
    number: "02",
    title: "Designing",
    tagline: "Brand Identity (Package Design, Logo Design)",
    description:
      "End-to-end brand identity systems spanning physical product packaging and enduring logo design marks.",
    iconName: "Packaging",
    tags: ["Brand Identity", "Package Design", "Logo Design"],
    contentSections: [
      {
        title: "Package Design",
        badge: "Brand Identity",
        iconName: "Packaging",
        description:
          "Packaging that protects, persuades, and elevates your product on every shelf.",
        deliverables: [
          "Structural and graphic packaging design",
          "Label and tag design",
          "Retail display systems",
          "Unboxing experience design",
          "Regulatory text layout",
          "Print production specification and management",
        ],
      },
      {
        title: "Logo Design",
        badge: "Brand Identity",
        iconName: "Logo Design",
        description:
          "Purpose-driven logo and brand mark systems that inspire trust and leave a lasting mark.",
        deliverables: [
          "Brand strategy and positioning",
          "Naming and tagline development",
          "Logo and brand mark system",
          "Typography and colour palette",
          "Brand guidelines document",
          "Stationery and collateral design",
        ],
      },
    ],
    services: [
      {
        id: "designing",
        slug: "designing",
        title: "Designing",
        iconName: "Packaging",
        description:
          "End-to-end brand identity systems spanning physical product packaging and enduring logo design marks.",
        longDescription:
          "Great brands are not designed — they are uncovered. We combine strategic positioning, tactile packaging design, and memorable logo mark systems that build enduring brand authority and shelf presence.",
        deliverables: [
          "Brand strategy and positioning",
          "Structural and graphic packaging design",
          "Logo and brand mark system",
          "Typography and colour palette",
          "Unboxing experience design",
          "Brand guidelines document",
        ],
        relatedProjectSlugs: [
          "niwarthana-packaging-design",
          "area-6-brand-identity",
          "rouka-brand-identity",
          "slsa-uk-identity",
          "coffee-1911-identity",
        ],
      },
    ],
  },
  {
    id: "and-beyond",
    number: "03",
    title: "Beyond",
    tagline: "Digital Architecture, Merchandising, Visual Storytelling, Web Design",
    description:
      "Multidisciplinary creative expressions extending brand universes across spatial, physical, editorial, and digital environments.",
    iconName: "WEB DESIGN",
    tags: [
      "Digital Architecture",
      "Merchandising",
      "Visual Storytelling",
      "Web Design",
    ],
    contentSections: [
      {
        title: "Digital Architecture Designs",
        iconName: "ARCHITECTURE DESIGNS",
        description:
          "Spatial design concepts that bring brand experiences into physical and digital environments.",
        deliverables: [
          "Spatial concept and mood boarding",
          "Interior layout and flow planning",
          "Material and finish specification",
          "3D visualisation and rendering",
        ],
      },
      {
        title: "Merchandising",
        iconName: "MERCHANDISING",
        description:
          "Merchandise design that extends your brand into tangible, wearable, and collectible products.",
        deliverables: [
          "Merchandise concept and product selection",
          "Graphic and pattern design for products",
          "Apparel design and tech packs",
          "Packaging and presentation design",
        ],
      },
      {
        title: "Visual Storytelling",
        iconName: "VISUAL STORYTELLING",
        description:
          "Narrative-driven visuals that communicate complex ideas through compelling imagery.",
        deliverables: [
          "Visual narrative strategy",
          "Photography direction and curation",
          "Illustration and infographic design",
          "Multi-channel visual systems",
        ],
      },
      {
        title: "Web Design",
        iconName: "WEB DESIGN",
        description:
          "Websites and digital experiences crafted for clarity, connection, and conversion.",
        deliverables: [
          "Website design and UX strategy",
          "Design systems and component libraries",
          "Next.js and React development",
          "SEO and performance optimisation",
        ],
      },
    ],
    services: [
      {
        id: "and-beyond",
        slug: "and-beyond",
        title: "Beyond",
        iconName: "WEB DESIGN",
        description:
          "Multidisciplinary creative expressions extending brand universes across spatial, physical, editorial, and digital environments.",
        longDescription:
          "We push past conventional boundaries to extend your brand universe into spatial architecture, wearable merchandise, narrative visuals, and high-performance modern web platforms.",
        deliverables: [
          "Digital architecture and 3D spatial design",
          "Custom branded merchandise and apparel",
          "Visual narrative frameworks and editorial design",
          "Modern high-speed responsive web development",
        ],
        relatedProjectSlugs: ["origins-concept-series", "cosmic-explorations"],
      },
    ],
  },
];

/* ── Primary 3 services + backward compatibility aliases ── */

const legacyAliases: Capability[] = [
  {
    id: "legacy-content-marketing",
    slug: "content-marketing",
    title: "Marketing",
    iconName: "SOCIAL MEDIA",
    description: "Strategic content that sparks conversations and drives social media growth.",
    longDescription: "We craft platform-native content strategies across Instagram, TikTok, LinkedIn, and beyond.",
    deliverables: ["Social media strategy", "Content creation", "Community management"],
    relatedProjectSlugs: ["bio-oil-skincare-campaign"],
  },
  {
    id: "legacy-package-design",
    slug: "package-design",
    title: "Designing",
    iconName: "Packaging",
    description: "Packaging that protects, persuades, and elevates your product on every shelf.",
    longDescription: "Structural and graphic packaging design that communicates quality at three distances.",
    deliverables: ["Structural packaging", "Label design", "Unboxing experience"],
    relatedProjectSlugs: ["threadline-textiles-packaging"],
  },
  {
    id: "legacy-brand-identity",
    slug: "brand-identity",
    title: "Designing",
    iconName: "Packaging",
    description: "End-to-end brand identity systems spanning packaging and logo marks.",
    longDescription: "Comprehensive brand identity design that creates consistency across every touchpoint.",
    deliverables: ["Brand strategy", "Logo design", "Packaging design"],
    relatedProjectSlugs: ["threadline-textiles-packaging"],
  },
  {
    id: "legacy-logo-design",
    slug: "logo-design",
    title: "Designing",
    iconName: "Logo Design",
    description: "Purpose-driven logo and brand mark systems.",
    longDescription: "Visual systems that are as functional as they are beautiful.",
    deliverables: ["Logo system", "Typography", "Brand guidelines"],
    relatedProjectSlugs: ["corepoint-fitness-identity"],
  },
  {
    id: "legacy-digital-architecture",
    slug: "digital-architecture-designs",
    title: "Beyond",
    iconName: "ARCHITECTURE DESIGNS",
    description: "Spatial design concepts and 3D visualization.",
    longDescription: "Bringing brand experiences into physical and digital environments.",
    deliverables: ["Spatial concepts", "3D rendering", "Wayfinding"],
    relatedProjectSlugs: [],
  },
  {
    id: "legacy-merchandising",
    slug: "merchandising",
    title: "Beyond",
    iconName: "MERCHANDISING",
    description: "Merchandise design extending brands into wearable products.",
    longDescription: "Branded products that people actually want to own.",
    deliverables: ["Apparel design", "Tech packs", "Product graphics"],
    relatedProjectSlugs: [],
  },
  {
    id: "legacy-visual-storytelling",
    slug: "visual-storytelling",
    title: "Beyond",
    iconName: "VISUAL STORYTELLING",
    description: "Narrative-driven visuals communicating complex ideas.",
    longDescription: "Photography, illustration, and sequential imagery.",
    deliverables: ["Visual narrative", "Editorial layout", "Infographics"],
    relatedProjectSlugs: [],
  },
  {
    id: "legacy-web-design",
    slug: "web-design",
    title: "Beyond",
    iconName: "WEB DESIGN",
    description: "Websites and digital experiences crafted for clarity and conversion.",
    longDescription: "Next.js and React web development engineered for performance.",
    deliverables: ["Web design", "Next.js development", "Design systems"],
    relatedProjectSlugs: [],
  },
];

export const capabilities: Capability[] = [
  ...serviceGroups.flatMap((g) => g.services),
  ...legacyAliases,
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep to understand your goals, audience, and opportunities.",
    iconName: "Search",
    iconPath: "/icons/Discover-Icon.png",
  },
  {
    number: "02",
    title: "Define",
    description: "We shape the strategy and creative direction with clarity and intent.",
    iconName: "Compass",
    iconPath: "/icons/Define.png",
  },
  {
    number: "03",
    title: "Create",
    description: "We design, craft, and refine ideas that connect and convert.",
    iconName: "Pen",
    iconPath: "/icons/Create.png",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We launch with precision and support your growth every step ahead.",
    iconName: "Rocket",
    iconPath: "/icons/Deliver.png",
  },
];
