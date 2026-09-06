import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyUsSection() {
  const deliverables = [
    "Brand Strategy & Positioning",
    "Visual Identity System",
    "Brand Voice & Messaging",
    "Guidelines & Applications",
  ];

  return (
    <section
      className="section-padding-top bg-transparent relative overflow-hidden"
      aria-label="Why Choose KOD Universe"
    >
      <div className="container-site">
        <ScrollReveal variant="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden bg-[#171312] border border-white/10 shadow-2xl">
            <div className="lg:col-span-3 p-8 lg:p-10 bg-[#120F0E] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative overflow-hidden min-h-[320px]">
              <div className="absolute bottom-6 left-0 w-full h-64 opacity-15 invert mix-blend-screen pointer-events-none z-0">
                <Image
                  src="/icons/Web Hero Design-25.png"
                  alt=""
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="relative z-10">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-kod-orange mb-4 block">
                  THE CHALLENGE
                </span>
                <p className="font-editorial italic text-lg text-white/90 leading-relaxed font-normal">
                  Marrow Studio needed an identity that reflected their quiet
                  confidence, creative rigor and elevated craft—without feeling
                  generic.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <span className="text-xs tracking-widest uppercase font-semibold text-kod-dust/70 block">
                  WHY US / KOD UNIVERSE
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 relative aspect-[4/3] lg:aspect-auto min-h-[320px] bg-black border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden group">
              <video
                src="/video/video-3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 group-hover:opacity-60 transition-opacity" />
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 bg-[#171312] flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-4xl text-white leading-tight mb-6">
                  From quiet idea <br />
                  <em className="italic font-normal text-kod-dust">to confident identity.</em>
                </h3>

                <div className="space-y-2 mb-8">
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-kod-orange block">
                    OUR APPROACH
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed font-light">
                    We distilled their essence into a refined identity
                    system—minimal, tactile and enduring.
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-3.5 block">
                    DELIVERABLES
                  </span>
                  <ul className="space-y-2.5 text-sm text-white/90 font-medium">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-kod-orange shadow-[0_0_6px_rgba(229,76,42,0.8)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] uppercase text-white hover:text-kod-orange transition-colors"
                >
                  <span className="border-b border-white/30 group-hover:border-kod-orange transition-colors pb-0.5">
                    VIEW CASE STUDY
                  </span>
                  <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-kod-orange group-hover:bg-kod-orange group-hover:text-white transition-all shadow-sm">
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
