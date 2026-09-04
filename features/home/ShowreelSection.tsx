"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ShowreelSection() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      video1Ref.current?.pause();
      video2Ref.current?.pause();
      video3Ref.current?.pause();
    } else {
      video1Ref.current?.play();
      video2Ref.current?.play();
      video3Ref.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-6 bg-kod-black border-b border-kod-border overflow-hidden relative">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-kod-orange/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      
      <div className="container-site relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-16 lg:space-y-0">
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[40%] mt-12 lg:mt-0">
            <ScrollReveal>
              <span className="eyebrow text-white mb-6 block tracking-[0.2em] opacity-80">
                Showreel
              </span>
              <h2 className="font-editorial italic text-white text-display-md md:text-5xl mb-8 leading-tight">
                Ideas that transcend.<br />Work that moves.
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                Experience the intersection of ancient traces and modern execution. 
                We craft scroll-stopping stories that leave a lasting mark on the culture.
              </p>
              
              <button
                onClick={togglePlay}
                className="inline-flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full pr-6 pl-2 py-2 transition-all duration-300 group mx-auto lg:mx-0"
                aria-label={isPlaying ? "Pause videos" : "Play videos"}
              >
                <div className="w-12 h-12 rounded-full bg-white text-kod-black flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {isPlaying ? (
                    <Pause size={18} className="fill-current" />
                  ) : (
                    <Play size={18} className="fill-current translate-x-0.5" />
                  )}
                </div>
                <span className="font-metropolis font-semibold tracking-wide text-sm uppercase">
                  {isPlaying ? "Pause Reels" : "Play Reels"}
                </span>
              </button>
            </ScrollReveal>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-[60%] flex justify-center lg:justify-end items-center gap-3 sm:gap-4 lg:gap-6">
            <ScrollReveal delay={0.2} width="fit-content">
              <div className="relative w-[110px] sm:w-[180px] lg:w-[220px] xl:w-[260px] aspect-[9/16] rounded overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform hover:-translate-y-2 duration-500">
                <video
                  ref={video1Ref}
                  src="/video/video1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-kod-black/10 via-transparent to-kod-black/50 pointer-events-none" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} width="fit-content">
              <div className="relative w-[110px] sm:w-[180px] lg:w-[220px] xl:w-[260px] aspect-[9/16] rounded overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform hover:-translate-y-2 duration-500 mt-12 sm:mt-24">
                <video
                  ref={video2Ref}
                  src="/video/video2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-kod-black/10 via-transparent to-kod-black/50 pointer-events-none" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6} width="fit-content">
              <div className="relative w-[110px] sm:w-[180px] lg:w-[220px] xl:w-[260px] aspect-[9/16] rounded overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform hover:-translate-y-2 duration-500 mt-4 sm:mt-8">
                <video
                  ref={video3Ref}
                  src="/video/video3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-kod-black/10 via-transparent to-kod-black/50 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
