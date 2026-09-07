import { ChatMessage, QuickOption, ChatFormData } from "./chat-storage";

export function generateAssistantResponse(
  userText: string,
  actionType?: string
): {
  text: string;
  options?: QuickOption[];
  hasForm?: boolean;
  initialFormData?: Partial<ChatFormData>;
} {
  const query = userText.toLowerCase().trim();

  // Handle quote form requested directly or via option button
  if (actionType === "quote_form" || query.includes("quote") || query.includes("estimate") || query.includes("price") || query.includes("cost")) {
    return {
      text: "Awesome! Please fill out your details below and our lead creative team will analyze your requirements and get back to you with a detailed estimate within 24 hours.",
      hasForm: true,
      initialFormData: {
        service: "Branding & Identity",
      },
      options: [
        {
          id: "opt-services-more",
          label: "See All Services & Capabilities",
          actionType: "services_info",
        },
        {
          id: "opt-contact-direct",
          label: "Chat on WhatsApp Direct",
          actionType: "contact_info",
        },
      ],
    };
  }

  // Handle services inquiry
  if (actionType === "services_info" || query.includes("service") || query.includes("offer") || query.includes("do you do")) {
    return {
      text: "At KOD Universe, we bridge ancient wisdom with cutting-edge design. Our core disciplines include:\n\n1. **Branding & Identity**: Strategy, logo systems & brand guidelines\n2. **Digital Experiences**: Modern websites, web apps & UI/UX\n3. **Content & Creative Marketing**: Campaign strategy & social media\n4. **Package Design**: Premium physical product packaging\n5. **Video & Photography**: High-impact visual storytelling",
      options: [
        {
          id: "opt-get-quote-now",
          label: "Get a free project quote",
          actionType: "quote_form",
        },
        {
          id: "opt-portfolio",
          label: "View portfolio highlights",
          payload: "Tell me about your portfolio and recent work",
        },
        {
          id: "opt-contact-direct",
          label: "Speak to a strategist",
          actionType: "contact_info",
        },
      ],
    };
  }

  // Handle pricing & timeline inquiry
  if (actionType === "pricing_info" || query.includes("time") || query.includes("how long") || query.includes("package")) {
    return {
      text: "Our project timelines and investment tiers vary depending on scope:\n\n• **Brand Identity Systems**: 2-4 weeks\n• **Custom Web Experiences**: 3-6 weeks\n• **Package Design & Print**: 2-3 weeks\n• **Full-Suite Brand Launch**: 4-8 weeks\n\nWe provide tailored proposals with clear deliverables and no hidden fees.",
      options: [
        {
          id: "opt-request-quote",
          label: "Request custom proposal",
          actionType: "quote_form",
        },
        {
          id: "opt-contact-call",
          label: "Schedule discovery call",
          actionType: "contact_info",
        },
      ],
    };
  }

  // Handle direct contact inquiry
  if (actionType === "contact_info" || query.includes("phone") || query.includes("email") || query.includes("contact") || query.includes("call")) {
    return {
      text: "We'd love to connect! You can reach us directly:\n\n• **Phone / WhatsApp**: 077 200 0504\n• **Email**: hello@koduniverse.com\n• **Location**: Colombo 07, Sri Lanka\n\nOr leave your phone number & name below and we'll call you right back!",
      hasForm: true,
      options: [
        {
          id: "opt-whatsapp-launch",
          label: "Open WhatsApp Chat",
          payload: "WHATSAPP_REDIRECT",
        },
      ],
    };
  }

  // Handle portfolio queries
  if (query.includes("portfolio") || query.includes("work") || query.includes("projects") || query.includes("examples")) {
    return {
      text: "We have crafted distinct brand systems and digital experiences across retail, tech, lifestyle, and luxury sectors. Check out our latest featured projects on our Portfolio page (/work). Would you like to request a custom deck for your industry?",
      options: [
        {
          id: "opt-quote-deck",
          label: "Request industry deck & quote",
          actionType: "quote_form",
        },
        {
          id: "opt-services-link",
          label: "Explore capabilities",
          actionType: "services_info",
        },
      ],
    };
  }

  // Generic AI Assistant fallback answer
  return {
    text: `Thank you for reaching out regarding "${userText}". Our creative strategists excel at turning vision into high-performing brand assets. How would you prefer to move forward?`,
    options: [
      {
        id: "opt-fallback-quote",
        label: "Get a free project quote",
        actionType: "quote_form",
      },
      {
        id: "opt-fallback-services",
        label: "Explore our services",
        actionType: "services_info",
      },
      {
        id: "opt-fallback-contact",
        label: "Contact us directly",
        actionType: "contact_info",
      },
    ],
  };
}
