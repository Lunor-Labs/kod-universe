"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import styles from "./gallery.module.css";

// ─── Data ────────────────────────────────────────────────────────
const galleryCategories = [
  {
    id: "art",
    title: "Art",
    tagline: "Originals. Prints. Digital. Limited.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&h=560&fit=crop&crop=center",
  },
  {
    id: "merch",
    title: "Merch",
    tagline: "Wear. Display. Collect.",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&h=560&fit=crop&crop=center",
  },
  {
    id: "drops",
    title: "Drops",
    tagline: "Limited. Seasonal. Collaborative.",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=900&h=560&fit=crop&crop=center",
  },
  {
    id: "original-artwork",
    title: "Originals",
    tagline: "The Silent Path",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=900&h=560&fit=crop&crop=center",
  },
  {
    id: "creative-objects",
    title: "Objects",
    tagline: "KoD Figure",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=900&h=560&fit=crop&crop=center",
  },
];

const journeySteps = [
  {
    id: "idea",
    label: "IDEA",
    caption: "A thought, a feeling, a spark.",
    image:
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: "process",
    label: "PROCESS",
    caption: "Sketches, concepts, iterations.",
    image:
      "https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: "art",
    label: "ART",
    caption: "The vision takes form.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: "object",
    label: "OBJECT",
    caption: "From art to collectible objects.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: "product",
    label: "PRODUCT",
    caption: "Made for you. Limited. Real.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=top",
  },
];


