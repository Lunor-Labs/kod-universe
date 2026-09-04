"use client";

import Link from "next/link";
import { ArrowRight, Mail, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden section-padding bg-transparent " aria-label="Contact call to action">
      <div className="container-site bg-white/50 py-8 rounded-xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-8">
          <div className="flex flex-col justify-center">
            <ScrollReveal variant="left">
              <p className="eyebrow mb-6 text-earth/60">Get in touch</p>
              <h2 className="font-metropolis text-5xl md:text-6xl lg:text-7xl text-earth leading-tight tracking-tight mb-6">
                Have a vision? <br />
                <span className="font-metropolis text-4xl md:text-5xl lg:text-6xl">
                  Let's shape it.
                </span>
              </h2>
              <p className="text-secondary text-base md:text-lg max-w-2xl font-light leading-relaxed">
                We collaborate with ambitious brands and people. Let's build something that leaves a lasting mark on the culture.
              </p>
            </ScrollReveal>
          </div>
          <div className="flex flex-col justify-center md:items-end">
            <div
              className="absolute left-220 top-0 bottom-0 w-full md:w-[20%] pointer-events-none mix-blend-multiply opacity-70"
              style={{
                maskImage: "linear-gradient(to left, black 30%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 30%, transparent)",
              }}
            >
              <Image
                src="/icons/Web Hero Design-21.png"
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
            <ScrollReveal variant="right" delay={0.2} className="w-full md:w-auto">
              <div className="flex flex-col gap-8 w-full md:w-80">
                <div className="flex flex-col gap-4 border-b border-border-warm/30 pb-8 mb-2">
                  <a href="mailto:hello@koduniverse.com" className="flex items-center justify-between group py-2">
                    <span className="text-earth font-metropolis font-semibold text-sm uppercase tracking-widest group-hover:text-dust-rose transition-colors">Email Us</span>
                    <Mail size={18} className="text-earth/50 group-hover:text-dust-rose transition-colors" />
                  </a>
                  <a href="#" className="flex items-center justify-between group py-2">
                    <span className="text-earth font-metropolis font-semibold text-sm uppercase tracking-widest group-hover:text-dust-rose transition-colors">Instagram</span>
                    <ArrowUpRight size={18} className="text-earth/50 group-hover:text-dust-rose transition-colors" />
                  </a>
                  <a href="#" className="flex items-center justify-between group py-2">
                    <span className="text-earth font-metropolis font-semibold text-sm uppercase tracking-widest group-hover:text-dust-rose transition-colors">LinkedIn</span>
                    <ArrowUpRight size={18} className="text-earth/50 group-hover:text-dust-rose transition-colors" />
                  </a>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/connect" 
                    className="w-full group relative inline-flex items-center justify-between gap-6 bg-earth text-canvas px-8 py-5 rounded-full font-metropolis font-bold text-xs tracking-widest uppercase overflow-hidden shadow-md"
                  >
                    <div className="absolute inset-0 w-full h-full bg-kod-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                    <span className="relative z-10 text-lg transition-colors duration-300 group-hover:text-white">Start a Project</span>
                    <div className="relative z-10 w-8 h-8 rounded-full bg-canvas/10 flex items-center justify-center transition-colors duration-300">
                      <ArrowRight size={20} className="text-canvas group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
