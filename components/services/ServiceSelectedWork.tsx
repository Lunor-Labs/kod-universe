import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type SelectedProject } from "./types";

interface ServiceSelectedWorkProps {
  projects: SelectedProject[];
  title?: string;
  subtitle?: string;
}

export function ServiceSelectedWork({
  projects,
  title = "SELECTED DISCIPLINE WORK",
  subtitle = "Stories crafted with purpose and lasting resonance.",
}: ServiceSelectedWorkProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section
      className="section-padding-top bg-transparent"
      aria-label="Selected Client Work"
    >
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
          <ScrollReveal variant="left">
            <span className="eyebrow text-kod-orange mb-2 block">
              {title}
            </span>
            <h2 className="heading-section text-kod-earth">
              {subtitle}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <Link
              href="/portfolio"
              className="btn-link !text-kod-orange hover:!text-kod-earth"
            >
              <span>View all work</span>
              <span className="btn-icon-circle">
                <ArrowRight
                  size={13}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} variant="up" delay={idx * 0.1}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group bg-white border border-kod-border rounded overflow-hidden block hover:border-kod-orange transition-all duration-300 shadow-sm"
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
                    <span className="text-sm font-bold tracking-wider uppercase text-kod-orange block mb-1">
                      {project.category}
                    </span>
                    <h3 className="heading-item text-kod-earth group-hover:text-kod-orange transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-kod-border flex items-center justify-center group-hover:bg-kod-orange group-hover:border-kod-orange text-kod-earth group-hover:text-white transition-all duration-200">
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
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
