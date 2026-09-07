import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  size?: "default" | "large";
  className?: string;
  priority?: boolean;
}

export function ProjectCard({
  project,
  size = "default",
  className,
  priority = false,
}: ProjectCardProps) {
  const image = project.cardImage ?? project.heroImage;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group block bg-white border border-border-warm/30 rounded overflow-hidden",
        "transition-colors duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50",
        className,
      )}
      aria-label={`View project: ${project.title} by ${project.client}`}
    >
      <div
        className={cn(
          "img-zoom relative aspect-square bg-[#FBF9F5] flex items-center justify-center overflow-hidden",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            size === "large"
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
        <div
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 shadow-sm
                     flex items-center justify-center opacity-80 group-hover:opacity-100 
                     translate-x-2 group-hover:translate-x-0 transition-all duration-300"
          aria-hidden="true"
        >
          <ArrowRight size={14} className="text-signal-orange" />
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <p className="eyebrow mb-1.5 text-signal-orange">
          {project.category}
        </p>
        <h3
          className="heading-item text-earth leading-snug mb-1.5 
                       group-hover:text-signal-orange transition-colors duration-200"
        >
          {project.title}
        </h3>
        <p className="text-body text-kod-earth/80 mb-2 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-kod-earth/70">
          <span>{project.client}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}

