import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Our Universe",
  description:
    "The story, mission, philosophy, and creative approach behind KOD Universe — where ancient origins evolve into contemporary creative work.",
  alternates: { canonical: "/our-universe" },
};

const values = [
  {
    title: "Curiosity",
    description:
      "We approach every brief with genuine fascination. We ask why before we ask how, because the best creative work begins with deep understanding.",
  },
  {
    title: "Craft",
    description:
      "We believe in the power of making things well. Every detail — from a kerning decision to a packaging fold — carries meaning and reflects our care.",
  },
  {
    title: "Connection",
    description:
      "We create for humans, not systems. Our work is designed to be felt, remembered, and shared.",
  },
  {
    title: "Courage",
    description:
      "We push against safe and average. Great creative work requires the courage to say something true, even when it is unexpected.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Spark",
    description:
      "KOD Universe begins as a one-person design practice, born from a fascination with how ancient symbols communicate across millennia.",
  },
  {
    year: "2020",
    title: "Growing Roots",
    description:
      "Our first brand partnerships — working with independent founders to build identity systems that endure. The studio grows to five.",
  },
  {
    year: "2022",
    title: "Finding Form",
    description:
      "We define our creative philosophy: Ancient traces evolving into contemporary impact. Our portfolio expands across categories and continents.",
  },
  {
    year: "2024",
    title: "Present Day",
    description:
      "A creative studio of ten, working with brands who believe that great design is not decoration — it is responsibility.",
  },
];

