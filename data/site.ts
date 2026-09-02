import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "KOD Universe",
  tagline: "Ancient ideas. Modern impact.",
  description:
    "KOD Universe is a creative studio that transforms ideas into modern brands, stories, and experiences that connect, inspire, and leave a lasting mark.",
  url: "https://koduniverse.com",
  nav: [
    { label: "PORTFOLIO", href: "/work" },
    { label: "SERVICES", href: "/capabilities" },
    { label: "OUR STORY", href: "/our-universe" },
    { label: "CONTACT", href: "/connect" },
  ],
  socialLinks: [
    { platform: "Instagram", href: "https://www.instagram.com/kod.universe", iconName: "Instagram" },
    { platform: "LinkedIn",  href: "https://www.linkedin.com/company/conceptsbykod", iconName: "Linkedin" },
    { platform: "Facebook",  href: "https://www.facebook.com/kod.universe", iconName: "ExternalLink" },
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
