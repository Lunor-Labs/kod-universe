"use client";

import { motion } from "framer-motion";

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
    <section className="section-padding-sm bg-transparent overflow-hidden flex flex-col" aria-label="Client testimonials">
      <div className="container-site text-center mb-12">
        <p className="eyebrow mb-2">TESTIMONIALS</p>
        <h2 className="font-editorial text-4xl md:text-5xl text-earth">What Our Clients Say</h2>
      </div>
      <div className="flex w-[200%] gap-8">
        <motion.div
          className="flex gap-6 md:gap-8 px-4 items-stretch"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white rounded p-8 flex flex-col "
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
                <p className="font-metropolis font-semibold text-earth uppercase tracking-widest text-xs">
                  {t.author}
                </p>
                <p className="text-secondary text-xs mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
