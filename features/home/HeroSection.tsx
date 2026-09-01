"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 400], [0, 60]);
  const textY = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center overflow-hidden bg-mist"
      aria-label="Hero section"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="/hero.jpg"
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

      <div className="container-site relative z-10 pt-28 md:pt-36 pb-20 w-full">
        <motion.div
          className="max-w-2xl"
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm font-semibold tracking-widest uppercase text-black mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Seeds of ideas. Forged on earth.
          </motion.p>

          <motion.h1
            className="font-metropolis text-earth text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Ancient Origins. <br />
            Modern{" "}
            <em className="font-editorial italic font-normal text-earth">
              Impact.
            </em>
          </motion.h1>

          <motion.p
            className="text-earth text-sm md:text-base leading-relaxed mb-10 max-w-md font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We believe creative forces arrive from the universe -{" "}
            <br className="hidden md:block" />
            carrying meaning, energy, and responsibility.
            <br className="hidden md:block" />
            We transform these seeds of ideas into modern
            <br className="hidden md:block" />
            brands, stories, and experiences that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 bg-earth hover:bg-void-black text-canvas 
                         pr-2 pl-4 py-2 rounded-full font-metropolis font-semibold text-sm tracking-widest uppercase 
                         transition-all duration-300 shadow-md group focus-visible:outline-solar-gold"
            >
              <span>Explore our work</span>
              <div className="w-8 h-8 rounded-full border border-canvas/40 flex items-center justify-center group-hover:border-canvas/80 transition-colors">
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </motion.div>
        </motion.div>

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
        aria-hidden="true"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </motion.div>
    </section>
  );
}
