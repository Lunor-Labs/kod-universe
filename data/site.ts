import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "KOD Universe",
  tagline: "A 360° creative agency shaping brands through design, marketing and visual storytelling.",
  description:
    "KOD Universe is a 360° creative agency shaping brands through design, marketing and visual storytelling — with an independent gallery for art, objects and limited drops.",
  url: "https://www.kod.lk",
  nav: [
    { label: "WORK", href: "/work" },
    { label: "SERVICES", href: "/services" },
    { label: "STUDIO", href: "/studio" },
    { label: "GALLERY", href: "/gallery" },
    { label: "NEWS", href: "/news" },
    { label: "CONTACT", href: "/contact" },
  ],
  socialLinks: [
    { platform: "Instagram", href: "https://www.instagram.com/kod.universe", iconName: "Instagram" },
    { platform: "LinkedIn",  href: "https://www.linkedin.com/company/conceptsbykod", iconName: "Linkedin" },
    { platform: "Behance",   href: "https://www.behance.net/koduniverse", iconName: "Behance" },
    { platform: "Facebook",  href: "https://www.facebook.com/kod.universe", iconName: "Facebook" },
  ],
  contact: {
    email: "hello@kod.lk",
    phones: [
      { region: "Sri Lanka Hub", number: "077 200 0504" }
    ],
    locations: [
      "Colombo 07, Sri Lanka"
    ],
  },
};

export const services = [
  { title: "Design", description: "We create identities, objects, spaces and digital experiences." },
  { title: "Marketing", description: "We build strategies and campaigns that connect brands with people." },
  { title: "Visual Storytelling", description: "We turn ideas into stories people can see, feel and remember." },
];
