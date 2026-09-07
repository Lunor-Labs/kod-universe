import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

export function FounderPanel() {
  return (
    <section
      className="section-padding-top bg-kod-canvas"
      aria-label="Founder Biography"
    >
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="eyebrow mb-3">Founder</span>
            <h2 className="heading-section text-kod-black">
              The Vision Behind KOD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Photo column */}
            <div className="md:col-span-5 relative">
              {/* Decorative border offset */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-kod-orange/30 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl border border-kod-border bg-kod-mist aspect-[4/5] img-zoom">
                <Image
                  src="/main/profile.webp"
                  alt="KOD Universe Founder - Ishara Jakod"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-kod-earth/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Name card overlaid at bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 border border-kod-border/50 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="font-metropolis font-bold text-kod-earth text-base tracking-wide">
                      Ishara Jakod
                    </p>
                    <p className="text-kod-earth/80 text-sm font-semibold tracking-[0.08em] uppercase">
                      Founder & Creative Director
                    </p>
                  </div>
                  {/* Social icons */}
                  <div className="flex gap-2">
                    <a
                      href="https://www.instagram.com/kod.universe"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOD Universe on Instagram"
                      className="w-8 h-8 rounded-full bg-kod-mist border border-kod-border flex items-center justify-center text-kod-earth hover:text-kod-orange hover:border-kod-orange transition-colors"
                    >
                      <InstagramIcon size={13} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/conceptsbykod"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOD Universe on LinkedIn"
                      className="w-8 h-8 rounded-full bg-kod-mist border border-kod-border flex items-center justify-center text-kod-earth hover:text-kod-orange hover:border-kod-orange transition-colors"
                    >
                      <LinkedinIcon size={13} />
                    </a>
                    <a
                      href="https://www.facebook.com/kod.universe"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="KOD Universe on Facebook"
                      className="w-8 h-8 rounded-full bg-kod-mist border border-kod-border flex items-center justify-center text-kod-earth hover:text-kod-orange hover:border-kod-orange transition-colors"
                    >
                      <FacebookIcon size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="md:col-span-7 flex flex-col gap-7 pt-2">
              <blockquote className="font-editorial italic text-kod-earth text-2xl sm:text-3xl leading-[1.3]">
                &ldquo;Our role is to observe the moment, understand the
                culture, then create work that belongs to that moment.&rdquo;
              </blockquote>

              <div className="h-px w-12 bg-kod-orange" aria-hidden="true" />

              <div className="text-kod-earth/85 text-base leading-relaxed space-y-4">
                <p>
                  KOD Universe was founded on the belief that ideas are not
                  invented-they are discovered. Like a rare creative seed
                  traveling through the universe, inspiration arrives and takes
                  root in the present.
                </p>
                <p>
                  By cultivating a profound respect for ancient traces and
                  historical context, while maintaining an unwavering commitment
                  to modern, precise execution, our founder established a space
                  where creativity is a responsibility.
                </p>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-kod-border">
                {[
                  { n: "8+", label: "Years of craft" },
                  { n: "60+", label: "Brands shaped" },
                  { n: "3", label: "Continents reached" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-metropolis font-bold text-2xl text-kod-earth">
                      {s.n}
                    </p>
                    <p className="text-kod-earth/80 text-sm font-semibold uppercase tracking-[0.08em]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/our-universe" className="btn-primary w-fit">
                <span>Read the Full Story</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
