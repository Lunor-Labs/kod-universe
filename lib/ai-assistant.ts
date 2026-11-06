import { QuickOption, ChatFormData } from "./chat-storage";

const OPT_QUOTE: QuickOption = {
  id: "opt-get-quote",
  label: "Get a free project quote",
  actionType: "quote_form",
};
const OPT_SERVICES: QuickOption = {
  id: "opt-see-services",
  label: "Explore all services",
  actionType: "services_info",
};
const OPT_PORTFOLIO: QuickOption = {
  id: "opt-see-portfolio",
  label: "View portfolio highlights",
  actionType: "portfolio_info",
};
const OPT_PROCESS: QuickOption = {
  id: "opt-see-process",
  label: "How does working with you work?",
  actionType: "process_info",
};
const OPT_CONTACT: QuickOption = {
  id: "opt-contact-direct",
  label: "Speak to a strategist",
  actionType: "contact_info",
};
const OPT_WHATSAPP: QuickOption = {
  id: "opt-whatsapp",
  label: "Chat on WhatsApp",
  payload: "WHATSAPP_REDIRECT",
};

export function generateAssistantResponse(
  userText: string,
  actionType?: string,
): {
  text: string;
  options?: QuickOption[];
  hasForm?: boolean;
  initialFormData?: Partial<ChatFormData>;
  typingDelay?: number;
} {
  const q = userText.toLowerCase().trim();

  // ── Greetings ──────────────────────────────────────────────────────────
  if (
    !actionType &&
    (q === "hi" ||
      q === "hello" ||
      q === "hey" ||
      q === "hiya" ||
      q === "good morning" ||
      q === "good afternoon" ||
      q === "good evening" ||
      q.startsWith("hi ") ||
      q.startsWith("hello ") ||
      q.startsWith("hey "))
  ) {
    return {
      text: "Hey! Great to have you here 👋\n\nI'm the KOD Universe AI - your creative studio guide. We help ambitious brands stand out through world-class design, marketing, and visual storytelling.\n\nWhat brings you in today?",
      typingDelay: 700,
      options: [
        OPT_QUOTE,
        OPT_SERVICES,
        OPT_PORTFOLIO,
        {
          id: "opt-about-g",
          label: "Tell me about KOD",
          actionType: "about_info",
        },
        OPT_CONTACT,
      ],
    };
  }

  // ── About / Who is KOD ────────────────────────────────────────────────
  if (
    actionType === "about_info" ||
    q.includes("who are you") ||
    q.includes("who is kod") ||
    q.includes("about kod") ||
    q.includes("tell me about") ||
    q.includes("your story") ||
    q.includes("what is kod") ||
    q.includes("what do you do")
  ) {
    return {
      text: "**KOD Universe** is a 360° creative studio based in Colombo, Sri Lanka.\n\nWe exist at the intersection of **ancient wisdom and modern design** - building brands that carry real weight, visual brands that endure, and campaigns that move people.\n\nOur two core arms:\n• **KOD Creative** - Agency services: branding, digital, marketing, visual storytelling\n• **KOD Gallery** - Art, original prints, limited-edition merch & creative objects\n\nFounded with a single belief: *every great brand has a soul*. Our job is to find it and make it visible.",
      typingDelay: 900,
      options: [
        {
          id: "opt-about-studio",
          label: "Meet the studio & founder",
          actionType: "studio_info",
        },
        {
          id: "opt-about-philosophy",
          label: "What's your design philosophy?",
          actionType: "branding_info",
        },
        OPT_PORTFOLIO,
        OPT_QUOTE,
      ],
    };
  }

  // ── Studio / Founder ──────────────────────────────────────────────────
  if (
    actionType === "studio_info" ||
    q.includes("founder") ||
    q.includes("team") ||
    q.includes("studio") ||
    q.includes("who founded") ||
    q.includes("culture") ||
    q.includes("based in")
  ) {
    return {
      text: "**The KOD Studio** is led by a team of strategists, designers, photographers, and storytellers - all deeply invested in the craft.\n\nWe're headquartered in **Colombo 07, Sri Lanka**, with a creative culture built around curiosity, precision, and originality.\n\nOur founder built KOD on the conviction that Sri Lankan creativity belongs on the world stage - and we're proving it every day through the brands and visuals we produce.",
      typingDelay: 850,
      options: [
        OPT_PORTFOLIO,
        {
          id: "opt-process-s",
          label: "How does the creative process work?",
          actionType: "process_info",
        },
        OPT_QUOTE,
        OPT_CONTACT,
      ],
    };
  }

  // ── Process ───────────────────────────────────────────────────────────
  if (
    actionType === "process_info" ||
    q.includes("process") ||
    q.includes("how does it work") ||
    q.includes("how do we start") ||
    q.includes("what happens next") ||
    q.includes("onboarding") ||
    q.includes("next step")
  ) {
    return {
      text: "Our engagement model is built to be clear, collaborative, and results-driven:\n\n**1. Discovery** - We deep-dive into your brand, market, and goals\n**2. Strategy** - We define positioning, messaging, and a creative direction\n**3. Creation** - Our team brings the vision to life across every touchpoint\n**4. Refinement** - Two structured revision rounds, always\n**5. Delivery** - Final files, guidelines, and full handover support\n\nMost projects kick off within 3–5 business days of proposal sign-off.",
      typingDelay: 950,
      options: [
        OPT_QUOTE,
        {
          id: "opt-timeline-p",
          label: "Ask about timelines & pricing",
          actionType: "pricing_info",
        },
        OPT_CONTACT,
      ],
    };
  }

  // ── Services overview ─────────────────────────────────────────────────
  if (
    actionType === "services_info" ||
    q.includes("service") ||
    q.includes("offer") ||
    q.includes("capabilities") ||
    q.includes("what can you") ||
    q.includes("do you do") ||
    q.includes("speciali")
  ) {
    return {
      text: "At **KOD Universe**, our creative disciplines span the full brand journey:\n\n**Design & Identity**\n• Brand strategy, naming & positioning\n• Logo systems & brand guidelines\n• Typography, colour & visual language\n\n**Digital Experiences**\n• Web design & development\n• UI/UX & product design\n\n**Marketing & Campaigns**\n• Brand content & social media\n• Campaign strategy & execution\n\n**Visual Storytelling**\n• Photography & film direction\n• 3D renders & motion design\n\n**Package & Spatial Design**\n• Premium product packaging\n• Environmental & architectural graphics",
      typingDelay: 1000,
      options: [
        {
          id: "opt-branding-d",
          label: "Tell me about branding",
          actionType: "branding_info",
        },
        {
          id: "opt-marketing-d",
          label: "Tell me about marketing & social",
          actionType: "marketing_info",
        },
        {
          id: "opt-motion-d",
          label: "Tell me about 3D & motion",
          actionType: "motion_info",
        },
        {
          id: "opt-photo-d",
          label: "Tell me about photography & film",
          actionType: "photo_info",
        },
        OPT_QUOTE,
      ],
    };
  }

  // ── Branding deep-dive ────────────────────────────────────────────────
  if (
    actionType === "branding_info" ||
    q.includes("brand") ||
    q.includes("logo") ||
    q.includes("identity") ||
    q.includes("visual identity") ||
    q.includes("brand system")
  ) {
    return {
      text: "Great brands aren't just visual - they're felt.\n\nOur **Branding & Identity** work starts with strategy: understanding who you are, who you're for, and what makes you undeniably you. Then we build:\n\n• **Naming & brand positioning**\n• **Logo systems** (primary, secondary, responsive marks)\n• **Typography & colour systems**\n• **Brand guidelines** - so every execution stays consistent\n• **Collateral design** - stationery, presentations, packaging\n\nThe result is a brand identity that earns trust and commands attention - across every screen and surface.",
      typingDelay: 950,
      options: [
        OPT_QUOTE,
        {
          id: "opt-portfolio-brand",
          label: "See branding work in our portfolio",
          actionType: "portfolio_info",
        },
        {
          id: "opt-process-b",
          label: "How does the branding process work?",
          actionType: "process_info",
        },
        OPT_CONTACT,
      ],
    };
  }

  // ── Marketing / Social ────────────────────────────────────────────────
  if (
    actionType === "marketing_info" ||
    q.includes("marketing") ||
    q.includes("social media") ||
    q.includes("campaign") ||
    q.includes("content") ||
    q.includes("ads") ||
    q.includes("instagram") ||
    q.includes("digital marketing")
  ) {
    return {
      text: "Great creative without reach is a whisper. We fix that.\n\n**KOD Marketing & Content** covers:\n\n• **Brand strategy & campaign concepting**\n• **Social media direction** - content pillars, visual systems, copy\n• **Monthly content production** - photography, graphics, video\n• **Launch campaigns** - full-funnel creative\n• **Art direction for ads** - paid social & display\n\nWe don't produce generic content - every post, every asset is built around your brand voice and goals.",
      typingDelay: 900,
      options: [
        OPT_QUOTE,
        {
          id: "opt-photo-m",
          label: "Tell me about photography & film",
          actionType: "photo_info",
        },
        OPT_PORTFOLIO,
        OPT_CONTACT,
      ],
    };
  }

  // ── 3D & Motion ───────────────────────────────────────────────────────
  if (
    actionType === "motion_info" ||
    q.includes("3d") ||
    q.includes("motion") ||
    q.includes("animation") ||
    q.includes("render") ||
    q.includes("video") ||
    q.includes("reel")
  ) {
    return {
      text: "When a brand needs to move, we make it move beautifully.\n\n**KOD 3D & Motion** services include:\n\n• **3D product visualisation** - hyper-real product renders & scenes\n• **Brand motion systems** - animated logos, transitions & idents\n• **Social motion content** - reels, stories & display ads\n• **Showreels & brand films** - cinematic storytelling\n\nWhether you're launching a product or building a brand world - motion makes it unforgettable.",
      typingDelay: 850,
      options: [
        OPT_QUOTE,
        OPT_PORTFOLIO,
        {
          id: "opt-photo-mo",
          label: "Tell me about photography & film",
          actionType: "photo_info",
        },
        OPT_CONTACT,
      ],
    };
  }

  // ── Photography & Film ────────────────────────────────────────────────
  if (
    actionType === "photo_info" ||
    q.includes("photo") ||
    q.includes("film") ||
    q.includes("shoot") ||
    q.includes("cinemat") ||
    q.includes("visual story") ||
    q.includes("documentary")
  ) {
    return {
      text: "Visuals are the first language of a brand.\n\n**KOD Visual Storytelling** covers:\n\n• **Brand & product photography** - editorial, lifestyle & studio\n• **Campaign photography** - art-directed visual narratives\n• **Film direction & cinematography** - brand films, documentaries, reels\n• **Post-production** - retouching, colour grading & edit\n\nEvery shoot is art-directed to align with your brand identity - not just your brief.",
      typingDelay: 850,
      options: [
        OPT_QUOTE,
        OPT_PORTFOLIO,
        {
          id: "opt-motion-ph",
          label: "Tell me about 3D & motion",
          actionType: "motion_info",
        },
        OPT_CONTACT,
      ],
    };
  }

  // ── Spatial / Architecture ────────────────────────────────────────────
  if (
    actionType === "spatial_info" ||
    q.includes("spatial") ||
    q.includes("interior") ||
    q.includes("environmental") ||
    q.includes("architecture") ||
    q.includes("signage") ||
    q.includes("wayfinding") ||
    q.includes("retail design")
  ) {
    return {
      text: "Brands don't live only on screens - they inhabit physical space too.\n\n**KOD Spatial & Architectural Design** includes:\n\n• **Environmental graphic design** - murals, wall graphics, large-format\n• **Retail & showroom brand experience** - how your space feels\n• **Wayfinding & signage systems**\n• **Branded interior concepts** - in collaboration with your architect\n\nWe bridge your visual brand identity into the physical world - so every customer touchpoint is consistent and powerful.",
      typingDelay: 900,
      options: [OPT_QUOTE, OPT_PORTFOLIO, OPT_CONTACT],
    };
  }

  // ── Gallery ───────────────────────────────────────────────────────────
  if (
    actionType === "gallery_info" ||
    q.includes("gallery") ||
    q.includes("art") ||
    q.includes("print") ||
    q.includes("merch") ||
    q.includes("drop") ||
    q.includes("limited edition") ||
    q.includes("buy") ||
    q.includes("shop")
  ) {
    return {
      text: "**KOD Gallery** is the art-and-commerce arm of KOD Universe.\n\nIt's where design becomes collectible:\n\n• **Original Art & Prints** - limited-edition fine art pieces by KOD artists\n• **Merch & Objects** - apparel, accessories and designed objects\n• **Limited Drops** - seasonal collections and artist collaborations\n\nEvery piece carries the same intentionality as our studio work - craft, concept, and care.\n\nExplore the Gallery at **/gallery** on our site.",
      typingDelay: 850,
      options: [
        {
          id: "opt-quote-gallery",
          label: "Artist collaboration inquiry",
          actionType: "quote_form",
        },
        OPT_PORTFOLIO,
        OPT_CONTACT,
      ],
    };
  }

  // ── Portfolio ─────────────────────────────────────────────────────────
  if (
    actionType === "portfolio_info" ||
    q.includes("portfolio") ||
    q.includes("work") ||
    q.includes("projects") ||
    q.includes("examples") ||
    q.includes("case study") ||
    q.includes("past work") ||
    q.includes("show me")
  ) {
    return {
      text: "Our portfolio spans branding, digital, packaging, social content, photography and 3D - across retail, tech, lifestyle, food & beverage, and luxury sectors.\n\nSome recent highlights:\n• **Branding & Identity systems** for product and service brands\n• **Premium packaging design** for consumer brands\n• **Social media design systems** for lifestyle brands\n• **3D product visualisation & motion** for launches\n\nYou can explore everything at **/work** on our website - filter by discipline to find what's most relevant to you.\n\nWant a curated deck for your specific industry?",
      typingDelay: 900,
      options: [
        {
          id: "opt-deck-request",
          label: "Request a curated industry deck",
          actionType: "quote_form",
        },
        OPT_SERVICES,
        OPT_QUOTE,
        OPT_CONTACT,
      ],
    };
  }

  // ── Pricing & Timelines ───────────────────────────────────────────────
  if (
    actionType === "pricing_info" ||
    q.includes("price") ||
    q.includes("cost") ||
    q.includes("how much") ||
    q.includes("budget") ||
    q.includes("investment") ||
    q.includes("package") ||
    q.includes("how long") ||
    q.includes("timeline") ||
    q.includes("time")
  ) {
    return {
      text: "Every project is scoped to your specific needs - so we don't publish fixed prices. But here are typical investment ranges and timelines:\n\n**Brand Identity System** - 2–4 weeks\n**Custom Web Experience** - 3–6 weeks\n**Package Design** - 2–3 weeks\n**Monthly Content Retainer** - Ongoing from month 1\n**3D & Motion** - 1–3 weeks per asset\n**Full Brand Launch Suite** - 4–8 weeks\n\nWe're transparent, structured, and there are never hidden costs. A tailored proposal is always free.",
      typingDelay: 950,
      options: [
        OPT_QUOTE,
        {
          id: "opt-process-pr",
          label: "How does the process work?",
          actionType: "process_info",
        },
        OPT_CONTACT,
      ],
    };
  }

  // ── Quote / Estimate ───────────────────────────────────────────────────
  if (
    actionType === "quote_form" ||
    q.includes("quote") ||
    q.includes("estimate") ||
    q.includes("proposal") ||
    q.includes("start a project") ||
    q.includes("get started") ||
    q.includes("hire")
  ) {
    return {
      text: "Great - let's get your project rolling.\n\nPlease fill in your details below and our lead creative team will review your requirements and come back with a tailored proposal within **24 hours**.",
      hasForm: true,
      initialFormData: { service: "Branding & Identity" },
      typingDelay: 700,
      options: [OPT_SERVICES, OPT_WHATSAPP],
    };
  }

  // ── Contact / Call ─────────────────────────────────────────────────────
  if (
    actionType === "contact_info" ||
    q.includes("phone") ||
    q.includes("email") ||
    q.includes("contact") ||
    q.includes("call") ||
    q.includes("reach") ||
    q.includes("whatsapp") ||
    q.includes("location") ||
    q.includes("address") ||
    q.includes("where are you")
  ) {
    return {
      text: "We'd love to connect directly:\n\n• **Phone / WhatsApp:** +94 77 200 0504\n• **Email:** hello@kod.lk\n• **Studio:** Colombo 07, Sri Lanka\n• **Hours:** Mon – Sat, 9am – 6pm (SLST)\n\nOr drop your name and number below and we'll call you right back.",
      hasForm: true,
      typingDelay: 750,
      options: [OPT_WHATSAPP],
    };
  }

  // ── Frustrated / Negative ──────────────────────────────────────────────
  if (
    q.includes("not helpful") ||
    q.includes("useless") ||
    q.includes("bad") ||
    q.includes("terrible") ||
    q.includes("awful") ||
    q.includes("disappointed") ||
    q.includes("frustrat")
  ) {
    return {
      text: "I'm sorry to hear that - and I mean it. Let me connect you directly with a real person on our team who can help properly.\n\nThe fastest way is via WhatsApp or a quick call - you'll reach someone immediately.",
      typingDelay: 750,
      options: [OPT_WHATSAPP, OPT_CONTACT],
    };
  }

  // ── Thanks / Positive ─────────────────────────────────────────────────
  if (
    q.includes("thank") ||
    q.includes("thanks") ||
    q.includes("great") ||
    q.includes("awesome") ||
    q.includes("perfect") ||
    q.includes("love it") ||
    q.includes("helpful")
  ) {
    return {
      text: "You're very welcome! We're here whenever you need us.\n\nIs there anything else I can help you with - or shall we get your project started?",
      typingDelay: 600,
      options: [
        OPT_QUOTE,
        OPT_WHATSAPP,
        { id: "opt-more-q", label: "I have another question", payload: "" },
      ],
    };
  }

  // ── Generic / Free-text fallback ───────────────────────────────────────
  return {
    text: `Thanks for your message about **"${userText}"**.\n\nOur creative team specialises in building brand identities, digital experiences, marketing campaigns, and visual content that genuinely move the needle.\n\nHow can I point you in the right direction?`,
    typingDelay: 800,
    options: [
      OPT_QUOTE,
      OPT_SERVICES,
      OPT_PORTFOLIO,
      {
        id: "opt-fallback-about",
        label: "Tell me about KOD Universe",
        actionType: "about_info",
      },
      OPT_CONTACT,
    ],
  };
}
