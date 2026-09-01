"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax — image moves up 60px as you scroll 400px
  const imageY = useTransform(scrollY, [0, 400], [0, 60]);
  const textY = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden texture-cave bg-earth"
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Gradient overlay — left to right, preserves the visual from the screenshot */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(58,47,45,0.82) 0%, rgba(58,47,45,0.55) 40%, rgba(58,47,45,0.2) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, #F7F3F1, transparent)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Content */}
      <div className="container-site relative z-10 pt-28 md:pt-36 pb-20">
        <motion.div
          className="max-w-xl"
          style={{ y: textY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <motion.p
            className="text-xs font-semibold tracking-[0.25em] uppercase text-dust-rose mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Seeds of ideas. Forged on earth.
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="font-metropolis font-semibold text-canvas text-display-2xl leading-[1.02] mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Ancient Origins.{" "}
            <br />
            Modern{" "}
            <em className="font-serif italic font-normal text-dust-rose">
              Impact.
            </em>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-dust-rose text-base md:text-lg leading-relaxed mb-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We transform ideas into modern brands, stories, and experiences that
            connect, inspire, and leave a lasting mark.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-signal-orange text-white 
                         px-7 py-3.5 rounded-sm font-metropolis font-medium text-sm tracking-wide 
                         transition-all duration-200 hover:bg-deep-crimson group focus-visible:outline-solar-gold"
            >
              Explore our work
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-dust-rose/40 relative overflow-hidden">
          <motion.div
            className="absolute top-0 w-full h-full bg-dust-rose"
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <ChevronDown size={14} className="text-dust-rose/60" />
      </motion.div>

      {/* Decorative dots — right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-3" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === 1 ? "w-2 h-2 bg-dust-rose" : "w-1.5 h-1.5 bg-dust-rose/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
