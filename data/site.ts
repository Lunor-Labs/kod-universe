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
    { platform: "Behance",   href: "https://www.behance.net/koduniverse", iconName: "Behance" },
    { platform: "Facebook",  href: "https://www.facebook.com/kod.universe", iconName: "Facebook" },
  ],
  contact: {
    email: "hello@koduniverse.com",
    phones: [
      { region: "Sri Lanka Hub", number: "077 200 0504" }
    ],
    locations: [
      "Colombo 07, Sri Lanka"
    ],
  },
};

export const services = [
  { title: "Content Marketing", description: "Strategic content that builds lasting brand communities." },
  { title: "Branding & Identity", description: "Purpose-driven brands that endure." },
  { title: "Package Design", description: "Packaging that tells your story and sells." },
  { title: "Creative Work", description: "Campaigns that engage and inspire." },
  { title: "Digital Experiences", description: "Smart strategy to guide your brand forward." },
];
