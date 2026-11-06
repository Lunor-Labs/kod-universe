"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, startTransition } from "react";
import { MenuIcon, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { navigationDropdowns } from "@/data/navigationDropdowns";
import { KodLogo } from "@/components/ui/KodLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { HeaderDropdown } from "@/components/layout/HeaderDropdown";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    startTransition(() => setMenuOpen(false));
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavItemMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (navigationDropdowns[label]) {
      setActiveDropdown(label);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const isDropdownOpen = !!activeDropdown;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveDropdown(null);
    setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (pathname === "/coming-soon") {
    return null;
  }

  const headerBase =
    "fixed top-0 left-0 right-0 z-[100] transition-all duration-300";

  const isGallery = pathname === "/gallery";
  const isInverted = isGallery && !menuOpen && !isDropdownOpen;

  const headerBg =
    (scrolled && !isGallery) || menuOpen || isDropdownOpen
      ? "bg-kod-canvas/95 backdrop-blur-xl shadow-sm"
      : "bg-transparent";

  return (
    <>
      <div
        onClick={() => setActiveDropdown(null)}
        className={`fixed inset-0 top-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isDropdownOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <header
        className={`${headerBase} ${headerBg}`}
        role="banner"
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              scroll={true}
              aria-label="KOD Universe - Home"
              onClick={handleLogoClick}
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kod-orange/50 cursor-pointer"
            >
              <KodLogo
                className={`h-12 sm:h-32 w-auto transition-all duration-300 ${
                  isInverted
                    ? "brightness-0 invert drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
                    : "text-earth"
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
                    (item.href === "/" && pathname === "/") ||
                    (item.href !== "/" && (
                      pathname === item.href ||
                      pathname.startsWith(item.href) ||
                      (item.href === "/work" && pathname.startsWith("/portfolio")) ||
                      (item.href === "/portfolio" && (pathname === "/work" || pathname.startsWith("/portfolio") || pathname.startsWith("/work"))) ||
                      (item.href === "/contact" && (pathname === "/contact-us" || pathname.startsWith("/contact-us"))) ||
                      (item.href === "/contact-us" && (pathname === "/contact" || pathname.startsWith("/contact-us")))
                    ));
                  const isCurrentDropdown = activeDropdown === item.label;

                  return (
                    <div
                      key={item.href}
                      onMouseEnter={() => handleNavItemMouseEnter(item.label)}
                      className="relative py-2"
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          setActiveDropdown(null);
                          if (item.href === "/" && pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="group relative inline-flex flex-col items-center py-1"
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="relative overflow-hidden py-0.5">
                          <span
                            className={`text-sm tracking-widest uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%] inline-block ${
                              isActive
                                ? "text-signal-orange font-bold drop-shadow-[0_2px_8px_rgba(229,76,42,0.4)]"
                                : isCurrentDropdown
                                ? isInverted
                                  ? "text-kod-gold font-semibold"
                                  : "text-kod-clay font-semibold"
                                : isInverted
                                ? "text-white/90 group-hover:text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                                : "text-black font-semibold"
                            }`}
                          >
                            {item.label}
                          </span>
                          <span
                            className={`absolute left-0 top-[120%] text-sm font-semibold tracking-widest uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%] ${
                              isActive
                                ? "text-signal-orange font-bold"
                                : isInverted
                                ? "text-kod-gold drop-shadow-[0_2px_8px_rgba(234,194,64,0.4)]"
                                : "text-kod-clay"
                            }`}
                            aria-hidden="true"
                          >
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </nav>

              <div className="hidden md:block">
                <Link
                  href="/contact-us"
                  onClick={() => setActiveDropdown(null)}
                  className={`transition-all duration-300 ${
                    isInverted
                      ? "inline-flex items-center justify-center gap-3.5 h-11 px-5 text-xs font-semibold uppercase tracking-[0.12em] rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-kod-orange/70 backdrop-blur-md shadow-lg"
                      : "btn-dark !h-11 !px-4 !text-xs"
                  }`}
                >
                  <span>Connect with KoD</span>
                  <span className="btn-badge !w-7 !h-7">
                    <ArrowRight size={13} aria-hidden="true" />
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
                className={`w-11 h-11 hidden md:flex lg:hidden items-center justify-center rounded-full backdrop-blur-md border shadow-sm transition-colors ${
                  isInverted
                    ? "bg-white/10 border-white/30 text-white hover:border-white/60"
                    : "bg-white/60 border-white/20 text-black hover:border-earth"
                }`}
              >
                {menuOpen ? (
                  <X size={18} strokeWidth={1.5} />
                ) : (
                  <MenuIcon size={18} />
                )}
              </button>
            </div>
          </div>
        </div>
        <HeaderDropdown
          data={activeDropdown ? navigationDropdowns[activeDropdown] : null}
          isOpen={isDropdownOpen}
          onClose={() => setActiveDropdown(null)}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        triggerRef={menuButtonRef}
      />
    </>
  );
}

