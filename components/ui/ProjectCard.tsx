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
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group block bg-white border border-border-warm/30 rounded-sm overflow-hidden",
        "hover:border-dust-rose transition-colors duration-300",
        "focus-visible:outline-solar-gold",
        className,
      )}
      aria-label={`View project: ${project.title} by ${project.client}`}
    >
      <div
        className={cn(
          "img-zoom relative",
          size === "large" ? "aspect-[4/3]" : "aspect-square",
        )}
      >
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          sizes={
            size === "large"
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover"
          priority={priority}
        />
        <div
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 
                     flex items-center justify-center opacity-80 group-hover:opacity-100 
                     translate-x-2 group-hover:translate-x-0 transition-all duration-300"
          aria-hidden="true"
        >
          <ArrowRight size={14} className="text-signal-orange" />
        </div>
      </div>
      <div className="p-4">
        <p className="eyebrow text-sm mb-1.5 text-secondary">
          {project.category}
        </p>
        <h3
          className="font-metropolis font-semibold text-earth text-base leading-snug mb-1 
                       group-hover:text-signal-orange transition-colors duration-200"
        >
          {project.title}
        </h3>
        <p className="text-sm text-secondary line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="mt-3 flex items-center gap-1 text-xs text-secondary">
          <span>{project.client}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
