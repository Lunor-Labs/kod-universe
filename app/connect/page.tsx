import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Globe } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/features/contact/ContactForm";
import { siteConfig, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Start a project with KOD Universe. Share your goals and let's explore how we can create something extraordinary together.",
  alternates: { canonical: "/connect" },
};

const contactIcons: Record<string, React.ElementType> = {
  Instagram: ExternalLink,
  Linkedin: ExternalLink,
  ExternalLink,
  Twitter: ExternalLink,
};

export default function ConnectPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative overflow-hidden bg-canvas texture-cave pt-28 md:pt-36 pb-20 md:pb-28"
        aria-label="Connect page hero"
      >
        {/* Subtle cave texture background */}
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
          <Image src="/hero.jpg" alt="" fill className="object-cover" priority />
        </div>

        {/* Decorative handprints - left side */}
        <div
          className="absolute left-0 top-1/4 w-64 h-64 opacity-[0.06] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/project-origins.jpg')",
            backgroundSize: "cover",
          }}
        />

        <div className="container-site relative z-10 text-center">
          <p className="eyebrow mb-5">We&apos;d love to hear from you.</p>
          <h1 className="font-metropolis font-semibold text-earth text-display-2xl mb-6 leading-tight text-balance">
            Let&apos;s Create Something{" "}
            <em className="font-serif italic font-normal text-secondary">Extraordinary.</em>
          </h1>
          <p className="text-secondary text-base leading-relaxed max-w-md mx-auto mb-3">
            Whether you have a bold idea, a complex challenge, or just want to explore possibilities — our team is here to help.
          </p>
          <p className="font-semibold text-earth text-sm">
            We turn ideas into meaningful impact.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-padding border-t border-border-warm" aria-label="Contact details and form">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Left: Contact info */}
            <aside className="lg:col-span-1 space-y-8" aria-label="Contact information">
              {/* Contact details */}
              <div className="bg-canvas border border-border-warm rounded-sm p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-sm border border-border-warm flex items-center justify-center text-signal-orange"
                    aria-hidden="true"
                  >
                    <MapPin size={14} />
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                    Contact information
                  </p>
                </div>

                <ul className="space-y-4" role="list">
                  <li className="flex items-center gap-3">
                    <Mail size={13} className="text-secondary flex-shrink-0" aria-hidden="true" />
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm text-earth hover:text-signal-orange transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={13} className="text-secondary flex-shrink-0" aria-hidden="true" />
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                      className="text-sm text-earth hover:text-signal-orange transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={13} className="text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-earth">{siteConfig.contact.location}</p>
                      <p className="text-xs text-secondary">{siteConfig.contact.locationDetail}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social links */}
              <div className="bg-canvas border border-border-warm rounded-sm p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-sm border border-border-warm flex items-center justify-center text-signal-orange"
                    aria-hidden="true"
                  >
                    <Globe size={14} />
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                    Let&apos;s connect
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {siteConfig.socialLinks.map((link) => {
                    const Icon = contactIcons[link.iconName] ?? ExternalLink;
                    return (
                      <a
                        key={link.platform}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${siteConfig.name} on ${link.platform}`}
                        className="w-10 h-10 rounded-sm border border-border-warm flex items-center justify-center 
                                   text-earth hover:border-signal-orange hover:text-signal-orange transition-colors duration-200"
                      >
                        <Icon size={15} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Collaborations */}
              <div className="bg-canvas border border-border-warm rounded-sm p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-sm border border-border-warm flex items-center justify-center text-signal-orange"
                    aria-hidden="true"
                  >
                    <Mail size={14} />
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary">
                    Collaborations welcome
                  </p>
                </div>
                <p className="text-secondary text-xs leading-relaxed mb-4">
                  We partner with visionary brands, founders, and organizations to craft work that inspires, connects, and lasts.
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs font-semibold text-signal-orange hover:text-deep-crimson transition-colors"
                >
                  Let&apos;s build something great together.
                </a>
              </div>
            </aside>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="section-padding-sm border-t border-border-warm bg-white" aria-label="How we can help">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionLabel className="mb-6">How we can help</SectionLabel>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {services.slice(0, 4).map((service) => (
                  <div key={service.title}>
                    <h3 className="font-metropolis font-semibold text-earth text-sm mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary text-xs leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Office card */}
            <div className="border border-border-warm rounded-sm p-6 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-4">
                  Office details
                </p>
                <p className="font-metropolis font-semibold text-earth text-sm mb-1">
                  {siteConfig.name}
                </p>
                <p className="text-secondary text-xs">{siteConfig.contact.location}</p>
                <p className="text-secondary text-xs">United States</p>
              </div>
              <div className="mt-6 relative aspect-video rounded-sm overflow-hidden">
                <Image
                  src="/project-cosmic.jpg"
                  alt="Global creative studio location"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(58,47,45,0.8), transparent)" }}
                  aria-hidden="true"
                />
                <p className="absolute bottom-3 left-3 text-canvas text-xs font-medium">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
