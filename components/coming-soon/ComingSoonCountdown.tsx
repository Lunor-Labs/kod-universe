"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getCountdownParts,
  padCountdownUnit,
  type CountdownParts,
} from "@/lib/launch";

export function ComingSoonCountdown() {
  const [timeLeft, setTimeLeft] = useState<CountdownParts | null>(null);

  useEffect(() => {
    const sync = () => {
      const next = getCountdownParts();
      setTimeLeft(next);
      return next;
    };

    const initial = sync();
    if (initial.isLaunched) return;

    const timer = setInterval(() => {
      const next = sync();
      if (next.isLaunched) {
        clearInterval(timer);
        window.location.href = "/";
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft?.isLaunched) {
    return (
      <div className="flex flex-col items-center lg:items-start gap-5">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-kod-gold/40 bg-kod-gold/10 backdrop-blur-md text-kod-gold tracking-[0.22em] uppercase text-xs sm:text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-kod-gold animate-pulse" />
          <span>The Cave Is Open</span>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-kod-orange text-white font-metropolis font-bold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-kod-gold hover:text-kod-black transition-all shadow-lg"
        >
          <span>Enter KOD Universe</span>
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft ? padCountdownUnit(timeLeft.days) : "--" },
    { label: "Hours", value: timeLeft ? padCountdownUnit(timeLeft.hours) : "--" },
    {
      label: "Minutes",
      value: timeLeft ? padCountdownUnit(timeLeft.minutes) : "--",
    },
    {
      label: "Seconds",
      value: timeLeft ? padCountdownUnit(timeLeft.seconds) : "--",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:items-start gap-5">
      <div
        className="grid grid-cols-4 gap-2.5 sm:gap-4"
        role="timer"
        aria-live="polite"
        aria-label="Countdown to KOD Universe launch"
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="min-w-[68px] sm:min-w-[88px] md:min-w-[98px] px-3 py-3.5 sm:px-4 sm:py-4 rounded-2xl border border-amber-200/20 bg-black/55 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.65)] flex flex-col items-center relative overflow-hidden"
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kod-gold/50 to-transparent"
              aria-hidden="true"
            />
            <span className="font-metropolis font-bold tabular-nums text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
              {unit.value}
            </span>
            <span className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-kod-gold/85">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded sm:rounded-full border border-amber-200/20 bg-black/50 backdrop-blur-md text-amber-100/90 tracking-[0.18em] uppercase text-[11px] sm:text-xs font-medium shadow-md">
        <span>Launching 11 · 11 · 2026 - 11:11:11 AM SLST</span>
      </div>
    </div>
  );
}

