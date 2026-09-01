import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

interface InfoCardsProps {
  featuredProject: Project;
}

export function InfoCards({ featuredProject }: InfoCardsProps) {
  const processCards = [
    { label: "DISCOVER", title: "Uncover insight and opportunity." },
    { label: "DEFINE", title: "Build strategy with clarity." },
    { label: "CREATE", title: "Craft ideas that connect." },
    { label: "DELIVER", title: "Launch, refine, and elevate." },
  ];

  return (
    <section className="section-padding-sm border-t border-border-warm" aria-label="Story and project highlights">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Our Story card */}
          <Link
            href="/our-universe"
            className="group relative bg-white border border-border-warm rounded-sm p-6 
                       overflow-hidden hover:border-dust-rose transition-all duration-300 
                       focus-visible:outline-solar-gold col-span-1"
            aria-label="Our story — Rooted in curiosity, driven by purpose"
          >
            <p className="eyebrow text-[10px] mb-3">Our story</p>
            <h3 className="font-metropolis font-semibold text-earth text-xl mb-3 leading-snug">
              Rooted in curiosity. Driven by purpose.
            </h3>
            <p className="text-secondary text-xs leading-relaxed mb-6">
              Discover our journey, values, and the philosophy that guides everything we create.
            </p>
            <div
              className="w-8 h-8 rounded-full border border-border-warm flex items-center justify-center
                         group-hover:border-signal-orange group-hover:text-signal-orange transition-colors duration-200"
            >
              <ArrowRight size={13} aria-hidden="true" />
            </div>
            {/* Decorative cave silhouette */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 opacity-[0.06] pointer-events-none"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "url('/project-origins.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 60%",
              }}
            />
          </Link>

          {/* Process card */}
          <div className="group bg-white border border-border-warm rounded-sm p-6 col-span-1">
            <p className="eyebrow text-[10px] mb-3">Our process</p>
            <h3 className="font-metropolis font-semibold text-earth text-xl mb-5 leading-snug">
              From spark to impact.
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {processCards.map((step) => (
                <div key={step.label}>
                  <p className="eyebrow text-[9px] mb-1">{step.label}</p>
                  <p className="text-earth text-xs font-medium leading-snug">{step.title}</p>
                </div>
              ))}
            </div>
            <Link
              href="/capabilities"
              className="mt-5 inline-flex w-8 h-8 rounded-full border border-border-warm items-center justify-center
                         hover:border-signal-orange hover:text-signal-orange transition-colors duration-200"
              aria-label="View our process"
            >
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* Featured project card */}
          <Link
            href={`/work/${featuredProject.slug}`}
            className="group relative bg-white border border-border-warm rounded-sm overflow-hidden 
                       hover:border-dust-rose transition-all duration-300 focus-visible:outline-solar-gold col-span-1"
            aria-label={`View featured project: ${featuredProject.title}`}
          >
            <div className="relative h-40">
              <Image
                src={featuredProject.heroImage.src}
                alt={featuredProject.heroImage.alt}
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="p-5">
              <p className="eyebrow text-[10px] mb-1">Project detail</p>
              <h3 className="font-metropolis font-semibold text-earth text-sm mb-2 leading-snug group-hover:text-signal-orange transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-secondary text-[11px] text-sm leading-relaxed mb-3 line-clamp-2">
                {featuredProject.shortDescription}
              </p>
              <div
                className="w-7 h-7 rounded-full border border-border-warm flex items-center justify-center
                           group-hover:border-signal-orange group-hover:text-signal-orange transition-colors duration-200"
              >
                <ArrowRight size={11} aria-hidden="true" />
              </div>
            </div>
          </Link>

          {/* Contact card */}
          <Link
            href="/connect"
            className="group bg-canvas-light border border-border-warm rounded-sm p-6 
                       hover:bg-mist transition-all duration-300 focus-visible:outline-solar-gold
                       flex flex-col justify-between col-span-1"
            aria-label="Start a project — connect with us"
          >
            <div>
              <p className="eyebrow text-[10px] mb-3">Let&apos;s connect</p>
              <h3 className="font-metropolis font-semibold text-earth text-xl mb-3 leading-snug">
                Have a project in mind?
              </h3>
              <p className="text-secondary text-xs leading-relaxed">
                We&apos;d love to hear about your goals and explore how we can create something extraordinary together.
              </p>
            </div>
            <div
              className="mt-6 w-8 h-8 rounded-full border border-border-warm flex items-center justify-center
                         group-hover:border-signal-orange group-hover:text-signal-orange transition-colors duration-200"
            >
              <ArrowRight size={13} aria-hidden="true" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
