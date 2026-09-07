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
    description: (
      <>
        We believe creative forces arrive from the universe -{" "}
        <br className="hidden md:block" />
        carrying meaning, energy, and responsibility.
        <br className="hidden md:block" />
        We transform these seeds of ideas into modern
        <br className="hidden md:block" />
        brands, stories, and experiences that matter.
      </>
    ),
    image: "/main/hero1.webp",
    linkText: "Explore our work",
    linkHref: "/work",
  },
  {
    eyebrow: "Strategy. Design. Story.",
    title1: "Creative Forces.",
    title2: "Form.",
    titleHighlight: "Taking ",
    description: (
      <>
        We listen to the universe, observing signals and shifts.
        <br className="hidden md:block" />
        Aligning raw potential with human truth, we shape
        <br className="hidden md:block" />
        brand identities that resonate deeply and endure
        <br className="hidden md:block" />
        across changing landscapes and eras.
      </>
    ),
    image: "/hero.webp",
    linkText: "See our capabilities",
    linkHref: "/capabilities",
  },
  {
    eyebrow: "Your vision, realized.",
    title1: "Let's Create",
    title2: "Next.",
    titleHighlight: "What's ",
    description: (
      <>
        Whether you have a spark or need help finding one,
        <br className="hidden md:block" />
        we are here to turn ideas into tangible impact.
        <br className="hidden md:block" />
        Join us in building experiences that connect,
        <br className="hidden md:block" />
        inspire, and leave a lasting mark.
      </>
    ),
    image: "/our-story-cta.webp",
    linkText: "Start a conversation",
    linkHref: "/connect",
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
        {!isMobile && (
          <motion.div
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3"
            initial="hidden"
            animate="show"
            aria-hidden="true"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 1 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -15 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <svg
                className="w-8 h-8 mb-1 text-white/80 animate-spin-slow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4" />
              </svg>
            </motion.div>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`dot-top-${i}`}
                className="w-1.5 h-1.5 rounded-full bg-white animate-twinkle"
                style={{ animationDelay: `${i * 0.4}s` }}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
              />
            ))}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotate: -45 },
                show: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <svg
                className="w-6 h-6 my-1 text-white/90 animate-spin-slower"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
              </svg>
            </motion.div>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`dot-bot-${i}`}
                className="w-1.5 h-1.5 rounded-full bg-white animate-twinkle"
                style={{ animationDelay: `${1.2 + i * 0.4}s` }}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
              />
            ))}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <svg
                className="w-8 h-8 mt-1 text-white animate-breathe"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="12" cy="12" r="9" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none z-30 pt-38 sm:pt-28">
        <div className="container-site relative w-full flex justify-end">
          <Link
            href="/our-universe"
            className="group flex flex-col items-center gap-4 pointer-events-auto pr-2 md:pr-4"
          >
            <div
              className="w-24 h-24 md:w-32 md:h-32 relative cursor-pointer drop-shadow-2xl animate-breathe group-hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/icons/web-hero-design-20.webp"
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>
            <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-black font-bold tracking-widest uppercase whitespace-nowrap drop-shadow-md">
              About Us
            </span>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-canvas via-canvas/60 to-transparent pointer-events-none z-20"
        aria-hidden="true"
      />
    </section>
  );
}
