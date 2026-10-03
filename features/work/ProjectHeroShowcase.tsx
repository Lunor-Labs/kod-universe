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
  const normalizeSrc = (src?: string) =>
    (src || "").trim().replace(/\/+/g, "/").toLowerCase();

  const heroSrcNormalized = normalizeSrc(project.heroImage?.src);

  const highlightImages = (project.galleryImages || []).filter(
    (img, index, self) => {
      const currentSrc = normalizeSrc(img?.src);
      if (!currentSrc || currentSrc === heroSrcNormalized) return false;
      return (
        self.findIndex((other) => normalizeSrc(other?.src) === currentSrc) ===
        index
      );
    }
  );

  return (
    <section
      className="relative pt-24 md:pt-28 pb-8 md:pb-12 bg-kod-canvas overflow-hidden"
      aria-label={`${project.title} project showcase`}
    >
      <div className="container-site relative z-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-kod-text-2 hover:text-kod-black font-medium text-base transition-colors mb-6 sm:mb-8 group"
          aria-label="Back to all projects"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>All work</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-4">
          <div className="lg:col-span-7 flex flex-col justify-start ">
            <h1 className="heading-hero text-kod-black mb-3 tracking-tight">
              {project.title}
            </h1>

            <p className="text-base md:text-lg tracking-wide mb-6">
              <span className="text-kod-black font-semibold">
                {project.location || "Sri Lanka"}
              </span>
              <span className="text-kod-black/60 mx-2">|</span>
              <span className="text-kod-black font-semibold">
                {project.timeline || String(project.year)}
              </span>
            </p>

            <p className="text-lead text-kod-black mb-4 max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] h-[460px] flex items-center justify-center lg:justify-end">
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

        {highlightImages.length > 0 && (
          <ContentHighlightsCarousel
            title="Content Highlights"
            images={highlightImages}
            tags={project.tags}
          />
        )}
      </div>
    </section>
  );
}
