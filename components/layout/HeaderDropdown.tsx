"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { DropdownSectionData } from "@/data/navigationDropdowns";

interface HeaderDropdownProps {
  data: DropdownSectionData | null;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function HeaderDropdown({
  data,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: HeaderDropdownProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute top-full left-0 right-0 bg-kod-canvas/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(22,22,22,0.12)] transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden z-[100] ${
        isOpen
          ? "opacity-100 max-h-[560px] translate-y-0 pointer-events-auto"
          : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
      }`}
      role="region"
      aria-label="Navigation mega menu"
    >
      <div className="container-site py-10">
        {data && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div
              className={
                data.secondaryLinks.length > 0
                  ? "lg:col-span-5"
                  : "lg:col-span-8"
              }
            >
              <p
                className={`text-sm font-bold tracking-[0.16em] uppercase text-kod-clay mb-5 font-metropolis transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
                style={{ transitionDelay: "40ms" }}
              >
                {data.primaryHeading}
              </p>
              <ul
                className={`${data.secondaryLinks.length > 0 ? "space-y-3" : "grid grid-cols-2 gap-x-8 gap-y-3"}`}
                role="list"
              >
                {data.primaryLinks.map((link, i) => (
                  <li
                    key={`${link.href}-${link.label}`}
                    className={`transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3"
                    }`}
                    style={{ transitionDelay: `${60 + i * 35}ms` }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group inline-flex items-center gap-3 text-2xl sm:text-[28px] font-bold font-metropolis text-kod-earth hover:text-kod-clay transition-colors tracking-tight leading-snug"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        size={18}
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-kod-clay"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {data.secondaryLinks.length > 0 && (
              <div className="lg:col-span-3">
                {data.secondaryHeading && (
                  <p
                    className={`text-sm font-bold tracking-[0.16em] uppercase text-kod-clay mb-5 font-metropolis transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                    style={{ transitionDelay: "70ms" }}
                  >
                    {data.secondaryHeading}
                  </p>
                )}
                <ul className="space-y-2.5" role="list">
                  {data.secondaryLinks.map((link, i) => (
                    <li
                      key={`${link.href}-${link.label}`}
                      className={`transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      }`}
                      style={{ transitionDelay: `${90 + i * 30}ms` }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="text-base font-medium text-kod-earth/80 hover:text-kod-clay transition-colors block py-1 font-sans"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.spotlight.title && (
              <div
                className={`lg:col-span-4 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-3"
                }`}
                style={{ transitionDelay: "130ms" }}
              >
                <div className="bg-kod-white rounded p-5 shadow-soft hover:border-kod-clay/70 transition-all group relative overflow-hidden">
                  <p className="text-sm font-bold tracking-[0.15em] uppercase text-kod-clay mb-2 font-metropolis">
                    {data.spotlight.tag}
                  </p>
                  <h4 className="text-lg font-bold text-kod-earth font-metropolis mb-2 group-hover:text-kod-clay transition-colors">
                    {data.spotlight.title}
                  </h4>
                  <p className="text-sm text-kod-earth/80 leading-relaxed mb-3">
                    {data.spotlight.description}
                  </p>

                  {data.spotlight.image && (
                    <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={data.spotlight.image}
                        alt={data.spotlight.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <Link
                    href={data.spotlight.href}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-kod-clay group-hover:gap-3 transition-all"
                  >
                    <span>Explore</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
