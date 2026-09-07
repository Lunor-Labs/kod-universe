import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Compass,
  Pen,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { serviceGroups, processSteps } from "@/data/capabilities";
import { projects } from "@/data/projects";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import { ProcessSection } from "@/features/home/ProcessSection";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore KOD Universe's core creative disciplines: Marketing (Content Marketing), Designing (Brand Identity, Package Design & Logo Design), and Beyond (Digital Architecture, Merchandising, Visual Storytelling, Web Design).",
  alternates: { canonical: "/capabilities" },
};

const processIconMap: Record<string, React.ElementType> = {
  Search,
  Compass,
  Pen,
  Rocket,
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
      <div className="relative z-10 ">
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
                  meaningful brands, experiences, and expressions that connect
                  and endure.
                </p>
                <Link href="/connect" className="btn-primary">
                  <span>Start a project</span>
                  <span className="btn-badge">
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-canvas via-canvas/80 to-transparent pointer-events-none z-20" aria-hidden="true" />
        </section>

        <section
          className="section-padding-top"
          aria-label="Our creative services"
        >
          <div className="container-site">
            <div className="text-center mb-16">
              <SectionLabel>Our creative services</SectionLabel>
              <h2 className="heading-section text-earth text-balance">
                End-to-end creative{" "}
                <em className="font-serif italic font-normal">solutions.</em>
              </h2>
              <p className="text-body text-kod-earth/85 max-w-xl mx-auto mt-3">
                Three core disciplines housing our specialized capabilities to transform your vision into market-defining execution.
              </p>
            </div>

            <div className="space-y-16">
              {serviceGroups.map((group) => {
                return (
                  <div
                    key={group.id}
                    id={group.id}
                    className="bg-white rounded p-6 sm:p-8 lg:p-10"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-border-warm">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="heading-card text-earth">
                            {group.title}
                          </h3>
                        </div>
                        <p className="text-body text-kod-earth/85 mt-2 max-w-2xl">
                          {group.description}
                        </p>
                      </div>

                      <Link
                        href={`/capabilities/${group.id}`}
                        className="btn-secondary !h-11 !px-5 self-start lg:self-center"
                      >
                        <span>Explore {group.title}</span>
                        <span className="btn-badge !w-7 !h-7">
                          <ArrowRight size={13} aria-hidden="true" />
                        </span>
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div
                        className={`grid gap-5 ${
                          group.contentSections.length === 1
                            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                            : group.contentSections.length === 2
                            ? "grid-cols-1 md:grid-cols-2"
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        }`}
                      >
                        {group.contentSections.map((section) => (
                          <Link
                            key={section.title}
                            href={`/capabilities/${group.id}`}
                            className="group bg-canvas/50 hover:bg-canvas/90 rounded p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xs border border-transparent hover:border-border-warm/60"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                {section.iconName && (
                                  <div className="w-16 h-16 rounded bg-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                                    <Image
                                      src={`/icons/${section.iconName}.webp`}
                                      alt=""
                                      width={64}
                                      height={64}
                                      className="object-contain"
                                    />
                                  </div>
                                )}
                                <ArrowUpRight
                                  size={16}
                                  className="text-secondary/50 group-hover:text-signal-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                />
                              </div>

                              <h4 className="heading-item text-earth mb-2 group-hover:text-signal-orange transition-colors">
                                {section.title}
                              </h4>
                              <p className="text-body text-kod-earth/80">
                                {section.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <ProcessSection />
        <section className="section-padding-bottom" aria-label="What clients receive">
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
                <p className="eyebrow text-clay mb-4">
                  Ready to create impact?
                </p>
                <h3 className="heading-card text-canvas mb-6 leading-snug">
                  Let&apos;s build something extraordinary together.
                </h3>
                <Link href="/connect" className="btn-primary">
                  <span>Start a project</span>
                  <span className="btn-badge">
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DecorativeBlossoms />
    </main>
  );
}
