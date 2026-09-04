import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function OurUniverseHero() {
  return (
    <section
      className="relative flex items-center pt-28 pb-20 min-h-screen overflow-hidden"
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
          className="absolute inset-0 bg-gradient-to-r from-kod-canvas/90 via-kod-canvas/60 to-transparent md:w-1/2"
          aria-hidden="true"
        />
      </div>

      <div className="container-site relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 max-w-xl">
            <p className="eyebrow mb-4">Our Story. Our Origin. Our Why.</p>

            <h1 className="text-display-xl text-kod-earth font-metropolis font-bold leading-[1.08] mb-6 text-balance">
              We Are Messengers <br />
              of{" "}
              <span className="font-editorial italic font-normal text-kod-earth">
                Creative Forces.
              </span>
            </h1>

            <p className="text-kod-earth text-base leading-relaxed mb-8 max-w-lg font-normal">
              From the vast universe, ideas spark—seeds of potential. We receive
              them with purpose and shape them into modern brand experiences
              that connect, inspire, and leave a lasting mark.
            </p>

            <Link href="/work" className="btn-primary w-fit">
              <span>Explore Our Work</span>
              <span className="btn-badge">
                <ArrowRight size={13} aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:items-end justify-center pt-12 lg:pt-0">
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
              <p className="font-editorial italic text-kod-canvas text-lg sm:text-xl leading-relaxed font-normal opacity-95">
                &ldquo;In every era, creativity is the bridge between what is
                and what could be.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 w-full h-48 bg-gradient-to-t from-kod-canvas via-kod-canvas/60 to-transparent pointer-events-none z-20" aria-hidden="true" />
    </section>
  );
}
