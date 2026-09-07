import Link from "next/link";
import { ArrowRight, HandFist, University } from "lucide-react";

export function CorePillars() {
  return (
    <section className="bg-kod-canvas py-12 md:py-16" aria-label="Core Pillars">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-kod-border">
          <div className="lg:px-8 first:pl-0 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 mb-5 text-kod-orange flex items-center justify-center">
                <svg
                  className="w-16 h-16"
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
              <h3 className="pillar-heading mb-3">Our Mission</h3>
              <p className="text-kod-earth/85 text-base leading-relaxed mb-6">
                To transform cosmic ideas into meaningful brand experiences that
                move people and shape a better tomorrow.
              </p>
            </div>
            <Link
              href="/capabilities"
              aria-label="Learn about our mission"
              className="btn-icon"
            >
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:px-8 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 mb-5 text-kod-orange flex items-center justify-center">
                <University className="w-10 h-10" />
              </div>
              <h3 className="pillar-heading mb-3">Our Philosophy</h3>
              <p className="text-kod-earth/85 text-base leading-relaxed mb-6">
                We believe ideas are everywhere. Our role is to listen deeply,
                think boldly, and create with intention-uniting strategy,
                design, and story into powerful experiences.
              </p>
            </div>
            <Link
              href="/capabilities"
              aria-label="Learn about our philosophy"
              className="btn-icon"
            >
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:px-8 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 mb-5 text-kod-orange flex items-center justify-center">
                <HandFist className="w-10 h-10" />
              </div>
              <h3 className="pillar-heading mb-3">Our Values</h3>
              <ul className="text-kod-earth/85 text-base font-medium leading-relaxed space-y-2 mb-6">
                {[
                  "Curiosity over convention",
                  "Purpose over popularity",
                  "Craft over compromise",
                  "Collaboration over ego",
                  "Impact over impression",
                ].map((v) => (
                  <li key={v} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-kod-orange flex-shrink-0" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/capabilities"
              aria-label="Learn about our values"
              className="btn-icon"
            >
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:px-8 last:pr-0 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 mb-5 text-kod-orange flex items-center justify-center">
                <svg
                  className="w-16 h-16"
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
              <h3 className="pillar-heading mb-3">Our Approach</h3>
              <p className="text-kod-earth/85 text-base leading-relaxed mb-6">
                We blend insight with imagination. A dynamic process that fuses
                strategy, storytelling, and design to build brands that connect,
                resonate, and endure.
              </p>
            </div>
            <Link
              href="/capabilities"
              aria-label="Learn about our approach"
              className="btn-icon"
            >
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
