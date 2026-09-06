"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import type { ProjectImage } from "@/types/project";

interface ContentHighlightsCarouselProps {
  title?: string;
  images: ProjectImage[];
  tags?: string[];
}

export function ContentHighlightsCarousel({
  title = "Content Highlights",
  images,
  tags = [],
}: ContentHighlightsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -360 : 360;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : images.length - 1;
    });
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev < images.length - 1 ? prev + 1 : 0;
    });
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="w-full pt-8 pb-4">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="font-metropolis font-bold text-display-sm sm:text-display-md text-kod-clay tracking-tight whitespace-nowrap">
            {title}
          </h2>
          <div className="h-[2px] bg-kod-border flex-1" />
        </div>
        {images.length > 3 && (
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-kod-border flex items-center justify-center text-kod-clay hover:bg-kod-clay hover:text-kod-white transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-kod-border flex items-center justify-center text-kod-clay hover:bg-kod-clay hover:text-kod-white transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 select-none scrollbar-none scroll-smooth cursor-grab active:cursor-grabbing snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="flex-shrink-0 w-48 sm:w-56 md:w-64 aspect-square rounded overflow-hidden border border-kod-border bg-kod-white shadow-sm hover:shadow-md hover:border-kod-clay transition-all hover:scale-[1.02] cursor-pointer snap-start relative group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
          </div>
        ))}
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 select-none">
          {tags.map((tag) => (
            <div
              key={tag}
              className="inline-flex items-center gap-3 text-base md:text-lg font-medium text-kod-earth"
            >
              <div className="w-5 h-5 rounded-full bg-kod-clay flex items-center justify-center text-kod-white flex-shrink-0 shadow-sm">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="font-metropolis tracking-tight text-kod-earth">
                {tag}
              </span>
            </div>
          ))}
        </div>
      )}

      {mounted &&
        currentImage &&
        selectedIndex !== null &&
        createPortal(
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Image zoom preview"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-30 pointer-events-auto"
            >
              <span className="text-white font-metropolis text-sm md:text-base font-semibold bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                {selectedIndex + 1} / {images.length}
              </span>

              <button
                onClick={() => setSelectedIndex(null)}
                aria-label="Close zoomed image"
                className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105"
              >
                <X size={20} />
              </button>
            </div>

            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
              >
                <ChevronLeft size={26} />
              </button>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center select-none"
            >
              <div className="relative w-full h-[70vh] flex items-center justify-center">
                <Image
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={currentImage.width || 1200}
                  height={currentImage.height || 1200}
                  priority
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
                />
              </div>
              {currentImage.alt && (
                <p className="text-white/85 text-sm md:text-base text-center mt-3 font-medium max-w-xl truncate px-4 bg-black/40 py-1 rounded-full border border-white/10">
                  {currentImage.alt}
                </p>
              )}
            </div>

            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
              >
                <ChevronRight size={26} />
              </button>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
}
