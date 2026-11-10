import type { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: "post-news-1",
    slug: "introducing-kod-universe",
    title: "A New Universe Opens: Introducing KOD Universe",
    subtitle:
      "A new online home for ideas, brands, visual stories, and the creative worlds still to come.",
    excerpt:
      "The new KOD Universe website brings our work in design, marketing and visual storytelling together, with a new chapter for artists on the horizon.",
    seoTitle: "Introducing KOD Universe | Creative Agency in Sri Lanka",
    seoDescription:
      "Meet KOD Universe, a Sri Lankan creative agency bringing together brand design, marketing, visual storytelling and an upcoming artist-led Gallery.",
    type: "NEWS",
    category: "STUDIO NEWS",
    coverImage: {
      src: "/news/kod-universe-launch-hero.jpg",
      alt: "Original illustrative artwork created for this news announcement; not a photograph of KOD premises.",
      width: 1600,
      height: 900,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "November 10, 2026",
    readTime: "3 min read",
    tags: [
      "Studio News",
      "KOD Universe",
      "Launch",
      "Creative Agency",
      "Sri Lanka",
    ],
    featured: true,
    ctas: [
      { label: "Explore Our Work", href: "/portfolio" },
      { label: "Meet the Founder", href: "/about-us/founder" },
    ],
    content: [
      {
        paragraphs: [
          "A good idea rarely stays in one place. It can begin as a sketch, become a campaign, move onto a screen, or grow into something people remember long after they've seen it.",
          "That's the thinking behind KOD Universe. And with our new website, we're opening a space to share the work we've created, the people behind it, and the ideas we're building next.",
          "Based in Sri Lanka, KOD Universe is a creative agency working across three connected disciplines: Design, Marketing, and Visual Storytelling. We bring strategy and execution together, whether the project is a new brand identity, an ambitious launch, or a story that needs a visual world of its own.",
        ],
      },
      {
        heading: "One creative universe, three connected disciplines",
        paragraphs: [
          "Design gives an idea its identity. From branding and packaging to graphic design and creative concepts, we shape how a brand looks, feels, and communicates.",
          "Marketing takes that idea into the world. Our work includes campaign concepts, product launches, digital content, and physical brand experiences created to connect with real audiences.",
          "Visual Storytelling brings an idea to life through concept art, art direction, commercial production, film, and other image-led experiences. Sometimes a single frame is where the strongest story begins.",
        ],
      },
      {
        heading: "The people and ideas behind KOD",
        paragraphs: [
          "KOD Universe is founded by Ishara Kodithuwakku, whose professional creative career began in 2014. His experience spans graphic design, freelance art direction with Iraj Productions, concept art, commercial direction, digital painting, and canvas art. He is also the founder of Rouka Clothing.",
          "That mix of commercial craft and independent artistic practice shapes how we work. We don't see design, storytelling, art, and business as separate territories. The most interesting ideas often happen where they overlap.",
        ],
      },
      {
        heading: "The next chapter: KOD Gallery",
        paragraphs: [
          "Alongside the agency, we're developing KOD Gallery: an upcoming space connecting original art, artists, creative merchandise, and collaborative projects. Its three planned areas-Art, Merch, and Drops-will be introduced as they're ready. Artist registration and shopping are not open yet.",
          "For now, explore our selected work, get to know the people behind KOD, and follow the stories we share here. This website is our new starting point, not the end of the journey.",
        ],
      },
    ],
  },
  {
    id: "post-news-2",
    slug: "kod-gallery-art-merch-drops-coming-soon",
    title: "KOD Gallery Is Coming: Art, Merch & Creative Drops",
    subtitle:
      "Three spaces for discovering original work, connecting with artists, and exploring what art can become.",
    excerpt:
      "Art to discover. Merch to wear. Stories to experience. Meet the three creative spaces being developed for KOD Gallery.",
    seoTitle: "KOD Gallery Coming Soon | Art, Merch & Creative Drops",
    seoDescription:
      "Discover the upcoming KOD Gallery: artist profiles, original artwork, artist and KOD merchandise, creative collaborations, films and events.",
    type: "NEWS",
    category: "STUDIO NEWS",
    coverImage: {
      src: "/news/kod-gallery-coming-soon-hero.jpg",
      alt: "Concept illustration of the future KOD Gallery vision; not a photograph of a completed physical Gallery or released merchandise.",
      width: 1600,
      height: 900,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "November 10, 2026",
    readTime: "3 min read",
    tags: [
      "KOD Gallery",
      "Coming Soon",
      "Art",
      "Merch",
      "Drops",
      "Studio News",
    ],
    featured: false,
    ctas: [{ label: "Explore the Gallery Preview", href: "/gallery" }],
    content: [
      {
        paragraphs: [
          "Not every artwork is meant to stay on a wall. Some pieces find their way into the things we wear. Others spark a film, a collaboration, or an experience that brings people together.",
          "That's the idea taking shape behind KOD Gallery, a new creative platform currently in development at KOD Universe.",
          "The Gallery will bring artists, audiences, original work, and experimental creative projects into one space. We are planning it around three areas: Art, Merch, and Drops. Each has a different purpose, but all begin with the same belief: good creative work deserves to be discovered.",
        ],
      },
      {
        heading: "01 / Art - Meet the artists behind the work",
        paragraphs: [
          "The Art section is being designed for artists who want to share what they create and for visitors who want to discover something new.",
          "Our plan is to allow artists to register, build profiles, and present original work, including digital paintings, canvas paintings, and other artistic expressions. Visitors will be able to explore the work alongside the people and stories behind it.",
          "We want the experience to feel more personal than scrolling past an image. Knowing who made something can change the way you see it.",
        ],
      },
      {
        heading: "02 / Merch - Art that travels with you",
        paragraphs: [
          "Merch will bring selected artworks into new forms. We are developing both KOD Universe merchandise and artist collaborations that translate original creative work into wearable or collectible pieces.",
          "Our goal is not simply to put an image on a product. We want the artist's identity and the story behind each collection to matter, too.",
          "When this area opens, visitors will be able to explore the collections and purchase available merchandise through the platform. No collections are on sale yet.",
        ],
      },
      {
        heading: "03 / Drops - Ideas beyond a single format",
        paragraphs: [
          "Drops will be our space for collaborations and creative releases that don't fit neatly into one category.",
          "We're planning projects with artists and other creators, including events, posters, original storytelling, short films, cinematic work, and other experimental experiences. Some may exist for a moment; others may grow into larger stories.",
          "The format will change from project to project. That's exactly the point.",
        ],
      },
      {
        heading: "When will KOD Gallery open?",
        paragraphs: [
          "KOD Gallery is still being developed, and no opening date has been announced. Artist registration, merchandise purchasing, and Drops will become available as the respective features are completed.",
          "Until then, the Gallery page is a first look at what we're creating. Follow KOD Universe for future announcements and opportunities to get involved.",
        ],
        quote:
          "ART. MERCH. DROPS. Three spaces. One growing creative universe.",
      },
    ],
  },
  {
    id: "post-news-3",
    slug: "behind-bio-oil-dry-skin-gel-launch",
    title: "Behind the Work: The Bio-Oil Dry Skin Gel Launch Campaign",
    subtitle:
      "How a product story moved from anticipation to real-world experiences across digital, retail, and event touchpoints.",
    excerpt:
      "From the first teasers in December 2020 to the January 2021 launch, discover how campaign design connected digital communication and real-world brand experiences.",
    seoTitle: "Behind the Bio-Oil Dry Skin Gel Launch | KOD Universe",
    seoDescription:
      "Explore the creative work behind the Bio-Oil Dry Skin Gel launch in Sri Lanka, from December 2020 teasers to January 2021 retail and event activations.",
    type: "NEWS",
    category: "STUDIO NEWS",
    coverImage: {
      src: "/news/bio-oil-behind-the-work-hero.jpg",
      alt: "Editorial concept illustration for the Bio-Oil Dry Skin Gel launch article; authentic campaign photography is shown below.",
      width: 1600,
      height: 900,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "November 10, 2026",
    readTime: "4 min read",
    tags: [
      "Behind the Work",
      "Bio-Oil",
      "Campaign",
      "Product Launch",
      "Sri Lanka",
    ],
    featured: false,
    ctas: [
      {
        label: "View the Bio-Oil Project",
        href: "/portfolio/dsg-launch-campaign",
      },
    ],
    content: [
      {
        paragraphs: [
          "A product launch is more than the day a product becomes available. It's the weeks of planning that lead up to it-the messages people see, the experiences they walk into, and the details they take away.",
          "For the Bio-Oil Dry Skin Gel launch in Sri Lanka, KOD's creative work connected digital communication with physical brand experiences. The campaign began on 25 December 2020, leading into the product launch on 22 January 2021.",
          "The challenge was to carry a recognisable brand story across many different touchpoints while keeping the visual experience consistent.",
        ],
      },
      {
        heading: "Building anticipation before launch day",
        paragraphs: [
          "The rollout began with teaser and countdown content designed to introduce the coming launch before the full reveal. Alongside social media creative, the campaign included influencer activity and email direct marketing (EDM), allowing the message to reach audiences in different contexts.",
          "Each format had a different job. A teaser had to attract attention quickly; a longer message could provide more context; influencer content could bring a human voice to the campaign. They all needed to feel part of one visual story.",
        ],
      },
      {
        heading: "Taking the campaign into the real world",
        paragraphs: [
          "The campaign extended into physical spaces through stall design and activation, where visitors could engage directly with the brand. Supporting materials included leaflets, promotional and display elements, T-shirt designs for sales representatives and managers, and pharmacy gondolas.",
          "These pieces may appear very different on a production checklist. From the audience's perspective, though, they should feel like one experience-from what they see online to what they encounter at a retail display or event.",
        ],
      },
      {
        heading: "The creative lesson",
        paragraphs: [
          "What made this project interesting wasn't just the number of deliverables. It was the need to think across every moment of the customer journey. Digital content, uniforms, printed pieces, and physical environments had to reinforce the same campaign identity.",
          "For KOD Universe, projects like this show what happens when design, marketing, and visual storytelling are planned together instead of separately.",
          "The campaign remains part of our selected work. Explore the project gallery to see the actual design and activation materials.",
        ],
      },
      {
        heading: "Original campaign image supplied by KOD Universe",
        paragraphs: [],
        image: {
          src: "/portfolio/marketing/dsg-launch-campaign/bio-oil-dsg-exhibition-stand.webp",
          alt: "Authentic Bio-Oil Dry Skin Gel launch campaign exhibition stand and activation supplied by KOD Universe",
          caption:
            "Original campaign photograph from the Bio-Oil Dry Skin Gel launch activation in Sri Lanka.",
        },
      },
    ],
  },
  {
    id: "post-1",
    slug: "kod-universe-expands-spatial-architectural-designing",
    title:
      "KOD Universe Expands Spatial & Architectural Designing Capabilities",
    subtitle:
      "Bridging 3D CGI photorealism with physical luxury hospitality environments",
    excerpt:
      "Announcing the formal expansion of our spatial architecture wing, bringing together holistic masterplanning, atmospheric 3D visualization, and brand-led interior experiences for visionary hospitality clients.",
    type: "NEWS",
    category: "STUDIO NEWS",
    coverImage: {
      src: "/portfolio/Design/architectural-design/ibiza-mirissa/ibiza-mirissa-pavilion-plaza.webp",
      alt: "IBIZA Mirissa Oceanfront Villa and Infinity Pool",
      width: 1920,
      height: 1080,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "September 15, 2026",
    readTime: "4 min read",
    tags: [
      "Studio News",
      "Spatial Design",
      "Architecture",
      "3D Visualization",
      "IBIZA Mirissa",
    ],
    featured: true,
    content: [
      {
        heading: "A New Chapter in Spatial Storytelling",
        paragraphs: [
          "For years, KOD Universe has operated at the intersection of brand strategy, high-touch packaging, and commercial film. Today, we are proud to formally unveil our expanded Spatial & Architectural Designing practice-a discipline built to translate brand narratives directly into physical, three-dimensional spaces.",
          "Modern luxury is no longer defined merely by materials; it is defined by atmosphere, light physics, and the deliberate choreography of human movement through a landscape. By uniting our 3D animation heritage with architectural masterplanning, we provide clients with an unbroken bridge between conceptual vision and tactile construction.",
        ],
        quote:
          "Architecture is not just concrete and timber-it is an emotional continuum where light, sound, and brand philosophy converge into an unforgettable memory.",
      },
      {
        heading: "From Digital Explorations to Built Environments",
        paragraphs: [
          "Our work on IBIZA Mirissa Spatial Architecture exemplified this approach. Every sunset shadow, ocean breeze corridor, and open-air timber lattice was modeled to accurate geospatial coordinates before any ground was broken.",
          "This gives property developers, hospitality founders, and private estate owners the confidence to preview, iterate, and refine their spatial investments with cinematic precision.",
        ],
        image: {
          src: "/portfolio/Design/architectural-design/ibiza-mirissa/ibiza-mirissa-concept-01.webp",
          alt: "IBIZA Mirissa coastal terrace lounge render",
          caption:
            "Atmospheric dusk rendering of the coastal terrace lounge at IBIZA Mirissa.",
        },
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "As we look forward into the remainder of 2026 and beyond, our spatial team is actively collaborating on private villas, boutique resort pavilions, and branded commercial installations across Sri Lanka and the UAE.",
          "We welcome visionary developers and architects to connect with us and explore how KOD Universe can shape their spatial horizon.",
        ],
      },
    ],
  },
  {
    id: "post-2",
    slug: "from-hobby-to-calling-creative-fuel",
    title: "From Grade 10 Curiosity to a Lifelong Calling",
    subtitle:
      "Why work never makes a creator feel tired when passion leads the way",
    excerpt:
      "A personal reflection by founder Ishara Kodithuwakku on how early schoolboy experiments evolved into a lifelong devotion to craft, where the creative challenges of others become the ultimate fuel for passion.",
    type: "BLOG",
    category: "DESIGN ESSAYS",
    coverImage: {
      src: "/main/profile.webp",
      alt: "Ishara Kodithuwakku profile portrait",
      width: 853,
      height: 1024,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "September 10, 2026",
    readTime: "5 min read",
    tags: ["Philosophy", "Creative Journey", "Founder Essay", "Mentorship"],
    featured: false,
    content: [
      {
        heading: "The Late-Night Canvas in Grade 10",
        paragraphs: [
          "It never started with a business plan. In Grade 10 at Walasmulla National School, while studying within the Advanced Level mathematics stream, my true fascination began the moment homework books were set aside.",
          "Late into the evening, I would open digital software and experiment with vector shapes, typeface curves, and color gradients. There were no client briefs, no invoices, and no looming deadlines-only the pure, uninhibited joy of making something exist where blank space had been a moment before.",
        ],
        quote:
          "When a hobby turns into a lifelong calling, work never makes you tired. The creative needs of others are fuel for my passion.",
      },
      {
        heading: "Where Energy Multiplies Instead of Depleting",
        paragraphs: [
          "People often ask how creative directors sustain long hours across multiple disciplines-from commercial film sets to 3D architectural models and packaging dielines. The answer is simple: when your profession is your natural playground, time works differently.",
          "Instead of draining energy, solving complex aesthetic dilemmas revitalizes the mind. Every client brings a spark of ambition they have carried in their chest for months or years. Being trusted to give that spark form, color, and voice is a sacred privilege.",
        ],
      },
      {
        heading: "The Responsibility of the Craft",
        paragraphs: [
          "As KOD Universe continues to grow, this remains our foundational compass. We don't chase fleeting social algorithms or superficial visual noise. We listen deeply to what our clients need, and we craft solutions that endure.",
        ],
      },
    ],
  },
  {
    id: "post-3",
    slug: "ancient-traces-modern-impact-brand-philosophy",
    title:
      "Ancient Traces, Modern Impact: Finding Visual Identity that Endures",
    subtitle:
      "Why borrowing from timeless cultural symbols builds more resilient brands",
    excerpt:
      "Trends are born and die within calendar quarters. By studying ancient rock inscriptions, geometric astrolabes, and cultural symbolism, we craft brand identities that outlast fleeting aesthetic fads.",
    type: "BLOG",
    category: "BRAND STRATEGY",
    coverImage: {
      src: "/assets/cave-painting-bento.webp",
      alt: "Ancient cave painting and astrolabe symbolism",
      width: 1200,
      height: 800,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "August 15, 2026",
    readTime: "5 min read",
    tags: ["Brand Philosophy", "Identity Design", "Symbolism", "Culture"],
    featured: false,
    content: [
      {
        heading: "The Trap of Contemporary Homogeneity",
        paragraphs: [
          "Open any design showcase today and you will witness an endless sea of geometric sans-serif logos, identical pastel gradients, and generic minimalism. Brands look more like each other than ever before.",
          "When everyone is looking at the same contemporary design feeds for inspiration, the output inevitably homogenizes. At KOD Universe, our philosophy has always been different: look backwards in time to step forward into the future.",
        ],
        quote:
          "A brand that borrows only from today will look outdated tomorrow. A brand that connects to ancient human memory remains timeless.",
      },
      {
        heading: "The Geometry of the Astrolabe",
        paragraphs: [
          "Consider the ancient astrolabe-a navigational instrument used by mariners and astronomers to track stars and steer across uncharted oceans. It is simultaneously an exquisite piece of mathematical engineering and a poetic work of visual art.",
          "When we design an identity mark-whether for an apparel house like ROUKA or an artisanal roaster like Coffee 1911-we seek that same mathematical balance. Every curve is intentional; every proportion has gravity.",
        ],
      },
    ],
  },
  {
    id: "post-4",
    slug: "visual-storytelling-commercial-film-production",
    title: "Cinematic Commercial Direction: Storyboarding for Human Resonance",
    subtitle:
      "Behind the lens of high-velocity commercials, music videos, and TV campaigns",
    excerpt:
      "Exploring the discipline of commercial storytelling, costume design, and visual keyframing learned through leading productions for Union Assurance, Iraj Productions, and national media campaigns.",
    type: "BLOG",
    category: "DESIGN ESSAYS",
    coverImage: {
      src: "/portfolio/visual-storytelling/union-assurance-commercial/union-assurance-commercial-hero.webp",
      alt: "Union Assurance Commercial Storytelling Keyframe",
      width: 1672,
      height: 941,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "July 29, 2026",
    readTime: "4 min read",
    tags: ["Commercials", "Film Direction", "Storyboarding", "Union Assurance"],
    featured: false,
    content: [
      {
        heading: "The First Three Seconds",
        paragraphs: [
          "Commercial storytelling is an art form under intense pressure. In feature film, a director has twenty minutes to establish mood and character. In modern commercial media, you have three seconds before the viewer's thumb swipes away.",
          "Every frame must communicate story, emotion, and brand identity simultaneously. This requires obsessive attention to lighting temperature, actor posture, costume texture, and acoustic pacing.",
        ],
        quote:
          "Directing a commercial is not about showing the product-it is about revealing the emotional truth of the person who uses it.",
      },
      {
        heading: "From Script to Screen: Union Assurance Uniship",
        paragraphs: [
          "Collaborating on the Union Assurance PLC 'Uniship' commercial campaign alongside Hashtag Sri Lanka and KoD Productions proved the power of genuine narrative. We focused on authentic ambition, young professionals, and human determination rather than corporate bureaucracy.",
          "The result was a campaign that drove record engagement, high brand favorability, and memorable community conversations.",
        ],
      },
    ],
  },
  {
    id: "post-5",
    slug: "sustainable-streetwear-rouka-journey",
    title: "ROUKA: Building a Sustainable Streetwear Label from Ground Up",
    subtitle:
      "From limited-edition crewneck drops to an intentional fashion philosophy",
    excerpt:
      "How ROUKA was conceived as an answer to mindful consumption, blending 100% natural cotton apparel with bold graphic identity and direct-to-consumer authenticity.",
    type: "NEWS",
    category: "STUDIO NEWS",
    coverImage: {
      src: "/portfolio/Design/branding-identity/branding/rouka/rouka-1.webp",
      alt: "ROUKA brand identity and streetwear showcase",
      width: 1672,
      height: 941,
    },
    author: {
      name: "Ishara Kodithuwakku",
      role: "Founder & Creative Director",
      avatar: "/main/profile.webp",
      linkedIn: "https://www.linkedin.com/in/ishara-kod/",
    },
    publishedAt: "July 12, 2026",
    readTime: "5 min read",
    tags: ["Fashion", "Streetwear", "ROUKA", "Sustainable Apparel"],
    featured: false,
    content: [
      {
        heading: "What Makes You Wear Clothes?",
        paragraphs: [
          "ROUKA was born out of a fundamental question: 'To observe, absorb, transform, and inspire. What makes you wear clothes?' In an era of disposable fast fashion, ROUKA was founded to celebrate life as an act of creation and embodiment.",
          "Backed by the creative engine of KOD Universe, we launched with limited-edition 100% cotton unisex crewneck collections designed, printed, and crafted with uncompromising local pride in Sri Lanka.",
        ],
        quote:
          "Life is to create and embody all that we create. Apparel should be a statement of intentionality, not convenience.",
      },
      {
        heading: "The 360 Brand Ecosystem",
        paragraphs: [
          "Building ROUKA allowed our studio to execute every facet of our 360 methodology: logomark design, fabric sourcing, typography tags, direct-to-consumer digital commerce, and narrative social media storytelling.",
          "It serves as a living proof of how thoughtful branding and honest materials resonate deeply with modern wearers.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return posts.slice(0, count);

  return posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === current.category && b.category !== current.category)
        return -1;
      if (b.category === current.category && a.category !== current.category)
        return 1;
      return 0;
    })
    .slice(0, count);
}

// Aliases for blog naming
export const blogs = posts;
export const getBlogBySlug = getPostBySlug;
export const getRelatedBlogs = getRelatedPosts;
