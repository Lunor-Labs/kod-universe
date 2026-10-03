"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const initialized = useRef(false);
  const router = useRouter();

  const engineRef = useRef<any>(null);

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
    if ((e.target as HTMLElement).tagName === "BUTTON") return;
    router.push("/gallery");
  };

  const changeDemo = async (index: number) => {
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
          <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center">
            <h2 className="text-[10vw] md:text-[8vw] font-black text-white/40 uppercase tracking-tighter font-metropolis select-none pointer-events-none text-center px-4 drop-shadow-2xl">
              View Gallery
            </h2>
          </div>

          <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 z-20 pointer-events-auto">
            <button
              onClick={() => changeDemo(0)}
              className="px-4 py-2 text-xs font-semibold tracking-widest text-white/70 uppercase border border-white/20 rounded-full bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              Drops
            </button>
            <button
              onClick={() => changeDemo(1)}
              className="px-4 py-2 text-xs font-semibold tracking-widest text-white/70 uppercase border border-white/20 rounded-full bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              Art
            </button>
            <button
              onClick={() => changeDemo(2)}
              className="px-4 py-2 text-xs font-semibold tracking-widest text-white/70 uppercase border border-white/20 rounded-full bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              Merch
            </button>
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
