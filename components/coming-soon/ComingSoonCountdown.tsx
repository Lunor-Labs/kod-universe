"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LAUNCH_TIMESTAMP } from "@/lib/launch";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLaunched: boolean;
}

function calculateTimeLeft(): TimeLeft {
  const diff = LAUNCH_TIMESTAMP - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLaunched: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLaunched: false,
  };
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

export function ComingSoonCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const sync = () => {
      const next = calculateTimeLeft();
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
      <div className="flex flex-col items-center gap-5">
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-blue-400/40 bg-blue-900/20 backdrop-blur-sm text-blue-300 tracking-[0.2em] uppercase text-sm md:text-base">
          The Cave Is Open
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black font-metropolis font-bold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-blue-200 transition-colors shadow-lg"
        >
          <span>Enter KOD Universe</span>
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft ? pad(timeLeft.days) : "--" },
    { label: "Hours", value: timeLeft ? pad(timeLeft.hours) : "--" },
    { label: "Minutes", value: timeLeft ? pad(timeLeft.minutes) : "--" },
    { label: "Seconds", value: timeLeft ? pad(timeLeft.seconds) : "--" },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="grid grid-cols-4 gap-3 sm:gap-5"
        role="timer"
        aria-live="polite"
        aria-label="Countdown to KOD Universe launch"
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            className="min-w-[68px] sm:min-w-[92px] md:min-w-[108px] px-3 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-blue-300/25 bg-black/55 backdrop-blur-md shadow-[0_0_24px_rgba(0,0,0,0.6)] flex flex-col items-center"
          >
            <span className="font-metropolis font-bold tabular-nums text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
              {unit.value}
            </span>
            <span className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/80">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <div className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-blue-400/40 bg-blue-900/15 backdrop-blur-sm text-blue-300/90 tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        Launching 11 · 11 · 2026 - 11:11:11 AM SLST
      </div>
    </div>
  );
}

