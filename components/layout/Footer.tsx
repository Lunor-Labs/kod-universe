"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { KodLogo } from "@/components/ui/KodLogo";
import { BackToTop } from "@/components/ui/BackToTop";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  BehanceIcon,
} from "@/components/ui/SocialIcons";

const iconMap: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Behance: BehanceIcon,
  Facebook: FacebookIcon,
  ExternalLink,
};

export function Footer() {
  return (
    <footer
      className="bg-void-black text-canvas"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              scroll={true}
              aria-label="KOD Universe - Home"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="cursor-pointer inline-block"
            >
              <KodLogo className="h-20 w-auto text-canvas mb-6 brightness-0 invert" />
            </Link>
            <p className="text-kod-dust/90 text-base leading-relaxed max-w-sm">
              We transform ideas into modern brands, stories, and experiences
              that connect, inspire, and leave a lasting mark.
            </p>
            <p className="font-serif italic text-kod-dust/80 mt-4 text-base">
              Ancient ideas. Modern impact.
            </p>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white/80 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-kod-dust hover:text-canvas transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white/80 mb-6">
              Connect
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block text-base text-kod-dust hover:text-canvas transition-colors duration-200"
              >
                {siteConfig.contact.email}
              </a>
              {siteConfig.contact.phones.map((phone) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.number.replace(/\D/g, "")}`}
                  className="block text-base text-kod-dust hover:text-canvas transition-colors duration-200"
                >
                  {phone.number}{" "}
                  <span className="text-white/60 ml-1">({phone.region})</span>
                </a>
              ))}
              <div className="pt-2 space-y-1">
                {siteConfig.contact.locations.map((loc) => (
                  <p key={loc} className="text-base text-kod-dust/75">
                    {loc}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {siteConfig.socialLinks.map((link) => {
                const Icon = iconMap[link.iconName] ?? ExternalLink;
                return (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.name} on ${link.platform}`}
                    className="w-9 h-9 rounded-full border border-earth flex items-center justify-center 
                               text-dust-rose hover:border-signal-orange hover:text-signal-orange 
                               transition-colors duration-200"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-earth">
        <div className="container-site py-5 pb-6 md:pb-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} KOD Universe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-white/70 hover:text-dust-rose transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/70 hover:text-dust-rose transition-colors"
              >
                Terms of Service
              </Link>
              {/* <BackToTop /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
