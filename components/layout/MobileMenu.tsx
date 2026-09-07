"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const menuVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" as const },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const containerVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const itemVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-40 bg-canvas flex flex-col pt-24 pb-8 px-6 md:px-12 md:hidden overflow-hidden [transform:translateZ(0)] will-change-[opacity] antialiased"
        >
          <div className="absolute top-[20%] -right-[150px] w-[500px] h-[500px] pointer-events-none opacity-[0.12] mix-blend-multiply z-0 transform rotate-45">
            <Image src="/main/blossom.webp" alt="" fill className="object-contain" priority />
          </div>

          <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center relative z-10">
            <motion.ul variants={containerVariants} className="space-y-6" role="list">
              {siteConfig.nav.map((item) => (
                <motion.li 
                  key={item.href} 
                  variants={itemVariants}
                  className="transform-gpu will-change-transform antialiased [backface-visibility:hidden]"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block font-editorial text-5xl sm:text-6xl text-earth hover:text-signal-orange transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              variants={itemVariants} 
              className="mt-12 transform-gpu will-change-transform antialiased [backface-visibility:hidden]"
            >
              <Link
                href="/connect"
                onClick={onClose}
                className="btn-primary w-fit"
              >
                <span>Start a Project</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          </nav>

          <div className="mt-auto border-t border-border-warm pt-6 flex items-center justify-between relative z-10">
            <p className="font-serif italic text-secondary text-sm">
              Ancient ideas. Modern impact.
            </p>
            
            <div className="flex items-center gap-4 text-secondary">
              <a href={siteConfig.socialLinks.find(s => s.platform === "Instagram")?.href || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-signal-orange transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.find(s => s.platform === "LinkedIn")?.href || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-signal-orange transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.find(s => s.platform === "Facebook")?.href || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-signal-orange transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
