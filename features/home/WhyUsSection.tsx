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
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded overflow-hidden  border border-white/10 shadow-2xl">
            <div className="lg:col-span-3 p-8 lg:p-10 bg-kod-earth flex flex-col justify-between relative overflow-hidden min-h-[320px]">
              <div className="absolute -bottom-4 sm:bottom-6 left-40 sm:left-0 w-full h-64 opacity-15 invert mix-blend-screen pointer-events-none z-0">
                <Image
                  src="/icons/web-hero-design-25.webp"
                  alt=""
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="relative z-10">
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-kod-orange mb-3 block">
                  THE CHALLENGE
                </span>
                <p className="font-editorial italic text-xl text-white/95 leading-relaxed font-normal">
                  Marrow Studio needed an identity that reflected their quiet
                  confidence, creative rigor and elevated craft-without feeling
                  generic.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <span className="text-sm tracking-wider uppercase font-bold text-kod-dust/80 block">
                  WHY US / KOD UNIVERSE
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 relative aspect-square lg:aspect-auto min-h-[320px] bg-canvas overflow-hidden group">
              {/* <video
                src="/video/video-3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              /> */}
              <Image
                src="/main/circle.webp"
                alt=""
                fill
                className="absolute inset-0 w-full h-full object-contain animate-[spin_30s_linear_infinite] sm:p-8 [transform-origin:center]"
              />
              <div
                className="absolute inset-0 transition-opacity"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)",
                }}
              />
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 bg-kod-earth flex flex-col justify-between">
              <div>
                <h3 className="heading-section font-editorial font-normal text-white mb-6">
                  From quiet idea <br />
                  <em className="italic text-kod-dust">
                    to confident identity.
                  </em>
                </h3>

                <div className="space-y-2 mb-8">
                  <span className="eyebrow text-kod-orange block">
                    OUR APPROACH
                  </span>
                  <p className="text-body text-white/85">
                    We distilled their essence into a refined identity
                    system-minimal, tactile and enduring.
                  </p>
                </div>

                <div className="mb-8">
                  <span className="eyebrow text-white/90 mb-3.5 block">
                    DELIVERABLES
                  </span>
                  <ul className="space-y-2.5 text-body text-white/95 font-medium">
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
                  href="/portfolio"
                  className="btn-link !text-white hover:!text-kod-orange"
                >
                  <span>View case study</span>
                  <span className="btn-icon-circle !border-white/30 group-hover:!border-kod-orange">
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
