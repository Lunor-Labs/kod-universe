"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="border-b border-kod-border transition-all duration-200 overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-metropolis font-medium text-kod-earth text-base group-hover:text-kod-orange transition-colors pr-4">
                {item.question}
              </span>
              <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-kod-orange group-hover:scale-110 transition-transform">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-5 pt-1 text-kod-text-2 leading-relaxed font-light">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
