import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { type FeaturedCaseStudy } from "./types";

interface ServiceCaseStudyProps {
  caseStudy: FeaturedCaseStudy;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ServiceCaseStudy({
  caseStudy,
  ctaLabel = "EXPLORE CASE STUDY",
  ctaHref,
}: ServiceCaseStudyProps) {
  const targetHref = ctaHref || `/portfolio/${caseStudy.slug}`;
  return (
    <section
      className="section-padding bg-kod-black text-white relative overflow-hidden"
      aria-label="Featured Transformation Case Study"
    >
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal variant="left">
              <span className="eyebrow text-kod-orange mb-3 block">
                {caseStudy.badge}
              </span>

              <h2 className="heading-section text-white mb-2">
                {caseStudy.client}
              </h2>

              <p className="font-editorial italic text-xl sm:text-2xl text-kod-gold mb-6">
                {caseStudy.tagline}
              </p>

              <p className="text-body text-white/80 font-light mb-8 max-w-md whitespace-pre-line">
                {caseStudy.description}
              </p>
              <div className="mb-8">
                <span className="eyebrow text-white/60 mb-3 block">
                  DELIVERABLES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-body text-white/90 font-light">
                  {caseStudy.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-kod-orange flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={targetHref}
                className="group inline-flex items-center gap-3 bg-transparent border border-white/30 text-white px-7 py-3.5 rounded-full font-metropolis font-semibold text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-kod-black transition-all shadow-md"
              >
                <span>{ctaLabel}</span>
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal variant="right" delay={0.2}>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-kod-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
                <Image
                  src={caseStudy.imageSrc}
                  alt={caseStudy.client}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain p-4 sm:p-6 drop-shadow-2xl opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
