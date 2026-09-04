"use client";

import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1; 
    }
  }, []);

  return (
    <section
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 border-b border-kod-border bg-kod-canvas overflow-hidden "
      aria-label="Service hero"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/video/cave-art.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top opacity-60"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-kod-canvas/90 via-kod-canvas/60 to-transparent" /> */}
      </div>

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
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-6 block drop-shadow-sm">
                {eyebrow}
              </span>

              <h1 className="font-metropolis font-semibold text-5xl sm:text-6xl lg:text-6xl text-kod-earth leading-[1.06] mb-8 text-balance drop-shadow-sm max-w-4xl">
                {titlePrefix}
                <span className="block sm:inline font-editorial italic font-normal text-kod-earth">
                  {titleItalic}
                </span>
              </h1>

              <p className="text-base md:text-lg text-kod-text-2 leading-relaxed max-w-xl font-medium mb-10 drop-shadow-sm">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/connect"
                  className="group inline-flex items-center gap-4 bg-kod-orange text-white pl-8 pr-3 py-3 rounded-full font-metropolis font-semibold text-sm tracking-[0.15em] uppercase hover:bg-kod-crimson transition-all shadow-lg"
                >
                  <span>START A BRAND PROJECT</span>
                  <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-kod-crimson transition-all">
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 w-full h-48 bg-gradient-to-t from-kod-canvas via-kod-canvas/60 to-transparent pointer-events-none z-20" aria-hidden="true" />
    </section>
  );
}
