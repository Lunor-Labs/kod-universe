"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Home, Briefcase, Layers, Image as ImageIcon, Phone } from "lucide-react";

export function MobileAppNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and past 50px
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } 
      // Show if scrolling up
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/coming-soon") return null;

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Work", href: "/portfolio", icon: Briefcase },
    { label: "Services", href: "/services", icon: Layers },
    { label: "Gallery", href: "/gallery", icon: ImageIcon },
    { label: "Contact", href: "/contact-us", icon: Phone },
  ];

  return (
    <>
      <div className="h-[72px] md:hidden w-full" aria-hidden="true" />
      <nav className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-kod-canvas/95 backdrop-blur-xl border-t border-kod-border/40 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] pb-safe transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center w-full h-full space-y-1 relative group"
                aria-current={isActive ? "page" : undefined}
              >
                <div
                  className={`relative flex items-center justify-center w-10 h-8 rounded transition-colors duration-300 ${
                    isActive
                      ? "bg-kod-orange/10 text-kod-orange"
                      : "text-kod-earth/70 group-hover:text-kod-earth group-hover:bg-black/5"
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-kod-orange font-bold" : "text-kod-earth/80"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