// ─── Helpers ─────────────────────────────────────────────────────
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
  // Animation state refs
  const state = useRef({
    targetMouseX: 0,
    targetMouseY: 0,
    mouseX: 0,
    mouseY: 0,
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
    st.reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function getScrollDistance() {
      if (!sectionRef.current) return 0;
      return clamp(
        -sectionRef.current.getBoundingClientRect().top,
        0,
        sectionRef.current.offsetHeight - window.innerHeight,
      );
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
        st.smoothScroll = lerp(st.smoothScroll, st.targetScroll, 0.14);
      }
      if (Math.abs(st.smoothScroll - st.targetScroll) < 0.08)
        st.smoothScroll = st.targetScroll;

      st.mouseX = lerp(st.mouseX, st.targetMouseX, 0.12);
      st.mouseY = lerp(st.mouseY, st.targetMouseY, 0.12);

      const s = st.smoothScroll;

      const frame2 = segmentInOut(s, 200, 400, 600, 800);
      const frame3 = segmentInOut(s, 700, 900, 2000, 2500);

      const progress = clamp(s / 900);
      const introExit = smoothstep(50, 200, s);
      const blurActive = clamp(frame2.active + frame3.active);
      const frame2Opacity = frame2.active * (1 - frame3.enter);
      const splitDrift = Math.pow(frame2.enter, 1.5);
      const panel2Opacity = frame2.active * (1 - frame2.exit);
      const panel3Opacity = frame3.active * (1 - frame3.exit);
      const backScale =
        0.76 + progress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
      const sharedHeroY = progress * -74;
      const sharedHeroScale = progress * 0.23;

      set("--mx", st.reduceMotion ? "0" : st.mouseX.toFixed(4));
      set("--my", st.reduceMotion ? "0" : st.mouseY.toFixed(4));

      set("--back-opacity", 1 - frame2.active * 0.06);
      set("--back-x", `${st.mouseX * -12}px`);
      set("--back-y", `${st.mouseY * -4}px`);
      set("--back-scale", backScale);
      set("--four-y", `${10 + progress * 10}vh`);
      set("--four-scale", 0.78 + progress * 0.16);
      set("--bazaar-y", `${20 - progress * 8}vh`);

      set("--blur-px", `${blurActive * 14}px`);
      set("--back-brightness", 1 - blurActive * 0.255);
      set("--bazaar-blur-px", `${frame2.active * 14}px`);
      set(
        "--bazaar-brightness",
        1 - frame2.active * 0.255 - frame3.active * 0.06,
      );
      set("--bazaar-saturation", 1 + frame3.active * 0.18);

      set("--shade-opacity", "1");
      set("--shade-z", frame2.active > 0.02 ? "2" : "0");
      set("--shade-top-alpha", blurActive * 0.465);
      set("--shade-mid-alpha", blurActive * 0.42);
      set("--shade-bottom-alpha", blurActive * 0.51);

      set("--title-y", `${introExit * -210}px`);
      set("--title-scale", 1 - introExit * 0.08);
      set("--title-opacity", 1 - introExit);

      set("--bridge-x", `calc(-50% + ${st.mouseX * 18}px)`);
      set("--bridge-y", `${st.mouseY * 8 + sharedHeroY - frame2.exit * 760}px`);
      set("--bridge-bottom", `${5 - frame2.enter * 13}vh`);
      set("--bridge-width", `${67.2 + frame2.enter * 37.8}vw`);
      set("--bridge-scale", 1.02 + sharedHeroScale + frame2.exit * 0.46);

      set(
        "--split-left-x",
        `calc(-50% + ${-splitDrift * 46}vw + ${st.mouseX * 22}px)`,
      );
      set(
        "--split-left-y",
        `${st.mouseY * 10 + sharedHeroY - splitDrift * 180}px`,
      );
      set("--split-left-scale", 1 + sharedHeroScale + frame2.enter * 0.74);
      set(
        "--split-right-x",
        `calc(-50% + ${splitDrift * 46}vw + ${st.mouseX * 22}px)`,
      );
      set(
        "--split-right-y",
        `${st.mouseY * 10 + sharedHeroY - splitDrift * 180}px`,
      );
      set("--split-right-scale", 1 + sharedHeroScale + frame2.enter * 0.74);

      set("--frame2-opacity", frame2Opacity);
      set("--frame2-x", `calc(-50% + ${st.mouseX * 10}px)`);
      set("--frame2-y", `calc(-50% + ${st.mouseY * 8 - frame2.exit * 150}px)`);
      set("--frame2-scale", 1.06 + frame2.enter * 0.08 + frame2.exit * 0.08);

      set("--intro-copy-y", `${introExit * 90}px`);
      set("--intro-copy-opacity", 1 - introExit);

      set("--panel2-opacity", panel2Opacity);
      set("--panel2-pe", panel2Opacity > 0.5 ? "auto" : "none");
      set(
        "--panel2-y",
        `calc(-50% + ${-frame2.exit * 86 + (1 - frame2.enter) * 58}px)`,
      );
      set("--panel3-opacity", panel3Opacity);
      set("--panel3-pe", panel3Opacity > 0.5 ? "auto" : "none");
      set(
        "--panel3-y",
        `calc(-50% + ${-frame3.exit * 86 + (1 - frame3.enter) * 58}px)`,
      );

      const needsMore = Math.abs(st.smoothScroll - st.targetScroll) > 0.08;

      if (needsMore) requestTick();
    }

    function requestTick() {
      if (!st.rafPending) {
        st.rafPending = true;
        requestAnimationFrame(update);
      }
    }

    // Scroll listeners
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    // Initial Tick
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
        "Original artwork, prints, digital art and limited editions - created by KoD.",
      image: "/gallery/art.png",
      tags: ["Originals", "Prints", "Digital Art"],
    },
    {
      id: "merch",
      title: "Merch",
      description:
        "Apparel, t-shirts, posters, creative objects and accessories carrying the KoD universe.",
      image: "/gallery/merch.png",
      tags: ["Apparel", "Objects", "Accessories"],
    },
    {
      id: "drops",
      title: "Drops",
      description:
        "Limited releases, seasonal collections, artist collaborations and KoD originals.",
      image: "/gallery/drops.png",
      tags: ["Limited Releases", "Collabs", "KoD Originals"],
    },
  ];

  return (
    <div className={styles.galleryContainer} ref={containerRef}>
      <section
        className={styles["cinema-scroll"]}
        id="cinema"
        aria-label="KoD Cinematic scroll story"
        ref={sectionRef}
      >
        <div className={styles.stage}>
          <div className={styles.world}>
            <img
              className={`${styles["scene-img"]} ${styles["sky-img"]}`}
              src="https://raft-blast-61784561.figma.site/_assets/v11/16b5007d9c93971e26ffe4e0e3e37946f6bd538c.png"
              alt=""
            />

            <div className={styles["back-stack"]}>
              <img
                className={`${styles["scene-img"]} ${styles["back-img"]} ${styles["back-four"]}`}
                src="https://raft-blast-61784561.figma.site/_assets/v11/8a7f8af50e0ce92ec2e228e7b0b4112178c51cf1.png"
                alt=""
              />

              <img
                className={`${styles["scene-img"]} ${styles["back-img"]} ${styles["back-bazaar"]}`}
                src="https://raft-blast-61784561.figma.site/_assets/v11/864afe00e41e2fa20a5aa546e15cb807e0f81384.png"
                alt=""
              />
            </div>

            <h1 className={styles["hero-title"]}>GALLERY</h1>

            <img
              className={`${styles["scene-img"]} ${styles["splitframe-img"]} ${styles["splitframe-left"]}`}
              src="https://raft-blast-61784561.figma.site/_assets/v11/7536d7b60a1fce482cf6edf3f0bffd3bad5d0f8a.png"
              alt=""
            />
            <img
              className={`${styles["scene-img"]} ${styles["splitframe-img"]} ${styles["splitframe-right"]}`}
              src="https://raft-blast-61784561.figma.site/_assets/v11/392db6a6a6b98e868bd7f8d3f55bb719d51e5028.png"
              alt=""
            />
            <img
              className={`${styles["scene-img"]} ${styles["bridge-img"]}`}
              src="https://raft-blast-61784561.figma.site/_assets/v11/c6a6d8ef49bca43f708aa852692942c45ec950d4.png"
              alt=""
            />
            <img
              className={`${styles["scene-img"]} ${styles["frame-two-img"]}`}
              src="https://raft-blast-61784561.figma.site/_assets/v11/ba75252bab2b1c510987b74837770f7bc8a6b2d4.png"
              alt=""
            />

            <div className={styles.shade}></div>
          </div>

          <section
            className={`${styles["intro-copy"]} !bottom-[max(25vh,10px)] md:!bottom-[max(15vh,10px)]`}
            aria-label="Gallery overview"
            style={{
              pointerEvents: "auto",
              width: "min(900px, 95vw)",
            }}
          >
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto w-full">
              <span className="text-base font-bold tracking-[0.15em] uppercase text-canvas mb-4 inline-block drop-shadow-md">
                KOD UNIVERSE
              </span>
              <h2 className="font-editorial text-4xl md:text-5xl text-canvas leading-[1.1] mb-5 drop-shadow-lg">
                Art + Commerce.
                <br />A Creative World.
              </h2>
              <p className="max-w-xl mx-auto mb-8">
                An independent creative-commercial destination. Original pieces,
                limited drops, and objects that tell a story.
              </p>
              <Link
                href="https://kod-universe.vercel.app/gallery#gallery-collections"
                className="btn-primary mt-10"
              >
                <span>Explore the collections</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </section>

          <section
            className={`${styles["story-panel"]} ${styles["story-panel-bridge"]}`}
            id="journey"
            aria-label="The Journey details"
            style={{ pointerEvents: "var(--panel2-pe, none)" as any, width: "min(1000px, 90vw)" }}
          >
            <div className="flex flex-col md:flex-row gap-3 md:gap-12 items-start w-full">
              {galleryCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="relative flex flex-row md:flex-col items-center md:items-start justify-between w-full bg-earth/70 backdrop-blur-3xl rounded p-1 md:p-2 group border border-transparent hover:border-signal-orange/30 transition-colors"
                >
                  <Link href={`/gallery/${category.id}`} className="absolute inset-0 md:hidden z-10">
                    <span className="sr-only">View {category.title}</span>
                  </Link>
                  <div className="w-16 h-32 shrink-0 md:w-full md:h-48 relative overflow-hidden rounded md:mb-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex flex-col flex-grow pl-4 md:pl-0 md:pt-6 w-full text-left md:text-center md:justify-center">
                    <h2 className="!text-xl md:!text-4xl font-semibold text-earth tracking-tight !mb-0 md:mb-8 group-hover:text-signal-orange transition-colors duration-500 m-0">
                      {category.title}
                    </h2>

                    <p className="text-xs md:text-lg text-earth/80 md:pb-2 leading-relaxed line-clamp-2 md:line-clamp-none !mt-2 md:mt-0">
                      {category.description}
                    </p>

                    <Link
                      href={`/gallery/${category.id}`}
                      className="flex items-center justify-center btn-dark mt-4 w-fit mx-auto"
                    >
                      <span>View {category.title}</span> <span className="hidden md:block">Gallery</span>
                      <span className="btn-badge">
                        <ArrowRight size={18} />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className={`${styles["story-panel"]} ${styles["story-panel-bazaar"]}`}
            id="collaborate"
            aria-label="Collaborate details"
            style={{ pointerEvents: "var(--panel3-pe, none)" as any, width: "min(900px, 92vw)" }}
          >
            <div className="bg-earth/70 backdrop-blur-3xl rounded p-10 md:p-14 relative overflow-hidden shadow-2xl flex flex-col items-center text-center w-full">
              <div className="relative z-10 max-w-2xl mx-auto">
                <SectionLabel className="text-clay">
                  Collaborate &amp; Commission
                </SectionLabel>
                <h3
                  className="text-4xl md:text-5xl text-canvas mb-6 leading-tight mt-6"
                  style={{ textShadow: "none" }}
                >
                  Art that lives{" "}
                  <em className="font-serif italic font-normal text-clay">
                    beyond the screen.
                  </em>
                </h3>
                <p
                  className="text-base text-canvas/70 mb-10 max-w-lg mx-auto"
                  style={{
                    textShadow: "none",
                    margin: "0 auto 40px auto",
                    width: "100%",
                  }}
                >
                  Looking for a bespoke creation or interested in our latest
                  drops? Step into the studio and let&apos;s collaborate.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/gallery/drops"
                    className="btn-primary !h-12 !px-6"
                    style={{ textShadow: "none" }}
                  >
                    <span>See Latest Drops</span>
                    <span className="btn-badge">
                      <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary !h-12 !px-6 !text-canvas !border-canvas/50 hover:!border-canvas hover:!bg-canvas hover:!text-earth"
                    style={{ textShadow: "none" }}
                  >
                    <span>Commission a Piece</span>
                    <span className="btn-badge !border-current !text-current">
                      <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
