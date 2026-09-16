import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServicesOverview() {
  return (
    <section
      className="section-padding-top bg-transparent"
      aria-label="KOD Universe Structure"
    >
      <div className="container-site">
        <div className="text-center mb-16">
          <ScrollReveal variant="up">
            <SectionLabel>Our Structure</SectionLabel>
            <h2 className="heading-section text-earth text-balance mt-3">
              One Universe.{" "}
              <em className="font-serif italic font-normal">Two Worlds.</em>
            </h2>
            <p className="mt-4 text-body text-kod-earth/85 max-w-xl mx-auto">
              We operate as a master brand with two distinct arms - a 360°
              creative agency and an independent gallery for art and commerce.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          <ScrollReveal variant="up" delay={0.1}>
            <div className="group relative bg-white/80 rounded p-8 lg:p-12 h-full flex flex-col hover:shadow-sm transition-all duration-500 overflow-hidden">
              <div className="relative z-10 flex flex-col items-center h-full">
                <p className="eyebrow text-signal-orange mb-4">
                  360° CREATIVE AGENCY
                </p>
                <h3 className="heading-section text-earth mb-4">
                  KoD Creative
                </h3>
                <Image
                  src="/icons/Branding.webp"
                  alt="Design"
                  width={160}
                  height={160}
                  className="group-hover/link:brightness-200"
                />
                <div className="mt-auto flex items-center justify-between">
                  <Link href="/services" className="btn-link">
                    <span>Explore Agency Services</span>
                    <span className="btn-icon-circle">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={0.2}>
            <div className="group relative bg-white/80 rounded p-8 lg:p-12 h-full flex flex-col hover:shadow-sm transition-all duration-500 overflow-hidden">
              <div className="relative z-10 flex flex-col items-center h-full">
                <p className="eyebrow text-clay mb-4">ART + COMMERCE</p>
                <h3 className="heading-section text-earth mb-4">KoD Gallery</h3>
                <Image
                  src="/icons/thumbnail-design.webp"
                  alt="Merch"
                  width={160}
                  height={160}
                />
                <div className="mt-auto flex items-center justify-between">
                  <Link
                    href="/gallery"
                    className="group-hover:text-signal-orange flex items-center gap-2.5 font-bold tracking-widest text-sm uppercase text-earth transition-colors"
                  >
                    <span>Explore Gallery</span>
                    <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={12} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
