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
  imageSrc: "/project-corepoint-mockup.jpg",
};

const serviceConfigsMap: Record<string, Partial<ServiceDetailConfig>> = {
  "marketing": {
    categoryTrack: ["Content Strategy", "Social Media", "Community Growth"],
    heroTitlePrefix: "Ignite culture & ",
    heroTitleItalic: "build community.",
    heroDescription:
      "We engineer platform-native content and social media ecosystems that convert audience attention into lasting brand loyalty.",
    philosophyNumber: "01",
    philosophyTitlePrefix: "Modern marketing is ",
    philosophyTitleItalic: "two-way connection.",
    philosophyCol1:
      "Audiences do not want commercial noise; they seek authentic content that mirrors their values and enriches their daily lives. We align channel-native formats with your brand voice.",
    philosophyCol2:
      "Across Instagram, TikTok, LinkedIn, and beyond, we build platform-native content engines that turn casual scrollers into passionate brand advocates.",
    disciplines: [
      {
        title: "Content Marketing (Social Media)",
        badge: "Core Discipline",
        iconName: "SOCIAL MEDIA",
        description:
          "Strategic platform-native content that sparks conversations, builds engaged communities, and drives sustained brand growth.",
        deliverables: [
          "Social media strategy & editorial calendar",
          "Platform-specific template design systems",
          "Caption writing and brand voice guide",
          "Community management framework",
          "Campaign concepts & execution",
          "Analytics and performance reporting",
        ],
      },
      {
        title: "Photo & Video Direction",
        badge: "Visual Production",
        iconName: "VISUAL STORYTELLING",
        description:
          "High-impact visual direction and short-form video concepts engineered specifically for platform algorithms.",
        deliverables: [
          "Photography art direction & shoot production",
          "Short-form video scripts & editing",
          "Reels & TikTok visual storytelling",
          "Brand aesthetic guidelines for video",
        ],
      },
    ],
    impactMetrics: [
      {
        value: "+180%",
        label: "Organic Engagement",
        description: "Average boost in community interactions across client activations.",
      },
      {
        value: "4.8x",
        label: "Audience Retention",
        description: "Multiplied long-term follower engagement through serial content.",
      },
      {
        value: "2.5M+",
        label: "Monthly Reach",
        description: "Organic impressions generated across client social channels.",
      },
      {
        value: "100%",
        label: "Platform Native",
        description: "Tailored creative systems engineered for channel algorithms.",
      },
    ],
    selectedWorkTitle: "SELECTED MARKETING & CAMPAIGN WORK",
    selectedWorkSubtitle: "Content that sparks conversations and drives measurable growth.",
    selectedWorkProjects: [
      {
        id: "1",
        slug: "bio-oil-skincare-campaign",
        title: "Bio-Oil Social Campaign",
        category: "SOCIAL MEDIA & CAMPAIGN",
        imageSrc: "/projects/Social-Media/Bio Oil Social Media Content Highlights/Bio Oil Social Media Hero.png",
      },
      {
        id: "2",
        slug: "area-6-social-media",
        title: "Area 6 Social & Posters",
        category: "POSTER & ENGAGEMENT",
        imageSrc: "/projects/Social-Media/Area 6/Area 6 Social media hero.png",
      },
      {
        id: "3",
        slug: "coats-sri-lanka-campaign",
        title: "Coats Sri Lanka Campaign",
        category: "HERITAGE & SOCIAL",
        imageSrc: "/projects/Social-Media/Coats Sri Lanka Social Media Post/Coats Social Media Post hero.png",
      },
    ],
    ctaTitle: "Ready to spark cultural momentum?",
    ctaDescription:
      "Let's build a platform-native content engine that grows your community and scales your brand presence.",
    deliverables: [
      { num: "01", icon: Target, title: "Content Strategy & Calendar", description: "Channel-native publishing roadmap aligned with brand milestones." },
      { num: "02", icon: Sparkles, title: "Photo & Video Direction", description: "High-impact visual direction and short-form video concepts." },
      { num: "03", icon: Sliders, title: "Platform Template Systems", description: "Modular design templates for rapid, on-brand content creation." },
      { num: "04", icon: Volume2, title: "Caption & Voice Guidelines", description: "Channel-specific tone of voice and editorial copywriting rules." },
      { num: "05", icon: Compass, title: "Community Management Rules", description: "Engagement frameworks to foster active, loyal follower conversations." },
      { num: "06", icon: BookOpen, title: "Analytics & Growth Sprints", description: "Data-driven insights to continuously optimize reach and conversion." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED CAMPAIGN",
      client: "Bio-Oil Skincare",
      tagline: "Omnichannel Social Activation",
      description:
        "We developed an authentic social content strategy, creative direction, and promotional campaign that amplified brand trust and retail engagement.",
      deliverables: ["Content Strategy", "Creative Direction", "Retail Creatives", "Community Growth"],
      palette: ["#E54C2A", "#F4A261", "#E9C46A", "#2A9D8F", "#264653"],
      headlineFont: "Metropolis",
      bodyFont: "Inter",
      slug: "bio-oil-skincare-campaign",
      imageSrc: "/projects/Social-Media/Bio Oil Social Media Content Highlights/Bio Oil Social Media Hero.png",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Launching social channels.", description: "Stepping into market and needing an immediate, cohesive content strategy." },
      { icon: TrendingUp, title: "Organic engagement has stagnated.", description: "Your current content is not breaking through platform algorithms." },
      { icon: RefreshCw, title: "Brand voice feels inconsistent.", description: "Multiple team members produce disjointed social graphics and copy." },
    ],
    faqs: [
      { question: "Which social platforms do you support?", answer: "We support Instagram, TikTok, LinkedIn, YouTube, X, and Pinterest with platform-tailored creative strategies." },
      { question: "Do you handle shoot production?", answer: "Yes, we handle end-to-end creative direction, photography, and video shooting." },
      { question: "How often will content be published?", answer: "Publishing cadence is tailored to your goals, typically ranging from 3 to 6 posts per week per channel." },
      { question: "How do you measure success?", answer: "We track reach, engagement rate, follower growth, click-through rates, and community conversions." },
    ],
  },

  "designing": {
    categoryTrack: ["Brand Strategy", "Package Design", "Logo Design"],
    heroTitlePrefix: "Enduring identity & ",
    heroTitleItalic: "tactile packaging.",
    heroDescription:
      "From memorable logo mark systems to high-impact product packaging, we craft cohesive brand identities engineered to command attention and inspire trust.",
    philosophyNumber: "02",
    philosophyTitlePrefix: "A great brand is ",
    philosophyTitleItalic: "unmistakable.",
    philosophyCol1:
      "Your brand identity is your ultimate competitive moat. We begin with deep strategic positioning before translating vision into iconic marks and tactile touchpoints.",
    philosophyCol2:
      "From retail shelves to digital screens, we design unified systems that protect, persuade, and elevate your product at every single customer interaction.",
    disciplines: [
      {
        title: "Package Design",
        badge: "Brand Identity",
        iconName: "Packaging",
        description:
          "Packaging that protects, persuades, and elevates your product on every shelf, creating an unforgettable unboxing experience.",
        deliverables: [
          "Structural and graphic packaging design",
          "Label and hangtag systems",
          "Retail display & POP packaging",
          "Unboxing experience design",
          "Regulatory text layout & compliance",
          "Print production specification & oversight",
        ],
      },
      {
        title: "Logo Design",
        badge: "Brand Identity",
        iconName: "Logo Design",
        description:
          "Purpose-driven logo marks, typographic hierarchies, and brand guidelines that establish market authority and lasting trust.",
        deliverables: [
          "Brand strategy & positioning",
          "Naming & tagline development",
          "Logo and brand mark systems",
          "Typography & colour palette",
          "Comprehensive brand guidelines",
          "Stationery & collateral design",
        ],
      },
    ],
    impactMetrics: [
      {
        value: "#1",
        label: "Shelf Distinction",
        description: "Superior visual recall and unboxing perception in competitive retail.",
      },
      {
        value: "100%",
        label: "Press Accuracy",
        description: "Zero-defect press-ready dielines and sustainable substrate specifications.",
      },
      {
        value: "60+",
        label: "Deliverable Assets",
        description: "Comprehensive brand guidelines scaling from packaging to digital.",
      },
      {
        value: "Timeless",
        label: "Identity Longevity",
        description: "Visual systems built to endure brand expansion and multiple SKUs.",
      },
    ],
    selectedWorkTitle: "SELECTED IDENTITY & PACKAGING WORK",
    selectedWorkSubtitle: "Tactile packaging and distinctive brand systems crafted to stand apart.",
    selectedWorkProjects: [
      {
        id: "1",
        slug: "niwarthana-packaging-design",
        title: "Niwarthana Artisan Packaging",
        category: "SUSTAINABLE PACKAGING & CRAFT",
        imageSrc: "/projects/Branding-Identity/Package Design/niwarthana (1).png",
      },
      {
        id: "2",
        slug: "rouka-brand-identity",
        title: "ROUKA Brand Identity",
        category: "BRAND SYSTEM & IDENTITY",
        imageSrc: "/projects/Branding-Identity/Branding/rouka (1).png",
      },
      {
        id: "3",
        slug: "slsa-uk-identity",
        title: "SLSA UK Emblem & Identity",
        category: "COMMUNITY BRAND & LOGO",
        imageSrc: "/projects/Branding-Identity/LoGo Design/SLSA Logo/Sri Lankan Student Association_UK-01.png",
      },
    ],
    ctaTitle: "Ready to build an identity that endures?",
    ctaDescription:
      "Let's engineer a distinctive brand and packaging system that wins on the shelf and commands customer loyalty.",
    deliverables: [
      { num: "01", icon: Target, title: "Structural & Graphic Packaging", description: "Custom 3D container shape and shelf-commanding graphic layouts." },
      { num: "02", icon: Sparkles, title: "Logo & Brand Mark Systems", description: "Distinctive brand marks, monograms, and typographic hierarchies." },
      { num: "03", icon: Compass, title: "Unboxing Experience Design", description: "Inner reveals, tactile papers, and memorable customer moments." },
      { num: "04", icon: Volume2, title: "Label & Tag Systems", description: "Foil stamping, embossing, die-cuts, and regulatory integration." },
      { num: "05", icon: Sliders, title: "Brand Guidelines Document", description: "Comprehensive rules ensuring cohesive application across all media." },
      { num: "06", icon: BookOpen, title: "Print Production Management", description: "Dieline engineering, press checks, and printer manufacturer liaison." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED PACKAGING",
      client: "Niwarthana",
      tagline: "Sustainable Packaging & Identity",
      description:
        "Engineered tactile, artisanal packaging architecture for Niwarthana with intricate foil stamping, custom die cuts, and memorable unboxing layers.",
      deliverables: ["Packaging Dielines", "Unboxing Architecture", "Label Hierarchy", "Print Specifications"],
      palette: ["#2C3531", "#116466", "#D9B08C", "#FFCB9A", "#D1E8E2"],
      headlineFont: "Cormorant Garamond",
      bodyFont: "Metropolis",
      slug: "niwarthana-packaging-design",
      imageSrc: "/projects/Branding-Identity/Package Design/niwarthana (1).png",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Launching a physical product.", description: "Demanding shelf impact in competitive retail or direct-to-consumer markets." },
      { icon: TrendingUp, title: "Packaging feels dated or cheap.", description: "Customer unboxing experience doesn't match product quality or price point." },
      { icon: RefreshCw, title: "Expanding product lines.", description: "Needing scalable packaging guidelines and visual consistency across multiple SKUs." },
    ],
    faqs: [
      { question: "Do you supply the dielines or use ours?", answer: "We can engineer custom dielines from scratch or build directly from your packaging manufacturer's specifications." },
      { question: "Do you handle print vendor communication?", answer: "Yes, we prepare print-ready dieline files and coordinate directly with your print vendor for press checks." },
      { question: "Can you design sustainable packaging?", answer: "Absolutely. We specialize in plastic-free, recyclable, biodegradable, and low-waste packaging solutions." },
      { question: "How long does a branding and packaging project take?", answer: "Typical timelines range from 4 to 8 weeks depending on SKU count, prototyping, and review cycles." },
    ],
  },

  "and-beyond": {
    categoryTrack: ["Digital Architecture", "Merchandising", "Storytelling", "Web Design"],
    heroTitlePrefix: "Spatial, tangible & ",
    heroTitleItalic: "digital experiences.",
    heroDescription:
      "Extending your brand universe into spatial 3D architecture, wearable merchandise, visual storytelling, and high-performance modern web platforms.",
    philosophyNumber: "03",
    philosophyTitlePrefix: "Brands exist in ",
    philosophyTitleItalic: "multiple dimensions.",
    philosophyCol1:
      "True brand resonance happens when your world expands beyond logos. We create physical environments, collectible products, and fluid digital platforms that bring your story to life.",
    philosophyCol2:
      "Every spatial layout, wearable garment, editorial visual, and interactive web component is crafted to deliver immersive, unforgettable experiences.",
    disciplines: [
      {
        title: "Digital Architecture Designs",
        badge: "Spatial & 3D",
        iconName: "ARCHITECTURE DESIGNS",
        description:
          "Spatial design concepts that translate brand identities into physical interiors, exhibition pavilions, and photorealistic 3D virtual spaces.",
        deliverables: [
          "Spatial concept & mood boarding",
          "Interior layout & flow planning",
          "Material & finish specification",
          "3D visualisation & photorealistic rendering",
        ],
      },
      {
        title: "Merchandising",
        badge: "Tangible Products",
        iconName: "MERCHANDISING",
        description:
          "High-appeal merchandise design that extends your brand into wearable apparel, accessories, and collectible physical products.",
        deliverables: [
          "Merchandise concept & product selection",
          "Graphic and pattern design for products",
          "Apparel design & tech packs",
          "Packaging and presentation design",
        ],
      },
      {
        title: "Visual Storytelling",
        badge: "Narrative Systems",
        iconName: "VISUAL STORYTELLING",
        description:
          "Narrative-driven visual systems, editorial photography direction, and sequential imagery that communicate complex ideas with emotional resonance.",
        deliverables: [
          "Visual narrative strategy",
          "Photography direction & curation",
          "Illustration & infographic design",
          "Multi-channel visual systems",
        ],
      },
      {
        title: "Web Design",
        badge: "Digital Platforms",
        iconName: "WEB DESIGN",
        description:
          "High-performance websites and digital experiences built with Next.js, tailored UX strategy, and fluid micro-animations engineered to convert.",
        deliverables: [
          "Website design and UX strategy",
          "Custom design systems & component libraries",
          "Next.js and React web development",
          "SEO & performance optimisation",
        ],
      },
    ],
    impactMetrics: [
      {
        value: "99/100",
        label: "Lighthouse Speed",
        description: "Sub-second load times and fluid 60fps animations across all devices.",
      },
      {
        value: "3D",
        label: "Spatial Immersion",
        description: "Photorealistic architectural visualisations bringing brand spaces to life.",
      },
      {
        value: "100%",
        label: "Bespoke Code",
        description: "Clean code architectures engineered without restrictive templates.",
      },
      {
        value: "Global",
        label: "Cross-Channel Cohesion",
        description: "Unified narrative from physical merchandise to international web presence.",
      },
    ],
    selectedWorkTitle: "SELECTED EXPERIENTIAL & DIGITAL WORK",
    selectedWorkSubtitle: "Modern web experiences, narrative visuals, and spatial brand worlds.",
    selectedWorkProjects: [
      {
        id: "1",
        slug: "coffee-1911-identity",
        title: "Coffee 1911 Brand & Spatial",
        category: "BRAND & SPATIAL ARCHITECTURE",
        imageSrc: "/projects/Branding-Identity/LoGo Design/Coffee 1911/Coffee 1911 (1).png",
      },
      {
        id: "2",
        slug: "cool-step-identity",
        title: "Cool Step Footwear Identity",
        category: "PRODUCT & APPAREL DESIGN",
        imageSrc: "/projects/Branding-Identity/LoGo Design/Cool Step Final/Cool Step Final  (1).png",
      },
      {
        id: "3",
        slug: "focal-logo-identity",
        title: "FOCAL Visual Architecture",
        category: "DIGITAL IDENTITY & GEOMETRY",
        imageSrc: "/projects/Branding-Identity/LoGo Design/FOCAL/FOCAL Logo (1).png",
      },
    ],
    ctaTitle: "Ready to expand your brand universe?",
    ctaDescription:
      "Let's craft spatial, digital, and tangible expressions that push past the conventional and set a new standard.",
    deliverables: [
      { num: "01", icon: Target, title: "Spatial 3D Environments", description: "Virtual spaces, retail interiors, and experiential brand concepts." },
      { num: "02", icon: Sparkles, title: "High-Performance Web Platforms", description: "Bespoke Next.js and React sites engineered for clarity and conversion." },
      { num: "03", icon: Compass, title: "Custom Merchandise & Apparel", description: "Wearable products, tech packs, and collectible physical assets." },
      { num: "04", icon: Volume2, title: "Visual Narrative Systems", description: "Sequential storytelling, art direction, and editorial imagery." },
      { num: "05", icon: Sliders, title: "Design Systems & Components", description: "Modular UI kits and design tokens ensuring future development speed." },
      { num: "06", icon: BookOpen, title: "Technical SEO & Speed Optimization", description: "Lighthouse 90+ performance scores, metadata, and analytics." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED ARCHITECTURE",
      client: "ROUKA",
      tagline: "Immersive Brand Architecture",
      description:
        "Engineered end-to-end visual storytelling, spatial signage concepts, and cohesive brand touchpoints for ROUKA.",
      deliverables: ["Spatial Concepts", "Brand Signage", "Identity Systems", "Digital Experience"],
      palette: ["#1F2937", "#4B5563", "#D97706", "#F59E0B", "#FEF3C7"],
      headlineFont: "Metropolis",
      bodyFont: "Inter",
      slug: "rouka-brand-identity",
      imageSrc: "/projects/Branding-Identity/Branding/rouka (1).png",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Transcending a standard website.", description: "Needing a world-class digital experience with rich animations and fast performance." },
      { icon: TrendingUp, title: "Creating physical brand extensions.", description: "Ready to launch branded apparel, products, or physical showroom spaces." },
      { icon: RefreshCw, title: "Communicating complex stories.", description: "Requiring visual storytelling and narrative clarity for sophisticated audiences." },
    ],
    faqs: [
      { question: "What technologies do you use for web design?", answer: "We build modern digital experiences with Next.js, React, Tailwind CSS, TypeScript, and Framer Motion." },
      { question: "Can you provide 3D spatial renders for contractors?", answer: "Yes, our digital architecture deliverables include dimensioned layout plans, finishes, and 3D visualisations." },
      { question: "Do you handle apparel sourcing for merchandise?", answer: "We provide complete tech packs, print dielines, and guidance on ethical manufacturer sourcing." },
      { question: "Will our team be able to update website content?", answer: "Yes, we integrate user-friendly headless CMS solutions allowing your team to update content effortlessly." },
    ],
  },

  "content-marketing": {
    categoryTrack: ["Strategy", "Content", "Community"],
    heroTitlePrefix: "Spark conversation and ",
    heroTitleItalic: "build community.",
    philosophyTitlePrefix: "Social media is ",
    philosophyTitleItalic: "two-way storytelling.",
    philosophyCol1:
      "Modern audiences don't want ads; they seek authentic content that resonates with their values. We align channel-native formats with your brand voice.",
    philosophyCol2:
      "From Instagram to TikTok to LinkedIn, we build content engines that turn passive scrollers into dedicated brand advocates.",
    deliverables: [
      { num: "01", icon: Target, title: "Content Strategy & Calendar", description: "Channel-native publishing roadmap aligned with brand milestones." },
      { num: "02", icon: Sparkles, title: "Photo & Video Direction", description: "High-impact visual direction and short-form video concepts." },
      { num: "03", icon: Sliders, title: "Platform Template Systems", description: "Modular design templates for rapid, on-brand content creation." },
      { num: "04", icon: Volume2, title: "Caption & Voice Guidelines", description: "Channel-specific tone of voice and editorial copywriting rules." },
      { num: "05", icon: Compass, title: "Community Management", description: "Engagement frameworks to foster active follower conversations." },
      { num: "06", icon: TrendingUp, title: "Analytics & Performance", description: "Data-driven insights to continuously optimize reach and ROI." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED CAMPAIGN",
      client: "Bio-Oil Skincare",
      tagline: "Omnichannel Social Activation",
      description: "We developed an authentic social content strategy and short-form video campaign that increased organic engagement by 180% across platforms.",
      deliverables: ["Content Strategy", "Short-Form Video", "Template System", "Art Direction"],
      palette: ["#E54C2A", "#F4A261", "#E9C46A", "#2A9D8F", "#264653"],
      headlineFont: "Metropolis",
      bodyFont: "Inter",
      slug: "bio-oil-skincare-campaign",
      imageSrc: "/project-bio-oil.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Launching social channels.", description: "Stepping into market and needing an immediate content strategy." },
      { icon: TrendingUp, title: "Organic engagement has stagnated.", description: "Your current content is not breaking through platform algorithms." },
      { icon: RefreshCw, title: "Brand voice feels inconsistent.", description: "Multiple team members produce disjointed social graphics." },
    ],
    faqs: [
      { question: "Which social platforms do you support?", answer: "We support Instagram, TikTok, LinkedIn, YouTube, X, and Pinterest with platform-tailored creative strategies." },
      { question: "Do you handle shoot production?", answer: "Yes, we handle end-to-end creative direction, photography, and video shooting." },
      { question: "How often will content be published?", answer: "Publishing cadence is tailored to your goals, typically ranging from 3 to 6 posts per week per channel." },
      { question: "How do you measure success?", answer: "We track reach, engagement rate, follower growth, click-through rates, and community conversions." },
    ],
  },

  "logo-design": {
    categoryTrack: ["Strategy", "Identity", "Systems"],
    heroTitlePrefix: "Build a brand ",
    heroTitleItalic: "remember.",
    philosophyTitlePrefix: "A brand is more than ",
    philosophyTitleItalic: "a mark.",
    philosophyCol1: "It's clarity that connects people to purpose. A recognizable signal that stands out in noise and earns lasting customer trust.",
    philosophyCol2: "Great identities create consistency across every touchpoint so your story lives, moves, and grows as your business expands.",
    deliverables: brandingDeliverables,
    featuredCaseStudy: defaultCaseStudy,
    qualificationPoints: brandingQualifications,
    faqs: defaultFaqs,
  },

  "package-design": {
    categoryTrack: ["Structural", "Graphics", "Unboxing"],
    heroTitlePrefix: "Packaging that ",
    heroTitleItalic: "persuades on shelf.",
    philosophyTitlePrefix: "Packaging is your product's ",
    philosophyTitleItalic: "first handshake.",
    philosophyCol1: "We design primary and secondary packaging that communicates quality at three distances: shelf, arm's length, and in hand.",
    philosophyCol2: "We balance artistic shelf appeal with regulatory compliance, print feasibility, and eco-friendly material selection.",
    deliverables: [
      { num: "01", icon: Target, title: "Structural & Graphic Design", description: "Custom 3D bottle, box, and container shape and graphic layout." },
      { num: "02", icon: Sparkles, title: "Label & Hangtag Systems", description: "Tactile labels with foil stamping, embossing, and die-cut details." },
      { num: "03", icon: Compass, title: "Retail Display Packaging", description: "POP displays and shipping containers designed for retail environments." },
      { num: "04", icon: Volume2, title: "Unboxing Experience", description: "Inner tissue, inserts, and reveal mechanics that delight customers." },
      { num: "05", icon: Sliders, title: "Regulatory Text Layout", description: "FDA, EU, and global compliance info integrated without clutter." },
      { num: "06", icon: BookOpen, title: "Print Production Mgmt", description: "Dieline creation, press checks, and printer liaison." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED PACKAGING",
      client: "Threadline Textiles",
      tagline: "Sustainable Packaging & Identity",
      description: "Crafted zero-plastic packaging for Threadline's organic textile collection with foil details and unboxing box architecture.",
      deliverables: ["Packaging Dielines", "Unboxing Box", "Hangtags", "Print Specs"],
      palette: ["#2C3531", "#116466", "#D9B08C", "#FFCB9A", "#D1E8E2"],
      headlineFont: "Cormorant Garamond",
      bodyFont: "Metropolis",
      slug: "threadline-textiles-packaging",
      imageSrc: "/project-threadline.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Launching a physical product.", description: "Demanding shelf impact in competitive retail or e-commerce markets." },
      { icon: TrendingUp, title: "Packaging feels dated or cheap.", description: "Customer unboxing experience doesn't match product quality." },
      { icon: RefreshCw, title: "Expanding product lines.", description: "Needing scalable packaging guidelines across multiple SKUs." },
    ],
    faqs: [
      { question: "Do you supply the dielines or use ours?", answer: "We can work from your manufacturer's dielines or custom engineer new ones." },
      { question: "Do you handle print vendor communication?", answer: "Yes, we prepare print-ready files and coordinate directly with your print vendor." },
      { question: "Can you design sustainable packaging?", answer: "Absolutely. We specialize in recyclable, biodegradable, and low-waste packaging solutions." },
      { question: "How long does a packaging project take?", answer: "Typical timelines range from 4 to 8 weeks depending on SKU count and prototyping." },
    ],
  },

  "brand-identity": {
    categoryTrack: ["Structural", "Graphics", "Unboxing"],
    heroTitlePrefix: "Packaging that ",
    heroTitleItalic: "persuades on shelf.",
    philosophyTitlePrefix: "Packaging is your product's ",
    philosophyTitleItalic: "first handshake.",
    philosophyCol1: "We design primary and secondary packaging that communicates quality at three distances: shelf, arm's length, and in hand.",
    philosophyCol2: "We balance artistic shelf appeal with regulatory compliance, print feasibility, and eco-friendly material selection.",
    deliverables: [
      { num: "01", icon: Target, title: "Structural & Graphic Design", description: "Custom 3D bottle, box, and container shape and graphic layout." },
      { num: "02", icon: Sparkles, title: "Label & Hangtag Systems", description: "Tactile labels with foil stamping, embossing, and die-cut details." },
      { num: "03", icon: Compass, title: "Retail Display Packaging", description: "POP displays and shipping containers designed for retail environments." },
      { num: "04", icon: Volume2, title: "Unboxing Experience", description: "Inner tissue, inserts, and reveal mechanics that delight customers." },
      { num: "05", icon: Sliders, title: "Regulatory Text Layout", description: "FDA, EU, and global compliance info integrated without clutter." },
      { num: "06", icon: BookOpen, title: "Print Production Mgmt", description: "Dieline creation, press checks, and printer liaison." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED PACKAGING",
      client: "Threadline Textiles",
      tagline: "Sustainable Packaging & Identity",
      description: "Crafted zero-plastic packaging for Threadline's organic textile collection with foil details and unboxing box architecture.",
      deliverables: ["Packaging Dielines", "Unboxing Box", "Hangtags", "Print Specs"],
      palette: ["#2C3531", "#116466", "#D9B08C", "#FFCB9A", "#D1E8E2"],
      headlineFont: "Cormorant Garamond",
      bodyFont: "Metropolis",
      slug: "threadline-textiles-packaging",
      imageSrc: "/project-threadline.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Launching a physical product.", description: "Demanding shelf impact in competitive retail or e-commerce markets." },
      { icon: TrendingUp, title: "Packaging feels dated or cheap.", description: "Customer unboxing experience doesn't match product quality." },
      { icon: RefreshCw, title: "Expanding product lines.", description: "Needing scalable packaging guidelines across multiple SKUs." },
    ],
    faqs: [
      { question: "Do you supply the dielines or use ours?", answer: "We can work from your manufacturer's dielines or custom engineer new ones." },
      { question: "Do you handle print vendor communication?", answer: "Yes, we prepare print-ready files and coordinate directly with your print vendor." },
      { question: "Can you design sustainable packaging?", answer: "Absolutely. We specialize in recyclable, biodegradable, and low-waste packaging solutions." },
      { question: "How long does a packaging project take?", answer: "Typical timelines range from 4 to 8 weeks depending on SKU count and prototyping." },
    ],
  },



  "web-design": {
    categoryTrack: ["UX Strategy", "UI Design", "Next.js"],
    heroTitlePrefix: "Craft digital sites that ",
    heroTitleItalic: "convert & inspire.",
    philosophyTitlePrefix: "Websites are active ",
    philosophyTitleItalic: "brand experiences.",
    philosophyCol1: "We design and develop web platforms that combine artistic storytelling with high-speed performance and high conversion.",
    philosophyCol2: "From micro-interactions to responsive layouts, every pixel is engineered to build trust and guide users to action.",
    deliverables: [
      { num: "01", icon: Target, title: "UX Strategy & Wireframing", description: "User journey mapping, architecture, and layout wireframes." },
      { num: "02", icon: Sparkles, title: "Custom UI & Design System", description: "Bespoke interface component library and design system." },
      { num: "03", icon: Compass, title: "Next.js & React Build", description: "High-performance frontend code with fluid web motion." },
      { num: "04", icon: Volume2, title: "CMS Integration", description: "Headless CMS setup allowing non-technical team updates." },
      { num: "05", icon: Sliders, title: "SEO & Speed Optimization", description: "Lighthouse 90+ performance scores and technical SEO." },
      { num: "06", icon: BookOpen, title: "Analytics & Launch Support", description: "Google Analytics 4 event tracking and zero-downtime deployment." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED DIGITAL PLATFORM",
      client: "Soluna Wellness",
      tagline: "Immersive Web Experience",
      description: "Built a high-converting web platform with smooth scroll reveals, custom booking flow, and responsive design for Soluna.",
      deliverables: ["UX Architecture", "Next.js Frontend", "Animation Engine", "CMS Integration"],
      palette: ["#FAF7F2", "#1C1B19", "#E54C2A", "#EAC240"],
      headlineFont: "Cormorant Garamond",
      bodyFont: "Metropolis",
      slug: "soluna-wellness-identity",
      imageSrc: "/project-soluna.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Current website is underperforming.", description: "Visitors drop off without converting into leads or sales." },
      { icon: TrendingUp, title: "Outgrown page templates.", description: "Existing site doesn't reflect your premium service tier." },
      { icon: RefreshCw, title: "Slow load times & bad mobile UX.", description: "Site feels clunky on mobile devices and ranks poorly on Google." },
    ],
    faqs: [
      { question: "What technologies do you use for web development?", answer: "We build modern sites using Next.js, React, TailwindCSS, TypeScript, and headless CMS integrations." },
      { question: "Will I be able to update content myself?", answer: "Yes, we integrate easy-to-use CMS admin panels for full content control." },
      { question: "Is SEO included in web design?", answer: "Yes, technical SEO, fast page loads, schema markup, and meta tags are built-in." },
      { question: "How long does a website design project take?", answer: "Projects take 4 to 8 weeks depending on custom feature complexity." },
    ],
  },




  "visual-storytelling": {
    categoryTrack: ["Narrative", "Photography", "Curation"],
    heroTitlePrefix: "Illuminate complex ideas with ",
    heroTitleItalic: "visual narrative.",
    philosophyTitlePrefix: "Visuals transcend ",
    philosophyTitleItalic: "written words.",
    philosophyCol1: "We use photography, illustration, infographics, and sequential imagery to craft visual stories that inform and inspire.",
    philosophyCol2: "Every photo, illustration, and graphic frame is designed to convey emotion and build customer connection.",
    deliverables: [
      { num: "01", icon: Target, title: "Narrative Strategy", description: "Structuring your brand story into compelling visual arcs." },
      { num: "02", icon: Sparkles, title: "Photo Art Direction", description: "Curating shoot themes, moodboards, and photo sequencing." },
      { num: "03", icon: Compass, title: "Illustration & Infographics", description: "Custom diagrams and artworks explaining complex concepts." },
      { num: "04", icon: Volume2, title: "Editorial Layout", description: "Magazine spreads, brand books, and digital presentation layout." },
      { num: "05", icon: Sliders, title: "Brand Storytelling Framework", description: "Guidelines for visual tone across internal and public assets." },
      { num: "06", icon: BookOpen, title: "Multi-Channel Content System", description: "Cohesive visual story assets delivered for web, print, and social." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED NARRATIVE",
      client: "Origins Series",
      tagline: "Visual Storytelling Campaign",
      description: "Developed an editorial photographic story series celebrating raw materials and craft for Origins.",
      deliverables: ["Visual Narrative Arc", "Photo Series", "Editorial Book", "Digital Campaign"],
      palette: ["#2E2824", "#A34A29", "#E54C2A", "#FAF7F2"],
      headlineFont: "Editorial New",
      bodyFont: "Metropolis",
      slug: "origins-concept-series",
      imageSrc: "/project-origins.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Complex message to communicate.", description: "Needing visual diagrams, photos, and narrative flow to simplify concepts." },
      { icon: TrendingUp, title: "Brand materials lack emotional depth.", description: "Marketing collateral feels dry or overly technical." },
      { icon: RefreshCw, title: "Publishing a brand book or annual report.", description: "Wanting an editorial presentation of your year's milestones." },
    ],
    faqs: [
      { question: "What is visual storytelling?", answer: "It is the art of combining photography, design, typography, and sequential layout to tell a brand story." },
      { question: "Do you conduct custom photo shoots?", answer: "Yes, we handle creative direction and photography shoots worldwide." },
      { question: "Can visual storytelling be adapted for websites?", answer: "Yes, we design scroll-driven web narratives with interactive visual steps." },
      { question: "What deliverables do we get?", answer: "You get full high-res photo suites, vector illustrations, and layout files." },
    ],
  },



  "merchandising": {
    categoryTrack: ["Product Design", "Apparel", "Print Specs"],
    heroTitlePrefix: "Extend your brand into ",
    heroTitleItalic: "wearable product.",
    philosophyTitlePrefix: "Merchandise turns customers into ",
    philosophyTitleItalic: "brand ambassadors.",
    philosophyCol1: "We design merchandise people actually want to wear and collect — from apparel and accessories to limited-edition drops.",
    philosophyCol2: "We combine print artwork with tech pack specs, garment selection, and supplier guidance for physical products.",
    deliverables: [
      { num: "01", icon: Target, title: "Merchandise Concepting", description: "Curating product lines aligned with your audience lifestyle." },
      { num: "02", icon: Sparkles, title: "Graphic & Pattern Design", description: "Bespoke screen-print graphics, embroidery, and repeating patterns." },
      { num: "03", icon: Compass, title: "Apparel Tech Packs", description: "Print placements, pantone colors, and garment tech specifications." },
      { num: "04", icon: Volume2, title: "Hangtag & Label Design", description: "Woven neck labels, custom hangtags, and packaging bags." },
      { num: "05", icon: Sliders, title: "Sourcing Guidance", description: "Recommending premium blank suppliers and screen-print partners." },
      { num: "06", icon: BookOpen, title: "E-Commerce Photo Specs", description: "Mockup templates and product photo art direction." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED MERCH",
      client: "Threadline Goods",
      tagline: "Apparel Capsule & Brand Kit",
      description: "Designed a 6-piece organic cotton merchandise capsule with custom screen prints, woven tags, and packaging boxes.",
      deliverables: ["Tech Packs", "Graphics", "Woven Tags", "Lookbook Art"],
      palette: ["#1C1B19", "#FAF7F2", "#E54C2A", "#D9B08C"],
      headlineFont: "Metropolis",
      bodyFont: "Inter",
      slug: "threadline-textiles-packaging",
      imageSrc: "/project-threadline.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Launching a merchandise capsule.", description: "Wanting custom product designs that feel premium rather than cheap promo swag." },
      { icon: TrendingUp, title: "Monetizing brand community.", description: "Your audience is asking for wearable gear and lifestyle products." },
      { icon: RefreshCw, title: "Creating event apparel.", description: "Needing staff uniforms, team gear, or conference merchandise." },
    ],
    faqs: [
      { question: "Do you print and produce the physical items?", answer: "We design all products and tech packs, and connect you with trusted production partners." },
      { question: "What are tech packs?", answer: "Tech packs are technical blueprints detailing measurements, print positions, Pantone colors, and embroidery specs for factories." },
      { question: "Can you design custom packaging for merch?", answer: "Yes, we design polybags, boxes, stickers, unboxing cards, and tissue paper." },
      { question: "What products can you design for?", answer: "T-shirts, hoodies, caps, totes, drinkware, notebooks, pins, and custom goods." },
    ],
  },

  "digital-architecture-designs": {
    categoryTrack: ["Spatial UX", "3D Rendering", "Interiors"],
    heroTitlePrefix: "Translate your brand into ",
    heroTitleItalic: "physical space.",
    philosophyTitlePrefix: "Architecture is brand ",
    philosophyTitleItalic: "in 3D environment.",
    philosophyCol1: "We design retail interiors, exhibition stands, and pop-up spaces that immerse visitors in your brand world.",
    philosophyCol2: "We balance spatial flow, material textures, lighting, and signage to create memorable physical experiences.",
    deliverables: [
      { num: "01", icon: Target, title: "Spatial Concept & Moodboard", description: "Architectural mood, material palettes, and interior layout direction." },
      { num: "02", icon: Sparkles, title: "Layout & Flow Planning", description: "Optimizing customer walk-through paths and display zoning." },
      { num: "03", icon: Compass, title: "3D Visualization & Renderings", description: "Photorealistic 3D interior renders of your spatial concept." },
      { num: "04", icon: Volume2, title: "Material Specifications", description: "Curating wood, metal, stone, lighting, and fabric finishes." },
      { num: "05", icon: Sliders, title: "Signage & Wayfinding Design", description: "Integrated 3D logo signs, neon elements, and directional signage." },
      { num: "06", icon: BookOpen, title: "Build Handoff Drawings", description: "Dimensional design drawings for architects and contractors." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED SPATIAL DESIGN",
      client: "Aurelia Hotels",
      tagline: "Lobby & Spatial Experience",
      description: "Designed spatial interior concepts, lighting, and wayfinding signage for Aurelia's flagship boutique lobby.",
      deliverables: ["3D Renders", "Material Palette", "Wayfinding", "Lighting Concept"],
      palette: ["#161616", "#2D2825", "#EAC240", "#EDEAEA"],
      headlineFont: "Cormorant Garamond",
      bodyFont: "Metropolis",
      slug: "aurelia-hotels",
      imageSrc: "/project-soluna.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Opening a retail store or pop-up.", description: "Requiring spatial design that reflects your brand identity." },
      { icon: TrendingUp, title: "Designing an exhibition booth.", description: "Needing a standout trade show presence to attract visitors." },
      { icon: RefreshCw, title: "Upgrading corporate office interiors.", description: "Wanting physical workspace design that inspires your team." },
    ],
    faqs: [
      { question: "Do you supply photorealistic 3D renders?", answer: "Yes, we provide 4K photorealistic 3D renders showing lighting, textures, and spatial layout." },
      { question: "Do you coordinate with build contractors?", answer: "Yes, we provide design specs and liaise with contractors during construction." },
      { question: "Can you design temporary pop-up shops?", answer: "Yes, we specialize in modular pop-up structures designed for quick assembly." },
      { question: "What materials do you specify?", answer: "We select durable, sustainable materials tailored to your budget and foot traffic." },
    ],
  },

  "digital-art": {
    categoryTrack: ["Illustration", "Generative", "Composition"],
    heroTitlePrefix: "Elevate your brand with ",
    heroTitleItalic: "original digital art.",
    philosophyTitlePrefix: "Digital art gives brand ",
    philosophyTitleItalic: "a creative soul.",
    philosophyCol1: "Our digital art practice produces bespoke illustrations, key visuals, and digital paintings that give your brand a distinct edge.",
    philosophyCol2: "We combine traditional artistic craft with modern digital tools to build artwork for campaigns, products, and web platforms.",
    deliverables: [
      { num: "01", icon: Target, title: "Custom Illustration", description: "Bespoke digital vector or raster artworks crafted for your brand." },
      { num: "02", icon: Sparkles, title: "Character & Mascot Design", description: "Unique brand characters, mascots, and avatar illustrations." },
      { num: "03", icon: Compass, title: "Abstract Key Visuals", description: "Expressive digital artwork for campaign backgrounds and headers." },
      { num: "04", icon: Volume2, title: "Mixed-Media Compositions", description: "Blending photo collage, digital paint, and 3D graphic elements." },
      { num: "05", icon: Sliders, title: "Print & Display Artwork", description: "Ultra-high resolution art files suitable for art prints and displays." },
      { num: "06", icon: BookOpen, title: "Animation-Ready Layering", description: "Organized layered source files optimized for motion graphics." },
    ],
    featuredCaseStudy: {
      badge: "FEATURED DIGITAL ART",
      client: "Cosmic Explorations",
      tagline: "Key Visuals & Art Suite",
      description: "Created a series of 8 surreal digital artworks for Cosmic Explorations' digital launch campaign.",
      deliverables: ["8 Key Visuals", "Character Art", "High-Res Prints", "Motion Layers"],
      palette: ["#0B0C10", "#1F2833", "#E54C2A", "#66FCF1"],
      headlineFont: "Editorial New",
      bodyFont: "Metropolis",
      slug: "cosmic-explorations",
      imageSrc: "/project-cosmic.jpg",
    },
    qualificationPoints: [
      { icon: Sparkles, title: "Need custom visual artwork.", description: "Tired of generic stock imagery; wanting unique artistic assets." },
      { icon: TrendingUp, title: "Launching a creative campaign.", description: "Requiring key visual artwork for billboards, web, and ads." },
      { icon: RefreshCw, title: "Developing a brand mascot.", description: "Wanting an illustrated character to represent your brand." },
    ],
    faqs: [
      { question: "What formats do you deliver digital artwork in?", answer: "We deliver vector EPS/SVG files and high-res 300+ DPI PNG/PSD files." },
      { question: "Can the artwork be animated later?", answer: "Yes, we deliver organized, layered source files ready for motion graphics." },
      { question: "Do I own full commercial rights to the art?", answer: "Yes, full commercial ownership and licensing rights are transferred to you." },
      { question: "How long does a digital art project take?", answer: "Turnarounds range from 1 to 4 weeks depending on illustration detail." },
    ],
  },
};

export function getServiceDetailConfig(
  slug: string,
  capTitle: string,
  capDescription: string
): ServiceDetailConfig {
  const cap = capabilities.find((c) => c.slug === slug);
  const capIndex = capabilities.findIndex((c) => c.slug === slug);
  const formattedNumber = capIndex >= 0 ? String(capIndex + 1).padStart(2, "0") : "01";

  const mappedSlug =
    slug === "marketing"
      ? "content-marketing"
      : slug === "designing"
      ? "brand-identity"
      : slug === "and-beyond"
      ? "web-design"
      : slug;

  const customConfig = serviceConfigsMap[slug] || serviceConfigsMap[mappedSlug] || {};

  const defaultDeliverablesList: DeliverableItem[] = (cap?.deliverables || []).map((del, idx) => ({
    num: String(idx + 1).padStart(2, "0"),
    icon: [Target, Sparkles, Compass, Volume2, Sliders, BookOpen, TrendingUp, RefreshCw][idx % 8],
    title: del,
    description: `Professional ${del.toLowerCase()} crafted to elevate your brand's presence and impact.`,
  }));

  return {
    serviceNumber: formattedNumber,
    categoryTrack: customConfig.categoryTrack || ["Strategy", "Creative", "Execution"],
    eyebrow: `SERVICE ${formattedNumber} / ${capTitle.toUpperCase()}`,
    heroTitlePrefix: customConfig.heroTitlePrefix || `${capTitle} `,
    heroTitleItalic: customConfig.heroTitleItalic || "crafted.",
    heroDescription: cap?.longDescription || capDescription,
    philosophyNumber: formattedNumber,
    philosophyTitlePrefix: customConfig.philosophyTitlePrefix || `${capTitle} is `,
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
    deliverables: customConfig.deliverables || (defaultDeliverablesList.length > 0 ? defaultDeliverablesList : brandingDeliverables),
    featuredCaseStudy: customConfig.featuredCaseStudy || defaultCaseStudy,
    process: customConfig.process || brandingProcess,
    qualificationPoints: customConfig.qualificationPoints || brandingQualifications,
    faqs: customConfig.faqs || defaultFaqs,
  };
}
