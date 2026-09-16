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
import { capabilities } from "./capabilities";

export const brandingDeliverables: DeliverableItem[] = [
  {
    num: "01",
    icon: Target,
    title: "Brand Strategy",
    description:
      "We define your purpose, audience, position, and clear path to market impact.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Creative Direction",
    description:
      "We guide the look, tone, and storytelling expression across your entire brand world.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Naming & Positioning",
    description:
      "We craft distinctive names, territories, and taglines that resonate and differentiate.",
  },
  {
    num: "05",
    icon: Volume2,
    title: "Brand Voice",
    description:
      "We shape the words, key messaging pillars, and language that articulate your character.",
  },
  {
    num: "03",
    icon: Sliders,
    title: "Visual Identity",
    description:
      "We build iconic marks, custom typography, color systems, and dynamic brand assets.",
  },
  {
    num: "06",
    icon: BookOpen,
    title: "Brand Guidelines",
    description:
      "We document standards, design systems, and rules to protect and scale your identity seamlessly.",
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
    description:
      "We explore your world, audience, competitors, and core opportunities to uncover what truly matters.",
    imageSrc: "/assets/cave-painting-bento.webp",
  },
  {
    number: "02",
    title: "DEFINE",
    subtitle: "Choose the position",
    description:
      "We distill insights and define a clear, defensible position that sets you apart with deliberate purpose.",
    imageSrc: "/assets/project-cosmic.webp",
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "Craft the system",
    description:
      "We build the visual and verbal universe-from primary marks to expressive typography and motion gestures.",
    imageSrc: "/assets/service-hero-3d.webp",
  },
  {
    number: "04",
    title: "DEPLOY",
    subtitle: "Create consistency",
    description:
      "We roll out the complete identity across physical and digital touchpoints, empowering your team to scale.",
    imageSrc: "/assets/project-corepoint-mockup.webp",
  },
];

export const brandingQualifications: QualificationPoint[] = [
  {
    icon: Sparkles,
    title: "You are launching something new.",
    description:
      "Stepping into market with an ambitious product, service, or venture that demands instant recognition.",
  },
  {
    icon: TrendingUp,
    title: "Your identity no longer reflects your growth.",
    description:
      "Your business has matured and outgrown its original look, requiring an elevated, enterprise-grade presence.",
  },
  {
    icon: RefreshCw,
    title: "Your brand feels fragmented or inconsistent.",
    description:
      "Multiple teams and agencies have created disjointed assets, leaving customers confused by mixed signals.",
  },
];

export const selectedWorkProjects: SelectedProject[] = [
  {
    id: "1",
    slug: "aurelia-hotels",
    title: "Aurelia Hotels",
    category: "HOSPITALITY - IDENTITY & DIRECTION",
    imageSrc: "/assets/project-soluna.webp",
  },
  {
    id: "2",
    slug: "terra-loom",
    title: "Terra Loom",
    category: "SUSTAINABLE LIVING - IDENTITY & PACKAGING",
    imageSrc: "/assets/project-terra.webp",
  },
  {
    id: "3",
    slug: "liora-botanicals",
    title: "Liora Botanicals",
    category: "SOCIAL WELLNESS - IDENTITY & PACKAGING",
    imageSrc: "/assets/project-bio-oil.webp",
  },
];

export const defaultCaseStudy = {
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
  imageSrc: "/assets/project-corepoint-mockup.webp",
};

