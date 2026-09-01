"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { KodLogo } from "@/components/ui/KodLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Determine if we're on the home page (transparent hero overlay)
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerBase =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300";

  const headerBg =
    scrolled || !isHome || menuOpen
      ? "bg-canvas/95 backdrop-blur-sm border-b border-border-warm shadow-sm"
      : "bg-transparent";

  return (
    <>
      <header
        className={`${headerBase} ${headerBg}`}
        role="banner"
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              aria-label="KOD Universe — Home"
              className="flex-shrink-0 focus-visible:outline-solar-gold"
            >
              <KodLogo
                className={`h-10 w-auto transition-colors duration-300 ${
                  !scrolled && isHome && !menuOpen
                    ? "text-earth"
                    : "text-earth"
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex items-center gap-8"
            >
              {siteConfig.nav.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* CTA */}
              <Link
                href="/connect"
                className="ml-2 btn-primary text-xs py-2 px-4"
              >
                Start a project
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 -mr-2 text-earth hover:text-signal-orange transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
