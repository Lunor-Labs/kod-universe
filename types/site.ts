// Site-wide type definitions

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  locationDetail: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  nav: NavItem[];
  socialLinks: SocialLink[];
  contact: ContactInfo;
}
