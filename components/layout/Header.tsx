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
            <div className="flex items-center gap-6">
              <nav
                aria-label="Main navigation"
                className="hidden lg:flex items-center gap-8"
              >
                {siteConfig.nav.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative inline-flex overflow-hidden py-1"
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span
                        className={`text-sm font-semibold tracking-widest uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%] ${
                          isActive ? "text-signal-orange" : "text-black"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className="absolute left-0 top-[120%] text-sm font-semibold tracking-widest uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%] text-signal-orange"
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden md:block">
                <Link href="/connect" className="btn-primary" style={{ height: '44px', paddingLeft: '20px', paddingRight: '6px' }}>
                  <span className="text-[11px]">Free Consultation</span>
                  <span className="btn-badge" style={{ width: '32px', height: '32px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </span>
                </Link>
              </div>

              <button
                ref={menuButtonRef}
                type="button"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((v) => !v)}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-black hover:border-earth transition-colors lg:hidden"
              >
                {menuOpen ? <X size={18} strokeWidth={1.5} /> : <MenuIcon size={18} />}
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
