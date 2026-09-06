"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FAQS = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of creative services including Brand Strategy, Identity Design, Digital Experiences (UI/UX), Storytelling, and Content Production. We specialize in taking raw ideas and forging them into modern, impactful brands.",
  },
  {
    question: "How does your creative process work?",
    answer: "Our process begins with Deep Discovery to understand your core truth. We then move into Strategic Alignment, followed by Creative Execution where ideas take form, and finally, Refinement & Launch. We collaborate closely with you at every stage.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, our impact is global. We work with visionary founders and organizations worldwide, bridging cultural gaps through universal design languages and deeply resonant storytelling.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary depending on the scope and complexity of the project. A brand identity sprint might take 4-6 weeks, while a comprehensive digital experience and web platform could take 12-16 weeks. We establish clear timelines during the discovery phase.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Every project is unique, and we tailor our proposals to fit the specific needs, scale, and ambition of your vision. After an initial consultation, we provide a detailed roadmap and investment breakdown.",
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding-top bg-transparent" aria-label="Frequently Asked Questions">
      <div className="container-site max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="eyebrow text-earth mb-4 block tracking-[0.2em]">Curiosity</span>
          <h2 className="font-editorial text-4xl md:text-5xl text-earth">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-4 max-w-5xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className={`border ${isOpen ? 'border-earth/20 bg-white/40' : 'border-border-warm/30 bg-white/20'} rounded overflow-hidden transition-colors duration-300 backdrop-blur-sm`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-earth/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-metropolis font-semibold text-earth text-lg pr-8">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border ${isOpen ? 'border-earth/10 text-earth' : 'border-border-warm text-earth/60'} flex items-center justify-center transition-colors duration-300`}>
                      {isOpen ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-secondary text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
