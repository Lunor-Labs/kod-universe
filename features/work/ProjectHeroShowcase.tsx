import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ContentHighlightsCarousel } from "@/features/work/ContentHighlightsCarousel";
import type { Project, ProjectPillar } from "@/types/project";

interface ProjectHeroShowcaseProps {
  project: Project;
  pillars: ProjectPillar[];
}

export function ProjectHeroShowcase({ project, pillars }: ProjectHeroShowcaseProps) {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-8 md:pb-12 bg-kod-canvas overflow-hidden"
      aria-label={`${project.title} project showcase`}
    >
      <div className="container-site relative z-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-kod-text-2 hover:text-kod-clay font-medium text-base transition-colors mb-6 sm:mb-8 group"
          aria-label="Back to all projects"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>All work</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="heading-hero text-kod-clay mb-3 tracking-tight">
              {project.title}
            </h1>

            <p className="text-base md:text-lg tracking-wide mb-6">
              <span className="text-kod-black font-semibold">
                {project.location || "Sri Lanka"}
              </span>
              <span className="text-kod-clay/60 mx-2">|</span>
              <span className="text-kod-clay font-semibold">
                {project.timeline || String(project.year)}
              </span>
            </p>

            <p className="text-lead text-kod-earth/85 mb-8 max-w-xl">
              {project.shortDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 pt-2">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex flex-col items-start">
                  <div className="w-28 h-28 relative flex items-center justify-center flex-shrink-0">
                    {pillar.icon ? (
                      <Image
                        src={pillar.icon}
                        alt={pillar.title}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full border-2 border-kod-clay flex items-center justify-center text-kod-clay">
                        <Sparkles size={18} />
                      </div>
                    )}
                  </div>
                  <h4 className="heading-item text-kod-clay mb-1.5 font-metropolis">
                    {pillar.title}
                  </h4>
                  <p className="text-body text-kod-earth/80">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center lg:justify-end">
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                fill
                priority
                className="object-contain object-center lg:object-right"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>

        {project.galleryImages.length > 0 && (
          <ContentHighlightsCarousel
            title="Content Highlights"
            images={project.galleryImages}
            tags={project.tags}
          />
        )}
      </div>
    </section>
  );
}
