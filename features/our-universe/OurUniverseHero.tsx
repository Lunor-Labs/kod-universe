"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function OurUniverseHero() {
  const [imageReady, setImageReady] = useState(false);

  return (
    <section
      className="relative flex items-center pt-28 pb-20 min-h-[80vh] overflow-hidden bg-stone-300"
      aria-label="Our Story hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/main/about-us-hero.webp"
          alt="Cave wall with KOD logo painted on it"
          fill
          priority
          className={`object-cover object-center transition-opacity duration-700 ${
            imageReady ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          onLoad={() => setImageReady(true)}
        />

        <div
          className={`absolute inset-0 bg-stone-300 transition-opacity duration-700 ${
            imageReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 animate-shimmer bg-[length:200%_100%]" />
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-r from-kod-canvas/90 via-kod-canvas/90 to-transparent md:w-1/2"
          aria-hidden="true"
        />
      </div>

      <div
        className={`container-site relative z-10 w-full transition-all duration-700 ease-out ${
          imageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 max-w-4xl">
            <p className="eyebrow mb-4">ABOUT US</p>

            <h1 className="heading-hero text-kod-earth mb-6 text-balance">
              We Don&apos;t Just Build Brands. <br />
              <span className="font-editorial italic font-normal text-kod-earth">
                We Create Universes.
              </span>
            </h1>

            <div className="text-lead text-kod-earth mb-8 max-w-2xl font-normal space-y-4">
              <p>
                Since 2018, KOD Universe has brought ideas to life through creative strategy, branding, design, packaging, marketing campaigns, and visual storytelling, crafting meaningful experiences that connect brands with people.
              </p>
              <p>
                Beyond the agency, we&apos;re building a creative universe where artists showcase their work, audiences discover original art, and selected creations become merchandise and exclusive drops. Through short films, events, and collaborations, we bring art, culture, and commerce together.
              </p>
            </div>

            <Link href="/portfolio" className="btn-primary w-fit">
              <span>Explore Our Work</span>
              <span className="btn-badge">
                <ArrowRight size={13} aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="hidden  lg:col-span-5 md:flex flex-col lg:items-end justify-center pt-12 lg:pt-0">
            <div className="p-6 lg:p-0 rounded-lg max-w-xs text-left lg:text-right drop-shadow-sm">
              <div className="flex lg:justify-end mb-3">
                <svg
                  className="w-8 h-8 text-kod-clay/30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                </svg>
              </div>
              <p className=" font-editorial italic text-kod-canvas text-lg sm:text-xl leading-relaxed font-normal opacity-95">
                &ldquo;In every era, creativity is the bridge between what is
                and what could be.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-canvas via-canvas/40 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-canvas via-canvas/40 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
    </section>
  );
}
