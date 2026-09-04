import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type SelectedProject } from "./types";

interface ServiceSelectedWorkProps {
  projects: SelectedProject[];
}

export function ServiceSelectedWork({ projects }: ServiceSelectedWorkProps) {
  return (
    <section
      className="section-padding-top bg-kod-canvas"
      aria-label="Selected Branding Projects"
    >
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <ScrollReveal variant="left">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-2 block">
              SELECTED IDENTITY WORK
            </span>
            <h2 className="font-metropolis font-semibold text-3xl sm:text-4xl text-kod-earth">
              Different stories.{" "}
              <em className="font-editorial italic font-normal text-kod-earth">
                Distinct identities.
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.15em] uppercase text-kod-orange hover:text-kod-crimson transition-colors"
            >
              <span>VIEW ALL BRANDING WORK</span>
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} variant="up" delay={idx * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group bg-kod-canvas border border-kod-border rounded overflow-hidden block hover:border-kod-orange transition-all duration-300 shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-kod-earth">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold tracking-widest uppercase text-kod-text-2 mb-1.5 block">
                      {project.category}
                    </span>
                    <h3 className="font-metropolis font-semibold text-lg text-kod-earth group-hover:text-kod-orange transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-kod-border flex items-center justify-center text-kod-earth group-hover:bg-kod-orange group-hover:border-kod-orange group-hover:text-white transition-all flex-shrink-0">
                    <ArrowRight size={12} />
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
