import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactCTA() {
  return (
    <section className="py-10 bg-white" aria-label="Contact call to action">
      <div className="container-site">
        <ScrollReveal variant="zoomOut">
          <div className="relative bg-canvas rounded-sm overflow-hidden shadow-sm h-auto md:h-56">
            <div
              className="absolute right-0 top-0 bottom-0 w-full md:w-[40%] pointer-events-none mix-blend-multiply opacity-50"
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
              <ScrollReveal variant="left" delay={0.2}>
                <h2 className="font-editorial text-4xl md:text-5xl text-earth leading-tight flex-shrink-0 md:pl-16">
                  Let&apos;s Create
                  <br />
                  What&apos;s Next.
                </h2>
              </ScrollReveal>
              
              <ScrollReveal variant="up" delay={0.4}>
                <div className="flex flex-col gap-6 max-w-sm">
                  <p className="text-black leading-relaxed">
                    Whether you have a spark or need help finding one,
                    <br className="hidden md:block" />
                    we&apos;re here to turn ideas into impact.
                  </p>

                  <Link href="/connect" className="btn-primary self-start">
                    <span>Start a Conversation</span>
                    <span className="btn-badge">
                      <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
