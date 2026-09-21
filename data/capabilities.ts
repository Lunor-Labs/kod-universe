import type { Capability, ServiceGroup, ProcessStep } from "@/types/capability";

export const serviceGroups: ServiceGroup[] = [
  {
    id: "design",
    number: "01",
    title: "Design",
    tagline: "Identities, spaces, digital",
    description:
      "End-to-end design systems that build enduring brand authority - spanning brand identity, physical packaging, and spatial architecture.",
    iconName: "packaging",
    tags: ["Identity", "Digital", "Spatial", "Objects"],
    contentSections: [
      {
        title: "Branding & Identity",
        badge: "Identity",
        iconName: "logo-design",
        description:
          "Creating enduring visual identities, brand marks, and typographic systems that define your market presence.",
        deliverables: [
          "Logo Design",
          "Brand Identity Systems",
          "Brand Guidelines",
          "Corporate Identity / Rebranding",
        ],
      },
      {
        title: "Graphic & Editorial",
        badge: "Editorial",
        iconName: "BookOpen",
        description:
          "Crafting meticulous graphic layouts and editorial design for both physical publications and digital formats.",
        deliverables: [
          "Company Profiles",
          "Magazines / Editorial",
          "Brochures & Promotional Materials",
          "Illustration & Infographics",
        ],
      },
      {
        title: "Packaging & Merchandise",
        badge: "Physical",
        iconName: "packaging",
        description:
          "Designing tactile, shelf-commanding packaging and wearable merchandise that extends your brand universe.",
        deliverables: [
          "Packaging Design",
          "Product Packaging",
          "Merchandise Design",
          "Promotional Items",
        ],
      },
      {
        title: "Digital Design & Development",
        badge: "Digital",
        iconName: "web-design",
        description:
          "Engineering high-performance web platforms and digital experiences focused on clarity and conversion.",
        deliverables: [
          "Website Design",
          "UI/UX",
          "Website Development",
          "Landing Pages / Digital Experiences",
        ],
      },
      {
        title: "Spatial & Architectural",
        badge: "Spatial",
        iconName: "architecture-designs",
        description:
          "Translating your brand into immersive physical environments and photorealistic 3D spatial concepts.",
        deliverables: [
          "Architecture Design",
          "Interior / Spatial Concepts",
          "Environmental Branding",
          "Exhibition / Event Spaces",
        ],
      },
    ],
    services: [
      {
        id: "design",
        slug: "design",
        title: "Design",
        iconName: "packaging",
        description:
          "End-to-end design systems spanning brand identity, packaging, and spatial architecture.",
        longDescription:
          "Great brands are not simply designed - they are uncovered. We combine strategic positioning, tactile packaging design, and immersive spatial architecture to build enduring brand authority and presence across all physical and digital touchpoints.",
        deliverables: [
          "Logo Design",
          "Packaging Design",
          "Website Design",
          "Architecture Design",
        ],
        relatedProjectSlugs: [
          "niwarthana-packaging-design",
          "area-6-brand-identity",
          "rouka-brand-identity",
          "ibiza-mirissa-architectural-design",
        ],
      },
    ],
  },
  {
    id: "marketing",
    number: "02",
    title: "Marketing",
    tagline: "Strategy, social, content",
    description:
      "Strategic content and community growth that transforms audience attention into lasting brand loyalty.",
    iconName: "social-media",
    tags: ["Strategy", "Social", "Campaigns", "Content"],
    contentSections: [
      {
        title: "Brand & Communication Strategy",
        badge: "Strategy",
        iconName: "Compass",
        description:
          "Defining your brand's core positioning and the strategic roadmap to connect with your target audience.",
        deliverables: [
          "Brand Strategy",
          "Brand Positioning",
          "Communication Strategy",
          "Creative / Campaign Strategy",
        ],
      },
      {
        title: "Social Media Marketing",
        badge: "Social",
        iconName: "social-media",
        description:
          "Building and managing engaging social ecosystems that foster community and drive brand awareness.",
        deliverables: [
          "Social Strategy",
          "Social Media Management",
          "Content Planning",
          "Paid Social / Campaign Management",
        ],
      },
      {
        title: "Content Marketing",
        badge: "Content",
        iconName: "Pen",
        description:
          "Crafting compelling narratives and branded content designed to spark conversations and build loyalty.",
        deliverables: [
          "Content Strategy",
          "Branded Content",
          "Promotional Content",
          "Campaign Content",
        ],
      },
      {
        title: "Integrated Campaigns",
        badge: "Campaigns",
        iconName: "Target",
        description:
          "Developing holistic, 360-degree campaigns that activate your brand across multiple touchpoints.",
        deliverables: [
          "360° Campaign Development",
          "Product Launches",
          "Promotional Campaigns",
          "Brand Activation Concepts",
        ],
      },
      {
        title: "Digital Marketing & Consultation",
        badge: "Growth",
        iconName: "TrendingUp",
        description:
          "Data-driven digital marketing and strategic consultation to optimize performance and maximize ROI.",
        deliverables: [
          "Digital Campaigns",
          "Audience Planning",
          "Performance Monitoring",
          "Marketing / Creative Consultation",
        ],
      },
    ],
    services: [
      {
        id: "marketing",
        slug: "marketing",
        title: "Marketing",
        iconName: "social-media",
        description:
          "Strategic content that sparks conversations and drives scalable brand growth.",
        longDescription:
          "We craft high-impact content marketing strategies that align your brand's story with modern audience rhythms. We build the visual language, editorial calendar, and community framework that turn followers into advocates.",
        deliverables: [
          "Brand Strategy",
          "Social Media Management",
          "Content Strategy",
          "360° Campaign Development",
        ],
        relatedProjectSlugs: [
          "bio-oil-skincare-campaign",
          "area-6-social-media",
        ],
      },
    ],
  },
  {
    id: "visual-storytelling",
    number: "03",
    title: "Visual Storytelling",
    tagline: "Film, photo, 3D motion, web",
    description:
      "Cinematic 3D animation, brand films, and immersive web experiences that bring your brand's story to life.",
    iconName: "visual-storytelling",
    tags: ["Narrative", "Photography", "Film", "Social", "Motion"],
    contentSections: [
      {
        title: "Visual Narrative & Creative Direction",
        badge: "Direction",
        iconName: "Compass",
        description:
          "Guiding the visual story of your brand, ensuring every aesthetic choice aligns with your core narrative.",
        deliverables: [
          "Visual Narrative Strategy",
          "Story Development",
          "Art Direction",
          "Creative Direction",
        ],
      },
      {
        title: "Photography",
        badge: "Production",
        iconName: "visual-storytelling",
        description:
          "High-end photography capturing the essence of your brand, products, and lifestyle.",
        deliverables: [
          "Photography Direction & Curation",
          "Brand Photography",
          "Product / Lifestyle Photography",
          "Campaign Photography",
        ],
      },
      {
        title: "Film & Video",
        badge: "Motion",
        iconName: "Volume2",
        description:
          "Cinematic film and video production that commands attention and evokes emotion.",
        deliverables: [
          "Video Production",
          "Filming",
          "Brand Films",
          "Promotional Videos / TV Commercials",
        ],
      },
      {
        title: "Social & Short-form Content",
        badge: "Social",
        iconName: "social-media",
        description:
          "Dynamic, platform-native short-form content engineered for modern algorithms and audience retention.",
        deliverables: [
          "Reels",
          "Short-form Video",
          "Social Media Content",
          "Branded Content",
        ],
      },
      {
        title: "Motion & Illustrated Storytelling",
        badge: "Animation",
        iconName: "Sparkles",
        description:
          "Bringing ideas to life through dynamic motion graphics, 2D/3D animation, and bespoke illustrations.",
        deliverables: [
          "Motion Graphics",
          "2D / 3D Animation",
          "Illustration",
          "Infographic / Editorial Storytelling",
        ],
      },
    ],
    services: [
      {
        id: "visual-storytelling",
        slug: "visual-storytelling",
        title: "Visual Storytelling",
        iconName: "visual-storytelling",
        description:
          "Cinematic 3D animation, brand films, and immersive web experiences.",
        longDescription:
          "From photorealistic 3D product visualisations to high-performance modern web platforms, we create moving images and interactive experiences that command attention, build desire, and communicate what static visuals cannot.",
        deliverables: [
          "Visual Narrative Strategy",
          "Photography Direction & Curation",
          "Video Production",
          "Motion Graphics",
        ],
        relatedProjectSlugs: [
          "union-assurance-commercial",
          "digital-art-visual-explorations",
        ],
      },
    ],
  },
];

export const capabilities: Capability[] = [
  ...serviceGroups.flatMap((g) => g.services),
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive deep to understand your goals, audience, and opportunities.",
    iconName: "Search",
    iconPath: "/icons/discover-icon.webp",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We shape the strategy and creative direction with clarity and intent.",
    iconName: "Compass",
    iconPath: "/icons/define.webp",
  },
  {
    number: "03",
    title: "Create",
    description: "We design, craft, and refine ideas that connect and convert.",
    iconName: "Pen",
    iconPath: "/icons/create.webp",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We launch with precision and support your growth every step ahead.",
    iconName: "Rocket",
    iconPath: "/icons/deliver.webp",
  },
];
