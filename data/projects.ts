import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "bio-oil-skincare-campaign",
    title: "Bio-Oil Skincare Campaign",
    client: "Bio-Oil",
    category: "SOCIAL MEDIA",
    year: 2024,
    shortDescription:
      "A multi-platform campaign that amplified Bio-Oil's natural benefits through storytelling, texture, and visual warmth.",
    overview:
      "Bio-Oil approached KOD Universe to create a campaign that would authentically communicate their product's natural, skin-nourishing benefits to a modern audience. The challenge was to bridge a heritage brand with contemporary digital consumers who value transparency, authenticity, and sensory experience.",
    challenge:
      "The skincare market is saturated with clinical imagery and overstated claims. Bio-Oil needed to stand apart — communicating efficacy through warmth and story rather than statistics, while maintaining the brand's trusted, established identity.",
    approach:
      "We built the campaign around the concept of 'natural origins meeting modern care.' Our team crafted a visual language rooted in warm textures — stone, botanicals, and organic forms — that evoked the oil's natural ingredients. We developed platform-specific content strategies for Instagram, TikTok, and Pinterest, each adapted to the platform's native content rhythm.",
    deliverables: [
      "Social media content strategy",
      "Photography art direction (60+ assets)",
      "Reels and short-form video scripts",
      "Instagram Stories templates",
      "Pinterest board curation",
      "Campaign copywriting",
    ],
    heroImage: {
      src: "/project-bio-oil.jpg",
      alt: "Bio-Oil skincare bottles arranged on warm stone with pink peonies",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-bio-oil.jpg", alt: "Product hero shot", width: 800, height: 1000 },
      { src: "/project-bio-oil-retail.jpg", alt: "Retail packaging arrangement", width: 800, height: 1000 },
    ],
    tags: ["Social Media", "Art Direction", "Copywriting", "Campaign"],
    featured: true,
    relatedSlugs: ["corepoint-fitness-identity", "soluna-wellness-identity"],
  },
  {
    id: "2",
    slug: "corepoint-fitness-identity",
    title: "CorePoint Fitness Identity",
    client: "CorePoint Fitness",
    category: "BRANDING & IDENTITY",
    year: 2024,
    shortDescription:
      "A dynamic identity system designed to inspire movement, build community, and empower every rep.",
    overview:
      "CorePoint is a modern fitness brand that focuses on core strength, balance, and mind-body connection. They required a complete identity system that felt both powerful and accessible — energetic without being aggressive.",
    challenge:
      "Fitness branding tends toward either hyper-masculine aggression or bland minimalism. CorePoint needed a middle path: bold and energising, but human and community-forward.",
    approach:
      "We developed an identity centred on a signature spiral mark — a motif that simultaneously suggests a coiled spring of energy, a journey inward, and the core itself. The orange palette radiates warmth and energy while remaining approachable. Typography balances bold confidence with editorial refinement.",
    deliverables: [
      "Logo design and brand mark",
      "Complete typography system",
      "Colour palette and usage guidelines",
      "Stationery suite",
      "Brand standards document",
      "Digital asset library",
      "Social media templates",
    ],
    heroImage: {
      src: "/project-corepoint.jpg",
      alt: "CorePoint fitness identity with spiral pin icon and kettlebells",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-corepoint.jpg", alt: "Brand mark with props", width: 800, height: 1000 },
      { src: "/project-terra.jpg", alt: "Brand guidelines document", width: 800, height: 1000 },
    ],
    tags: ["Branding", "Logo Design", "Identity", "Typography"],
    featured: false,
    relatedSlugs: ["terra-origins-brand-kit", "bio-oil-skincare-campaign"],
  },
  {
    id: "3",
    slug: "threadline-textiles-packaging",
    title: "Threadline Textiles Packaging",
    client: "Threadline Textiles",
    category: "PACKAGE DESIGN",
    year: 2024,
    shortDescription:
      "Tactile, story-driven packaging that honours artisan craft and speaks to conscious consumers.",
    overview:
      "Threadline is a sustainable textile brand producing hand-dyed fabrics and artisan thread. They needed packaging that would communicate craft heritage, sustainability, and the sensory pleasure of their materials.",
    challenge:
      "Packaging needed to protect fragile threads and fabrics while telling a rich story of origin, process, and care — all within tight material and cost constraints dictated by their sustainability commitments.",
    approach:
      "We created a packaging system using natural, uncoated cardstock with letterpress and foil-stamp details. The design language draws from archival textile patterns and botanical illustration, creating a collector-worthy unboxing experience that encourages reuse and sharing.",
    deliverables: [
      "Primary and secondary packaging design",
      "Thread spool wraps and tags",
      "Tissue paper and protective inner packaging",
      "Shipping box design",
      "Care instruction inserts",
      "Sustainability messaging copy",
    ],
    heroImage: {
      src: "/project-threadline.jpg",
      alt: "Artisan thread spools on warm stone surface with brass thimbles",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-threadline.jpg", alt: "Thread spool arrangement", width: 800, height: 1000 },
      { src: "/project-bio-oil-retail.jpg", alt: "Package design detail", width: 800, height: 1000 },
    ],
    tags: ["Packaging", "Print", "Sustainable Design", "Illustration"],
    featured: false,
    relatedSlugs: ["bio-oil-retail-packaging", "soluna-wellness-identity"],
  },
  {
    id: "4",
    slug: "origins-concept-series",
    title: "Origins Concept Series",
    client: "KOD Universe",
    category: "CREATIVE WORK",
    year: 2024,
    shortDescription:
      "An internal editorial series exploring the intersection of ancient symbols and modern creative identity.",
    overview:
      "Origins is KOD Universe's internal creative exploration — a series of editorial images, written pieces, and visual experiments investigating how ancient marks, symbols, and storytelling traditions continue to shape contemporary creative work.",
    challenge:
      "Creating work for ourselves is perhaps the hardest creative brief. We needed to produce something genuinely exploratory and meaningful, not merely decorative or self-promotional.",
    approach:
      "We travelled physically to cave sites and archaeological archives, documenting primitive marks and then reimagining them through contemporary design processes. The series maps a literal journey from ancient origin to modern expression.",
    deliverables: [
      "Editorial photography series (24 images)",
      "Written essays on creative origins",
      "Visual research archive",
      "Exhibition-format printed book",
      "Digital publication and social series",
    ],
    heroImage: {
      src: "/project-origins.jpg",
      alt: "Atmospheric cave tunnel with ancient paintings and golden light",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-origins.jpg", alt: "Cave tunnel with ancient paintings", width: 800, height: 1000 },
      { src: "/project-cosmic.jpg", alt: "Cosmic constellation map", width: 800, height: 1000 },
    ],
    tags: ["Creative Direction", "Editorial", "Photography", "Writing"],
    featured: false,
    relatedSlugs: ["editorial-campaign", "cosmic-explorations"],
  },
  {
    id: "5",
    slug: "soluna-wellness-identity",
    title: "Soluna Wellness Identity",
    client: "Soluna Wellness",
    category: "BRANDING & IDENTITY",
    year: 2024,
    shortDescription:
      "A calm, botanically-rooted identity for a boutique wellness studio focused on intentional living.",
    overview:
      "Soluna is a wellness studio offering a blend of sound healing, botanical skincare, and movement practices. Their identity needed to reflect deep calm, natural authenticity, and a philosophy of intentional, slow living.",
    challenge:
      "The wellness space is crowded with superficial aesthetics. Soluna needed an identity that felt genuinely rooted — not trendy minimalism, but something that communicated real depth and care.",
    approach:
      "We built Soluna's identity around the concept of the threshold — the moment between states of being, between sun and moon, between effort and rest. The visual language draws from botanical illustration, archival photography, and hand-drawn marks to create something authentically warm and considered.",
    deliverables: [
      "Brand naming and tagline",
      "Logo and brand mark system",
      "Complete visual identity guidelines",
      "Website design and art direction",
      "Product label design",
      "Printed collateral suite",
    ],
    heroImage: {
      src: "/project-soluna.jpg",
      alt: "Wellness product jars with botanicals on travertine stone",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-soluna.jpg", alt: "Wellness product flat lay", width: 800, height: 1000 },
      { src: "/project-terra.jpg", alt: "Brand guidelines open spread", width: 800, height: 1000 },
    ],
    tags: ["Branding", "Wellness", "Identity", "Print"],
    featured: false,
    relatedSlugs: ["terra-origins-brand-kit", "threadline-textiles-packaging"],
  },
  {
    id: "6",
    slug: "bio-oil-retail-packaging",
    title: "Bio-Oil Retail Packaging",
    client: "Bio-Oil",
    category: "PACKAGE DESIGN",
    year: 2024,
    shortDescription:
      "A complete retail packaging redesign that elevated the on-shelf presence of Bio-Oil's core product range.",
    overview:
      "Following the success of the social campaign, Bio-Oil commissioned a retail packaging refresh that would align the physical product with the warmer, more textured brand identity the campaign had established.",
    challenge:
      "Retail packaging must work at three distances — shelf-side, arm's length, and in-hand — while surviving regulatory requirements and cost constraints. The existing packaging was clinical; we needed to warm it without losing legibility or shelf impact.",
    approach:
      "We introduced warm terracotta and amber box panels against clean ivory typography, drawing the eye with colour while communicating trust through structural clarity. New illustration elements echo the campaign's botanical visual world.",
    deliverables: [
      "Primary packaging for three SKUs",
      "Secondary retail packaging",
      "Shelf display design",
      "Regulatory text layout",
      "Print production specification",
    ],
    heroImage: {
      src: "/project-bio-oil-retail.jpg",
      alt: "Terracotta and amber retail packaging on warm linen surface",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-bio-oil-retail.jpg", alt: "Full packaging range", width: 800, height: 1000 },
      { src: "/project-bio-oil.jpg", alt: "Product on natural surface", width: 800, height: 1000 },
    ],
    tags: ["Packaging", "Retail", "Print Production"],
    featured: false,
    relatedSlugs: ["bio-oil-skincare-campaign", "threadline-textiles-packaging"],
  },
  {
    id: "7",
    slug: "cosmic-explorations",
    title: "Cosmic Explorations",
    client: "Independent",
    category: "CREATIVE WORK",
    year: 2023,
    shortDescription:
      "A visual meditation on ancient star maps and their relationship to modern wayfinding and creative navigation.",
    overview:
      "Cosmic Explorations began as a response to a simple question: how did ancient peoples navigate without instruments? The project investigates the art and science of ancient celestial cartography and translates those principles into contemporary graphic form.",
    challenge:
      "Communicating complex cosmological history through purely visual means — without becoming either overly scientific or superficially decorative.",
    approach:
      "We created a series of large-format prints combining archival celestial chart data with hand-drawn sacred geometry. Each piece overlays modern wayfinding with ancient navigation, creating works that hold up to extended study.",
    deliverables: [
      "12-piece print series (limited edition)",
      "Exhibition curation and wall text",
      "Catalogue design and production",
      "Digital publication",
    ],
    heroImage: {
      src: "/project-cosmic.jpg",
      alt: "Ancient celestial chart with golden constellation lines on dark navy",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-cosmic.jpg", alt: "Cosmic star map detail", width: 800, height: 1000 },
      { src: "/project-origins.jpg", alt: "Cave origins imagery", width: 800, height: 1000 },
    ],
    tags: ["Art Direction", "Print", "Illustration", "Exhibition"],
    featured: false,
    relatedSlugs: ["origins-concept-series", "editorial-campaign"],
  },
  {
    id: "8",
    slug: "terra-origins-brand-kit",
    title: "Terra Origins Brand Kit",
    client: "Terra Origins",
    category: "BRANDING & IDENTITY",
    year: 2023,
    shortDescription:
      "A complete, production-ready brand kit for an earth-first lifestyle brand rooted in sustainable materials.",
    overview:
      "Terra Origins is a sustainable lifestyle brand producing goods from natural, ethically sourced materials. They needed a brand system that could scale from packaging to retail fit-out — one that embodied their values at every touchpoint.",
    challenge:
      "Creating a brand that communicates sustainability without the clichés — no leaf marks, no predictable green palettes. Terra Origins wanted to feel premium and desirable while remaining genuinely earth-centred.",
    approach:
      "We grounded the identity in the actual materials Terra Origins works with — earth tones sourced from ochre, terracotta, and clay, with typography that references archival letterforms. The result is a brand that feels both ancient and completely contemporary.",
    deliverables: [
      "Complete brand identity system",
      "Brand guideline document",
      "Business stationery suite",
      "Packaging templates",
      "Retail display guidelines",
      "Digital asset library",
      "Social media templates",
    ],
    heroImage: {
      src: "/project-terra.jpg",
      alt: "Terra brand guidebook open with business cards on marble surface",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-terra.jpg", alt: "Brand guidebook and stationery", width: 800, height: 1000 },
      { src: "/project-soluna.jpg", alt: "Related wellness aesthetic", width: 800, height: 1000 },
    ],
    tags: ["Branding", "Sustainable", "Print", "Identity Systems"],
    featured: false,
    relatedSlugs: ["soluna-wellness-identity", "corepoint-fitness-identity"],
  },
  {
    id: "9",
    slug: "editorial-campaign",
    title: "Editorial Campaign",
    client: "Rooted Magazine",
    category: "CREATIVE WORK",
    year: 2023,
    shortDescription:
      "A creative campaign for an independent editorial publication celebrating curiosity, purpose, and the examined life.",
    overview:
      "Rooted Magazine is an independent quarterly exploring ideas at the intersection of nature, philosophy, and creative practice. We were commissioned to conceive and produce a campaign that would broaden their readership while staying true to their deeply considered editorial voice.",
    challenge:
      "Independent magazines face the paradox of needing to market themselves without undermining the intimacy that makes them valuable. The campaign needed to attract new readers without alienating the existing community.",
    approach:
      "We centred the campaign around a simple, powerful image: a person alone in a vast landscape, reading. The image says everything about Rooted's value proposition — the courage of solitude, the reward of deep attention, the beauty of a life examined.",
    deliverables: [
      "Campaign concept and art direction",
      "Hero photography direction",
      "Print advertising",
      "Digital display ads",
      "Social media campaign",
      "Campaign copy and taglines",
    ],
    heroImage: {
      src: "/project-editorial.jpg",
      alt: "Person reading on a mountain ridge at golden hour",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-editorial.jpg", alt: "Campaign hero image", width: 800, height: 1000 },
      { src: "/project-origins.jpg", alt: "Origins concept reference", width: 800, height: 1000 },
    ],
    tags: ["Campaign", "Art Direction", "Photography", "Editorial"],
    featured: false,
    relatedSlugs: ["origins-concept-series", "cosmic-explorations"],
  },
  {
    id: "10",
    slug: "glow-naturally-campaign",
    title: "Glow Naturally Campaign",
    client: "Glow Naturally",
    category: "SOCIAL MEDIA",
    year: 2023,
    shortDescription:
      "A content-first social campaign launching a new organic skincare range with a community-building strategy.",
    overview:
      "Glow Naturally is a new organic skincare brand entering a competitive market. Their launch campaign needed to build authentic community before selling — establishing trust and affinity ahead of their retail launch.",
    challenge:
      "Breaking into skincare social media with a meaningful voice rather than noise. The campaign needed to feel different without being difficult or inaccessible.",
    approach:
      "We built a 90-day pre-launch content programme structured in three phases: Educate, Connect, Reveal. Each phase deepened the audience relationship before any product was shown. By launch day, the community already felt ownership of the brand.",
    deliverables: [
      "90-day content strategy",
      "Community building framework",
      "Photography direction and templates",
      "Email nurture sequence",
      "Influencer brief and outreach strategy",
      "Launch event concept",
    ],
    heroImage: {
      src: "/project-soluna.jpg",
      alt: "Natural skincare products on botanical surface",
      width: 1200,
      height: 800,
    },
    galleryImages: [
      { src: "/project-soluna.jpg", alt: "Organic product arrangement", width: 800, height: 1000 },
      { src: "/project-bio-oil.jpg", alt: "Skincare campaign visual", width: 800, height: 1000 },
    ],
    tags: ["Social Media", "Strategy", "Community", "Content"],
    featured: false,
    relatedSlugs: ["bio-oil-skincare-campaign", "bio-oil-retail-packaging"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "ALL") return projects;
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug));
}
