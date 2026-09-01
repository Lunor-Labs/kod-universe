import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "KOD Universe",
  tagline: "Ancient ideas. Modern impact.",
  description:
    "KOD Universe is a creative studio that transforms ideas into modern brands, stories, and experiences that connect, inspire, and leave a lasting mark.",
  url: "https://koduniverse.com",
  nav: [
    { label: "WORK", href: "/work" },
    { label: "CAPABILITIES", href: "/capabilities" },
    { label: "OUR UNIVERSE", href: "/our-universe" },
    { label: "CONNECT", href: "/connect" },
  ],
  socialLinks: [
    { platform: "Instagram", href: "https://instagram.com/koduniverse", iconName: "Instagram" },
    { platform: "Behance", href: "https://behance.net/koduniverse", iconName: "ExternalLink" },
    { platform: "LinkedIn", href: "https://linkedin.com/company/koduniverse", iconName: "Linkedin" },
    { platform: "X", href: "https://x.com/koduniverse", iconName: "Twitter" },
  ],
  contact: {
    email: "hello@koduniverse.com",
    phone: "+1 (415) 555-0198",
    location: "San Francisco, California",
    locationDetail: "Serving clients worldwide",
  },
};

export const services = [
  { title: "Social Media", description: "Scroll-stopping content that builds communities." },
  { title: "Branding & Identity", description: "Purpose-driven brands that endure." },
  { title: "Package Design", description: "Packaging that tells your story and sells." },
  { title: "Creative Work", description: "Campaigns that engage and inspire." },
  { title: "Digital Experiences", description: "Smart strategy to guide your brand forward." },
];
