import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function OurUniverseCTA() {
  return (
    <section className="section-padding" aria-label="Call to action">
      <div className="container-site">
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/our-story-cta.webp"
              alt="Ancient carved solar wheel with light ray"
              fill
              className="object-cover object-right"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-kod-canvas via-kod-canvas/90 to-transparent w-full md:w-3/4"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <h2 className="heading-section text-kod-earth leading-tight">
                  Let&apos;s Create <br />
                  <span className="font-editorial italic font-normal">
                    What&apos;s Next.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:justify-start">
                <p className="text-body text-kod-earth/85 max-w-sm">
                  Whether you have a spark or need help finding one, we&apos;re
                  here to turn ideas into impact.
                </p>
                <Link href="/connect" className="btn-primary flex-shrink-0">
                  <span>Start a Conversation</span>
                  <span className="btn-badge">
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
