"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import { KodLogo } from "@/components/ui/KodLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

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
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 bg-void-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed top-0 right-0 bottom-0 w-[100vw] max-w-sm bg-canvas z-50 flex flex-col 
                    transition-transform duration-400 ease-out md:hidden ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <Link href="/" onClick={onClose} aria-label="KOD Universe — Home">
            <KodLogo className="h-12 w-auto text-earth" />
          </Link>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex-1 px-6 py-8 flex flex-col"
        >
          <ul className="space-y-1" role="list">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 text-base font-semibold tracking-[0.12em] uppercase 
                             text-earth border-b border-border-warm hover:text-signal-orange 
                             transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/connect"
              onClick={onClose}
              className="btn-primary w-full justify-center"
            >
              Start a project
            </Link>
          </div>
        </nav>

        <div className="px-6 py-6 border-t border-border-warm">
          <p className="font-serif italic text-secondary text-sm">
            Ancient ideas. Modern impact.
          </p>
        </div>
      </div>
    </>
  );
}
