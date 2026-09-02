"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, startTransition } from "react";
import { MenuIcon, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { KodLogo } from "@/components/ui/KodLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    startTransition(() => setMenuOpen(false));
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBase =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300";

  const headerBg =
    scrolled || menuOpen
      ? "bg-canvas/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent";

  return (
    <>
      <header className={`${headerBase} ${headerBg}`} role="banner">
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              aria-label="KOD Universe — Home"
              className="flex-shrink-0 focus-visible:outline-solar-gold"
            >
              <KodLogo
                className={`h-12 sm:h-32 w-auto transition-colors duration-300 ${
                  !scrolled && isHome && !menuOpen ? "text-earth" : "text-earth"
                }`}
              />
            </Link>
            <div className="flex items-center">
              <nav
                aria-label="Main navigation"
                className="hidden md:flex items-center gap-8 mr-8"
              >
                {siteConfig.nav.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                        isActive ? "text-signal-orange" : "text-black hover:text-signal-orange"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <button
                ref={menuButtonRef}
                type="button"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((v) => !v)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm  text-black hover:border-earth transition-colors"
              >
                {menuOpen ? <X size={18} strokeWidth={1.5} /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
