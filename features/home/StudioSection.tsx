"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "@/types/project";

interface SelectedProjectItem {
  number: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  stats: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue: string;
    secondaryLabel: string;
    summary: string;
  };
}

const SELECTED_PROJECTS: SelectedProjectItem[] = [
  {
    number: "01",
    slug: "dsg-launch-campaign",
    title: "Bio-Oil DSG Launch",
    client: "Bio-Oil / DSG",
    category: "MARKETING",
    badge: "Campaign",
    imageSrc: "/portfolio/marketing/DSG Launch campaign/Bio Oil campaign.webp",
    imageAlt: "Bio-Oil DSG Launch Campaign Showcase",
    description:
      "An integrated omnichannel launch combining sequential teaser rollouts, retail event architecture, and high-impact digital activations.",
    stats: {
      primaryValue: "+453%",
      primaryLabel: "Sales Growth",
      secondaryValue: "$0.25",
      secondaryLabel: "Reported CPA",
      summary: "453% sales growth during lockdown. Reported CPA: USD 0.25.",
    },
  },
  {
    number: "02",
    slug: "niwarthana-packaging-design",
    title: "Niwarthana",
    client: "REBRANDING AND PACKAGING",
    category: "LANGUAGE BECAME THE PACKAGING",
    badge: "Packaging",
    imageSrc:
      "/portfolio/Design/branding-identity/package-design/niwarthana-1.webp",
    imageAlt: "Niwarthana Artisan Ceylon Tea Packaging Architecture",
    description:
      "For Niwarthana, we explored how Sri Lankan identity could travel beyond geography without losing its character. Sinhala typography became a visual texture across a new packaging concept. The rebrand and conceptual packaging work resulted in 24 designs, turning language into part of the experience of the pack.",
    stats: {
      primaryValue: "24",
      primaryLabel: "Pack Designs",
      secondaryValue: "100%",
      secondaryLabel: "Cultural Identity",
      summary: "Culture, transformed into design.",
    },
  },
  {
    number: "03",
    slug: "pissu-kanna-brand-merchandise",
    title: "Pissukanna",
    client: "MERCHANDISE DESIGN",
    category: "CRAZY ENOUGH TO WIN",
    badge: "Streetwear",
    imageSrc: "/portfolio/Design/pissu-kanna/pissu-kanna-merch-showcase.webp",
    imageAlt: "Pissu Kanna Mascot & Streetwear Merchandise Collection",
    description:
      "Some briefs ask for restraint. This one didn’t. We made a bold, expressive merchandise concept for the Pissukanna Design Challenge, and it won first place.",
    stats: {
      primaryValue: "1st",
      primaryLabel: "Design Challenge",
      secondaryValue: "100%",
      secondaryLabel: "Drop Sell-Out",
      summary: "Challenge entered. Rules stretched. Champion crowned.",
    },
  },
];

interface StudioSectionProps {
  projects?: Project[];
}

export function StudioSection({ projects }: StudioSectionProps) {
  return (
    <section
      id="selected-work"
      className="section-padding text-kod-black"
      aria-label="Selected Work and Case Studies"
    >
      <div className="container-site space-y-10 md:space-y-14">
        <ScrollReveal variant="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <SectionLabel className="mb-3">Selected Work</SectionLabel>
              <h2 className="text-4xl md:text-6xl text-editorial">
                Work that{" "}
                <em className="font-serif italic font-normal text-kod-earth">
                  matters.
                </em>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:pb-1">
              <p className="text-sm md:text-base text-kod-text-2 leading-relaxed max-w-sm">
                Three highlighted transformations spanning brand campaigns,
                export packaging, and youth streetwear.
              </p>
              <Link
                href="/portfolio"
                className="btn-secondary text-sm self-start sm:self-auto shrink-0"
              >
                <span>View All Projects</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_1.5fr] gap-6 lg:gap-8">
          {SELECTED_PROJECTS.map((item, idx) => (
            <ScrollReveal
              key={item.slug}
              variant="up"
              delay={0.1 + idx * 0.1}
              className="h-full"
            >
              <Link
                href={`/portfolio/${item.slug}`}
                className="group flex flex-col h-full bg-white/80 hover:bg-white rounded border border-black/[0.08] hover:border-signal-orange/40 shadow-xs hover:shadow-xl transition-all duration-500 overflow-hidden select-none"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-100 flex items-center justify-center">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes={
                      idx === 0
                        ? "(min-width: 1024px) 40vw, 100vw"
                        : "(min-width: 1024px) 30vw, 100vw"
                    }
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/90 text-kod-earth backdrop-blur-md shadow-sm border border-black/[0.06]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 text-kod-black shadow-md flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={16} className="text-signal-orange" />
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-5">
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-bold tracking-widest uppercase text-kod-earth/50">
                      <span>{item.client}</span>
                      <span className="text-black/30">|</span>
                      <span className="text-signal-orange">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-[1.75rem] font-bold font-metropolis text-kod-earth leading-tight group-hover:text-signal-orange transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-sm text-kod-text-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded p-4 sm:p-5 bg-black/[0.02] border border-black/[0.06] group-hover:border-signal-orange/30 group-hover:bg-signal-orange/[0.03] transition-colors duration-300">
                    <div className="grid grid-cols-2 gap-4 pb-3 mb-3 border-b border-black/[0.06]">
                      <div>
                        <span className="block text-2xl sm:text-3xl font-bold font-metropolis text-signal-orange tracking-tight leading-none">
                          {item.stats.primaryValue}
                        </span>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-kod-earth/70 mt-1.5">
                          {item.stats.primaryLabel}
                        </span>
                      </div>
                      <div className="border-l border-black/[0.06] pl-4">
                        <span className="block text-2xl sm:text-3xl font-bold font-metropolis text-kod-earth tracking-tight leading-none">
                          {item.stats.secondaryValue}
                        </span>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-kod-earth/70 mt-1.5">
                          {item.stats.secondaryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-0.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-signal-orange shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      <p className="text-xs text-kod-earth/85 leading-snug font-medium">
                        {item.stats.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
