import Link from "next/link";
import { ArrowRight, Share2, Fingerprint, Package, Palette, Globe } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
    description: "Scroll-stopping content that sparks conversations and builds communities.",
    href: "/capabilities#social-media",
  },
  {
    iconName: "Fingerprint",
    title: "Branding & Identity",
    description: "Purpose-driven brands with identity systems that inspire trust and endure.",
    href: "/capabilities#branding-and-identity",
  },
  {
    iconName: "Package",
    title: "Package Design",
    description: "Packaging that protects, persuades, and elevates your product on every shelf.",
    href: "/capabilities#package-design",
  },
  {
    iconName: "Palette",
    title: "Creative Work",
    description: "Campaigns, content, and visuals that tell powerful stories across any medium.",
    href: "/capabilities#creative-work",
  },
  {
    iconName: "Globe",
    title: "Digital Experiences",
    description: "Websites and digital experiences crafted for clarity, connection, and conversion.",
    href: "/capabilities#digital-experiences",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white border-t border-border-warm" aria-label="Our capabilities">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionLabel>Our creative services</SectionLabel>
          <h2 className="font-metropolis font-semibold text-earth text-display-lg text-balance">
            End-to-end creative{" "}
            <em className="font-serif italic font-normal">solutions.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {caps.map((cap) => {
            const Icon = capabilityIcons[cap.iconName] ?? Share2;
            return (
              <Link
                key={cap.title}
                href={cap.href}
                className="group relative bg-canvas border border-border-warm rounded-sm p-5
                           hover:border-dust-rose hover:shadow-sm transition-all duration-300
                           focus-visible:outline-solar-gold flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-sm border border-border-warm flex items-center justify-center mb-4
                             group-hover:border-signal-orange group-hover:text-signal-orange transition-colors duration-200 text-earth"
                >
                  <Icon size={16} aria-hidden="true" />
                </div>

                <h3 className="font-metropolis font-semibold text-earth text-sm mb-2 
                               group-hover:text-signal-orange transition-colors duration-200">
                  {cap.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed flex-1">
                  {cap.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center justify-end">
                  <ArrowRight
                    size={13}
                    className="text-secondary group-hover:text-signal-orange group-hover:translate-x-1 
                               transition-all duration-200"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.1em] 
                       uppercase text-earth hover:text-signal-orange transition-colors duration-200 group"
          >
            View all capabilities
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
