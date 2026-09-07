import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServiceHeroProps {
  eyebrow: string;
  titlePrefix: string;
  titleItalic: string;
  description: string;
}

export function ServiceHero({
  eyebrow,
  titlePrefix,
  titleItalic,
  description,
}: ServiceHeroProps) {
  return (
    <section
      className="relative pt-28 pb-10 sm:pt-32  bg-transparent overflow-hidden"
      aria-label="Service hero"
    >
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-6 text-sm uppercase font-semibold tracking-[0.25em] text-kod-text-2">
            <span className="w-1.5 h-1.5 rounded-full bg-kod-border" />
            <span className="text-kod-text-2 hover:text-kod-earth transition-colors">Strategy</span>
            <div className="w-[1px] h-10 bg-kod-orange" />
            <span className="text-kod-orange font-bold">Identity</span>
            <div className="w-[1px] h-10 bg-kod-border" />
            <span className="text-kod-text-2 hover:text-kod-earth transition-colors">Systems</span>
            <span className="w-1.5 h-1.5 rounded-full bg-kod-border" />
          </div>
          <div className="lg:col-span-11 xl:col-span-10 relative z-20">
            <ScrollReveal variant="left">
              <span className="eyebrow text-kod-orange mb-4 sm:mb-6 block drop-shadow-sm">
                {eyebrow}
              </span>

              <h1 className="heading-hero text-kod-earth mb-6 sm:mb-8 text-balance drop-shadow-sm max-w-4xl">
                {titlePrefix}{" "}
                <span className="block sm:inline font-editorial italic font-normal text-kod-earth">
                  {titleItalic}
                </span>
              </h1>

              <p className="text-lead text-kod-text max-w-xl mb-8 sm:mb-10 drop-shadow-sm">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/connect"
                  className="btn-primary"
                >
                  <span>Start a project</span>
                  <span className="btn-badge">
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
