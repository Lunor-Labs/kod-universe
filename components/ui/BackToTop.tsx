"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="w-8 h-8 rounded-full border border-earth flex items-center justify-center 
                 text-secondary hover:border-signal-orange hover:text-signal-orange 
                 transition-colors duration-200"
    >
      <ArrowUp size={13} />
    </button>
  );
}
