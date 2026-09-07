"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function RadicalSceneSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const textXReverse = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative bg-earth/70  "
      aria-label="Manifesto"
    >
      <div className="container-site overflow-hidden flex flex justify-between items-center py-6 ">
        <div className="relative z-10 flex flex-col items-center w-full">
          <motion.div
            style={{ x: textX }}
            className="whitespace-nowrap mb-2 md:mb-4"
          >
            <h2 className="text-[2vw] md:text-[4vw] font-black uppercase text-canvas leading-none tracking-tighter">
              BREAK THE{" "}
              <span className="font-editorial italic font-normal text-white/70">
                MOLD.
              </span>
            </h2>
          </motion.div>

          <motion.div style={{ x: textXReverse }} className="whitespace-nowrap">
            <h2 className="text-[4vw] md:text-[4vw] font-black uppercase text-canvas leading-none tracking-tighter">
              <span className="font-editorial italic font-normal text-white/70">
                SHAPE THE{" "}
              </span>{" "}
              CULTURE.
            </h2>
          </motion.div>

          <div className="relative z-20  max-w-2xl text-center px-6">
            <p className="text-canvas/80 text-lg md:text-2xl font-light leading-relaxed font-editorial italic">
              We don't just build brands. We engineer cultural shifts. Step into
              a universe where raw creativity meets unyielding strategy.
            </p>
          </div>
        </div>
        <motion.div
          style={{ rotate: imageRotate, scale: imageScale }}
          className="w-[350px] h-[300px] opacity-30 pointer-events-none"
        >
          <Image
            src="/main/circle.webp"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
