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

  const headerBg =
    scrolled || menuOpen || isDropdownOpen
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
                className={`h-12 sm:h-32 w-auto transition-colors duration-300 ${
                  !scrolled && isHome && !menuOpen && !isDropdownOpen
                    ? "text-earth"
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
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  const isCurrentDropdown = activeDropdown === item.label;

                  return (
                    <div
                      key={item.href}
                      onMouseEnter={() => handleNavItemMouseEnter(item.label)}
                      className="relative py-2"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group relative inline-flex overflow-hidden py-1"
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span
                          className={`text-sm font-semibold tracking-widest uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%] ${
                            isActive || isCurrentDropdown
                              ? "text-kod-clay"
                              : "text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span
                          className="absolute left-0 top-[120%] text-sm font-semibold tracking-widest uppercase transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%] text-kod-clay"
                          aria-hidden="true"
                        >
                          {item.label}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </nav>

              <div className="hidden md:block">
                <Link
                  href="/connect"
                  onClick={() => setActiveDropdown(null)}
                  className="btn-dark !h-11 !px-4 !text-xs"
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
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/20 shadow-sm text-black hover:border-earth transition-colors lg:hidden"
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

