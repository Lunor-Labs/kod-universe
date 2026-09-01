import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "We Are Messengers of Creative Forces. The story, origin, mission, philosophy, and creative journey behind KOD Universe.",
  alternates: { canonical: "/our-universe" },
};

export default function OurUniversePage() {
  return (
    <div className="bg-canvas text-earth">
      <section
        className="relative flex items-center pt-28 pb-20 overflow-hidden"
        aria-label="Our Story hero"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/our-story-hero.jpg"
            alt="Ancient sandstone cave overlooking a desert under starry sky with shooting star"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-canvas/90 via-canvas/60 to-transparent md:w-1/2"
            aria-hidden="true"
          />
        </div>

        <div className="container-site relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 max-w-xl">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4">
                Our Story. Our Origin. Our Why.
              </p>

              <h1 className="font-metropolis text-earth text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] mb-6 text-balance">
                We Are Messengers <br />
                of{" "}
                <span className="font-editorial italic font-normal text-earth">
                  Creative Forces.
                </span>
              </h1>

              <p className="text-earth text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
                From the vast universe, ideas spark—seeds of potential. We
                receive them with purpose and shape them into modern brand
                experiences that connect, inspire, and leave a lasting mark.
              </p>

              <Link
                href="/work"
                className="inline-flex items-center gap-3 bg-signal-orange hover:bg-deep-crimson text-white px-7 py-3.5 rounded-full font-metropolis font-semibold text-sm tracking-[0.12em] uppercase transition-all duration-200 shadow-md hover:shadow-lg group w-fit"
              >
                <span>Explore Our Work</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="lg:col-span-5 flex flex-col lg:items-end justify-center pt-12 lg:pt-0">
              <div className="p-6 lg:p-0 rounded-lg max-w-xs text-left lg:text-right drop-shadow-sm">
                <div className="flex lg:justify-end mb-3">
                  <svg
                    className="w-8 h-8 text-clay/30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                  </svg>
                </div>
                <p className="font-editorial italic text-canvas text-lg sm:text-xl leading-relaxed text-shadow-sm font-normal opacity-95">
                  &ldquo;In every era, creativity is the bridge between what is
                  and what could be.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-b border-border-warm bg-canvas py-12 md:py-16"
        aria-label="Core Pillars"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border-warm">
            <div className="lg:px-8 first:pl-0 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <circle cx="20" cy="20" r="14" strokeDasharray="2 2" />
                    <circle cx="20" cy="20" r="6" />
                    <path d="M20 2v6M20 32v6M2 20h6M32 20h6M7.27 7.27l4.24 4.24M28.49 28.49l4.24 4.24M7.27 32.73l4.24-4.24M28.49 11.51l4.24-4.24" />
                  </svg>
                </div>
                <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                  Our Mission
                </h3>
                <p className="text-secondary text-sm sm:text-sm leading-relaxed mb-6">
                  To transform cosmic ideas into meaningful brand experiences
                  that move people and shape a better tomorrow.
                </p>
              </div>
              <div>
                <Link
                  href="/capabilities"
                  aria-label="Learn about our mission"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
                >
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:px-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <circle cx="20" cy="20" r="8" />
                    <ellipse
                      cx="20"
                      cy="20"
                      rx="18"
                      ry="6"
                      transform="rotate(-25 20 20)"
                    />
                    <circle cx="29" cy="14" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                  Our Philosophy
                </h3>
                <p className="text-secondary text-sm sm:text-sm leading-relaxed mb-6">
                  We believe ideas are everywhere. Our role is to listen deeply,
                  think boldly, and create with intention—uniting strategy,
                  design, and story into powerful experiences.
                </p>
              </div>
              <div>
                <Link
                  href="/capabilities"
                  aria-label="Learn about our philosophy"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
                >
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:px-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                  <svg
                    className="w-9 h-9"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 2a1.5 1.5 0 0 0-1.5 1.5v6.5h-1V5a1.5 1.5 0 0 0-3 0v7a6.5 6.5 0 0 0 13 0V6.5a1.5 1.5 0 0 0-3 0V10h-1V3.5A1.5 1.5 0 0 0 13.5 2h-1.5z"
                      opacity="0.85"
                    />
                  </svg>
                </div>
                <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                  Our Values
                </h3>
                <ul className="text-secondary text-sm sm:text-sm leading-relaxed space-y-1.5 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-signal-orange" />
                    Curiosity over convention
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-signal-orange" />
                    Purpose over popularity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-signal-orange" />
                    Craft over compromise
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-signal-orange" />
                    Collaboration over ego
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-signal-orange" />
                    Impact over impression
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href="/capabilities"
                  aria-label="Learn about our values"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
                >
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:px-8 last:pr-0 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mb-5 text-signal-orange flex items-center justify-center">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path
                      d="M20 20a3 3 0 0 1 3 3 6 6 0 0 1-6 6 9 9 0 0 1-9-9 12 12 0 0 1 12-12 15 15 0 0 1 15 15 18 18 0 0 1-18 18"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-3">
                  Our Approach
                </h3>
                <p className="text-secondary text-sm sm:text-sm leading-relaxed mb-6">
                  We blend insight with imagination. A dynamic process that
                  fuses strategy, storytelling, and design to build brands that
                  connect, resonate, and endure.
                </p>
              </div>
              <div>
                <Link
                  href="/capabilities"
                  aria-label="Learn about our approach"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border-warm text-earth hover:border-signal-orange hover:text-signal-orange transition-colors group"
                >
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-label="The Journey">
        <div className="container-site">
          <div className="border border-border-warm rounded-xl bg-mist/70 p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.25em] uppercase text-secondary">
                <span>✦</span>
                <span>The Journey: From Spark to Impact</span>
                <span>✦</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 relative flex items-center justify-center">
                  <svg
                    className="w-full h-full text-secondary"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      strokeDasharray="3 3"
                      opacity="0.3"
                    />
                    <path d="M35 70c5-10 10-18 20-20 8-1 12 3 10 9-2 6-8 10-14 11M52 48c0-4 3-7 7-7s7 3 7 7-3 7-7 7M25 75c10-2 25-5 35 2M75 75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM65 80a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM80 65a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    <circle
                      cx="45"
                      cy="72"
                      r="1.5"
                      fill="#A2533B"
                      stroke="none"
                    />
                    <circle
                      cx="55"
                      cy="75"
                      r="1"
                      fill="#A2533B"
                      stroke="none"
                    />
                    <circle
                      cx="68"
                      cy="70"
                      r="1.5"
                      fill="#A2533B"
                      stroke="none"
                    />
                    <circle
                      cx="78"
                      cy="60"
                      r="1"
                      fill="#A2533B"
                      stroke="none"
                    />
                  </svg>
                </div>

                <div className="w-6 h-6 rounded-full bg-signal-orange text-white text-sm font-bold flex items-center justify-center mb-3">
                  1
                </div>

                <h4 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-2">
                  Curiosity
                </h4>
                <p className="text-secondary text-sm leading-relaxed max-w-[200px]">
                  We listen to the universe—observing signals, shifts, and
                  stories waiting to be discovered.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 relative flex items-center justify-center">
                  <svg
                    className="w-full h-full text-secondary"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="50" cy="50" r="38" />
                    <circle cx="50" cy="50" r="28" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="4" fill="#A2533B" />
                    <path
                      d="M50 12v76M12 50h76M23 23l54 54M23 77l54-54"
                      opacity="0.6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      strokeDasharray="3 3"
                      opacity="0.3"
                    />
                  </svg>
                </div>

                <div className="w-6 h-6 rounded-full bg-signal-orange text-white text-sm font-bold flex items-center justify-center mb-3">
                  2
                </div>

                <h4 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-2">
                  Purpose
                </h4>
                <p className="text-secondary text-sm leading-relaxed max-w-[200px]">
                  We find meaning in the spark—aligning it with truth,
                  intention, and human need.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 relative flex items-center justify-center">
                  <svg
                    className="w-full h-full text-secondary"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      stroke="currentColor"
                      strokeDasharray="3 3"
                      opacity="0.3"
                    />
                    <path
                      d="M50 25c13 0 24 11 24 24 0 18-24 36-24 36s-24-18-24-36c0-13 11-24 24-24z"
                      fill="#C57053"
                      opacity="0.9"
                    />
                    <path
                      d="M50 38a11 11 0 1 1-7.8 18.8 8 8 0 1 0 7.8-13.8 5 5 0 1 1-5 5"
                      stroke="#FAF7F2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="w-6 h-6 rounded-full bg-signal-orange text-white text-sm font-bold flex items-center justify-center mb-3">
                  3
                </div>

                <h4 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-2">
                  Imagination
                </h4>
                <p className="text-secondary text-sm leading-relaxed max-w-[200px]">
                  We shape the idea into form—through strategy, storytelling,
                  and inspired design.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 relative flex items-center justify-center">
                  <svg
                    className="w-full h-full text-signal-orange"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="#8A7568"
                      strokeDasharray="3 3"
                      opacity="0.3"
                    />
                    <path
                      d="M50 28a3 3 0 0 0-3 3v13h-2v-11a3 3 0 0 0-6 0v14h-2v-8a3 3 0 0 0-6 0v14c0 14 11 25 25 25s25-11 25-25V40a3 3 0 0 0-6 0v7h-2V31a3 3 0 0 0-3-3h-1v13h-2V31a3 3 0 0 0-3-3h-1z"
                      opacity="0.8"
                    />
                  </svg>
                </div>

                <div className="w-6 h-6 rounded-full bg-signal-orange text-white text-sm font-bold flex items-center justify-center mb-3">
                  4
                </div>

                <h4 className="font-metropolis font-bold text-sm tracking-[0.15em] uppercase text-earth mb-2">
                  Impact
                </h4>
                <p className="text-secondary text-sm leading-relaxed max-w-[200px]">
                  We launch experiences that connect, inspire, and create
                  ripples that last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28" aria-label="Call to action">
        <div className="container-site">
          <div className="relative rounded-xl overflow-hidden border border-border-warm shadow-sm">
            <div className="absolute inset-0 z-0">
              <Image
                src="/our-story-cta.jpg"
                alt="Ancient carved solar wheel with light ray"
                fill
                className="object-cover object-right"
                sizes="100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/90 to-transparent w-full md:w-3/4"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <h2 className="font-metropolis text-earth text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Let&apos;s Create <br />
                    <span className="font-editorial italic font-normal">
                      What&apos;s Next.
                    </span>
                  </h2>
                </div>

                <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:justify-start">
                  <p className="text-earth text-sm sm:text-base leading-relaxed max-w-sm">
                    Whether you have a spark or need help finding one,
                    we&apos;re here to turn ideas into impact.
                  </p>
                  <Link
                    href="/connect"
                    className="inline-flex items-center gap-3 bg-signal-orange hover:bg-deep-crimson text-white px-7 py-3.5 rounded-full font-metropolis font-semibold text-sm tracking-[0.12em] uppercase transition-all duration-200 shadow-md hover:shadow-lg group flex-shrink-0"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
