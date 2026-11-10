"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const HERO_CONTENT = {
  eyebrow: "ABOUT US",
  title1: "We Don't Just Build Brands.",
  titleHighlight: " We Create ",
  title2: "Universes.",
  description:
    "Since 2018, KOD Universe has helped brands stand out through branding, packaging, campaigns, and visual storytelling. Beyond the agency, our Gallery connects artists and audiences through original art, curated merchandise, short films, events, and creative collaborations.",
  primaryLinkText: "Explore Our Work",
  primaryLinkHref: "/portfolio",
  secondaryLinkText: "Discover Our Gallery",
  secondaryLinkHref: "/gallery",
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const notifyReady = () => {
      setVideoReady(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("kod-hero-ready"));
      }
    };

    if (isMobile) {
      notifyReady();
      return;
    }

    if (videoRef.current && videoRef.current.readyState >= 2) {
      notifyReady();
    }

    const fallback = setTimeout(notifyReady, 1200);
    return () => clearTimeout(fallback);
  }, [isMobile]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(!e.matches);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const slide = HERO_CONTENT;

  return (
    <section
      ref={heroRef}
      className="relative flex items-center overflow-hidden bg-stone-300 min-h-screen"
      aria-label="Hero section"
    >
      <div className="md:hidden absolute inset-0 z-0 w-full h-full">
        <Image
          src="/main/hero-mobile-backdrop.jpg"
          alt="KOD Universe creative origins backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="hidden md:block absolute inset-0 z-0 w-full h-full">
        {!isMobile && (
          <video
            ref={videoRef}
            src={"/video/main-video.mp4"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
            onCanPlay={() => {
              setVideoReady(true);
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("kod-hero-ready"));
              }
            }}
            onLoadedData={() => {
              setVideoReady(true);
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("kod-hero-ready"));
              }
            }}
          />
        )}
        <div
          className={`absolute inset-0 bg-stone-300 transition-opacity duration-700 ${
            videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 animate-shimmer bg-[length:200%_100%]" />
        </div>
      </div>

      <div
        className="container-site relative z-10 pt-20 md:pt-36 pb-20 w-full transition-all duration-700 ease-out opacity-100 translate-y-0"
      >
        {isMobile ? (
          <div
            className="relative max-w-4xl animate-fade-in"
          >
            <h1 className="heading-hero text-earth mb-6 tracking-tight font-normal antialiased text-left">
              {slide.title1}
              {slide.titleHighlight}
                {slide.title2}
            </h1>
            <p className="text-lead text-earth mb-4 max-w-xl antialiased line-clamp-3 pt-72 text-">
              {slide.description}
            </p>
            <div className="antialiased flex flex-wrap items-start justify-start gap-4">
              <Link
                href={slide.primaryLinkHref}
                className="btn-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50"
              >
                <span>{slide.primaryLinkText}</span>
                <span className="btn-badge">
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
              <Link
                href={slide.secondaryLinkHref}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/20 bg-white/70 hover:bg-white text-kod-earth font-metropolis font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs hover:border-kod-orange hover:text-kod-orange backdrop-blur-md"
              >
                <span>{slide.secondaryLinkText}</span>
                <span className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-kod-earth group-hover:text-kod-orange transition-colors">
                  <ArrowRight size={12} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative max-w-4xl">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                className="font-semibold tracking-widest uppercase text-black mb-6 antialiased"
              >
                {slide.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                className="text-5xl !font-bold text-earth mb-6 tracking-tight font-normal antialiased"
              >
                {slide.title1} <br />
                {slide.titleHighlight}
                  {slide.title2}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                className="text-lead text-earth mb-10 max-w-xl antialiased"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className="antialiased flex flex-wrap items-center gap-4"
              >
                <Link
                  href={slide.primaryLinkHref}
                  className="btn-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50"
                >
                  <span>{slide.primaryLinkText}</span>
                  <span className="btn-badge">
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
                <Link
                  href={slide.secondaryLinkHref}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/20 bg-white/70 hover:bg-white text-kod-earth font-metropolis font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs hover:border-kod-orange hover:text-kod-orange backdrop-blur-md"
                >
                  <span>{slide.secondaryLinkText}</span>
                  <span className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center text-kod-earth group-hover:text-kod-orange transition-colors">
                    <ArrowRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
          </div>
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none z-30 pt-44 sm:pt-28">
        <div className="container-site relative w-full flex justify-end">
          <Link
            href="/about-us"
            className="group flex flex-col items-center pointer-events-auto pr-2 md:pr-4"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 relative cursor-pointer drop-shadow-2xl animate-breathe group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/web-hero-design-20.webp"
                alt="About Us"
                fill
                sizes="(min-width: 768px) 128px, 96px"
                className="object-contain"
              />
            </div>
            <span className="sm:translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-black font-semibold sm:font-bold tracking-widest uppercase whitespace-nowrap drop-shadow-md">
              About Us
            </span>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-canvas via-canvas/60 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-canvas via-canvas/60 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
    </section>
  );
}
