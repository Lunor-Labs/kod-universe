import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { ComingSoonCountdown } from "@/components/coming-soon/ComingSoonCountdown";
import { KodLogo } from "@/components/ui/KodLogo";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  BehanceIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";
import { formatCountdownLabel, getCountdownParts } from "@/lib/launch";

const iconMap: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Behance: BehanceIcon,
  Facebook: FacebookIcon,
  ExternalLink,
};

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const now = Date.now();
  const parts = getCountdownParts(now);
  const summary = formatCountdownLabel(parts);
  const minuteBucket = Math.floor(now / 60000);

  const title = parts.isLaunched
    ? "The Cave Is Open - KOD Universe"
    : `Launching in ${summary} - The Cave Is Almost Open`;

  const description = parts.isLaunched
    ? "KOD Universe is now live. Explore design, marketing, and visual storytelling."
    : `Countdown: ${summary} remaining until launch on November 11, 2026 at 11:11:11 AM SLST.`;

  const ogImageUrl = `/api/og/coming-soon?t=${minuteBucket}`;

  return {
    title,
    description,
    alternates: { canonical: "/coming-soon" },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "KOD Universe",
      url: "https://www.kod.lk/coming-soon",
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@koduniverse",
      images: [ogImageUrl],
    },
  };
}

export default function ComingSoonPage() {
  const phone = siteConfig.contact.phones[0]?.number || "077 200 0504";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0c0a09] text-white flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image
          src="/coming-soon-mobile.jpg"
          alt="KOD Universe — The Cave is Almost Open"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-95 md:hidden"
          priority
        />
        <Image
          src="/coming-soon.png"
          alt="KOD Universe — The Cave is Almost Open"
          fill
          sizes="100vw"
          className="hidden md:block object-cover object-center opacity-90"
          priority
        />
        <div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0c0a09]/95 via-[#0c0a09]/70 lg:via-[#0c0a09]/55 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/25 to-[#0c0a09]/90 md:from-[#0c0a09]/65 md:via-transparent md:to-[#0c0a09]/90"
          aria-hidden="true"
        />
      </div>

      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <KodLogo className="h-12 sm:h-14 w-auto brightness-0 invert drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]" />
          <div className="hidden sm:block h-6 w-px bg-white/20" />
          <span className="hidden sm:inline-block text-[11px] font-metropolis font-semibold tracking-[0.24em] uppercase text-amber-100/75">
            Creative Agency &amp; Gallery
          </span>
        </div>
      </header>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-metropolis font-semibold tracking-[0.28em] uppercase text-kod-gold mb-4">
            Ancient Ideas · Modern Impact
          </p>

          <h1 className="font-editorial italic text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.03] tracking-tight mb-5 drop-shadow-lg">
            The Cave Is <br className="hidden sm:inline" />
            <span className="not-italic font-metropolis font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-kod-gold">
              Almost Open
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-kod-mist/85 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-light">
            Our new digital home for{" "}
            <span className="text-white font-medium">Design</span>,{" "}
            <span className="text-white font-medium">Marketing</span>,{" "}
            <span className="text-white font-medium">Visual Storytelling</span>,
            and <span className="text-white font-medium">KOD Gallery</span> is
            almost ready.
          </p>

          <ComingSoonCountdown />
        </div>
      </div>

      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-6 sm:pb-8">
        <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-amber-100/80">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-kod-gold transition-colors"
            >
              <Mail size={14} className="text-kod-orange" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-kod-gold transition-colors"
            >
              <Phone size={14} className="text-kod-orange" />
              <span>{phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.map((link) => {
              const Icon = iconMap[link.iconName] ?? ExternalLink;
              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${link.platform}`}
                  className="w-9 h-9 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-amber-100/80 hover:border-kod-gold hover:text-kod-gold transition-colors"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}
