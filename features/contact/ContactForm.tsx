"use client";

import { useState, useCallback } from "react";
import { ArrowRight, Lock, CheckCircle } from "lucide-react";

const SERVICE_OPTIONS = [
  "Social Media",
  "Branding & Identity",
  "Package Design",
  "Creative Work",
  "Digital Experiences",
  "I'm not sure yet",
];

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// ✦ Isolated submit function — replace this with an API call in future
async function submitProjectEnquiry(data: FormData): Promise<void> {
  // Simulate API request latency
  await new Promise<void>((resolve) => setTimeout(resolve, 1500));
  // Future: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  console.log("[ContactForm] Enquiry submitted:", data);
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Please describe your project (at least 20 characters).";
  }
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      // Clear field error on change
      if (errors[e.target.name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fieldErrors = validateForm(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      // Focus first error field
      const firstError = Object.keys(fieldErrors)[0];
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    setStatus("loading");
    try {
      await submitProjectEnquiry(form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="bg-white border border-border-warm rounded-sm p-10 flex flex-col items-center text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-canvas border border-border-warm flex items-center justify-center mb-6">
          <CheckCircle size={26} className="text-signal-orange" aria-hidden="true" />
        </div>
        <h3 className="font-metropolis font-semibold text-earth text-xl mb-3">
          Message received.
        </h3>
        <p className="text-secondary text-sm leading-relaxed max-w-xs">
          Thank you for reaching out. We&apos;ll review your enquiry and get back to you within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", service: "", message: "" });
          }}
          className="mt-8 text-xs font-semibold tracking-[0.12em] uppercase text-signal-orange 
                     hover:text-deep-crimson transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-border-warm rounded-sm p-7 space-y-6"
      aria-label="Project enquiry form"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="field-name"
            className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-2"
          >
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            aria-required="true"
            aria-describedby={errors.name ? "error-name" : undefined}
            aria-invalid={!!errors.name}
            className={`w-full px-4 py-3 bg-canvas border rounded-sm text-sm text-earth placeholder-secondary/60 
                       focus:outline-none focus:border-signal-orange focus:ring-1 focus:ring-signal-orange/20 
                       transition-colors duration-200 ${
                         errors.name ? "border-clay" : "border-border-warm"
                       }`}
          />
          {errors.name && (
            <p id="error-name" role="alert" className="mt-1.5 text-xs text-clay">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-email"
            className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-2"
          >
            Your email <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            aria-required="true"
            aria-describedby={errors.email ? "error-email" : undefined}
            aria-invalid={!!errors.email}
            className={`w-full px-4 py-3 bg-canvas border rounded-sm text-sm text-earth placeholder-secondary/60 
                       focus:outline-none focus:border-signal-orange focus:ring-1 focus:ring-signal-orange/20 
                       transition-colors duration-200 ${
                         errors.email ? "border-clay" : "border-border-warm"
                       }`}
          />
          {errors.email && (
            <p id="error-email" role="alert" className="mt-1.5 text-xs text-clay">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Service selector */}
      <div>
        <label
          htmlFor="field-service"
          className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-2"
        >
          Service you&apos;re interested in
        </label>
        <select
          id="field-service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-canvas border border-border-warm rounded-sm text-sm text-earth 
                     focus:outline-none focus:border-signal-orange focus:ring-1 focus:ring-signal-orange/20 
                     transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="field-message"
          className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-2"
        >
          Tell us about your project <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Share your goals, ideas, timeline, and any details that will help us understand your project better..."
          aria-required="true"
          aria-describedby={errors.message ? "error-message" : undefined}
          aria-invalid={!!errors.message}
          className={`w-full px-4 py-3 bg-canvas border rounded-sm text-sm text-earth placeholder-secondary/60 
                     resize-none focus:outline-none focus:border-signal-orange focus:ring-1 focus:ring-signal-orange/20 
                     transition-colors duration-200 ${
                       errors.message ? "border-clay" : "border-border-warm"
                     }`}
        />
        {errors.message && (
          <p id="error-message" role="alert" className="mt-1.5 text-xs text-clay">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 bg-signal-orange text-white 
                     px-7 py-3.5 rounded-sm font-medium text-sm tracking-wide
                     hover:bg-deep-crimson transition-all duration-200 group
                     disabled:opacity-70 disabled:pointer-events-none focus-visible:outline-solar-gold"
          aria-busy={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send message
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        {status === "error" && (
          <p role="alert" className="mt-3 text-xs text-clay">
            Something went wrong. Please try again or email us directly at hello@koduniverse.com
          </p>
        )}
      </div>

      {/* Privacy */}
      <div className="flex items-center gap-2 pt-1">
        <Lock size={12} className="text-secondary flex-shrink-0" aria-hidden="true" />
        <p className="text-xs text-secondary">
          We respect your privacy. Your information will never be shared.
        </p>
      </div>
    </form>
  );
}
