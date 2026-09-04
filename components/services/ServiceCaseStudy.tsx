import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type FeaturedCaseStudy } from "./types";

interface ServiceCaseStudyProps {
  caseStudy: FeaturedCaseStudy;
}

export function ServiceCaseStudy({ caseStudy }: ServiceCaseStudyProps) {
  return (
    <section
      className="section-padding bg-kod-black text-white relative overflow-hidden"
      aria-label="Featured Transformation Case Study"
    >
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal variant="left">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-3 block">
                {caseStudy.badge}
              </span>

              <h2 className="font-metropolis font-semibold text-4xl sm:text-5xl lg:text-5xl text-white mb-2">
                {caseStudy.client}
              </h2>

              <p className="font-editorial italic text-xl sm:text-2xl text-kod-gold mb-6">
                {caseStudy.tagline}
              </p>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-md">
                {caseStudy.description}
              </p>
              <div className="mb-8">
                <span className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-3 block">
                  DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-white/90 font-light">
                  {caseStudy.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-kod-orange flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-start sm:items-end mb-8">
                <div>
                  <span className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-2.5 block">
                    COLOR SYSTEM
                  </span>
                  <div className="flex items-center gap-1.5">
                    {caseStudy.palette.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 rounded-sm border border-white/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-editorial text-4xl text-white font-normal leading-none select-none">
                    Aa
                  </span>
                  <div className="text-sm uppercase tracking-wider text-white/70 leading-tight">
                    <p className="text-white font-semibold font-editorial">
                      {caseStudy.headlineFont}
                    </p>
                    <p>{caseStudy.bodyFont}</p>
                  </div>
                </div>
              </div>

              <Link
                href={`/work/${caseStudy.slug}`}
                className="group inline-flex items-center gap-3 bg-transparent border border-white/30 text-white px-7 py-3.5 rounded-full font-metropolis font-semibold text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-kod-black transition-all shadow-md"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal variant="right" delay={0.2}>
              <div className="relative aspect-[16/10] rounded overflow-hidden border border-white/10 shadow-2xl bg-kod-black">
                <Image
                  src={caseStudy.imageSrc}
                  alt={caseStudy.client}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
