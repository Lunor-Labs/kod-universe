import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { serviceGroups } from "@/data/capabilities";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Agency Services - KoD Creative",
  description:
    "KoD Creative transforms abstract ideas into meaningful brands, experiences, and digital ecosystems.",
  alternates: { canonical: "/services" },
};

const pillarImages: Record<string, string> = {
  marketing: "/icons/social-media.webp",
  design: "/icons/poster-design.webp",
  "visual-storytelling": "/icons/visual-storytelling.webp",
};

const deliverableItems = [
  "Strategic clarity and creative direction",
  "Distinct brand identity and design systems",
  "Compelling content and visual assets",
  "Packaging and digital assets that perform",
  "Collaborative partnership",
  "Ongoing support for lasting growth",
];

export default function CapabilitiesPage() {
  return (
    <main className="relative bg-canvas  overflow-hidden">
      <section
        className="relative bg-earth overflow-hidden texture-cave flex items-center justify-center min-h-[80vh] "
        aria-label="Capabilities page hero"
      >
        <div className="absolute inset-0 opacity-90" aria-hidden="true">
          <video
            src="/video/video-4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-clay mb-5">
                Strategy. Design. Story. Impact.
              </p>
              <h1 className="heading-hero text-kod-earth mb-6">
                How Ideas Become{" "}
                <em className="font-serif italic font-normal text-kod-earth">
                  Impact.
                </em>
              </h1>
              <p className="text-lead text-kod-earth max-w-sm mb-10">
                KOD Universe is a creative studio that transforms ideas into
                meaningful brands, experiences, and expressions that connect and
                endure.
              </p>
              <Link href="/contact-us" className="btn-primary">
                <span>Start a project</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-canvas via-canvas/80 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />
      </section>
      <section className="pb-32 bg-canvas" aria-label="Our core disciplines">
        <div className="container-site space-y-8 md:space-y-12">
          {serviceGroups.map((group, index) => (
            <ScrollReveal
              key={group.id}
              variant="up"
              className="relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div
                  className={`lg:col-span-4 h-64 w-full relative  overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={pillarImages[group.id]}
                    alt={group.title}
                    fill
                    className="object-contain transition-transform duration-[2s] ease-out group-hover:scale-105 rounded-sm  py-8 bg-kod-orange/5"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <div
                  className={`lg:col-span-8 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-earth tracking-tight mb-8">
                    {group.title}
                  </h2>

                  <p className="text-xl text-kod-earth/80 mb-10 leading-relaxed text-">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-12">
                    {group.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white border border-border-warm text-earth/60 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${group.id}`}
                    className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-earth group-hover:text-signal-orange transition-colors"
                  >
                    <span>View {group.title} Services</span>
                    <span className="w-12 h-12 rounded-full border border-earth/20 flex items-center justify-center group-hover:border-signal-orange group-hover:translate-x-2 transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        className="section-padding-bottom"
        aria-label="What clients receive"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>What clients receive</SectionLabel>
              <h2 className="heading-section text-earth mb-6 text-balance">
                More than deliverables. <br />
                We deliver{" "}
                <em className="font-serif italic font-normal">momentum.</em>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverableItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-signal-orange flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-body text-kod-earth/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-earth rounded-sm p-10 relative overflow-hidden texture-cave">
              <div className="absolute  -right-16 -top-10">
                <Image
                  src="/icons/web-hero-design-25.webp"
                  alt=""
                  width={240}
                  height={240}
                  className="rounded-sm mb-8 w-40 h-80 object-cover sm:w-[240px] sm:h-auto"
                  aria-hidden="true"
                />
              </div>
              <p className="eyebrow text-clay mb-4">Ready to create impact?</p>
              <h3 className="heading-card text-canvas mb-6 leading-snug">
                Let&apos;s build something extraordinary together.
              </h3>
              <Link href="/contact-us" className="btn-primary">
                <span>Start a project</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <DecorativeBlossoms />
    </main>
  );
}
