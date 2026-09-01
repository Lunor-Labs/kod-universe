import Link from "next/link";
import { ExternalLink, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { KodLogo } from "@/components/ui/KodLogo";
import { BackToTop } from "@/components/ui/BackToTop";

const iconMap: Record<string, React.ElementType> = {
  Instagram: ExternalLink,
  Linkedin: ExternalLink,
  ExternalLink,
  Twitter: ExternalLink,
};

export function Footer() {
  return (
    <footer
      className="bg-void-black text-canvas"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer */}
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="KOD Universe — Home">
              <KodLogo className="h-12 w-auto text-canvas mb-6" />
            </Link>
            <p className="text-dust-rose text-sm leading-relaxed max-w-xs">
              We transform ideas into modern brands, stories, and experiences that connect,
              inspire, and leave a lasting mark.
            </p>
            <p className="font-serif italic text-secondary mt-4 text-sm">
              Ancient ideas. Modern impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-dust-rose hover:text-canvas transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & social */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-6">
              Connect
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block text-sm text-dust-rose hover:text-canvas transition-colors duration-200"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="block text-sm text-dust-rose hover:text-canvas transition-colors duration-200"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-sm text-secondary">
                {siteConfig.contact.location}
              </p>
            </div>

            {/* Social */}
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

      {/* Bottom bar */}
      <div className="border-t border-earth">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-secondary">
              © {new Date().getFullYear()} KOD Universe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-secondary hover:text-dust-rose transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-secondary hover:text-dust-rose transition-colors"
              >
                Terms of Service
              </Link>
              <BackToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
