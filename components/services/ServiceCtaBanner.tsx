import Link from "next/link";
import { ArrowRight, Sun } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceCtaBanner() {
  return (
    <section className="py-24 lg:py-32 bg-kod-canvas relative" aria-label="Final call to action">
      <div className="container-site">
        <ScrollReveal variant="zoomIn">
          <div className="bg-gradient-to-br from-kod-black to-neutral-900 text-white rounded-2xl p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl border border-white/10">
            {/* Cave Ambient Glow */}
            <div
              className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-kod-orange/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl">
              <h2 className="font-metropolis font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
                Let&apos;s build an identity <br />
                <em className="font-editorial italic font-normal text-kod-gold">
                  that lasts.
                </em>
              </h2>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light mb-10 max-w-lg">
                From first spark to lasting impact, we&apos;ll shape an identity that carries your story into the future.
              </p>

              <Link
                href="/connect"
                className="group inline-flex items-center gap-4 bg-kod-orange text-white pl-8 pr-3 py-3.5 rounded-full font-metropolis font-semibold text-sm tracking-[0.15em] uppercase hover:bg-kod-crimson transition-all shadow-lg"
              >
                <span>START A CONVERSATION</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-kod-crimson transition-all">
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            {/* Decorative Motto in Footer Bar of the Banner */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Sun size={14} className="text-kod-orange" />
                <span className="font-editorial italic text-white/80 text-sm">
                  Ancient ideas. Modern impact.
                </span>
              </div>
              <span>© {new Date().getFullYear()} KOD Universe. All rights reserved.</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
