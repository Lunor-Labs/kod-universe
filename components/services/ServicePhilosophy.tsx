import Image from "next/image";
import { Sun, Sliders, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServicePhilosophyProps {
  number: string;
  titlePrefix: string;
  titleItalic: string;
  col1: string;
  col2: string;
}

export function ServicePhilosophy({
  number,
  titlePrefix,
  titleItalic,
  col1,
  col2,
}: ServicePhilosophyProps) {
  return (
    <section
      className="section-padding-top bg-kod-canvas relative overflow-hidden"
      aria-label="Brand Philosophy and Symbol Evolution"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal variant="left">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-editorial text-7xl lg:text-8xl text-kod-orange font-normal leading-none select-none">
                  {number}
                </span>
                <h2 className="font-metropolis font-semibold text-3xl sm:text-4xl text-kod-earth leading-tight">
                  {titlePrefix}
                  <br />
                  <em className="font-editorial italic font-normal text-kod-earth">
                    {titleItalic}
                  </em>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-sm sm:text-base text-kod-text-2 leading-relaxed font-light border-t border-kod-border/70">
                <p>{col1}</p>
                <p>{col2}</p>
              </div>
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-wrap sm:flex-nowrap items-center justify-around sm:justify-between text-sm sm:text-base tracking-widest font-semibold uppercase text-kod-earth gap-4">
                <div className="flex items-center gap-2">
                  <Sun size={26} className="text-kod-orange flex-shrink-0" />
                  <span>Meaning</span>
                </div>
                <div className="hidden sm:block flex-1 mx-4 h-[1px] border-t border-dashed border-kod-border" />
                <div className="flex items-center gap-2">
                  <Sliders size={26} className="text-kod-orange flex-shrink-0" />
                  <span>Memory</span>
                </div>
                <div className="hidden sm:block flex-1 mx-4 h-[1px] border-t border-dashed border-kod-border" />
                <div className="flex items-center gap-2">
                  <Compass size={26} className="text-kod-orange flex-shrink-0" />
                  <span>Momentum</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6">
            <ScrollReveal variant="right" delay={0.15}>
              <div className="bg-kod-canvas rounded-lg p-5 sm:p-8 lg:p-10 shadow-sm relative group hover:border-kod-orange/50 transition-colors">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center justify-center mb-6 sm:mb-8">
                  <div className="bg-kod-mist rounded-sm p-3 sm:p-4 text-center aspect-square flex flex-col items-center justify-center group/item hover:border-kod-orange/40 transition-colors">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center opacity-85 group-hover/item:opacity-100 transition-opacity">
                      <Image
                        src="/icons/Logo Design.png"
                        alt="Spark - Logo Design Icon"
                        width={84}
                        height={84}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-kod-text-2 mt-2 sm:mt-3 block">
                      Spark
                    </span>
                  </div>

                  <div className="bg-kod-mist rounded-sm p-3 sm:p-4 text-center aspect-square flex flex-col items-center justify-center group/item hover:border-kod-orange/40 transition-colors">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center opacity-90 group-hover/item:opacity-100 transition-opacity">
                      <Image
                        src="/icons/VISUAL STORYTELLING.png"
                        alt="Harmony - Visual Storytelling Icon"
                        width={84}
                        height={84}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-kod-text-2 mt-2 sm:mt-3 block">
                      Harmony
                    </span>
                  </div>

                  <div className="bg-kod-mist rounded-sm p-3 sm:p-4 text-center aspect-square flex flex-col items-center justify-center relative overflow-hidden shadow-inner group/item">
                    <div className="absolute inset-2 animate-spin-slow pointer-events-none" />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center z-10">
                      <Image
                        src="/icons/Branding.png"
                        alt="The Mark - Branding Icon"
                        width={84}
                        height={84}
                        className="object-contain drop-shadow-[0_0_8px_rgba(229,76,42,0.4)]"
                      />
                    </div>
                    <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-kod-orange mt-2 sm:mt-3 block relative z-10">
                      The Mark
                    </span>
                  </div>
                </div>

                <p className="text-center text-sm text-kod-text-2 font-light max-w-sm mx-auto leading-relaxed">
                  From ancient archetypes to precision geometry. We build iconic marks engineered for enduring brand recognition.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
