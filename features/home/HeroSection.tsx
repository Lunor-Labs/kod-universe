"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const SLIDES = [
  {
    eyebrow: "Seeds of ideas. Forged on earth.",
    title1: "Ancient Origins.",
    title2: "Impact.",
    titleHighlight: "Modern ",
    description:
      "We believe creative forces arrive from the universe - carrying meaning, energy, and responsibility. We transform these seeds of ideas into modern brands, stories, and experiences that matter.",
    image: "/main/hero1.webp",
    linkText: "Explore our work",
    linkHref: "/portfolio",
  },
  {
    eyebrow: "Strategy. Design. Story.",
    title1: "Creative Forces.",
    title2: "Form.",
    titleHighlight: "Taking ",
    description:
      "We listen to the universe, observing signals and shifts. Aligning raw potential with human truth, we shape brand identities that resonate deeply and endure across changing landscapes and eras.",
    image: "/assets/hero.webp",
    linkText: "See our capabilities",
    linkHref: "/services",
  },
  {
    eyebrow: "Your vision, realized.",
    title1: "Let's Create",
    title2: "Next.",
    titleHighlight: "What's ",
    description:
      "Whether you have a spark or need help finding one, we are here to turn ideas into tangible impact. Join us in building experiences that connect, inspire, and leave a lasting mark.",
    image: "/assets/our-story-cta.webp",
    linkText: "Start a conversation",
    linkHref: "/contact-us",
  },
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(!e.matches);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const slide = SLIDES[currentSlide];

  return (
    <section
      ref={heroRef}
      className="relative flex items-center overflow-hidden bg-stone-300 min-h-screen"
      aria-label="Hero slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <>
        <div className="absolute inset-0 z-0 w-full h-full">
          <video
            src={"/video/main-video.mp4"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          />
        </div>
      </>

      <div className="container-site relative z-10 pt-10 md:pt-36 pb-20 w-full">
        {isMobile ? (
          <div
            key={`content-mobile-${currentSlide}`}
            className="relative max-w-4xl animate-fade-in"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-black mb-6 antialiased">
              {slide.eyebrow}
            </p>
            <h1 className="heading-hero text-earth mb-6 tracking-tight font-normal antialiased">
              {slide.title1} <br />
              {slide.titleHighlight}
              <em className="font-editorial italic font-normal text-earth">
                {slide.title2}
              </em>
            </h1>
            <p className="text-lead text-earth mb-10 max-w-xl antialiased">
              {slide.description}
            </p>
            <div className="antialiased">
              <div className="inline-block">
                <Link
                  href={slide.linkHref}
                  className="btn-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50"
                >
                  <span>{slide.linkText}</span>
                  <span className="btn-badge">
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-desktop-${currentSlide}`}
              className="relative max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                className="text-sm font-semibold tracking-widest uppercase text-black mb-6 antialiased"
              >
                {slide.eyebrow}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                className="heading-hero text-earth mb-6 tracking-tight font-normal antialiased"
              >
                {slide.title1} <br />
                {slide.titleHighlight}
                <em className="font-editorial italic font-normal text-earth">
                  {slide.title2}
                </em>
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
                className="antialiased"
              >
                <div className="inline-block">
                  <Link
                    href={slide.linkHref}
                    className="btn-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50"
                  >
                    <span>{slide.linkText}</span>
                    <span className="btn-badge">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none z-30 pt-18 sm:pt-28">
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
                className="object-contain"
              />
            </div>
            <span className="hidden md:block translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-black font-bold tracking-widest uppercase whitespace-nowrap drop-shadow-md">
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
