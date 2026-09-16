import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Capability } from "@/types/capability";

interface ServiceNavProps {
  prevCap: Capability | null;
  nextCap: Capability | null;
}

export function ServiceNav({ prevCap, nextCap }: ServiceNavProps) {
  return (
    <nav className="border-t border-kod-border bg-transparent" aria-label="Service navigation">
      <div className="container-site py-6 sm:py-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4">
        {prevCap ? (
          <Link
            href={`/services/${prevCap.slug}`}
            className="group flex items-center gap-2.5 text-kod-earth hover:text-kod-orange transition-colors max-w-[45%] sm:max-w-none"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-kod-earth/70 uppercase tracking-wider font-bold mb-0.5 truncate">
                Previous
              </p>
              <p className="text-sm sm:text-base font-semibold font-metropolis truncate">{prevCap.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/services"
          className="text-sm font-bold tracking-[0.15em] uppercase text-kod-earth/80 hover:text-kod-earth transition-colors order-first sm:order-none w-full sm:w-auto text-center py-2 sm:py-0 border-b sm:border-b-0 border-kod-border/30"
        >
          All Services
        </Link>

        {nextCap ? (
          <Link
            href={`/services/${nextCap.slug}`}
            className="group flex items-center gap-2.5 text-kod-earth hover:text-kod-orange transition-colors text-right max-w-[45%] sm:max-w-none justify-end ml-auto"
          >
            <div className="min-w-0">
              <p className="text-sm text-kod-earth/70 uppercase tracking-wider font-bold mb-0.5 truncate">
                Next
              </p>
              <p className="text-sm sm:text-base font-semibold font-metropolis truncate">{nextCap.title}</p>
            </div>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
