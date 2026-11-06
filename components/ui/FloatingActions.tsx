"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { AiChatWidget } from "@/components/chat/AiChatWidget";

import { usePathname } from "next/navigation";

export function FloatingActions() {
  const pathname = usePathname();
  const [showTopButton, setShowTopButton] = useState(false);

  if (pathname === "/coming-soon") return null;

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const phoneRaw = siteConfig.contact.phones[0]?.number.replace(/\s+/g, "") || "0772000504";

  return (
    <>
      <div
        className="fixed bottom-20 right-4 sm:bottom-7 sm:right-7 z-50 flex flex-col items-center gap-3 select-none pointer-events-auto"
        aria-label="Floating quick actions"
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top of page"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-kod-canvas hover:bg-[#FFFFFF] text-kod-earth hover:text-kod-orange border border-kod-border/80 shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 group cursor-pointer ${
            showTopButton
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <ArrowUp
            size={18}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>

        <AiChatWidget />
      </div>
    </>
  );
}
