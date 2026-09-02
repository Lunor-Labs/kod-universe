"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";

const SLIDES = [
  {
    eyebrow: "Seeds of ideas. Forged on earth.",
    title1: "Ancient Origins.",
    title2: "Impact.",
    titleHighlight: "Modern ",
    description: (
      <>
        We believe creative forces arrive from the universe - <br className="hidden md:block" />
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
        We listen to the universe, observing signals and shifts.<br className="hidden md:block" />
        Aligning raw potential with human truth, we shape<br className="hidden md:block" />
        brand identities that resonate deeply and endure<br className="hidden md:block" />
        across changing landscapes and eras.
      </>
    ),
    image: "/hero.jpg",
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
        Whether you have a spark or need help finding one,<br className="hidden md:block" />
        we are here to turn ideas into tangible impact.<br className="hidden md:block" />
        Join us in building experiences that connect,<br className="hidden md:block" />
        inspire, and leave a lasting mark.
      </>
    ),
    image: "/our-story-cta.jpg",
    linkText: "Start a conversation",
    linkHref: "/connect",
  },
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(!e.matches);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const imageY = useTransform(scrollY, [0, 400], [0, 60]);
  const textY = useTransform(scrollY, [0, 400], [0, -30]);
  const disableParallax = isMobile || prefersReducedMotion;

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
      className="relative flex items-center overflow-hidden bg-stone-300"
      aria-label="Hero slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={`bg-${currentSlide}`}
          className="absolute inset-0 z-0"
          style={disableParallax ? undefined : { y: imageY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: disableParallax ? 0.6 : 1.1, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(237, 234, 234, 0.2) 0%, rgba(237, 234, 234, 0.4) 30%, rgba(237, 234, 234, 0.1) 60%)",
            }}
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container-site relative z-10 pt-28 md:pt-36 pb-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            className="max-w-2xl"
            style={disableParallax ? undefined : { y: textY }}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
              exit: {
                opacity: 0,
                y: -20,
                transition: { duration: 0.4 },
              },
            }}
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-sm font-semibold tracking-widest uppercase text-black mb-6"
            >
              {slide.eyebrow}
            </motion.p>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="font-metropolis text-earth text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] mb-6 tracking-tight"
            >
              {slide.title1} <br />
              {slide.titleHighlight}
              <em className="font-editorial italic font-normal text-earth">
                {slide.title2}
              </em>
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-earth text-sm md:text-base leading-relaxed mb-10 max-w-md font-medium"
            >
              {slide.description}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  href={slide.linkHref}
                  className="inline-flex items-center gap-3 bg-earth hover:bg-void-black text-canvas 
                             pr-2 pl-4 py-2 rounded-full font-metropolis font-semibold text-sm tracking-widest uppercase 
                             transition-colors duration-300 shadow-md group focus-visible:outline-solar-gold"
                >
                  <span>{slide.linkText}</span>
                  <div className="w-8 h-8 rounded-full border border-canvas/40 flex items-center justify-center group-hover:border-canvas/80 transition-colors">
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3 text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          aria-hidden="true"
        >
          <svg
            className="w-8 h-8 mb-1 text-white/80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4" />
          </svg>

          <div className="w-1 h-1 rounded-full bg-white/50" />
          <div className="w-1 h-1 rounded-full bg-white/60" />
          <div className="w-1 h-1 rounded-full bg-white/70" />

          <svg
            className="w-6 h-6 my-1 text-white/90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
          </svg>

          <div className="w-1 h-1 rounded-full bg-white/70" />
          <div className="w-1 h-1 rounded-full bg-white/60" />
          <div className="w-1 h-1 rounded-full bg-white/50" />

          <svg
            className="w-8 h-8 mt-1 text-white/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="12" cy="12" r="9" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? "true" : "false"}
            className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solar-gold ${
              currentSlide === index
                ? "bg-white scale-125 shadow-sm"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
}
