"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const initialized = useRef(false);
  const router = useRouter();

  const engineRef = useRef<any>(null);
  const [activeDemo, setActiveDemo] = useState(0);

  const categories = [
    { id: 0, label: "Art" },
    { id: 1, label: "Merch" },
    { id: 2, label: "Drops" },
  ];

  useEffect(() => {
    const init = async () => {
      if (initialized.current) return;
      initialized.current = true;
      try {
        if (!containerRef.current) return;
        const { initRelight } = await import("@/components/relight/app.js");
        engineRef.current = await initRelight(containerRef.current, 0);
        setLoading(false);
      } catch (err: any) {
        console.error("Failed to initialize WebGPU relighting effect:", err);
        setError(
          "Your browser may not support WebGPU, or an error occurred loading the effect.",
        );
        setLoading(false);
      }
    };

    init();

    return () => {
      if (engineRef.current?.cleanup) {
        engineRef.current.cleanup();
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button, a")) return;
    router.push("/gallery");
  };

  const changeDemo = async (index: number) => {
    setActiveDemo(index);
    if (engineRef.current?.setDemo) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 50));
      await engineRef.current.setDemo(index);
      setLoading(false);
    }
  };

  return (
    <section className="w-full ">
      <div className="container-site">
        <div
          className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden cursor-pointer rounded shadow-2xl group"
          onClick={handleClick}
          aria-label="Interactive Torch Gallery Preview"
        >
          <div ref={containerRef} className="absolute inset-0 z-0" />

          {/* Top-Left: Gallery Description Overlay */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20 max-w-xs sm:max-w-md pointer-events-auto bg-black/35 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/15 text-white shadow-2xl">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-kod-orange mb-1.5 block">
              THE KOD GALLERY
            </span>
            <h3 className="font-editorial text-lg sm:text-2xl md:text-3xl text-white font-normal leading-tight mb-2">
              Where Creativity Lives Beyond the Canvas.
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-3 sm:mb-4">
              Explore original artworks, discover the artists behind them, shop KOD-curated merchandise and limited drops, and experience short films, events and collaborations.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <Link
                href="/gallery"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 font-semibold tracking-wider uppercase text-kod-orange hover:text-white transition-colors"
              >
                <span>Explore Platform</span>
                <ArrowRight size={12} />
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/gallery#join-artist"
                onClick={(e) => e.stopPropagation()}
                className="font-medium text-white/80 hover:text-white transition-colors underline underline-offset-2"
              >
                Artist Registration
              </Link>
            </div>
          </div>

          {/* Top-Right: View Gallery Button */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 pointer-events-auto">
            <Link
              href="/gallery"
              onClick={(e) => e.stopPropagation()}
              className="btn-primary !h-10 sm:!h-11 !px-4 sm:!px-5 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xl hover:scale-105 transition-all"
            >
              <span>View Gallery</span>
              <span className="btn-badge !w-6 !h-6 sm:!w-7 sm:!h-7">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>

          <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-2 z-20 pointer-events-auto px-4">
            <div className="flex justify-center gap-3 sm:gap-4">
              {categories.map((cat) => {
                const isActive = activeDemo === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => changeDemo(cat.id)}
                    className={`px-4 sm:px-5 py-2 text-xs font-semibold tracking-widest uppercase rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? "bg-kod-orange text-white border-kod-orange shadow-lg shadow-kod-orange/40 scale-105 font-bold"
                        : "bg-black/40 text-white/70 border-white/20 hover:border-white/60 hover:text-white hover:bg-black/60"
                    }`}
                    aria-pressed={isActive}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] sm:text-xs text-white/80 bg-black/60 px-3.5 py-1 rounded-full backdrop-blur-sm border border-white/10 text-center tracking-wide">
              {activeDemo === 0 && "ART: Artworks, artist profiles and creative work"}
              {activeDemo === 1 && "MERCH: Curated artist-inspired products & apparel"}
              {activeDemo === 2 && "DROPS: Limited or special release collections"}
            </p>
          </div>

          {loading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black pointer-events-none">
              <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-white rounded-full" />
            </div>
          )}

          {error && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-none">
              <div className="max-w-md text-center p-6 bg-red-950/30 border border-red-500/30 rounded-xl">
                <p className="text-red-400 font-medium mb-2">
                  Initialization Failed
                </p>
                <p className="text-white/60 text-sm mb-4">{error}</p>
                <p className="text-white/40 text-xs">
                  This effect requires a browser with WebGPU support.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
