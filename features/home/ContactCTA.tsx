import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section
      className="section-padding bg-earth relative overflow-hidden texture-cave"
      aria-label="Contact call to action"
    >
      {/* Decorative rings */}
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full 
                   border border-dust-rose/20 hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full 
                   border border-dust-rose/15 hidden lg:block"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-clay mb-6">
            Ready to create impact?
          </p>
          <h2 className="font-metropolis font-semibold text-canvas text-display-xl mb-8 leading-tight text-balance">
            Let&apos;s build something{" "}
            <br className="hidden sm:block" />
            extraordinary{" "}
            <em className="font-serif italic font-normal text-dust-rose">together.</em>
          </h2>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 bg-signal-orange text-white 
                       px-7 py-3.5 rounded-sm font-metropolis font-medium text-sm tracking-wide 
                       transition-all duration-200 hover:bg-deep-crimson group focus-visible:outline-solar-gold"
          >
            Start a project
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
