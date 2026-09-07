"use client";

import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const SERVICES_OPTIONS = [
  "Branding & Identity",
  "Social Media & Content",
  "Package Design",
  "Creative Art Direction",
];

export function ContactCTA() {
  const [selectedService, setSelectedService] = useState(SERVICES_OPTIONS[0]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setName("");
    setContact("");
    setMessage("");
    setIsSuccess(false);
  };

  return (
    <section
      className="relative overflow-hidden section-padding bg-transparent"
      aria-label="Contact and project inquiry"
    >
      <div className="container-site relative z-10">
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 sm:p-12 lg:p-14 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <ScrollReveal variant="left">
                <span className="eyebrow mb-3">Start a Conversation</span>
                <h2 className="font-metropolis text-4xl sm:text-5xl lg:text-6xl text-kod-earth leading-tight tracking-tight mb-5">
                  Have a vision? <br />
                  <span className="text-kod-clay italic font-editorial">
                    Let's shape it.
                  </span>
                </h2>
                <p className="text-kod-text-2 text-base md:text-lg font-light leading-relaxed mb-8">
                  We collaborate with ambitious brands and founders worldwide.
                  Tell us what you want to bring into the world, and let's craft
                  something that leaves an indelible mark.
                </p>
                <div className="space-y-4 pt-4 mb-8">
                  <a
                    href="mailto:hello@koduniverse.com"
                    className="flex items-center gap-3.5 text-kod-earth hover:text-kod-clay transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-kod-canvas flex items-center justify-center text-kod-earth group-hover:bg-kod-clay group-hover:text-white transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-kod-earth/70">
                        Direct Mail
                      </p>
                      <p className="text-base font-semibold text-kod-earth">
                        hello@koduniverse.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+947720000504"
                    className="flex items-center gap-3.5 text-kod-earth hover:text-kod-clay transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-kod-canvas flex items-center justify-center text-kod-earth group-hover:bg-kod-clay group-hover:text-white transition-colors">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-kod-earth/70">
                        Studio Line
                      </p>
                      <p className="text-base font-semibold text-kod-earth">+94 77 2000 0504</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 text-kod-earth">
                    <div className="w-9 h-9 rounded-full bg-kod-canvas flex items-center justify-center text-kod-earth">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-kod-earth/70">
                        Headquarters
                      </p>
                      <p className="text-base font-semibold text-kod-earth">
                        Colombo 07, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2.5 bg-kod-canvas/80 px-4 py-2.5 rounded italic text-sm font-medium text-kod-earth">
                  <span>
                    * We review and respond to inquiries within 24 hours.
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal variant="right" delay={0.15}>
                <div className="bg-kod-white/30 backdrop-blur-md rounded-xl p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden">
                  {isSuccess ? (
                    <div className="text-center py-10 sm:py-14 animate-in fade-in zoom-in-95 duration-300">
                      <div className="w-16 h-16 rounded-full bg-kod-clay/15 text-kod-clay flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 className="font-metropolis font-bold text-2xl text-kod-earth mb-2">
                        Inquiry Received
                      </h3>
                      <p className="text-kod-text-2 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
                        Thank you,{" "}
                        <span className="font-semibold text-kod-earth">
                          {name}
                        </span>
                        . Your project brief has been sent to our creative
                        directors. We will connect with you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="btn-secondary !text-sm !h-11 !px-6"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                    >
                      <div>
                        <h3 className="font-metropolis font-bold text-xl sm:text-2xl text-kod-earth mb-1">
                          Quick Project Inquiry
                        </h3>
                        <p className="text-kod-earth/80 text-sm sm:text-base leading-relaxed">
                          Fill out this brief form and our team will get back to
                          you with insights and next steps.
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-kod-earth mb-2.5 font-metropolis">
                          I am interested in:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {SERVICES_OPTIONS.map((svc) => {
                            const isSelected = selectedService === svc;
                            return (
                              <button
                                key={svc}
                                type="button"
                                onClick={() => setSelectedService(svc)}
                                className={`text-sm font-semibold px-3.5 py-2 rounded border transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-kod-clay border-kod-clay text-white shadow-sm"
                                    : "bg-kod-canvas border-kod-border text-kod-earth hover:border-kod-clay/50"
                                }`}
                              >
                                {svc}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="inquiry-name"
                            className="block text-sm font-bold uppercase tracking-wider text-kod-earth mb-1.5 font-metropolis"
                          >
                            Your Name *
                          </label>
                          <input
                            id="inquiry-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. John Doe"
                            className="w-full h-11 px-4 text-sm sm:text-base rounded bg-kod-canvas/60 border border-kod-border focus:border-kod-clay focus:outline-none transition-colors text-kod-earth placeholder:text-kod-text-2/50"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="inquiry-contact"
                            className="block text-sm font-bold uppercase tracking-wider text-kod-earth mb-1.5 font-metropolis"
                          >
                            Email or Phone *
                          </label>
                          <input
                            id="inquiry-contact"
                            type="text"
                            required
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="john@example.com / +94..."
                            className="w-full h-11 px-4 text-sm sm:text-base rounded bg-kod-canvas/60 border border-kod-border focus:border-kod-clay focus:outline-none transition-colors text-kod-earth placeholder:text-kod-text-2/50"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="inquiry-message"
                          className="block text-sm font-bold uppercase tracking-wider text-kod-earth mb-1.5 font-metropolis"
                        >
                          Project Brief / Message *
                        </label>
                        <textarea
                          id="inquiry-message"
                          required
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your brand vision, goals, or timeline..."
                          className="w-full p-3.5 text-sm sm:text-base rounded bg-kod-canvas/60 border border-kod-border focus:border-kod-clay focus:outline-none transition-colors text-kod-earth placeholder:text-kod-text-2/50 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
                      >
                        <span className="font-metropolis text-sm sm:text-base font-bold tracking-wider text-white">
                          {isSubmitting
                            ? "Sending Inquiry..."
                            : "Submit Project Inquiry"}
                        </span>
                        <div className="w-8 h-8 rounded bg-white/15 flex items-center justify-center text-white">
                          {isSubmitting ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <ArrowRight size={16} />
                          )}
                        </div>
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