const serviceConfigsMap: Record<string, Partial<ServiceDetailConfig>> = {
  marketing: {
    categoryTrack: ["Strategy", "Social", "Campaigns", "Content"],
    heroTitlePrefix: "Ignite culture & ",
    heroTitleItalic: "build community.",
    heroDescription:
      "We build strategies and campaigns that connect brands with people.",
    philosophyNumber: "01",
    philosophyTitlePrefix: "Modern marketing is ",
    philosophyTitleItalic: "two-way connection.",
    philosophyCol1:
      "Audiences do not want commercial noise; they seek authentic content that mirrors their values and enriches their daily lives. We align narrative formats with your brand voice.",
    philosophyCol2:
      "Across modern digital touchpoints, we build content engines that turn casual viewers into passionate brand advocates.",
    disciplines: [
      {
        title: "Brand & Communication Strategy",
        badge: "Strategy",
        iconName: "Compass",
        description: "Defining your brand's core positioning and the strategic roadmap to connect with your target audience.",
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
        description: "Building and managing engaging social ecosystems that foster community and drive brand awareness.",
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
        description: "Crafting compelling narratives and branded content designed to spark conversations and build loyalty.",
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
        description: "Developing holistic, 360-degree campaigns that activate your brand across multiple touchpoints.",
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
        description: "Data-driven digital marketing and strategic consultation to optimize performance and maximize ROI.",
        deliverables: [
          "Digital Campaigns",
          "Audience Planning",
          "Performance Monitoring",
          "Marketing / Creative Consultation",
        ],
      },
    ],
    impactMetrics: [
      {
        value: "+180%",
        label: "Organic Engagement",
        description:
          "Average boost in community interactions across client activations.",
      },
      {
        value: "4.8x",
        label: "Audience Retention",
        description:
          "Multiplied long-term follower engagement through serial content.",
      },
      {
        value: "2.5M+",
        label: "Monthly Reach",
        description:
          "Organic impressions generated across client social channels.",
      },
      {
        value: "100%",
        label: "Platform Native",
        description:
          "Tailored creative systems engineered for channel algorithms.",
      },
    ],
    selectedWorkTitle: "SELECTED MARKETING & CAMPAIGN WORK",
    selectedWorkSubtitle:
      "Content that sparks conversations and drives measurable growth.",
    selectedWorkProjects: [
      {
        id: "1",
        slug: "bio-oil-skincare-campaign",
        title: "Bio-Oil Social Campaign",
        category: "SOCIAL MEDIA & CAMPAIGN",
        imageSrc:
          "/projects/social-media/bio-oil-social-media-content-highlights/bio-oil-cargills-promoetion-01.webp",
      },
      {
        id: "2",
        slug: "area-6-social-media",
        title: "Area 6 Social & Posters",
        category: "POSTER & ENGAGEMENT",
        imageSrc: "/projects/social-media/area-6/area-6-social-media-hero.webp",
      },
      {
        id: "3",
        slug: "coats-sri-lanka-campaign",
        title: "Coats Sri Lanka Campaign",
        category: "HERITAGE & SOCIAL",
        imageSrc:
          "/projects/social-media/coats-sri-lanka-social-media-post/coats-social-media-post-hero.webp",
      },
    ],
    ctaTitle: "Ready to spark cultural momentum?",
    ctaDescription:
      "Let's build a platform-native content engine that grows your community and scales your brand presence.",
    deliverables: [
      {
        num: "01",
        icon: Target,
        title: "Content Strategy & Calendar",
        description:
          "Channel-native publishing roadmap aligned with brand milestones.",
      },
      {
        num: "02",
        icon: Sparkles,
        title: "Photo & Video Direction",
        description:
          "High-impact visual direction and short-form video concepts.",
      },
      {
        num: "03",
        icon: Sliders,
        title: "Platform Template Systems",
        description:
          "Modular design templates for rapid, on-brand content creation.",
      },
      {
        num: "04",
        icon: Volume2,
        title: "Caption & Voice Guidelines",
        description:
          "Channel-specific tone of voice and editorial copywriting rules.",
      },
      {
        num: "05",
        icon: Compass,
        title: "Community Management Rules",
        description:
          "Engagement frameworks to foster active, loyal follower conversations.",
      },
      {
        num: "06",
        icon: BookOpen,
        title: "Analytics & Growth Sprints",
        description:
          "Data-driven insights to continuously optimize reach and conversion.",
      },
    ],
    featuredCaseStudy: {
      badge: "FEATURED CAMPAIGN",
      client: "Bio-Oil Skincare",
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
      slug: "bio-oil-skincare-campaign",
      imageSrc:
        "/projects/social-media/bio-oil-social-media-content-highlights/01-01.webp",
    },
    qualificationPoints: [
      {
        icon: Sparkles,
        title: "Launching content channels.",
        description:
          "Stepping into market and needing an immediate, cohesive content strategy.",
      },
      {
        icon: TrendingUp,
        title: "Audience engagement has stagnated.",
        description:
          "Your current content is not breaking through modern channel algorithms.",
      },
      {
        icon: RefreshCw,
        title: "Brand voice feels inconsistent.",
        description:
          "Multiple team members produce disjointed marketing graphics and copy.",
      },
    ],
    faqs: [
      {
        question: "Which digital channels do you support?",
        answer:
          "We support omnichannel digital platforms, editorial ecosystems, and video networks with tailored creative strategies.",
      },
      {
        question: "Do you handle shoot production?",
        answer:
          "Yes, we handle end-to-end creative direction, photography, and video shooting.",
      },
      {
        question: "How often will content be published?",
        answer:
          "Publishing cadence is tailored to your goals, typically ranging from 3 to 6 releases per week per channel.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We track reach, engagement rate, audience growth, click-through rates, and community conversions.",
      },
    ],
  },

  design: {
    categoryTrack: ["Identity", "Digital", "Spatial", "Objects"],
    heroTitlePrefix: "Enduring identity & ",
    heroTitleItalic: "tactile packaging.",
    heroDescription:
      "We create identities, objects, spaces and digital experiences.",
    philosophyNumber: "02",
    philosophyTitlePrefix: "A great brand is ",
    philosophyTitleItalic: "unmistakable.",
    philosophyCol1:
      "Your brand identity is your ultimate competitive moat. We begin with deep strategic positioning before translating vision into iconic marks and tactile touchpoints.",
    philosophyCol2:
      "From retail shelves to digital screens, we design unified systems that protect, persuade, and elevate your product at every single customer interaction.",
    disciplines: [
      {
        title: "Branding & Identity",
        badge: "Identity",
        iconName: "logo-design",
        description: "Creating enduring visual identities, brand marks, and typographic systems that define your market presence.",
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
        description: "Crafting meticulous graphic layouts and editorial design for both physical publications and digital formats.",
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
        description: "Designing tactile, shelf-commanding packaging and wearable merchandise that extends your brand universe.",
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
        description: "Engineering high-performance web platforms and digital experiences focused on clarity and conversion.",
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
        description: "Translating your brand into immersive physical environments and photorealistic 3D spatial concepts.",
        deliverables: [
          "Architecture Design",
          "Interior / Spatial Concepts",
          "Environmental Branding",
          "Exhibition / Event Spaces",
        ],
      },
    ],
    impactMetrics: [
      {
        value: "#1",
        label: "Shelf Distinction",
        description:
          "Superior visual recall and unboxing perception in competitive retail.",
      },
      {
        value: "100%",
        label: "Press Accuracy",
        description:
          "Zero-defect press-ready dielines and sustainable substrate specifications.",
      },
      {
        value: "60+",
        label: "Deliverable Assets",
        description:
          "Comprehensive brand guidelines scaling from packaging to digital.",
      },
      {
        value: "Timeless",
        label: "Identity Longevity",
        description:
          "Visual systems built to endure brand expansion and multiple SKUs.",
      },
    ],
    selectedWorkTitle: "SELECTED IDENTITY & PACKAGING WORK",
    selectedWorkSubtitle:
      "Tactile packaging and distinctive brand systems crafted to stand apart.",
    selectedWorkProjects: [
      {
        id: "1",
        slug: "niwarthana-packaging-design",
        title: "Niwarthana Artisan Packaging",
        category: "SUSTAINABLE PACKAGING & CRAFT",
        imageSrc: "/projects/branding-identity/package-design/niwarthana-1.webp",
      },
      {
        id: "2",
        slug: "rouka-brand-identity",
        title: "ROUKA Brand Identity",
        category: "BRAND SYSTEM & IDENTITY",
        imageSrc: "/projects/branding-identity/branding/rouka-1.webp",
      },
      {
        id: "3",
        slug: "slsa-uk-identity",
        title: "SLSA UK Emblem & Identity",
        category: "COMMUNITY BRAND & LOGO",
        imageSrc:
          "/projects/branding-identity/logo-design/slsa-logo/sri-lankan-student-association-uk-01.webp",
      },
    ],
    ctaTitle: "Ready to build an identity that endures?",
    ctaDescription:
      "Let's engineer a distinctive brand and packaging system that wins on the shelf and commands customer loyalty.",
    deliverables: [
      {
        num: "01",
        icon: Target,
        title: "Structural & Graphic Packaging",
        description:
          "Custom 3D container shape and shelf-commanding graphic layouts.",
      },
      {
        num: "02",
        icon: Sparkles,
        title: "Logo & Brand Mark Systems",
        description:
          "Distinctive brand marks, monograms, and typographic hierarchies.",
      },
      {
        num: "03",
        icon: Compass,
        title: "Unboxing Experience Design",
        description:
          "Inner reveals, tactile papers, and memorable customer moments.",
      },
      {
        num: "04",
        icon: Volume2,
        title: "Label & Tag Systems",
        description:
          "Foil stamping, embossing, die-cuts, and regulatory integration.",
      },
      {
        num: "05",
        icon: Sliders,
        title: "Brand Guidelines Document",
        description:
          "Comprehensive rules ensuring cohesive application across all media.",
      },
      {
        num: "06",
        icon: BookOpen,
        title: "Print Production Management",
        description:
          "Dieline engineering, press checks, and printer manufacturer liaison.",
      },
    ],
    featuredCaseStudy: {
      badge: "FEATURED PACKAGING",
      client: "Niwarthana",
      tagline: "Sustainable Packaging & Identity",
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
      slug: "niwarthana-packaging-design",
      imageSrc: "/projects/branding-identity/package-design/niwarthana-1.webp",
    },
    qualificationPoints: [
      {
        icon: Sparkles,
        title: "Launching a physical product.",
        description:
          "Demanding shelf impact in competitive retail or direct-to-consumer markets.",
      },
      {
        icon: TrendingUp,
        title: "Packaging feels dated or cheap.",
        description:
          "Customer unboxing experience doesn't match product quality or price point.",
      },
      {
        icon: RefreshCw,
        title: "Expanding product lines.",
        description:
          "Needing scalable packaging guidelines and visual consistency across multiple SKUs.",
      },
    ],
    faqs: [
      {
        question: "Do you supply the dielines or use ours?",
        answer:
          "We can engineer custom dielines from scratch or build directly from your packaging manufacturer's specifications.",
      },
      {
        question: "Do you handle print vendor communication?",
        answer:
          "Yes, we prepare print-ready dieline files and coordinate directly with your print vendor for press checks.",
      },
      {
        question: "Can you design sustainable packaging?",
        answer:
          "Absolutely. We specialize in plastic-free, recyclable, biodegradable, and low-waste packaging solutions.",
      },
      {
        question: "How long does a branding and packaging project take?",
        answer:
          "Typical timelines range from 4 to 8 weeks depending on SKU count, prototyping, and review cycles.",
      },
    ],
  },

  "visual-storytelling": {
    categoryTrack: ["Narrative", "Photography", "Film", "Social", "Motion"],
    heroTitlePrefix: "Spatial, tangible & ",
    heroTitleItalic: "digital experiences.",
    heroDescription:
      "We turn ideas into stories people can see, feel and remember.",
    philosophyNumber: "03",
    philosophyTitlePrefix: "Brands exist in ",
    philosophyTitleItalic: "multiple dimensions.",
    philosophyCol1:
      "True brand resonance happens when your world expands beyond logos. We create physical environments, collectible products, and fluid digital platforms that bring your story to life.",
    philosophyCol2:
      "Every spatial layout, wearable garment, editorial visual, and interactive web component is crafted to deliver immersive, unforgettable experiences.",
    disciplines: [
      {
        title: "Visual Narrative & Creative Direction",
        badge: "Direction",
        iconName: "Compass",
        description: "Guiding the visual story of your brand, ensuring every aesthetic choice aligns with your core narrative.",
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
        description: "High-end photography capturing the essence of your brand, products, and lifestyle.",
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
        description: "Cinematic film and video production that commands attention and evokes emotion.",
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
        description: "Dynamic, platform-native short-form content engineered for modern algorithms and audience retention.",
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
        description: "Bringing ideas to life through dynamic motion graphics, 2D/3D animation, and bespoke illustrations.",
        deliverables: [
          "Motion Graphics",
          "2D / 3D Animation",
          "Illustration",
          "Infographic / Editorial Storytelling",
        ],
      },
    ],
    impactMetrics: [
      {
        value: "99/100",
        label: "Lighthouse Speed",
        description:
          "Sub-second load times and fluid 60fps animations across all devices.",
      },
      {
        value: "3D",
        label: "Spatial Immersion",
        description:
          "Photorealistic architectural visualisations bringing brand spaces to life.",
      },
      {
        value: "100%",
        label: "Bespoke Code",
        description:
          "Clean code architectures engineered without restrictive templates.",
      },
      {
        value: "Global",
        label: "Cross-Channel Cohesion",
        description:
          "Unified narrative from physical merchandise to international web presence.",
      },
    ],
    selectedWorkTitle: "SELECTED EXPERIENTIAL & DIGITAL WORK",
    selectedWorkSubtitle:
      "Modern web experiences, narrative visuals, and spatial brand worlds.",
    selectedWorkProjects: [
      {
        id: "1",
        slug: "coffee-1911-identity",
        title: "Coffee 1911 Brand & Spatial",
        category: "BRAND & SPATIAL ARCHITECTURE",
        imageSrc:
          "/projects/branding-identity/logo-design/coffee-1911/coffee-1911-1.webp",
      },
      {
        id: "2",
        slug: "cool-step-identity",
        title: "Cool Step Footwear Identity",
        category: "PRODUCT & APPAREL DESIGN",
        imageSrc:
          "/projects/branding-identity/logo-design/cool-step-final/cool-step-final-1.webp",
      },
      {
        id: "3",
        slug: "focal-logo-identity",
        title: "FOCAL Visual Architecture",
        category: "DIGITAL IDENTITY & GEOMETRY",
        imageSrc:
          "/projects/branding-identity/logo-design/focal/focal-logo-1.webp",
      },
    ],
    ctaTitle: "Ready to expand your brand universe?",
    ctaDescription:
      "Let's craft spatial, digital, and tangible expressions that push past the conventional and set a new standard.",
    deliverables: [
      {
        num: "01",
        icon: Target,
        title: "Spatial 3D Environments",
        description:
          "Virtual spaces, retail interiors, and experiential brand concepts.",
      },
      {
        num: "02",
        icon: Sparkles,
        title: "High-Performance Web Platforms",
        description:
          "Bespoke Next.js and React sites engineered for clarity and conversion.",
      },
      {
        num: "03",
        icon: Compass,
        title: "Custom Merchandise & Apparel",
        description:
          "Wearable products, tech packs, and collectible physical assets.",
      },
      {
        num: "04",
        icon: Volume2,
        title: "Visual Narrative Systems",
        description:
          "Sequential storytelling, art direction, and editorial imagery.",
      },
      {
        num: "05",
        icon: Sliders,
        title: "Design Systems & Components",
        description:
          "Modular UI kits and design tokens ensuring future development speed.",
      },
      {
        num: "06",
        icon: BookOpen,
        title: "Technical SEO & Speed Optimization",
        description:
          "Lighthouse 90+ performance scores, metadata, and analytics.",
      },
    ],
    featuredCaseStudy: {
      badge: "FEATURED ARCHITECTURE",
      client: "ROUKA",
      tagline: "Immersive Brand Architecture",
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
      slug: "rouka-brand-identity",
      imageSrc: "/projects/branding-identity/branding/rouka-1.webp",
    },
    qualificationPoints: [
      {
        icon: Sparkles,
        title: "Transcending a standard website.",
        description:
          "Needing a world-class digital experience with rich animations and fast performance.",
      },
      {
        icon: TrendingUp,
        title: "Creating physical brand extensions.",
        description:
          "Ready to launch branded apparel, products, or physical showroom spaces.",
      },
      {
        icon: RefreshCw,
        title: "Communicating complex stories.",
        description:
          "Requiring visual storytelling and narrative clarity for sophisticated audiences.",
      },
    ],
    faqs: [
      {
        question: "What technologies do you use for web design?",
        answer:
          "We build modern digital experiences with Next.js, React, Tailwind CSS, TypeScript, and Framer Motion.",
      },
      {
        question: "Can you provide 3D spatial renders for contractors?",
        answer:
          "Yes, our digital architecture deliverables include dimensioned layout plans, finishes, and 3D visualisations.",
      },
      {
        question: "Do you handle apparel sourcing for merchandise?",
        answer:
          "We provide complete tech packs, print dielines, and guidance on ethical manufacturer sourcing.",
      },
      {
        question: "Will our team be able to update website content?",
        answer:
          "Yes, we integrate user-friendly headless CMS solutions allowing your team to update content effortlessly.",
      },
    ],
  },
};

