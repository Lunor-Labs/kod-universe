"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  BehanceIcon,
} from "@/components/ui/SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, triggerRef]);

  useEffect(() => {
    if (isOpen) {
      const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
        "a, button, [tabindex]",
      );
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-canvas flex flex-col pt-20 pb-8 px-6 sm:px-10 md:hidden overflow-y-auto overscroll-contain antialiased"
          style={{ 
            willChange: "opacity", 
            WebkitBackfaceVisibility: "hidden", 
            backfaceVisibility: "hidden" 
          }}
        >
          <div 
            className="absolute top-[10%] -right-[120px] w-[400px] h-[400px] pointer-events-none opacity-[0.06] z-0"
            style={{ 
              transform: "rotate(45deg) translateZ(0)", 
              WebkitBackfaceVisibility: "hidden", 
              backfaceVisibility: "hidden" 
            }}
          >
            <Image
              src="/main/blossom.webp"
              alt=""
              fill
              sizes="400px"
              className="object-contain"
              priority
            />
          </div>

          <div className="min-h-full flex flex-col justify-between relative z-10 py-2">
            <nav
              aria-label="Mobile navigation"
              className="my-auto py-4"
            >
              <ul
                className="space-y-4 sm:space-y-5"
                role="list"
              >
                {siteConfig.nav.map((item, idx) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <li
                      key={item.href}
                      className="antialiased"
                      style={{ 
                        willChange: "opacity, transform",
                        WebkitBackfaceVisibility: "hidden", 
                        backfaceVisibility: "hidden" 
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`group flex items-baseline gap-3 text-3xl sm:text-4xl font-editorial tracking-tight transition-colors duration-200 ${
                          isActive
                            ? "text-signal-orange"
                            : "text-earth hover:text-signal-orange"
                        }`}
                      >
                        <span className="text-xs font-mono font-medium tracking-widest text-kod-earth/40 group-hover:text-signal-orange/70 transition-colors">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div 
              className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
            >
              
              <div className="flex items-center gap-4 text-secondary">
                <a href={siteConfig.socialLinks.find(s => s.platform === "Instagram")?.href || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-signal-orange transition-colors" aria-label="Instagram">
                  <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href={siteConfig.socialLinks.find(s => s.platform === "LinkedIn")?.href || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-signal-orange transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href={siteConfig.socialLinks.find(s => s.platform === "Behance")?.href || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-signal-orange transition-colors" aria-label="Behance">
                  <BehanceIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href={siteConfig.socialLinks.find(s => s.platform === "Facebook")?.href || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-signal-orange transition-colors" aria-label="Facebook">
                  <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
