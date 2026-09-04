import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type ProcessStep } from "./types";

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section
      className="section-padding border-b border-kod-border bg-kod-canvas relative"
      aria-label="Our Process Timeline"
    >
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal variant="down">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-3 block">
              OUR PROCESS
            </span>
            <h2 className="font-metropolis font-semibold text-3xl sm:text-4xl text-kod-earth">
              From first spark to{" "}
              <em className="font-editorial italic font-normal text-kod-earth">
                lasting identity.
              </em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-kod-orange/30 via-kod-orange to-kod-orange/30 shadow-[0_0_12px_rgba(229,76,42,0.4)]"
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.number} className="relative">
                  <div
                    className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-16 h-16 rounded-full bg-kod-canvas border-2 border-kod-orange items-center justify-center text-kod-orange font-editorial text-2xl font-bold shadow-[0_0_15px_rgba(229,76,42,0.3)] z-10"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
                    <div className={`lg:col-span-5 ${isEven ? "lg:text-right" : "lg:order-last"}`}>
                      <ScrollReveal variant={isEven ? "left" : "right"}>
                        <div className="inline-flex items-center gap-2 lg:hidden px-3 py-1 bg-kod-orange/10 rounded-full text-kod-orange text-xs font-semibold tracking-wider uppercase mb-3">
                          <span>PHASE {step.number}</span>
                        </div>
                        <span className="hidden lg:block text-sm font-semibold tracking-[0.2em] uppercase text-kod-orange mb-2">
                          {step.number} {step.title}
                        </span>
                        <h3 className="font-metropolis font-semibold text-2xl sm:text-3xl text-kod-earth mb-3">
                          {step.subtitle}
                        </h3>
                        <p className="text-kod-text-2 text-sm sm:text-base leading-relaxed font-light">
                          {step.description}
                        </p>
                      </ScrollReveal>
                    </div>

                    <div className="hidden lg:block lg:col-span-2" />
                    <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-first"}`}>
                      <ScrollReveal variant={isEven ? "right" : "left"} delay={0.1}>
                        <div className="relative aspect-[16/10] rounded overflow-hidden border border-kod-border shadow-sm group">
                          <Image
                            src={step.imageSrc}
                            alt={step.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-kod-earth/10 group-hover:bg-transparent transition-colors" />
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
