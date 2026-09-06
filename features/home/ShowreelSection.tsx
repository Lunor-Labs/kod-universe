"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const VIDEOS = [
  "/video/video1.mp4",
  "/video/video2.mp4",
  "/video/video3.mp4",
  "/video/video-6.mp4",
];

const STAGGER_PX = [0, 64, 0, 64];

const CARD_W = 280;
const GAP = 20;

export function ShowreelSection() {
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dragStartX = useRef(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const maxOffset = isMobile ? VIDEOS.length - 1 : VIDEOS.length - 3;
  const canGoPrev = offset > 0;
  const canGoNext = offset < maxOffset;

  useEffect(() => {
    const max = isMobile ? VIDEOS.length - 1 : VIDEOS.length - 3;
    if (offset > max) {
      setOffset(max);
    }
  }, [isMobile, offset]);

  const goTo = useCallback(
    (newOffset: number) => {
      if (isAnimating) return;
      const max = isMobile ? VIDEOS.length - 1 : VIDEOS.length - 3;
      const clamped = Math.max(0, Math.min(max, newOffset));
      setIsAnimating(true);
      setOffset(clamped);
      setTimeout(() => setIsAnimating(false), 750);
    },
    [isAnimating, isMobile],
  );

  const goNext = () => goTo(offset + 1);
  const goPrev = () => goTo(offset - 1);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      const visible = isMobile ? [offset] : [0, 1, 2].map((c) => offset + c);
      if (visible.includes(i) && isPlaying) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [offset, isPlaying, isMobile]);

  const togglePlay = () => setIsPlaying((p) => !p);

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    setIsDragging(true);
  };
  const onDragEnd = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - dragStartX.current;
    if (delta < -40) goNext();
    else if (delta > 40) goPrev();
    setIsDragging(false);
  };

  return (
    <section className="pt-12 bg-kod-black relative">
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-kod-orange/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-16 lg:space-y-0">
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[40%] mt-12 lg:mt-0">
            <ScrollReveal>
              <span className="eyebrow text-white mb-6 block tracking-[0.2em] opacity-80">
                Showreel
              </span>
              <h2 className="font-editorial italic text-white text-display-md md:text-5xl mb-8 leading-tight">
                Ideas that transcend.
                <br />
                Work that moves.
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                Experience the intersection of ancient traces and modern
                execution. We craft scroll-stopping stories that leave a lasting
                mark on the culture.
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

          <div className="order-1 lg:order-2 w-full lg:w-[60%] overflow-visible relative">
            <div
              className="relative overflow-visible touch-pan-y"
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseUp={(e) => onDragEnd(e.clientX)}
              onMouseLeave={(e) => isDragging && onDragEnd(e.clientX)}
              onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
              onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
            >
              <div
                className="flex gap-0 lg:gap-5 select-none cursor-grab active:cursor-grabbing"
                style={{
                  transform: isMobile
                    ? `translateX(-${offset * 100}%)`
                    : `translateX(-${offset * (CARD_W + GAP)}px)`,
                  transition: isAnimating
                    ? "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)"
                    : "none",
                  willChange: "transform",
                  paddingBottom: isMobile ? "24px" : "60px",
                }}
              >
                {VIDEOS.map((src, i) => {
                  const col = i - offset;
                  const isPeek = col === 3;
                  const isHidden = col < 0 || col > 3;
                  const scale = isMobile ? 1 : col === 0 ? 1.08 : isPeek ? 0.92 : 1;

                  return (
                    <div
                      key={src}
                      className="w-full lg:w-auto flex-shrink-0 flex justify-center lg:block"
                    >
                      <div
                        className={`relative flex-shrink-0 w-[320px] xs:w-[300px] sm:w-[300px] lg:w-[280px] aspect-[9/16]
                          rounded-2xl lg:rounded overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                          ${
                            isMobile
                              ? "opacity-100"
                              : isPeek
                              ? "opacity-50"
                              : isHidden
                              ? "opacity-0 pointer-events-none"
                              : "opacity-100"
                          }`}
                        style={{
                          marginTop: isMobile ? "0px" : `${STAGGER_PX[i]}px`,
                          transform: `scale(${scale})`,
                          transformOrigin: "top center",
                          transition:
                            "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.75s ease",
                        }}
                      >
                        <video
                          ref={(el) => {
                            videoRefs.current[i] = el;
                          }}
                          src={src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-kod-black/10 via-transparent to-kod-black/50 pointer-events-none" />
                        {!isMobile && isPeek && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-kod-black pointer-events-none" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {canGoPrev && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  disabled={isAnimating}
                  aria-label="Previous reel"
                  className="absolute left-2 sm:left-4 lg:left-2 top-1/2 lg:top-[40%] -translate-y-1/2 z-20
                    w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/20
                    backdrop-blur-sm flex items-center justify-center text-white
                    transition-all duration-200 hover:scale-105 disabled:opacity-40"
                >
                  <ChevronLeft size={17} />
                </button>
              )}

              {canGoNext && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  disabled={isAnimating}
                  aria-label="Next reel"
                  className="absolute right-2 sm:right-4 lg:right-0 top-1/2 lg:top-[40%] -translate-y-1/2 z-20
                    w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 border border-white/20
                    backdrop-blur-sm flex items-center justify-center text-white
                    transition-all duration-200 hover:scale-105 disabled:opacity-40"
                >
                  <ChevronRight size={17} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
