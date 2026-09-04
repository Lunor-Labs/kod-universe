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
import { capabilities, processSteps } from "@/data/capabilities";
import { projects } from "@/data/projects";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import { ProcessSection } from "@/features/home/ProcessSection";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore KOD Universe's creative capabilities: social media, branding & identity, package design, logo design, web design, poster design, filming, visual storytelling, thumbnail design, merchandising, architecture designs, and digital art.",
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
    <main className="relative bg-canvas overflow-hidden">
      <div className="relative z-10">
        <section
          className="relative bg-earth overflow-hidden texture-cave pt-32 pb-20"
          aria-label="Capabilities page hero"
        >
          <div className="absolute inset-0 opacity-50" aria-hidden="true">
            <Image
              src="/hero.jpg"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(58,47,45,0.65) 0%, rgba(58,47,45,0.3) 100%)",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="container-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.25em] uppercase text-clay mb-5">
                  Strategy. Design. Story. Impact.
                </p>
                <h1 className="font-metropolis font-semibold text-canvas text-display-xl mb-6 leading-tight">
                  How Ideas Become{" "}
                  <em className="font-serif italic font-normal text-dust-rose">
                    Impact.
                  </em>
                </h1>
                <p className="text-dust-rose text-base leading-relaxed max-w-sm mb-10">
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
        </section>

        {/* Service cards */}
        <section
          className="section-padding-top border-t border-border-warm"
          aria-label="Our creative services"
        >
          <div className="container-site">
            <div className="text-center mb-14">
              <SectionLabel>Our creative services</SectionLabel>
              <h2 className="font-metropolis font-semibold text-earth text-display-lg text-balance">
                End-to-end creative{" "}
                <em className="font-serif italic font-normal">solutions.</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap) => {
                return (
                  <article
                    key={cap.id}
                    id={cap.slug}
                    className="bg-white border border-border-warm rounded-sm p-4 flex flex-col 
                             hover:border-dust-rose hover:shadow-sm transition-all duration-300"
                    aria-labelledby={`cap-${cap.id}-title`}
                  >
                    <div
                      className="w-24 h-24 rounded-sm border border-border-warm flex items-center justify-center mb-5"
                      aria-hidden="true"
                    >
                      <Image
                        src={`/icons/${cap.iconName}.png`}
                        alt=""
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                    <h3
                      id={`cap-${cap.id}-title`}
                      className="font-metropolis font-semibold text-earth text-lg mb-3"
                    >
                      {cap.title}
                    </h3>
                    <p className="text-secondary leading-relaxed mb-6 flex-1">
                      {cap.longDescription}
                    </p>
                    <div className="border-t border-border-warm pt-5 mt-auto">
                      <p className="text-sm font-semibold tracking-[0.15em] uppercase text-secondary mb-3">
                        What you get
                      </p>
                      <ul className="space-y-1.5" role="list">
                        {cap.deliverables.slice(0, 4).map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-secondary"
                          >
                            <span
                              className="mt-1 w-1 h-1 rounded-full bg-signal-orange flex-shrink-0"
                              aria-hidden="true"
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-border-warm pt-5 mt-5">
                      <p className="text-sm font-semibold tracking-[0.15em] uppercase text-secondary mb-3">
                        Selected works
                      </p>
                      <div className="flex flex-col gap-2">
                        {projects
                          .filter(
                            (p) =>
                              p.category.toLowerCase() ===
                              cap.title.toLowerCase(),
                          )
                          .slice(0, 2)
                          .map((p) => (
                            <Link
                              key={p.id}
                              href={`/work/${p.slug}`}
                              className="text-sm text-earth hover:text-signal-orange transition-colors truncate font-medium flex items-center gap-2 group/link"
                            >
                              <span className="w-1 h-1 bg-border-warm rounded-full group-hover/link:bg-signal-orange transition-colors" />
                              {p.title}
                            </Link>
                          ))}
                      </div>
                    </div>

                    <Link
                      href="/connect"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold 
                               tracking-[0.1em] uppercase text-earth hover:text-signal-orange 
                               transition-colors duration-200 group"
                      aria-label={`Start a ${cap.title} project`}
                    >
                      Start a project
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <ProcessSection />
        <section className="section-padding" aria-label="What clients receive">
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
                    className="rounded-sm mb-8"
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
