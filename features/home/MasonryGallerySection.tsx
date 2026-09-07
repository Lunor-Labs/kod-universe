"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Plus,
  Eye,
} from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CATEGORIES = [
  "ALL",
  "BRANDING & IDENTITY",
  "PACKAGE DESIGN",
  "SOCIAL MEDIA",
];

const INITIAL_BATCH = 12;
const LOAD_MORE_STEP = 6;

export function MasonryGallerySection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "ALL") return galleryItems;
    return galleryItems.filter(
      (item) => item.category.toUpperCase() === activeCategory,
    );
  }, [activeCategory]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_BATCH);
  };

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_STEP, filteredItems.length),
    );
  };

  const currentZoomItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1,
    );
  }, [selectedItemIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0,
    );
  }, [selectedItemIndex, filteredItems.length]);

  useEffect(() => {
    if (selectedItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItemIndex, handlePrev, handleNext]);

  return (
    <section
      className="section-padding-top bg-transparent relative overflow-hidden"
      aria-label="Visual Gallery Archive"
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <ScrollReveal variant="up">
              <SectionLabel>Visual Archive</SectionLabel>
              <h2 className="heading-section text-earth text-balance">
                Moments in the{" "}
                <em className="font-serif italic font-normal">Universe.</em>
              </h2>
              <p className="mt-2 text-body text-kod-earth/85 max-w-xl">
                A curated mosaic of brand artifacts, editorial frames, and
                physical craft created by KOD Universe.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="up" delay={0.1}>
            <div
              className="flex items-center gap-1.5 sm:gap-2 flex-wrap"
              role="tablist"
              aria-label="Filter visual gallery"
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    role="tab"
                    aria-selected={isActive}
                    className={`text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded transition-all cursor-pointer ${
                      isActive
                        ? "bg-earth text-white shadow-xs"
                        : "bg-white/80 hover:bg-white text-kod-earth/70 hover:text-earth border border-border-warm/50"
                    }`}
                  >
                    {cat === "ALL" ? "All Moments" : cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-5">
          {visibleItems.map((item, index) => {
            return (
              <div
                key={item.id}
                className="break-inside-avoid mb-4 sm:mb-5 group relative rounded overflow-hidden bg-white/70 border border-border-warm/50 shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer select-none"
                onClick={() => setSelectedItemIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Zoom into ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItemIndex(index);
                  }
                }}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    item.aspectClass || "aspect-square"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                    <ZoomIn size={15} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-sm font-bold uppercase tracking-wider text-kod-clay mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-metropolis font-bold text-base leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    {item.projectTitle && (
                      <p className="text-sm text-white/85 mt-0.5 truncate">
                        {item.projectTitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-3">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-kod-canvas border border-border-warm px-6 py-3 rounded font-bold text-sm uppercase tracking-wider text-earth shadow-xs hover:shadow-md hover:border-kod-clay transition-all group cursor-pointer"
            >
              <Plus
                size={14}
                className="group-hover:rotate-90 transition-transform duration-200"
              />
              <span>Load More Moments</span>
              <span className="text-kod-earth/70 font-normal">
                ({filteredItems.length - visibleCount} remaining)
              </span>
            </button>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary/70 bg-white/50 border border-border-warm/40 px-4 py-1.5 rounded">
              Showing all {filteredItems.length} moments
            </p>
          )}
        </div>
      </div>

      {mounted &&
        currentZoomItem &&
        selectedItemIndex !== null &&
        createPortal(
          <div
            onClick={() => setSelectedItemIndex(null)}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Image zoom preview"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-30 pointer-events-auto"
            >
              <div className="flex items-center gap-3">
                <span className="text-white font-metropolis text-sm font-semibold bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/20 shadow-lg">
                  {selectedItemIndex + 1} / {filteredItems.length}
                </span>
                <span className="hidden sm:inline-block text-sm uppercase tracking-wider text-kod-clay bg-black/50 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 font-medium">
                  {currentZoomItem.category}
                </span>
              </div>

              <button
                onClick={() => setSelectedItemIndex(null)}
                aria-label="Close zoomed image"
                className="w-10 h-10 md:w-11 md:h-11 rounded bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105"
              >
                <X size={20} />
              </button>
            </div>

            {filteredItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center select-none"
            >
              <div className="relative w-full h-[65vh] sm:h-[72vh] flex items-center justify-center">
                <Image
                  key={currentZoomItem.src}
                  src={currentZoomItem.src}
                  alt={currentZoomItem.alt}
                  fill
                  priority
                  className="object-contain rounded shadow-2xl animate-in zoom-in-95 duration-200"
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-2xl px-4 py-2 rounded bg-black/50 backdrop-blur-md border border-white/15">
                <div className="text-center sm:text-left">
                  <p className="text-white font-bold text-base md:text-lg">
                    {currentZoomItem.title}
                  </p>
                  {currentZoomItem.projectTitle && (
                    <p className="text-white/80 text-sm mt-0.5">
                      {currentZoomItem.projectTitle}
                    </p>
                  )}
                </div>

                {currentZoomItem.projectSlug && (
                  <Link
                    href={`/work/${currentZoomItem.projectSlug}`}
                    onClick={() => setSelectedItemIndex(null)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-kod-clay hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded flex-shrink-0"
                  >
                    View Project
                    <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            </div>

            {filteredItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>,
          document.body,
        )}
    </section>
  );
}
