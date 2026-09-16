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
      href={`/portfolio/${project.slug}`}
      className={cn(
        "group flex flex-col bg-white rounded overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "img-zoom relative bg-[#FBF9F5] flex items-center justify-center overflow-hidden",
          size === "large"
            ? "aspect-video md:aspect-[4/3] lg:aspect-[16/10]"
            : "aspect-[4/5] sm:aspect-square",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain  transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 shadow-sm
                     flex items-center justify-center opacity-0 group-hover:opacity-100 
                     translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          aria-hidden="true"
        >
          <ArrowRight size={14} className="text-signal-orange" />
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <p className="eyebrow !text-xs mb-2 text-signal-orange !font-bold tracking-widest uppercase">
          {project.category}
          {project.subCategory ? ` - ${project.subCategory}` : ""}
        </p>
        <h3
          className="font-metropolis font-bold text-earth text-lg sm:text-xl leading-tight mb-2 
                       group-hover:text-signal-orange transition-colors duration-200"
        >
          {project.title}
        </h3>
        <p className="text-kod-earth/70 leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="mt-auto flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-kod-earth/50">
          <span>{project.client}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
