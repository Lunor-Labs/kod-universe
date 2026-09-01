import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-8 bg-white" aria-label="Contact call to action">
      <div className="container-site">
        <div className="relative bg-canvas border border-border-warm rounded-sm overflow-hidden shadow-sm h-auto md:h-56">
          <div
            className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] pointer-events-none mix-blend-multiply opacity-50"
            style={{
              maskImage: "linear-gradient(to left, black 30%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to left, black 30%, transparent)",
            }}
          >
            <Image
              src="/project-cosmic.jpg"
              alt=""
              fill
              className="object-cover object-right"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-start gap-12 md:gap-24 p-8 md:p-0 h-full">
            <h2 className="font-editorial text-4xl md:text-5xl text-earth leading-tight flex-shrink-0 md:pl-16">
              Let's Create
              <br />
              What's Next.
            </h2>
            <div className="flex flex-col gap-6 max-w-sm">
              <p className="text-secondary leading-relaxed">
                Whether you have a spark or need help finding one,
                <br className="hidden md:block" />
                we're here to turn ideas into impact.
              </p>

              <Link
                href="/connect"
                className="inline-flex items-center justify-center gap-3 bg-signal-orange text-white 
                           px-6 py-3 rounded-full font-semibold tracking-wider uppercase
                           hover:bg-deep-crimson transition-all duration-200 group self-start"
              >
                START A CONVERSATION
                <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
