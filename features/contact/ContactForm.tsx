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
        className="flex flex-col items-center text-center py-12"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-canvas border border-border-warm flex items-center justify-center mb-6">
          <CheckCircle size={26} className="text-signal-orange" aria-hidden="true" />
        </div>
        <h3 className="font-editorial italic text-earth text-3xl mb-3">
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
          className="mt-8 text-sm font-semibold tracking-[0.12em] uppercase text-signal-orange 
                     hover:text-earth transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputStyles = "w-full px-4 py-3 bg-transparent border rounded-md text-base text-earth placeholder-secondary/50 focus:outline-none focus:border-signal-orange focus:ring-1 focus:ring-signal-orange/20 transition-colors duration-200";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Project enquiry form"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="field-name"
            className="block eyebrow mb-2"
          >
            YOUR NAME
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
            className={`${inputStyles} ${
              errors.name ? "border-red-400" : "border-border-warm/70"
            }`}
          />
          {errors.name && (
            <p id="error-name" role="alert" className="mt-1.5 text-sm text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-email"
            className="block eyebrow mb-2"
          >
            YOUR EMAIL
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
            className={`${inputStyles} ${
              errors.email ? "border-red-400" : "border-border-warm/70"
            }`}
          />
          {errors.email && (
            <p id="error-email" role="alert" className="mt-1.5 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Service selector */}
      <div>
        <label
          htmlFor="field-service"
          className="block eyebrow mb-2"
        >
          SERVICE YOU&apos;RE INTERESTED IN
        </label>
        <div className="relative">
          <select
            id="field-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputStyles} border-border-warm/70 appearance-none cursor-pointer pr-10`}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-secondary">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="field-message"
          className="block eyebrow mb-2"
        >
          TELL US ABOUT YOUR PROJECT
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Share your goals, ideas, timeline, and any details that will help us understand your project better..."
          aria-required="true"
          aria-describedby={errors.message ? "error-message" : undefined}
          aria-invalid={!!errors.message}
          className={`${inputStyles} resize-none ${
            errors.message ? "border-red-400" : "border-border-warm/70"
          }`}
        />
        {errors.message && (
          <p id="error-message" role="alert" className="mt-1.5 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit & Privacy */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:pointer-events-none"
          aria-busy={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <span className="btn-badge">
                <ArrowRight size={13} aria-hidden="true" />
              </span>
            </>
          )}
        </button>

        <div className="flex items-center justify-center sm:justify-end gap-2 text-kod-earth/75">
          <Lock size={14} className="opacity-70" />
          <p className="text-sm sm:text-base font-medium">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      </div>
    </form>
  );
}
