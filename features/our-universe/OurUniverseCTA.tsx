import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function OurUniverseCTA() {
  return (
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
  );
}
