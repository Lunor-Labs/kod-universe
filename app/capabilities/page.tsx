import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
                <p className="text-sm font-semibold tracking-[0.25em] uppercase text-clay mb-5">
                  Strategy. Design. Story. Impact.
                </p>
                <h1 className="font-metropolis font-semibold text-kod-earth text-display-xl mb-6 leading-tight">
                  How Ideas Become{" "}
                  <em className="font-serif italic font-normal text-kod-earth">
                    Impact.
                  </em>
                </h1>
                <p className="text-kod-earth text-base leading-relaxed max-w-sm mb-10">
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
              <h2 className="font-metropolis font-semibold text-earth text-display-lg text-balance">
                End-to-end creative{" "}
                <em className="font-serif italic font-normal">solutions.</em>
              </h2>
              <p className="text-secondary text-base max-w-xl mx-auto mt-3">
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
                          <h3 className="font-metropolis font-bold text-earth text-3xl">
                            {group.title}
                          </h3>
                        </div>
                        <p className="text-secondary text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                          {group.description}
                        </p>
                      </div>

                      <Link
                        href="/connect"
                        className="self-start lg:self-center inline-flex items-center gap-2 font-semibold tracking-wider uppercase bg-canvas px-4 py-2.5 rounded-sm hover:border-signal-orange hover:text-signal-orange transition-all"
                      >
                        Inquire about {group.title}
                        <ArrowRight size={12} aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="space-y-6">
                      <div
                        className={`grid gap-6 ${
                          group.contentSections.length === 1
                            ? "grid-cols-1"
                            : group.contentSections.length === 2
                            ? "grid-cols-1 md:grid-cols-2"
                            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                        }`}
                      >
                        {group.contentSections.map((section) => (
                          <div
                            key={section.title}
                            className="bg-canvas/50 rounded p-6 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                {section.iconName && (
                                  <div className="w-24 h-24 rounded bg-white flex items-center justify-center">
                                    <Image
                                      src={`/icons/${section.iconName}.png`}
                                      alt=""
                                      width={96}
                                      height={96}
                                      className="object-contain"
                                    />
                                  </div>
                                )}
                                {section.badge && (
                                  <span className="font-semibold tracking-wider uppercase text-signal-orange bg-signal-orange/10 px-2 py-0.5 rounded">
                                    {section.badge}
                                  </span>
                                )}
                              </div>

                              <h4 className="font-metropolis font-bold text-earth text-lg mb-2">
                                {section.title}
                              </h4>
                              <p className="text-secondary leading-relaxed mb-5">
                                {section.description}
                              </p>
                            </div>

                            <div className="mt-auto">
                              <p className=" font-semibold tracking-[0.15em] uppercase text-secondary mb-2.5">
                                Scope & Deliverables
                              </p>
                              <ul className="space-y-1.5" role="list">
                                {section.deliverables.map((d) => (
                                  <li
                                    key={d}
                                    className="flex items-start gap-2 text-secondary leading-normal"
                                  >
                                    <span
                                      className="mt-1 w-1.5 h-1.5 rounded-full bg-signal-orange flex-shrink-0"
                                      aria-hidden="true"
                                    />
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <Link
                          href={`/capabilities/${group.id}`}
                          className="btn-primary inline-flex"
                        >
                          <span>Explore {group.title} deep dive</span>
                          <span className="btn-badge">
                            <ArrowRight size={13} aria-hidden="true" />
                          </span>
                        </Link>
                        <Link
                          href="/connect"
                          className="inline-flex items-center gap-2 font-semibold tracking-wider uppercase text-earth hover:text-signal-orange transition-colors"
                        >
                          Start a {group.title} project
                          <ArrowRight size={12} aria-hidden="true" />
                        </Link>
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
                <h2 className="font-metropolis font-semibold text-earth text-display-lg mb-6 text-balance">
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
                      <p className="text-secondary leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-earth rounded-sm p-10 relative overflow-hidden texture-cave">
                <div className="absolute  -right-16 -top-10">
                  <Image
                    src="/icons/Web Hero Design-25.png"
                    alt=""
                    width={300}
                    height={300}
                    className="rounded-sm mb-8 w-40 h-60 object-cover sm:w-[300px] sm:h-auto"
                    aria-hidden="true"
                  />
                </div>
                <p className="eyebrow text-clay mb-4">
                  Ready to create impact?
                </p>
                <h3 className="font-metropolis font-semibold text-canvas text-display-sm mb-6 leading-snug">
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
