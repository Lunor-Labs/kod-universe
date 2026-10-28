"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import styles from "./gallery.module.css";

// ─── Math Helpers ──────────────────────────────────────────────────
function clamp(v: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v));
}

function smoothstep(e0: number, e1: number, v: number) {
  const x = clamp((v - e0) / (e1 - e0));
  return x * x * (3 - 2 * x);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function segmentInOut(s: number, a: number, b: number, c: number, d: number) {
  const enter = smoothstep(a, b, s);
  const exit = smoothstep(c, d, s);
  return { enter, exit, active: enter * (1 - exit) };
}

export function GalleryCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const collectionsScrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const scrollToCategory = (idx: number) => {
    setActiveCategory(idx);
    const container = collectionsScrollRef.current;
    if (!container) return;
    const card = container.children[idx] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const onCollectionsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const card = el.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth : 1;
    const idx = Math.round(el.scrollLeft / (cardWidth + 16));
    if (idx !== activeCategory && idx >= 0 && idx < 3) {
      setActiveCategory(idx);
    }
  };

  // Animation state refs
  const state = useRef({
    targetScroll: 0,
    smoothScroll: 0,
    initialized: false,
    rafPending: false,
    reduceMotion: false,
  });

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const root = containerRef.current;
    const st = state.current;
    st.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function getScrollDistance() {
      if (!sectionRef.current) return 0;
      const rect = sectionRef.current.getBoundingClientRect();
      const maxScroll = sectionRef.current.offsetHeight - window.innerHeight;
      return clamp(-rect.top, 0, Math.max(1, maxScroll));
    }

    function set(prop: string, val: string | number) {
      root.style.setProperty(prop, String(val));
    }

    function update() {
      st.rafPending = false;
      st.targetScroll = getScrollDistance();

      if (!st.initialized || st.reduceMotion) {
        st.smoothScroll = st.targetScroll;
        st.initialized = true;
      } else {
        st.smoothScroll = lerp(st.smoothScroll, st.targetScroll, 0.12);
      }

      if (Math.abs(st.smoothScroll - st.targetScroll) < 0.08) {
        st.smoothScroll = st.targetScroll;
      }

      const s = st.smoothScroll;
      const sProgress = clamp(s / 1800);

      // Phase 1: Cave Entrance & Hero Intro (0 to 450px)
      const introProgress = clamp(s / 420);
      const titleExit = smoothstep(40, 280, s);
      const introExit = smoothstep(20, 240, s);
      const archExit = smoothstep(60, 380, s);

      // Phase 2: Collections Showcase (420px to 1100px)
      const p2 = segmentInOut(s, 420, 600, 940, 1100);

      // Phase 3: Collaborate & Commission (1080px to end of sticky scroll)
      // Stays fully locked and opaque all the way to the end of the section
      const p3Enter = smoothstep(1080, 1260, s);
      const p3Y = (1 - p3Enter) * 45;

      // ── Act 1 -> Act 2: Walking through Entrance Arch (Layer 1) ──
      const l1T = clamp((s - 30) / 320);
      const l1Scale = 1.05 + l1T * 1.5;
      const l1Y = -l1T * 70;
      const l1Opacity = 1 - smoothstep(0.1, 0.9, l1T);

      // ── Act 1 -> Act 2: Stepping over Entrance Floor Rocks (Layer 2) ──
      const l2T = clamp((s - 340) / 460);
      const l2Scale = 1.04 + clamp(s / 340) * 0.18 + l2T * 1.1;
      const l2Y = l2T * 110;
      const l2Opacity = 1 - smoothstep(0.15, 0.9, l2T);

      // ── Act 2 -> Act 3: Leaving Outer Gallery Carvings (Layer 3) ──
      // Prominent during Collections (Act 2), then zooms past as you reach Inner Sanctum
      const l3T = clamp((s - 850) / 380);
      const l3Scale = 1.04 + clamp(s / 850) * 0.16 + l3T * 1.35;
      const l3Y = -l3T * 50;
      const l3Opacity = 1 - smoothstep(0.1, 0.92, l3T);

      // ── Layer 7: Deepest glowing cave portal ──
      set("--l7-y", `${(sProgress * 12).toFixed(2)}px`);
      set("--l7-scale", (1.01 + sProgress * 0.16).toFixed(4));
      set("--l7-opacity", "1");

      // ── Layer 6: Midground stalagmites and spires ──
      set("--l6-y", `${(sProgress * 16).toFixed(2)}px`);
      set("--l6-scale", (1.02 + sProgress * 0.26).toFixed(4));
      set("--l6-opacity", "1");

      // ── Layer 5: High chamber vault and light rays ──
      set("--l5-y", `${(sProgress * 18).toFixed(2)}px`);
      set("--l5-scale", (1.03 + sProgress * 0.32).toFixed(4));
      set("--l5-opacity", "1");

      // ── Hero Title: GALLERY ──
      set("--title-y", `${(-titleExit * 160).toFixed(2)}px`);
      set("--title-scale", (1 - titleExit * 0.08).toFixed(4));
      set("--title-opacity", (1 - titleExit).toFixed(4));

      // ── Layer 4: Reflective pools and stone pathway ──
      set("--l4-y", `${(-sProgress * 25).toFixed(2)}px`);
      set("--l4-scale", (1.04 + sProgress * 0.38).toFixed(4));
      set("--l4-opacity", "1");

      // ── Layer 3: Ancient wall paintings & celestial carvings ──
      set("--l3-y", `${l3Y.toFixed(2)}px`);
      set("--l3-scale", l3Scale.toFixed(4));
      set("--l3-opacity", l3Opacity.toFixed(4));

      // ── Layer 2: Foreground cave floor rocks and mist ──
      set("--l2-y", `${l2Y.toFixed(2)}px`);
      set("--l2-scale", l2Scale.toFixed(4));
      set("--l2-opacity", l2Opacity.toFixed(4));

      // ── Layer 1: Foreground stalactite framing arch at cave mouth ──
      set("--l1-y", `${l1Y.toFixed(2)}px`);
      set("--l1-scale", l1Scale.toFixed(4));
      set("--l1-opacity", l1Opacity.toFixed(4));

      // ── Scrim Shade: subtle ambient vignette only, never covers or blurs the cave ──
      const shadeLevel = Math.max(p2.active * 0.35, p3Enter * 0.25);
      set("--shade-opacity", shadeLevel.toFixed(4));

      // ── Intro Copy ──
      set("--intro-y", `${(introExit * 70).toFixed(2)}px`);
      set("--intro-opacity", (1 - introExit).toFixed(4));
      set("--intro-pe", introExit > 0.5 ? "none" : "auto");

      // ── Panel 2: Collections ──
      set("--panel2-opacity", p2.active.toFixed(4));
      set("--panel2-y", `${((1 - p2.enter) * 45 - p2.exit * 45).toFixed(2)}px`);
      set("--panel2-pe", p2.active > 0.45 ? "auto" : "none");

      // ── Panel 3: Collaborate (stays locked & fully visible) ──
      set("--panel3-opacity", p3Enter.toFixed(4));
      set("--panel3-y", `${p3Y.toFixed(2)}px`);
      set("--panel3-pe", p3Enter > 0.4 ? "auto" : "none");

      const needsMore = Math.abs(st.smoothScroll - st.targetScroll) > 0.08;

      if (needsMore) requestTick();
    }

    function requestTick() {
      if (!st.rafPending) {
        st.rafPending = true;
        requestAnimationFrame(update);
      }
    }

    // Event listeners - only scroll & resize
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    // Initial tick
    requestTick();

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, []);

  const galleryCategories = [
    {
      id: "art",
      title: "Art",
      description:
        "Original fine art, sacred cave iconography, limited print editions, and digital masterpieces created by KoD.",
      image: "/textures/mother-new.webp",
      tags: ["Originals", "Prints", "Digital Art"],
    },
    {
      id: "merch",
      title: "Merch",
      description:
        "Apparel, luxury streetwear, bespoke posters, creative objects, and wearable relics of the KoD universe.",
      image: "/textures/merch-new.webp",
      tags: ["Apparel", "Relics", "Accessories"],
    },
    {
      id: "drops",
      title: "Drops",
      description:
        "Time-gated releases, seasonal ceremonial capsules, artist collaborations, and rare numbered editions.",
      image: "/textures/art-new.webp",
      tags: ["Limited Releases", "Collabs", "KoD Editions"],
    },
  ];

  return (
    <div className={styles.galleryContainer} ref={containerRef}>
      <section
        className={styles.cinemaScroll}
        id="cinema"
        aria-label="KoD Cinematic Sanctuary Journey"
        ref={sectionRef}
      >
        <div className={styles.stage}>
          <div className={styles.world}>
            {/* Layer 7: Deepest glowing cave portal */}
            <img
              className={`${styles.layer} ${styles.layer7}`}
              src="/gallery/parallax/layer-77-portal.png"
              alt="Deep cavern portal glow"
            />

            {/* Layer 6: Cavern spires and stalagmites */}
            <img
              className={`${styles.layer} ${styles.layer6}`}
              src="/gallery/parallax/layer-66-spires.png"
              alt="Distant cave rock spires"
            />

            {/* Layer 5: High chamber vault & volumetric golden light */}
            <img
              className={`${styles.layer} ${styles.layer5}`}
              src="/gallery/parallax/layer-55-rays.png"
              alt="Volumetric light rays"
            />

            {/* Hero Title: Embedded in the 3D cavern atmosphere */}
            <h1 className={styles.heroTitle}>GALLERY</h1>

            {/* Layer 4: Illuminated reflective pools and stone pathway */}
            <img
              className={`${styles.layer} ${styles.layer4}`}
              src="/gallery/parallax/layer-44-path.png"
              alt="Illuminated stone path and pools"
            />

            {/* Layer 3: Ancient wall paintings and sacred carvings */}
            <img
              className={`${styles.layer} ${styles.layer3}`}
              src="/gallery/parallax/layer-33-carvings.png"
              alt="Ancient cave wall paintings"
            />

            {/* Layer 2: Foreground cave floor rocks and mist */}
            <img
              className={`${styles.layer} ${styles.layer2}`}
              src="/gallery/parallax/layer-22-rocks.png"
              alt="Foreground cave floor and mist"
            />

            {/* Layer 1: Foreground stalactite framing arch at cave mouth */}
            <img
              className={`${styles.layer} ${styles.layer1}`}
              src="/gallery/parallax/layer-11-arch.png"
              alt="Cave entrance framing arch"
            />

            {/* Scrim Shade for enhanced content readability */}
            <div className={styles.shade} />
          </div>

          {/* ── Intro Section (Scroll 0) ── */}
          <section
            className="absolute z-12 left-1/2 bottom-24 sm:bottom-32 md:bottom-40 w-[min(860px,94vw)] text-center will-change-[transform,opacity] [transform:translate3d(-50%,var(--intro-y,0px),0)] [opacity:var(--intro-opacity,1)] [pointer-events:var(--intro-pe,auto)]"
            aria-label="Gallery overview"
          >
            <div className="relative max-w-2xl mx-auto px-6 py-9 sm:px-12 sm:py-12 md:px-16 md:py-14 isolate">
              <div
                className="absolute inset-0 -z-10 pointer-events-none filter drop-shadow-[0_22px_45px_rgba(0,0,0,0.95)]"
                aria-hidden="true"
              >
                <Image
                  src="/gallery/hero-stone-backdrop.webp"
                  alt=""
                  fill
                  priority
                  className="object-fill select-none opacity-80"
                />
              </div>

              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-kod-gold mb-2.5 inline-block drop-shadow-sm">
                KOD UNIVERSE
              </span>
              <h2 className="font-editorial text-3xl md:text-5xl text-kod-canvas leading-[1.1] mb-3.5 drop-shadow-md">
                Art + Commerce.
                <br />A Creative Sanctuary.
              </h2>
              <p className="text-sm md:text-base text-kod-mist/95 max-w-lg mx-auto mb-6 leading-relaxed drop-shadow-sm">
                An ancient visual realm meeting contemporary creative commerce.
                Original artwork, limited drops, and artifacts that tell a profound story.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (sectionRef.current) {
                    const top = sectionRef.current.offsetTop + 700;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-primary !px-7 !py-3.5 mx-auto shadow-2xl hover:scale-105 transition-transform"
              >
                <span>Explore the collections</span>
                <span className="btn-badge">
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </button>
            </div>
          </section>
          <section
            className="absolute z-15 left-1/2 top-1/2 w-[94vw] md:w-[min(1160px,92vw)] will-change-[transform,opacity] [transform:translate3d(-50%,calc(-50%+var(--panel2-y,0px)),0)] [opacity:var(--panel2-opacity,0)] [pointer-events:var(--panel2-pe,none)] motion-reduce:transition-none"
            id="collections"
            aria-label="KoD Gallery Collections"
          >
            {/* Mobile Category Tabs */}
            <div className="flex md:hidden items-center justify-center gap-2 mb-3">
              {galleryCategories.map((category, idx) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToCategory(idx)}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === idx
                      ? "bg-kod-orange text-white shadow-md shadow-kod-orange/30 scale-105 font-bold"
                      : "bg-black/60 text-kod-dust/80 border border-white/10 hover:text-white"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div
              ref={collectionsScrollRef}
              onScroll={onCollectionsScroll}
              className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none py-1"
            >
              {galleryCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/gallery/${category.id}`}
                  className="w-[82vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-center relative rounded overflow-hidden border border-white/15 hover:border-kod-orange/70 transition-all duration-500 group shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_60px_-10px_rgba(229,76,42,0.35)] flex flex-col justify-between h-[390px] sm:h-[430px] md:h-[460px] p-5 sm:p-6 cursor-pointer isolate"
                >
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25 group-hover:via-black/45 transition-colors duration-500" />
                  </div>
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {category.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] sm:text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-white/85 border border-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col justify-end mt-auto pt-6">
                    <div className="mb-2">
                      <h3 className="font-metropolis text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-kod-orange transition-colors duration-300 drop-shadow-md">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-kod-mist/90 leading-relaxed line-clamp-3 mb-5 group-hover:text-white/95 transition-colors duration-300 drop-shadow">
                      {category.description}
                    </p>

                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white group-hover:bg-kod-orange group-hover:border-kod-orange group-hover:text-white transition-all duration-300 shadow-lg w-fit">
                      <span>Explore {category.title}</span>
                      <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white group-hover:text-kod-orange flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight size={13} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex md:hidden items-center justify-center gap-1.5 mt-2.5">
              {galleryCategories.map((cat, idx) => (
                <span
                  key={cat.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCategory === idx ? "w-6 bg-kod-orange" : "w-1.5 bg-white/25"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </section>

          <section
            className="absolute z-15 left-1/2 top-[48%] md:top-1/2 w-[94vw] md:w-[min(1460px,98vw)] will-change-[transform,opacity] [transform:translate3d(-50%,calc(-50%+var(--panel3-y,0px)),0)] [opacity:var(--panel3-opacity,0)] [pointer-events:var(--panel3-pe,none)] motion-reduce:transition-none"
            id="collaborate"
            aria-label="Collaborate details"
          >
            <div className="bg-black/65 !backdrop-blur-xl rounded p-8 sm:p-12 md:p-14 border border-white/15 shadow-2xl flex flex-col items-center text-center max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-40 bg-kod-orange/15 rounded-full blur-3xl pointer-events-none" />

              <SectionLabel className="text-kod-gold !border-kod-gold/30 relative z-10">
                Collaborate &amp; Commission
              </SectionLabel>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-kod-canvas mt-5 mb-4 leading-tight relative z-10 drop-shadow-md">
                Art that lives{" "}
                <em className="italic font-normal text-kod-clay">beyond the screen.</em>
              </h2>

              <p className="text-sm sm:text-base text-kod-mist/90 max-w-xl mx-auto mb-8 leading-relaxed relative z-10 drop-shadow">
                Looking for a bespoke creation, exclusive exhibition pieces, or limited editions?
                Step into our creative space and collaborate directly with the studio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center relative z-10">
                <Link href="/gallery/drops" className="btn-primary shadow-xl ">
                  <span>See Latest Drops</span>
                  <span className="btn-badge">
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary !text-kod-canvas !border-white/30 hover:!border-kod-orange hover:!text-kod-orange hover:!bg-white/5 shadow-xl"
                >
                  <span>Commission a Piece</span>
                  <span className="btn-badge">
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
