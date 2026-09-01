import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface InfoCardsProps {
  featuredProject: Project;
}

export function InfoCards({ featuredProject }: InfoCardsProps) {
  const processCards = [
    {
      label: "DISCOVER",
      title: "Uncover insight\nand opportunity.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 text-signal-orange"
        >
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path
            d="M12 2v2M12 20v2M2 12h2M20 12h2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      label: "DEFINE",
      title: "Build strategy\nwith clarity.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 text-signal-orange"
        >
          <path
            d="M12 3l9 6-9 6-9-6 9-6z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 21l9-6-9 6-9-6 9 6z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="15" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "CREATE",
      title: "Craft ideas\nthat connect.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 text-signal-orange"
        >
          <path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "DELIVER",
      title: "Launch, refine,\nand elevate.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6 text-signal-orange"
        >
          <circle
            cx="12"
            cy="12"
            r="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="section-padding-sm border-t border-border-warm bg-canvas"
      aria-label="Story and project highlights"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ScrollReveal variant="left" delay={0}>
            <Link
              href="/our-universe"
              className="group relative bg-white border border-border-warm rounded-md p-6 lg:p-8 
                         overflow-hidden hover:border-dust-rose transition-all duration-300 
                         focus-visible:outline-solar-gold col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between h-full"
            >
            <div className="relative z-10 w-[60%]">
              <p className="eyebrow mb-4">OUR STORY</p>
              <h3 className="font-editorial text-earth text-3xl lg:text-4xl mb-4 leading-tight">
                Rooted in curiosity. Driven by purpose.
              </h3>
              <p className="text-secondary leading-relaxed">
                Discover our journey, values, and the philosophy that guides
                everything we create.
              </p>
            </div>

            <div className="relative z-10 mt-8 w-12 h-12 rounded-full border border-border-warm flex items-center justify-center group-hover:border-signal-orange group-hover:text-signal-orange bg-white transition-colors duration-200">
              <ArrowRight size={16} aria-hidden="true" />
            </div>
            <div
              className="absolute top-0 right-0 bottom-0 w-[50%] pointer-events-none opacity-40 mix-blend-multiply"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 60%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 60%)",
              }}
            >
              <Image
                src="/hero.jpg"
                alt=""
                fill
                className="object-cover object-right"
              />
            </div>
            </Link>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={0.1}>
            <div className="group bg-white border border-border-warm rounded-md p-6 lg:p-8 col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between relative overflow-hidden h-full">
            <div>
              <p className="eyebrow mb-4">OUR PROCESS</p>
              <h3 className="font-editorial text-earth text-3xl lg:text-4xl mb-10 leading-tight">
                From spark
                <br />
                to impact.
              </h3>

              <div className="relative flex justify-between items-start mt-6">
                <div className="absolute top-[18px] left-[15%] right-[15%] h-[1px] border-t border-dashed border-border-warm z-0" />

                {processCards.map((step, idx) => (
                  <div
                    key={step.label}
                    className="relative z-10 flex flex-col items-center text-center flex-1 px-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-border-warm flex items-center justify-center mb-3">
                      {step.icon}
                    </div>
                    <p className="eyebrow !text-sm !font-bold mb-2 tracking-wide">
                      {step.label}
                    </p>
                    <p className="text-secondary text-sm leading-tight whitespace-pre-line hidden sm:block">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/capabilities"
              className="mt-6 w-12 h-12 rounded-full border border-border-warm flex items-center justify-center hover:border-signal-orange hover:text-signal-orange bg-white transition-colors duration-200"
              aria-label="View our process"
            >
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={0.2}>
            <Link
              href={`/work/${featuredProject.slug}`}
              className="group relative bg-white border border-border-warm rounded-md p-6 lg:p-8 
                         overflow-hidden hover:border-dust-rose transition-all duration-300 
                         focus-visible:outline-solar-gold col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between h-full"
            >
            <div className="relative z-10 w-[50%]">
              <p className="eyebrow mb-4">PROJECT DETAIL</p>
              <h3 className="font-editorial text-earth text-3xl lg:text-4xl mb-2 leading-tight group-hover:text-signal-orange transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-earth text-sm font-semibold mb-4 tracking-widest uppercase">
                {featuredProject.category}
              </p>
              <p className="text-secondary leading-relaxed line-clamp-3">
                {featuredProject.shortDescription}
              </p>
            </div>

            <div className="relative z-10 mt-8 w-12 h-12 rounded-full border border-border-warm flex items-center justify-center group-hover:border-signal-orange group-hover:text-signal-orange bg-white transition-colors duration-200">
              <ArrowRight size={16} aria-hidden="true" />
            </div>
            <div className="absolute top-1/4 -right-12 bottom-0 w-[55%] pointer-events-none">
              <Image
                src={featuredProject.heroImage.src}
                alt={featuredProject.heroImage.alt}
                fill
                className="object-cover object-left-top transform group-hover:scale-105 transition-transform duration-500 rounded-tl-xl shadow-lg"
              />
            </div>
            </Link>
          </ScrollReveal>
          <ScrollReveal variant="zoomIn" delay={0.3}>
            <Link
              href="/connect"
              className="group relative bg-white border border-border-warm rounded-md p-6 lg:p-8 
                         overflow-hidden hover:border-dust-rose transition-all duration-300 
                         focus-visible:outline-solar-gold col-span-1 min-h-[360px] lg:min-h-[400px] flex flex-col justify-between h-full"
            >
            <div className="relative z-10 w-[60%]">
              <p className="eyebrow mb-4">LET'S CONNECT</p>
              <h3 className="font-editorial text-earth text-3xl lg:text-4xl mb-4 leading-tight">
                Have a project
                <br />
                in mind?
              </h3>
              <p className="text-secondary leading-relaxed">
                We'd love to hear about your goals and explore how we can create
                something extraordinary together.
              </p>
            </div>

            <div className="relative z-10 mt-8 w-12 h-12 rounded-full border border-border-warm flex items-center justify-center group-hover:border-signal-orange group-hover:text-signal-orange bg-white transition-colors duration-200">
              <ArrowRight size={16} aria-hidden="true" />
            </div>
            <div
              className="absolute top-0 right-0 bottom-0 w-[50%] pointer-events-none opacity-30 mix-blend-multiply"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 60%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 60%)",
              }}
            >
              <Image
                src="/project-origins.jpg"
                alt=""
                fill
                className="object-cover object-right"
              />
            </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