export default function OurUniversePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-earth overflow-hidden texture-cave pt-32 pb-24"
        aria-label="Our Universe page hero"
      >
        <div className="absolute inset-0 opacity-20 relative" aria-hidden="true">
          <Image src="/project-origins.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(58,47,45,1) 0%, rgba(58,47,45,0.5) 100%)" }}
            aria-hidden="true"
          />
        </div>

        <div className="container-site relative z-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-clay mb-5">
            Our origin story
          </p>
          <h1 className="font-metropolis font-semibold text-canvas text-display-xl mb-6 leading-tight">
            Born from curiosity.{" "}
            <br />
            Guided by{" "}
            <em className="font-serif italic font-normal text-dust-rose">purpose.</em>
          </h1>
          <p className="text-dust-rose text-lg leading-relaxed">
            We are a collective of thinkers, dreamers, and makers who see the bridge between ancient wisdom and modern expression.
          </p>
        </div>
      </section>

      {/* Origin & Mission */}
      <section className="section-padding border-t border-border-warm" aria-label="Origin and mission">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Our origin</SectionLabel>
              <h2 className="font-metropolis font-semibold text-earth text-display-lg mb-6 text-balance">
                Ideas are ancient.{" "}
                <br />
                Execution is modern.{" "}
                <br />
                <em className="font-serif italic font-normal">Impact is timeless.</em>
              </h2>
              <div className="space-y-4 text-secondary text-base leading-relaxed">
                <p>
                  From the moment our ancestors pressed their hands to cave walls, humans have
                  been driven to make marks — to say &ldquo;I was here,&rdquo; &ldquo;this matters,&rdquo; &ldquo;remember this.&rdquo;
                  KOD Universe is born from that same impulse.
                </p>
                <p>
                  We believe that the seeds of great ideas exist in the universe, waiting to be
                  received, shaped, and sent back into the world as something meaningful. Our role
                  is not to invent, but to listen — and then to craft with precision and care.
                </p>
                <p>
                  Every brand we build, every campaign we create, every package we design carries
                  that original spark. We do not create for trends. We create for time.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="img-zoom rounded-sm overflow-hidden aspect-[4/5] relative">
                <Image
                  src="/project-origins.jpg"
                  alt="Ancient cave tunnel with warm light — representing the journey from origin to impact"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Quote overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-border-warm rounded-sm p-5 max-w-xs shadow-sm">
                <p className="font-serif italic text-earth text-sm leading-relaxed">
                  &ldquo;We are messengers of creative forces.&rdquo;
                </p>
                <p className="mt-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-signal-orange">
                  — The KOD Universe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white border-t border-border-warm" aria-label="Our values">
        <div className="container-site">
          <div className="text-center mb-14">
            <SectionLabel>Our values</SectionLabel>
            <h2 className="font-metropolis font-semibold text-earth text-display-lg text-balance">
              What we believe in.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="bg-canvas border border-border-warm rounded-sm p-7"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-xs font-semibold text-secondary tracking-[0.1em]"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3 className="font-metropolis font-semibold text-earth text-xl">
                    {value.title}
                  </h3>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution timeline */}
      <section className="section-padding border-t border-border-warm" aria-label="Our evolution">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <SectionLabel>Our evolution</SectionLabel>
              <h2 className="font-metropolis font-semibold text-earth text-display-lg text-balance">
                A studio built{" "}
                <em className="font-serif italic font-normal">slowly,</em>{" "}
                with intention.
              </h2>
            </div>
            <div className="lg:col-span-2">
              <ol className="space-y-8 relative" role="list">
                {/* Vertical line */}
                <div
                  className="absolute left-[1.625rem] top-6 bottom-6 w-px bg-border-warm"
                  aria-hidden="true"
                />
                {timeline.map((event) => (
                  <li key={event.year} className="relative pl-14 flex gap-6 items-start">
                    {/* Year marker */}
                    <div
                      className="absolute left-0 w-[3.25rem] h-[3.25rem] rounded-full bg-canvas border-2 
                                 border-border-warm flex items-center justify-center flex-shrink-0 z-10"
                    >
                      <span className="text-[10px] font-semibold text-signal-orange tracking-wide">
                        {event.year}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-metropolis font-semibold text-earth text-base mb-2">
                        {event.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy + cosmic image */}
      <section className="section-padding bg-void-black text-canvas" aria-label="Our philosophy">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="img-zoom rounded-sm overflow-hidden aspect-[3/4] relative">
              <Image
                src="/project-cosmic.jpg"
                alt="Ancient celestial chart with golden constellation lines — representing KOD Universe's cosmic creative philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionLabel className="text-clay">Our philosophy</SectionLabel>
              <h2 className="font-metropolis font-semibold text-canvas text-display-lg mb-6 text-balance">
                We create for{" "}
                <em className="font-serif italic font-normal text-dust-rose">endurance,</em>{" "}
                not applause.
              </h2>
              <div className="space-y-4 text-dust-rose text-base leading-relaxed">
                <p>
                  The creative industry is filled with work designed to impress for a season and be forgotten
                  by the next. We make a different choice.
                </p>
                <p>
                  Everything we produce is built to endure: identities that will still feel right in a decade,
                  campaigns that respect their audience, packaging that earns its place in someone&apos;s home.
                </p>
                <p>
                  We believe every brand has a story worth telling. Our work blends strategy, creativity, and
                  craftsmanship to build experiences that resonate and endure.
                </p>
              </div>
              <blockquote className="mt-8 border-l-2 border-signal-orange pl-4">
                <p className="font-serif italic text-dust-rose text-lg leading-relaxed">
                  &ldquo;Ancient ideas. Modern impact.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding border-t border-border-warm" aria-label="Work with us">
        <div className="container-site text-center max-w-2xl mx-auto">
          <SectionLabel className="mb-4">Ready to create?</SectionLabel>
          <h2 className="font-metropolis font-semibold text-earth text-display-lg mb-6 text-balance">
            Let&apos;s make something{" "}
            <em className="font-serif italic font-normal">worth remembering.</em>
          </h2>
          <p className="text-secondary text-base leading-relaxed mb-10">
            Whether you have a fully formed brief or just a feeling that something needs to change, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 bg-signal-orange text-white 
                         px-7 py-3.5 rounded-sm font-medium text-sm tracking-wide
                         hover:bg-deep-crimson transition-all duration-200 group"
            >
              Start a conversation
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-earth text-earth 
                         px-7 py-3.5 rounded-sm font-medium text-sm tracking-wide
                         hover:bg-earth hover:text-canvas transition-all duration-200 group"
            >
              See our work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
