import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Capability } from "@/types/capability";

interface ServiceNavProps {
  prevCap: Capability | null;
  nextCap: Capability | null;
}

export function ServiceNav({ prevCap, nextCap }: ServiceNavProps) {
  return (
    <nav className="border-t border-kod-border bg-kod-canvas" aria-label="Service navigation">
      <div className="container-site py-8 flex items-center justify-between gap-4">
        {prevCap ? (
          <Link
            href={`/capabilities/${prevCap.slug}`}
            className="group flex items-center gap-3 text-kod-earth hover:text-kod-orange transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-sm text-kod-text-2 uppercase tracking-widest font-semibold mb-0.5">
                Previous Service
              </p>
              <p className="text-sm font-semibold font-metropolis">{prevCap.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/capabilities"
          className="text-sm font-semibold tracking-[0.2em] uppercase text-kod-text-2 hover:text-kod-earth transition-colors"
        >
          All Services
        </Link>

        {nextCap ? (
          <Link
            href={`/capabilities/${nextCap.slug}`}
            className="group flex items-center gap-3 text-kod-earth hover:text-kod-orange transition-colors text-right"
          >
            <div>
              <p className="text-sm text-kod-text-2 uppercase tracking-widest font-semibold mb-0.5">
                Next Service
              </p>
              <p className="text-sm font-semibold font-metropolis">{nextCap.title}</p>
            </div>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
