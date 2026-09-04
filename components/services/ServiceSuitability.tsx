import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaqAccordion, type FaqItem } from "@/components/ui/FaqAccordion";
import { type QualificationPoint } from "./types";

interface ServiceSuitabilityProps {
  points: QualificationPoint[];
  faqs: FaqItem[];
}

export function ServiceSuitability({ points, faqs }: ServiceSuitabilityProps) {
  return (
    <section
      className="section-padding bg-kod-canvas"
      aria-label="Service Suitability and FAQs"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal variant="left">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-3 block">
                IS THIS THE RIGHT SERVICE FOR YOU?
              </span>

              <h2 className="font-metropolis font-semibold text-3xl sm:text-4xl text-kod-earth leading-tight mb-8">
                This service is right <br />
                <em className="font-editorial italic font-normal text-kod-earth">
                  for you if...
                </em>
              </h2>

              <div className="space-y-4">
                {points.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="p-5 rounded flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded bg-kod-mist flex items-center justify-center text-kod-orange flex-shrink-0 mt-0.5">
                        <Icon size={25} />
                      </div>
                      <div>
                        <h3 className="font-metropolis font-semiboldtext-kod-earth mb-1">
                          {point.title}
                        </h3>
                        <p className="text-kod-text-2 leading-relaxed font-light">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal variant="right">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-3 block">
                QUESTIONS WE OFTEN HEAR
              </span>
              <FaqAccordion items={faqs} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
