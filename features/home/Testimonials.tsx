"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/KoD+Universe/@6.8944617,79.9519879,17z/data=!4m18!1m9!3m8!1s0x3ae251003fecdfbf:0xf1daf0e54bd7a7ce!2sKoD+Universe!8m2!3d6.8944564!4d79.9545628!9m1!1b1!16s%2Fg%2F11xh97lpjl!3m7!1s0x3ae251003fecdfbf:0xf1daf0e54bd7a7ce!8m2!3d6.8944564!4d79.9545628!9m1!1b1!16s%2Fg%2F11xh97lpjl?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";

const testimonials = [
  {
    quote: "KOD Universe didn't just redesign our brand; they completely revolutionized how we communicate our value.",
    author: "Elena Rodriguez",
    role: "CMO, Soluna Technologies"
  },
  {
    quote: "The level of strategic insight and creative execution is unmatched. They are true partners in our growth.",
    author: "Marcus Chen",
    role: "Founder, CorePoint"
  },
  {
    quote: "A phenomenal team that brings both visionary ideas and precise execution. Highly recommended.",
    author: "Sarah Jenkins",
    role: "VP Marketing, Terra"
  },
  {
    quote: "Working with them was the best decision we made this year. Our engagement metrics have doubled.",
    author: "David Alston",
    role: "CEO, Threadline"
  },
  {
    quote: "They understand the pulse of modern digital experiences like no one else. Absolutely brilliant.",
    author: "Priya Patel",
    role: "Director of Digital, Nexa"
  },
  {
    quote: "From start to finish, the process was seamless, collaborative, and incredibly inspiring.",
    author: "James Wilson",
    role: "Creative Director, Vibe"
  },
  {
    quote: "They took our vague ideas and turned them into a stunning, cohesive brand identity.",
    author: "Anna Rossi",
    role: "Co-founder, Lumina"
  },
  {
    quote: "Their attention to detail and commitment to quality sets them apart from every other agency.",
    author: "Michael Chang",
    role: "Head of Product, Altis"
  },
  {
    quote: "Not only did they deliver on time, but they vastly exceeded our expectations at every step.",
    author: "Laura Bennett",
    role: "Marketing Manager, Echo"
  },
  {
    quote: "A rare mix of strategic brilliance and artistic talent. They gave our brand a soul.",
    author: "Thomas Wright",
    role: "CEO, Kinetix"
  }
];

export function Testimonials() {
  return (
    <section className="section-padding-top bg-transparent overflow-hidden flex flex-col" aria-label="Client testimonials">
      <div className="container-site flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow mb-2">TESTIMONIALS</p>
          <h2 className="font-editorial text-4xl md:text-5xl text-earth">What Our Clients Say</h2>
        </div>

        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white hover:bg-kod-canvas px-5 py-2.5 rounded font-semibold text-earth shadow-xs hover:shadow-md hover:border-kod-clay transition-all group cursor-pointer self-start sm:self-auto"
          aria-label="Write a Google Review for KoD Universe"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="font-metropolis tracking-tight">Write a Google Review</span>
          <ArrowUpRight size={24} className="text-secondary group-hover:text-kod-clay group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>
      <div className="flex w-[200%] gap-8">
        <motion.div
          className="flex gap-6 md:gap-8 px-4 items-stretch"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={`primary-${idx}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white rounded p-8 flex flex-col"
            >
              <svg
                className="w-8 h-8 text-signal-orange/20 mb-6"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="font-editorial text-xl md:text-2xl text-earth leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-6 border-t border-border-warm/50">
                <p className="font-metropolis font-bold text-earth uppercase tracking-wider text-sm">
                  {t.author}
                </p>
                <p className="text-kod-earth/75 text-sm mt-1">{t.role}</p>
              </div>
            </div>
          ))}
          {testimonials.map((t, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white rounded p-8 flex flex-col"
              aria-hidden="true"
            >
              <svg
                className="w-8 h-8 text-signal-orange/20 mb-6"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="font-editorial text-xl md:text-2xl text-earth leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-6 border-t border-border-warm/50">
                <p className="font-metropolis font-bold text-earth uppercase tracking-wider text-sm">
                  {t.author}
                </p>
                <p className="text-kod-earth/75 text-sm mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
