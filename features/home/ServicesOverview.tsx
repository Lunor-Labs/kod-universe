import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { capabilities } from "@/data/capabilities";

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, index) => {
            return (
              <ScrollReveal key={cap.id} variant={index % 2 === 0 ? "left" : "right"} delay={index * 0.06} className="h-full">
                <Link
                  href={`/capabilities#${cap.slug}`}
                  className="group relative bg-canvas border border-border-warm/30 rounded p-3
                             hover:border-dust-rose hover:shadow-sm transition-all duration-300
                             focus-visible:outline-solar-gold flex flex-col items-center text-center h-full"
                >
                  <div
                    className="w-20 h-20 rounded border border-border-warm/30 flex items-center justify-center mb-4
                               group-hover:border-signal-orange transition-colors duration-200"
                  >
                    <Image
                      src={`/icons/${cap.iconName}.png`}
                      alt=""
                      width={64}
                      height={64}
                      className="object-contain"
                      aria-hidden="true"
                    />
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
                  <div className="mt-4 flex items-center justify-center">
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
