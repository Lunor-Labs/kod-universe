import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CorePillars() {
  return (
    <section
      className="border-t border-b border-border-warm bg-canvas py-12 md:py-16"
      aria-label="Core Pillars"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border-warm">
          <div className="lg:px-8 first:pl-0 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <circle cx="20" cy="20" r="14" strokeDasharray="2 2" />
                  <circle cx="20" cy="20" r="6" />
                  <path d="M20 2v6M20 32v6M2 20h6M32 20h6M7.27 7.27l4.24 4.24M28.49 28.49l4.24 4.24M7.27 32.73l4.24-4.24M28.49 11.51l4.24-4.24" />
                </svg>
              </div>
              <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                Our Mission
              </h3>
              <p className="text-secondary text-sm sm:text-sm leading-relaxed mb-6">
                To transform cosmic ideas into meaningful brand experiences
                that move people and shape a better tomorrow.
              </p>
            </div>
            <div>
              <Link
                href="/capabilities"
                aria-label="Learn about our mission"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
              >
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="lg:px-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <circle cx="20" cy="20" r="8" />
                  <ellipse
                    cx="20"
                    cy="20"
                    rx="18"
                    ry="6"
                    transform="rotate(-25 20 20)"
                  />
                  <circle cx="29" cy="14" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                Our Philosophy
              </h3>
              <p className="text-secondary text-sm sm:text-sm leading-relaxed mb-6">
                We believe ideas are everywhere. Our role is to listen deeply,
                think boldly, and create with intention—uniting strategy,
                design, and story into powerful experiences.
              </p>
            </div>
            <div>
              <Link
                href="/capabilities"
                aria-label="Learn about our philosophy"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
              >
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="lg:px-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                <svg
                  className="w-9 h-9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2a1.5 1.5 0 0 0-1.5 1.5v6.5h-1V5a1.5 1.5 0 0 0-3 0v7a6.5 6.5 0 0 0 13 0V6.5a1.5 1.5 0 0 0-3 0V10h-1V3.5A1.5 1.5 0 0 0 13.5 2h-1.5z"
                    opacity="0.85"
                  />
                </svg>
              </div>
              <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                Our Values
              </h3>
              <ul className="text-secondary text-sm sm:text-sm leading-relaxed space-y-1.5 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-signal-orange" />
                  Curiosity over convention
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-signal-orange" />
                  Purpose over popularity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-signal-orange" />
                  Craft over compromise
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-signal-orange" />
                  Collaboration over ego
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-signal-orange" />
                  Impact over impression
                </li>
              </ul>
            </div>
            <div>
              <Link
                href="/capabilities"
                aria-label="Learn about our values"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
              >
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="lg:px-8 last:pr-0 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path
                    d="M20 20a3 3 0 0 1 3 3 6 6 0 0 1-6 6 9 9 0 0 1-9-9 12 12 0 0 1 12-12 15 15 0 0 1 15 15 18 18 0 0 1-18 18"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                Our Approach
              </h3>
              <p className="text-secondary text-sm sm:text-sm leading-relaxed mb-6">
                We blend insight with imagination. A dynamic process that
                fuses strategy, storytelling, and design to build brands that
                connect, resonate, and endure.
              </p>
            </div>
            <div>
              <Link
                href="/capabilities"
                aria-label="Learn about our approach"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
              >
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
