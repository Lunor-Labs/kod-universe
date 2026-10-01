"use client";

import React, { useState, useRef, useEffect } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";

const services = [
  {
    category: "Design",
    tagline: "Identity · Space · Screen",
    description:
      "We shape distinctive identities through logos, typography, colour, packaging, websites, spaces and merchandise -from first sketch to final touchpoint.",
    items: [
      "Branding & Identity",
      "Packaging",
      "Website Design",
      "Architectural Design",
      "Merchandising",
    ],
    image: "/icons/logo-design.webp",
    accent: "var(--kod-orange)",
    accentRgb: "229,76,42",
  },
  {
    category: "Marketing",
    tagline: "Strategy · Content · Growth",
    description:
      "We plan how a brand speaks and where its story travels -combining social content, influencer partnerships, campaign planning and digital strategy.",
    items: [
      "Brand & Communication Strategy",
      "Social Media Management",
      "360° Marketing",
      "Digital Marketing & Consultation",
    ],
    image: "/icons/social-media.webp",
    accent: "var(--kod-clay)",
    accentRgb: "219,112,94",
  },
  {
    category: "Visual Storytelling",
    tagline: "Script · Screen · Impact",
    description:
      "We take a story from script and storyboard through creative direction and production -making films, photography and social content for every platform.",
    items: [
      "Creative Direction",
      "Film & Video Production",
      "Photography",
      "Social & Short-Form Content",
    ],
    image: "/icons/visual-storytelling.webp",
    accent: "var(--kod-gold)",
    accentRgb: "234,194,64",
  },
];

type Service = (typeof services)[0];

function AccordionItem({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen && bodyRef.current ? bodyRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="group">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-2 md:gap-8 py-2 sm:py-6 text-left focus-visible:outline-none"
      >
        <span
          className="font-bold tracking-widest w-8 shrink-0 transition-colors duration-300"
          style={{ color: isOpen ? service.accent : "var(--kod-text-2)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3
          className={`flex-1 text-xl md:text-4xl font-bold tracking-tighter leading-none transition-all duration-300 whitespace-nowrap ${
            isOpen
              ? "text-kod-black"
              : "text-kod-earth group-hover:text-kod-black"
          }`}
          style={{ transform: isOpen ? "translateX(6px)" : "translateX(0)" }}
        >
          {service.category}
        </h3>

        <span
          className="hidden md:block font-medium tracking-wide shrink-0 transition-colors duration-300"
          style={{ color: isOpen ? service.accent : "var(--kod-text-2)" }}
        >
          {service.tagline}
        </span>

        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            border: `1.5px solid ${isOpen ? service.accent : "rgba(22,22,22,0.15)"}`,
            background: isOpen ? service.accent : "transparent",
            color: isOpen ? "#fff" : "var(--kod-earth)",
          }}
        >
          {isOpen ? (
            <Minus size={16} strokeWidth={2.5} />
          ) : (
            <Plus size={16} strokeWidth={2.5} />
          )}
        </div>
      </button>

      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 480ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div ref={bodyRef}>
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] gap-8 md:gap-10 sm:pl-12"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-8px)",
              transition: "opacity 360ms ease 80ms, transform 360ms ease 80ms",
            }}
          >
            <div className="relative rounded overflow-hidden flex items-center justify-start">
              <Image
                src={service.image}
                alt={service.category}
                width={160}
                height={160}
                className="object-contain sm:w-48 w-24 h-auto"
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-lg text-kod-text-2 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/services#${service.category.toLowerCase().replace(/ /g, "-")}`}
                className="btn-secondary text-sm sm:text-base self-start"
              >
                <span>Explore {service.category}</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>

            <div className="flex flex-col gap-4 shrink-0">
              <span
                className="font-bold tracking-[0.12em] uppercase"
                style={{ color: service.accent }}
              >
                What we offer
              </span>
              <div className="grid grid-cols-2 gap-2">
                {service.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded border border-black/[0.07] bg-black/[0.02] text-kod-earth text-sm sm:text-base font-medium leading-snug"
                  >
                    <span
                      className="shrink-0"
                      style={{ background: service.accent }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen((p) => (p === i ? null : i));

  return (
    <section id="services" className="section-padding-top text-kod-black">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20">
          <div>
            <SectionLabel className="mb-4">Our Services</SectionLabel>
            <h2 className="text-4xl md:text-6xl text-editorial">
              One universe.
              <br />
              Many ways to create.
            </h2>
          </div>
          <p className="text-kod-text-2 leading-relaxed max-w-[220px] md:pb-1">
            Tap a discipline to see how we bring your vision to life.
          </p>
        </div>

        <div className="bg-white/60 rounded-xl p-4">
          {services.map((s, i) => (
            <AccordionItem
              key={i}
              service={s}
              index={i}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
