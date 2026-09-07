import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type ServiceDiscipline } from "./types";

interface ServiceDisciplinesProps {
  serviceTitle: string;
  disciplines?: ServiceDiscipline[];
}

export function ServiceDisciplines({ serviceTitle, disciplines }: ServiceDisciplinesProps) {
  if (!disciplines || disciplines.length === 0) return null;

  return (
    <section
      className="section-padding-top bg-transparent relative overflow-hidden"
      aria-label="Integrated Disciplines"
    >
      <div className="container-site">
        <div className="max-w-3xl mb-14">
          <ScrollReveal variant="left">
            <span className="eyebrow text-kod-orange mb-3 block">
              INTEGRATED DISCIPLINES
            </span>
            <h2 className="heading-section text-kod-earth mb-5">
              Everything inside{" "}
              <em className="font-editorial italic font-normal text-kod-earth">
                {serviceTitle}.
              </em>
            </h2>
            <p className="text-body text-kod-text-2">
              We eliminate disjointed agency silos by clustering specialized creative capabilities into one seamless, end-to-end discipline.
            </p>
          </ScrollReveal>
        </div>

        <div
          className={`grid gap-6 ${
            disciplines.length === 1
              ? "grid-cols-1 max-w-3xl"
              : disciplines.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {disciplines.map((item, idx) => (
            <ScrollReveal key={item.title} variant="up" delay={idx * 0.1}>
              <div className="bg-white rounded p-7 lg:p-8 flex flex-col justify-between h-full hover:border-kod-orange hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {item.iconName && (
                      <div className="w-16 h-16 rounded bg-kod-canvas flex items-center justify-center">
                        <Image
                          src={`/icons/${item.iconName}.png`}
                          alt=""
                          width={72}
                          height={72}
                          className="object-contain"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    {item.badge && (
                      <span className="text-sm font-semibold tracking-wider uppercase text-kod-orange bg-kod-orange/10 px-2.5 py-1 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="heading-card text-kod-earth mb-3">
                    {item.title}
                  </h3>

                  <p className="text-body text-kod-text-2 mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-kod-border/60 pt-5 mt-auto">
                  <p className="eyebrow text-kod-text-2 mb-3">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2" role="list">
                    {item.deliverables.map((del) => (
                      <li
                        key={del}
                        className="flex items-start gap-2.5 text-body text-kod-text-2"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full bg-kod-orange flex-shrink-0"
                          aria-hidden="true"
                        />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
