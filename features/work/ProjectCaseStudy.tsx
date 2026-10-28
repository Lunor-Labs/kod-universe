import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectCaseStudyProps {
  project: Project;
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <article
      className="section-padding-bottom bg-kod-canvas"
      aria-label="Project details"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionLabel>Project Overview</SectionLabel>
              <p className="text-kod-black text-lg md:text-xl leading-relaxed mt-3 whitespace-pre-line">
                {project.overview}
              </p>
            </div>

            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <p className="text-kod-black/85 text-base md:text-lg leading-relaxed mt-3 whitespace-pre-line">
                {project.challenge}
              </p>
            </div>

            <div>
              <SectionLabel>Our Approach</SectionLabel>
              <p className="text-kod-black/85 text-base md:text-lg leading-relaxed mt-3 whitespace-pre-line">
                {project.approach}
              </p>
            </div>

            {project.outcome && (
              <div>
                <SectionLabel>The Outcome</SectionLabel>
                <p className="text-kod-black/85 text-base md:text-lg leading-relaxed mt-3 whitespace-pre-line">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>
          <aside className="lg:col-span-1" aria-label="Project deliverables">
            <div className="sticky top-28 bg-kod-white rounded p-7 shadow-soft">
              <SectionLabel>Deliverables</SectionLabel>
              <ul className="space-y-3 mt-4" role="list">
                {project.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-base text-kod-black/85 font-medium"
                  >
                    <span
                      className="mt-2 w-2 h-2 rounded-full bg-kod-black flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {project.projectLinks && project.projectLinks.length > 0 && (
                <div className="mt-8 pt-6 border-t border-kod-border">
                  <p className="text-sm font-bold tracking-wider uppercase text-kod-black/80 mb-3">
                    Project Links
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {project.projectLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-kod-orange hover:underline transition-colors"
                      >
                        <ExternalLink size={14} className="flex-shrink-0" />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-kod-border">
                <p className="text-sm font-bold tracking-wider uppercase text-kod-black/80 mb-3">
                  Project Disciplines
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium tracking-wide uppercase px-3.5 py-1.5 bg-kod-canvas border border-kod-border rounded-full text-kod-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
