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
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden  bg-kod-canvas/50 shadow-lg">
            <div className="lg:col-span-3 p-8 lg:p-10 bg-kod-mist/60 border-b lg:border-b-0 lg:border-r border-kod-border flex flex-col justify-between relative overflow-hidden min-h-[320px]">
              <div className="absolute bottom-10 left-0 w-full h-64 opacity-35 mix-blend-multiply pointer-events-none z-0">
                <Image
                  src="/icons/Web Hero Design-25.png"
                  alt=""
                  fill
                  className="object-contain object-left-"
                />
              </div>

              <div className="relative z-10">
                <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-4 block">
                  THE CHALLENGE
                </span>
                <p className="font-editorial italic text-lg text-kod-earth leading-relaxed font-normal">
                  Marrow Studio needed an identity that reflected their quiet
                  confidence, creative rigor and elevated craft—without feeling
                  generic.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <span className="text-sm tracking-widest uppercase font-semibold text-kod-text-2 block">
                  WHY US / KOD UNIVERSE
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 relative aspect-[4/3] lg:aspect-auto min-h-[320px] bg-kod-earth border-b lg:border-b-0 lg:border-r border-kod-border overflow-hidden group">
              <video
                src="/video/video-3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 bg-kod-canvas/30 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-4xl text-kod-earth leading-tight mb-6">
                  From quiet idea <br />
                  <em className="italic font-normal">to confident identity.</em>
                </h3>

                <div className="space-y-3 mb-8">
                  <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange block">
                    OUR APPROACH
                  </span>
                  <p className="text-kod-text-2 text-sm leading-relaxed font-light">
                    We distilled their essence into a refined identity
                    system—minimal, tactile and enduring.
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-sm font-semibold tracking-widest uppercase text-kod-earth/80 mb-3 block">
                    DELIVERABLES
                  </span>
                  <ul className="space-y-2 text-sm text-kod-earth font-medium">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-kod-orange" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 text-sm font-semibold tracking-[0.15em] uppercase text-kod-earth hover:text-kod-orange transition-colors"
                >
                  <span className="border-b border-kod-earth group-hover:border-kod-orange transition-colors pb-0.5">
                    VIEW CASE STUDY
                  </span>
                  <div className="w-9 h-9 rounded-full border border-kod-border flex items-center justify-center group-hover:border-kod-orange group-hover:bg-kod-orange group-hover:text-white transition-all">
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
