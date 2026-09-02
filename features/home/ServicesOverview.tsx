import Link from "next/link";
import {
  ArrowRight,
  Share2,
  Fingerprint,
  Package,
  Palette,
  Globe,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const capabilityIcons: Record<string, React.ElementType> = {
  Share2,
  Fingerprint,
  Package,
  Palette,
  Globe,
};

const caps = [
  {
    iconName: "Share2",
    title: "Social Media",
    description:
      "Scroll-stopping content that sparks conversations and builds communities.",
    href: "/capabilities#social-media",
  },
  {
    iconName: "Fingerprint",
    title: "Branding & Identity",
    description:
      "Purpose-driven brands with identity systems that inspire trust and endure.",
    href: "/capabilities#branding-and-identity",
  },
  {
    iconName: "Package",
    title: "Package Design",
    description:
      "Packaging that protects, persuades, and elevates your product on every shelf.",
    href: "/capabilities#package-design",
  },
  {
    iconName: "Palette",
    title: "Creative Work",
    description:
      "Campaigns, content, and visuals that tell powerful stories across any medium.",
    href: "/capabilities#creative-work",
  },
  {
    iconName: "Globe",
    title: "Digital Experiences",
    description:
      "Websites and digital experiences crafted for clarity, and conversion.",
    href: "/capabilities#digital-experiences",
  },
];

export function ServicesOverview() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Our capabilities"
    >
      <div className="container-site">
        <div className="text-center mb-14">
          <ScrollReveal variant="down">
            <SectionLabel>Our creative services</SectionLabel>
            <h2 className="font-semibold text-earth text-display-lg text-balance">
              End-to-end creative{" "}
              <em className="font-serif italic font-normal">solutions.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {caps.map((cap, index) => {
            const Icon = capabilityIcons[cap.iconName] ?? Share2;
            return (
              <ScrollReveal key={cap.title} variant={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <Link
                  href={cap.href}
                  className="group relative bg-canvas border border-border-warm/30 rounded p-5
                             hover:border-dust-rose hover:shadow-sm transition-all duration-300
                             focus-visible:outline-solar-gold flex flex-col h-full"
                >
                  <div
                    className="w-16 h-16 rounded border border-border-warm/30 flex items-center justify-center mb-4
                               group-hover:border-signal-orange group-hover:text-signal-orange transition-colors duration-200 text-earth"
                  >
                    <Icon size={28} aria-hidden="true" />
                  </div>
  
                  <h3
                    className="font-metropolis font-semibold text-earth text-sm mb-2 
                                 group-hover:text-signal-orange transition-colors duration-200"
                  >
                    {cap.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed flex-1">
                    {cap.description}
                  </p>
                  <div className="mt-4 flex items-center justify-end">
                    <ArrowRight
                      size={13}
                      className="text-secondary group-hover:text-signal-orange group-hover:translate-x-1 
                                 transition-all duration-200 p-1 w-6 h-6 rounded-full border border-border-warm"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="zoomIn" delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.1em] 
                         uppercase text-earth hover:text-signal-orange transition-colors duration-200 group"
            >
              View all capabilities
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1 p-1 w-6 h-6 rounded-full border border-border-warm"
                aria-hidden="true"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
