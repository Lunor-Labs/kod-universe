"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Detects iOS Safari (not Chrome/Firefox on iOS, which can't install PWAs)
function isIosSafari(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isIos = /iphone|ipad|ipod/i.test(ua);
  // Safari has no "CriOS" (Chrome iOS) or "FxiOS" (Firefox iOS)
  const isSafari = /safari/i.test(ua) && !/crios|fxios|edgios|opios/i.test(ua);
  return isIos && isSafari;
}

// Returns true if already installed as standalone app
function isInStandaloneMode(): boolean {
  if (typeof window === "undefined") return false;
  return (
    ("standalone" in window.navigator &&
      (window.navigator as any).standalone === true) ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

const STORAGE_KEY = "kod-ios-prompt-dismissed";
// Show again after 7 days
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function IosInstallPrompt() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (!isIosSafari() || isInStandaloneMode()) return;

    // Check if user already dismissed recently
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const { ts } = JSON.parse(raw);
        if (Date.now() - ts < DISMISS_TTL_MS) return;
      }
    } catch {
      // ignore
    }

    // Delay prompt slightly - don't interrupt initial load
    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setAnimateOut(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
    } catch {
      // ignore
    }
    setTimeout(() => setVisible(false), 420);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Install KOD app"
      className="fixed inset-x-0 bottom-0 z-[9999] pointer-events-none"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-x-0 bottom-0 h-[200px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(58,47,45,0.18) 0%, transparent 100%)",
          transition: "opacity 0.4s",
          opacity: animateIn && !animateOut ? 1 : 0,
        }}
      />

      {/* Bottom sheet */}
      <div
        className="relative mx-3 mb-3 rounded-2xl overflow-hidden pointer-events-auto"
        style={{
          background: "rgba(30,24,22,0.96)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 -8px 48px rgba(0,0,0,0.38), 0 2px 8px rgba(0,0,0,0.2)",
          transform: animateIn && !animateOut ? "translateY(0)" : "translateY(110%)",
          opacity: animateIn && !animateOut ? 1 : 0,
          transition: "transform 0.42s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
        }}
      >
        {/* Top strip - KOD brand accent */}
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg, #e54c2a 0%, #eac240 50%, #db705e 100%)",
          }}
        />

        <div className="px-5 pt-4 pb-5">
          {/* Header row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-lg" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <Image
                src="/icons/pwa/icon-192x192.png"
                alt="KOD Universe"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-[15px] leading-tight truncate">
                KOD Universe
              </p>
              <p className="text-white/50 text-xs mt-0.5 truncate">
                kod.lk · Free
              </p>
            </div>
            <button
              onClick={dismiss}
              aria-label="Dismiss install prompt"
              className="w-7 h-7 rounded-full flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Instruction */}
          <div
            className="rounded-xl px-4 py-3 mb-4"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p className="text-white/80 text-[13px] leading-relaxed">
              Install KOD on your iPhone - tap{" "}
              <ShareIcon />{" "}
              then{" "}
              <span className="text-white font-semibold">Add to Home Screen</span>
            </p>
          </div>

          {/* Step indicators */}
          <div className="flex items-start gap-3">
            <Step n={1} label="Tap the Share button at the bottom of Safari" />
            <Step n={2} label="Scroll down and tap 'Add to Home Screen'" />
            <Step n={3} label="Tap Add - KOD appears on your Home Screen" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-1.5 flex-1">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
        style={{ background: "linear-gradient(135deg, #e54c2a, #eac240)" }}
      >
        {n}
      </div>
      <p className="text-white/50 text-[10px] leading-snug">{label}</p>
    </div>
  );
}

// Inline iOS share icon - matches the actual Safari share button
function ShareIcon() {
  return (
    <span
      className="inline-flex items-center justify-center align-middle mx-0.5"
      style={{
        width: 18,
        height: 18,
        background: "rgba(255,255,255,0.12)",
        borderRadius: 4,
        verticalAlign: "middle",
        position: "relative",
        top: -1,
      }}
    >
      <svg width="11" height="13" viewBox="0 0 11 13" fill="none">
        <path d="M5.5 8.5V1M5.5 1L3 3.5M5.5 1L8 3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="0.7" y="4.5" width="9.6" height="7.8" rx="1.3" stroke="white" strokeWidth="1.3"/>
      </svg>
    </span>
  );
}
