import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type DeliverableItem } from "./types";

interface ServiceDeliverablesProps {
  serviceNumber: string;
  items: DeliverableItem[];
}

export function ServiceDeliverables({
  serviceNumber,
  items,
}: ServiceDeliverablesProps) {
  const col1 = items.slice(0, 3);
  const col2 = items.slice(3, 6);

  return (
    <section
      className="section-padding-top bg-transparent"
      aria-label="Capabilities Matrix"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <ScrollReveal variant="left">
              <div className="space-y-4 mb-8">
                <span className="eyebrow text-kod-orange block">
                  SERVICE {serviceNumber}
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm tracking-wider uppercase font-bold text-kod-earth/80">
                  <span>01 Strategy</span>
                  <span className="text-kod-orange font-bold">
                    / 02 Identity
                  </span>
                  <span>/ 03 Systems</span>
                </div>
              </div>

              <h2 className="heading-section text-kod-earth leading-tight mb-6">
                What we shape <br />
                <em className="font-editorial italic font-normal text-kod-earth">
                  together.
                </em>
              </h2>

              <p className="text-body text-kod-earth/85 max-w-sm mb-8">
                Every brand touchpoint is an opportunity to assert your
                presence. We craft cohesive systems designed to scale seamlessly
                across every digital and physical medium.
              </p>

              <Link
                href="/contact-us"
                className="btn-link !text-kod-orange hover:!text-kod-earth"
              >
                <span>Request capabilities deck</span>
                <span className="btn-icon-circle">
                  <ArrowRight
                    size={13}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-y border-kod-border divide-kod-border">
              <div className="divide-y divide-kod-border">
                {col1.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <ScrollReveal
                      key={item.num}
                      variant="up"
                      delay={idx * 0.08}
                    >
                      <div className="py-5 sm:py-6 md:px-8 group hover:bg-black/[0.02] transition-colors flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-kod-mist flex items-center justify-center text-kod-orange group-hover:bg-kod-orange group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                            <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                          </div>
                          <div>
                            <h3 className="heading-item text-kod-earth group-hover:text-kod-orange transition-colors mb-1">
                              {item.title}
                            </h3>
                            <p className="text-body text-kod-earth/80">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <span className="hidden sm:block text-kod-text-2/40 group-hover:text-kod-orange group-hover:translate-x-1 transition-all pt-1 flex-shrink-0">
                          <ArrowRight size={20} />
                        </span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
              <div className="divide-y divide-kod-border">
                {col2.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <ScrollReveal
                      key={item.num}
                      variant="up"
                      delay={(idx + 3) * 0.08}
                    >
                      <div className="py-5 sm:py-6 md:px-8 group hover:bg-black/[0.02] transition-colors flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-kod-mist flex items-center justify-center text-kod-orange group-hover:bg-kod-orange group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                            <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                          </div>
                          <div>
                            <h3 className="heading-item text-kod-earth group-hover:text-kod-orange transition-colors mb-1">
                              {item.title}
                            </h3>
                            <p className="text-body text-kod-earth/80">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <span className="hidden sm:block text-kod-text-2/40 group-hover:text-kod-orange group-hover:translate-x-1 transition-all pt-1 flex-shrink-0">
                          <ArrowRight size={20} />
                        </span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
