"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

export function FounderHero() {
  const [imageReady, setImageReady] = useState(false);

  return (
    <section
      className="relative pt-28 sm:pt-32 pb-16 md:pb-24 bg-kod-canvas overflow-hidden"
      aria-label="Ishara Kodithuwakku - Founder of KOD Universe"
    >
      <div
        className={`container-site relative z-10 transition-all duration-700 ease-out ${
          imageReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Link
          href="/about-us"
          className="inline-flex items-center gap-2 text-kod-text-2 hover:text-kod-clay font-medium text-sm sm:text-base transition-colors mb-8 sm:mb-10 group"
          aria-label="Back to About Us"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>About Us</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded sm:rounded-sm bg-kod-mist border border-kod-border/80 w-fit mb-5">
              <span className="w-2 h-2 rounded sm:rounded-lg bg-kod-orange animate-pulse" />
              <span className="text-xs sm:text-sm font-metropolis font-semibold tracking-wider uppercase text-kod-earth">
                FOUNDER OF KOD UNIVERSE &amp; ROUKA CLOTHING | CONCEPT ARTIST | COMMERCIAL DIRECTOR | VISUAL ARTIST
              </span>
            </div>

            <h1 className="font-metropolis font-extrabold text-4xl sm:text-5xl lg:text-6xl text-kod-earth tracking-tight mb-4">
              Ishara Kodithuwakku
            </h1>

            <p className="font-editorial italic text-2xl sm:text-3xl text-kod-clay mb-6 leading-snug">
              &ldquo;When a hobby becomes a lifelong calling, the work never
              feels tiring. Bringing others’ creative visions to life fuels my
              passion.&rdquo;
            </p>

            <p className="text-body text-kod-earth/85 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Ishara Kodithuwakku is a multidisciplinary creative professional,
              visual artist, Concept Artist and Commercial Director, and the
              founder of KOD Universe and Rouka Clothing. What began as a
              fascination with art and design during Grade 10 became a
              professional career as a Graphic Designer in 2014. His journey
              expanded into freelance art direction with Iraj Productions,
              branding, advertising, visual storytelling and commercial
              productions. Alongside client work, he creates digital paintings
              and traditional canvas paintings, bringing personal artistic
              expression into his wider creative practice.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/ishara-kod/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-kod-clay text-white px-5 sm:px-6 py-3.5 rounded-full font-metropolis font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-kod-earth transition-all shadow-sm group"
              >
                <LinkedinIcon size={16} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-kod-border bg-white text-kod-earth px-5 sm:px-6 py-3.5 rounded-full font-metropolis font-semibold text-xs sm:text-sm tracking-wider uppercase hover:border-kod-clay hover:text-kod-clay transition-all shadow-xs"
              >
                <span>View Portfolio</span>
              </Link>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border border-kod-border bg-kod-mist text-kod-earth px-5 sm:px-6 py-3.5 rounded-full font-metropolis font-semibold text-xs sm:text-sm tracking-wider uppercase hover:border-kod-orange hover:text-kod-orange transition-all shadow-xs"
              >
                <Sparkles size={15} className="text-kod-orange" />
                <span>Explore Artwork</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-kod-border/70 max-w-2xl">
              <div>
                <p className="font-metropolis font-bold text-2xl sm:text-3xl text-kod-earth">
                  Since 2014
                </p>
                <p className="text-kod-text-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                  Professional Creative Career
                </p>
              </div>
              <div>
                <p className="font-metropolis font-bold text-2xl sm:text-3xl text-kod-earth">
                  70+
                </p>
                <p className="text-kod-text-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                  Brands Worked With
                </p>
              </div>
              <div>
                <p className="font-metropolis font-bold text-2xl sm:text-3xl text-kod-earth">
                  24
                </p>
                <p className="text-kod-text-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                  Selected Brand Logos Featured
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full rounded-3xl border-2 border-kod-clay/20 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-kod-border bg-kod-mist shadow-lg group">
              <Image
                src="/main/profile.webp"
                alt="Ishara Kodithuwakku - Founder & Creative Director"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 35vw"
                onLoad={() => setImageReady(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kod-earth/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-kod-border/70 shadow-sm flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-metropolis font-bold text-kod-earth text-base">
                      Ishara Kodithuwakku
                    </p>
                    <Sparkles size={14} className="text-kod-orange" />
                  </div>
                  <p className="text-xs font-semibold text-kod-clay tracking-wider uppercase mt-0.5">
                    Creative Director · Colombo, Sri Lanka
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/ishara-kod/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-9 h-9 rounded-full bg-kod-mist border border-kod-border flex items-center justify-center text-kod-earth hover:text-kod-orange hover:border-kod-orange transition-colors"
                >
                  <LinkedinIcon size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
