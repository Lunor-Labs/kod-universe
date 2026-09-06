import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { serviceGroups } from "@/data/capabilities";

export function ServicesOverview() {
  return (
    <section
      className="section-padding-top bg-transparent"
      aria-label="Our creative services"
    >
      <div className="container-site">
        <div className="text-center mb-16">
          <ScrollReveal variant="down">
            <SectionLabel>Our creative services</SectionLabel>
            <h2 className="font-semibold text-earth text-display-lg text-balance">
              End-to-end creative{" "}
              <em className="font-serif italic font-normal">solutions.</em>
            </h2>
            <p className="mt-3 text-secondary text-base max-w-xl mx-auto">
              Three core creative disciplines engineered to scale your brand from initial spark to global resonance.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {serviceGroups.map((group, index) => (
            <ScrollReveal
              key={group.id}
              variant="up"
              delay={index * 0.12}
              className="h-full"
            >
              <Link
                href={`/capabilities#${group.id}`}
                className="group relative bg-white border border-border-warm rounded p-7 lg:p-8 flex flex-col justify-between h-full
                           hover:border-signal-orange hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-signal-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="w-24 h-24 rounded border border-border-warm/80 bg-canvas/40 flex items-center justify-center mb-6 group-hover:border-signal-orange group-hover:scale-105 transition-all duration-300">
                    <Image
                      src={`/icons/${group.iconName || "Branding"}.png`}
                      alt=""
                      width={72}
                      height={72}
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-metropolis font-bold text-earth text-2xl lg:text-3xl mb-2 group-hover:text-signal-orange transition-colors duration-200">
                    {group.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6">
                    {group.description}
                  </p>
                  {group.tags && group.tags.length > 0 && (
                    <div className="border-t border-border-warm/60 pt-4 mb-6">
                      <p className="text-[11px] font-semibold tracking-wider uppercase text-secondary/80 mb-2.5">
                        Inside this discipline:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2.5 py-1 rounded text-xs bg-canvas text-earth border border-border-warm/60 group-hover:border-border-warm transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t border-border-warm/60 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-earth group-hover:text-signal-orange transition-colors">
                    Explore {group.title}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-border-warm flex items-center justify-center group-hover:bg-signal-orange group-hover:border-signal-orange text-earth group-hover:text-white transition-all duration-200 shadow-sm">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal variant="zoomIn" delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.1em]
                         uppercase text-earth hover:text-signal-orange transition-colors duration-200 group"
            >
              View all capabilities & deliverables
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
