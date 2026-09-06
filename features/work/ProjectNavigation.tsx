import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectNavigationProps {
  prev: Project | null;
  next: Project | null;
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav className="bg-kod-white" aria-label="Project navigation">
      <div className="container-site py-8">
        <div className="grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-kod-canvas transition-colors"
              aria-label={`Previous project: ${prev.title}`}
            >
              <ArrowLeft
                size={18}
                className="text-kod-text-2 group-hover:text-kod-clay group-hover:-translate-x-1 transition-all"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase text-kod-text-2 mb-1">
                  Previous
                </p>
                <p className="text-base md:text-lg font-medium text-kod-earth group-hover:text-kod-clay transition-colors">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-kod-canvas transition-colors text-right justify-end ml-auto"
              aria-label={`Next project: ${next.title}`}
            >
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase text-kod-text-2 mb-1">
                  Next
                </p>
                <p className="text-base md:text-lg font-medium text-kod-earth group-hover:text-kod-clay transition-colors">
                  {next.title}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-kod-text-2 group-hover:text-kod-clay group-hover:translate-x-1 transition-all"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
