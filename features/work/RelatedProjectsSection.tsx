import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types/project";

interface RelatedProjectsSectionProps {
  projects: Project[];
}

export function RelatedProjectsSection({ projects }: RelatedProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section
      className="section-padding bg-canvas"
      aria-label="Related projects"
    >
      <div className="container-site">
        <SectionLabel className="mb-8">Related work</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