export function getServiceDetailConfig(
  slug: string,
  capTitle: string,
  capDescription: string,
): ServiceDetailConfig {
  const cap = capabilities.find((c) => c.slug === slug);
  const capIndex = capabilities.findIndex((c) => c.slug === slug);
  const formattedNumber =
    capIndex >= 0 ? String(capIndex + 1).padStart(2, "0") : "01";

  const customConfig = serviceConfigsMap[slug] || {};

  const defaultDeliverablesList: DeliverableItem[] = (
    cap?.deliverables || []
  ).map((del, idx) => ({
    num: String(idx + 1).padStart(2, "0"),
    icon: [
      Target,
      Sparkles,
      Compass,
      Volume2,
      Sliders,
      BookOpen,
      TrendingUp,
      RefreshCw,
    ][idx % 8],
    title: del,
    description: `Professional ${del.toLowerCase()} crafted to elevate your brand's presence and impact.`,
  }));

  return {
    serviceNumber: formattedNumber,
    categoryTrack: customConfig.categoryTrack || [
      "Strategy",
      "Creative",
      "Execution",
    ],
    eyebrow: `SERVICE ${formattedNumber} / ${capTitle.toUpperCase()}`,
    heroTitlePrefix: customConfig.heroTitlePrefix || `${capTitle} `,
    heroTitleItalic: customConfig.heroTitleItalic || "crafted.",
    heroDescription: cap?.longDescription || capDescription,
    philosophyNumber: formattedNumber,
    philosophyTitlePrefix:
      customConfig.philosophyTitlePrefix || `${capTitle} is `,
    philosophyTitleItalic: customConfig.philosophyTitleItalic || "purposeful.",
    philosophyCol1:
      customConfig.philosophyCol1 ||
      `Our approach to ${capTitle.toLowerCase()} blends strategic rigor with artistic precision, creating work that connects deeply with your target audience.`,
    philosophyCol2:
      customConfig.philosophyCol2 ||
      `Every asset is designed with long-term brand equity in mind, ensuring your identity scales consistently across all physical and digital channels.`,
    disciplines: customConfig.disciplines,
    impactMetrics: customConfig.impactMetrics,
    selectedWorkTitle: customConfig.selectedWorkTitle,
    selectedWorkSubtitle: customConfig.selectedWorkSubtitle,
    selectedWorkProjects: customConfig.selectedWorkProjects,
    ctaTitle: customConfig.ctaTitle,
    ctaDescription: customConfig.ctaDescription,
    deliverables:
      customConfig.deliverables ||
      (defaultDeliverablesList.length > 0
        ? defaultDeliverablesList
        : brandingDeliverables),
    featuredCaseStudy: customConfig.featuredCaseStudy || defaultCaseStudy,
    process: customConfig.process || brandingProcess,
    qualificationPoints:
      customConfig.qualificationPoints || brandingQualifications,
    faqs: customConfig.faqs || defaultFaqs,
  };
}
