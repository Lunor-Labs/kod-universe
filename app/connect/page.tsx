import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Target,
  Package,
  Zap,
  BarChart,
  Link2,
  Sun,
  ArrowRight,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { ContactForm } from "@/features/contact/ContactForm";
import { siteConfig, services } from "@/data/site";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Start a project with KOD Universe. Share your goals and let's explore how we can create something extraordinary together.",
  alternates: { canonical: "/connect" },
};

const contactIcons: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  ExternalLink,
};

const serviceIcons = [Target, Package, Zap, BarChart];

export default function ConnectPage() {
  return (
    <div className="relative min-h-screen bg-canvas overflow-hidden pt-32 pb-24 text-earth">
      <div
        className="absolute left-0 top-0 bottom-0 w-[50%] pointer-events-none mix-blend-multiply opacity-30"
        style={{
          maskImage: "linear-gradient(to right, black 20%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, black 20%, transparent)",
        }}
      >
        <Image
          src="/project-origins.jpg"
          alt=""
          fill
          className="object-cover object-left"
        />
      </div>
      <div
        className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none mix-blend-multiply opacity-25"
        style={{
          maskImage: "linear-gradient(to left, black 20%, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black 20%, transparent)",
        }}
      >
        <Image
          src="/project-cosmic.jpg"
          alt=""
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="container-site relative z-10">
        <div className="text-center mb-14 mt-8">
          <p className="eyebrow mb-6">WE&apos;D LOVE TO HEAR FROM YOU.</p>
          <h1 className="font-editorial text-5xl md:text-6xl text-earth mb-6 leading-[1.1]">
            Let&apos;s Create
            <br />
            Something <em className="italic font-normal">Extraordinary.</em>
          </h1>
          <p className="text-secondary text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Whether you have a bold idea, a complex challenge,
            <br className="hidden md:block" />
            or just want to explore possibilities—our team is here to help.
            <br />
            <strong className="font-bold text-earth block mt-3">
              We turn ideas into meaningful impact.
            </strong>
          </p>
        </div>
        <div className="bg-white/80 backdrop-blur-md border border-border-warm rounded-2xl shadow-sm overflow-hidden mb-12 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-2 md:p-6 border-b lg:border-b-0 lg:border-r border-border-warm flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-signal-orange text-white flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  <h2 className="eyebrow mb-0">CONTACT INFORMATION</h2>
                </div>
                <ul className="space-y-4 text-sm text-secondary pl-11">
                  <li className="flex items-center gap-3">
                    <Mail size={16} className="text-secondary/60" />
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-signal-orange transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="text-secondary/60" />
                    <div className="flex flex-col gap-1">
                      {siteConfig.contact.phones.map((phone) => (
                        <a
                          key={phone.number}
                          href={`tel:${phone.number.replace(/\D/g, "")}`}
                          className="hover:text-signal-orange transition-colors"
                        >
                          {phone.number}
                          <span className="text-secondary ml-2 text-xs opacity-70">({phone.region})</span>
                        </a>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 text-secondary/60" />
                    <div className="flex flex-col gap-1">
                      {siteConfig.contact.locations.map((loc) => (
                        <p key={loc}>{loc}</p>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="h-px bg-border-warm w-full" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-signal-orange text-white flex items-center justify-center">
                    <Link2 size={14} />
                  </div>
                  <h2 className="eyebrow mb-0">LET&apos;S CONNECT</h2>
                </div>
                <div className="flex items-center gap-3 pl-11">
                  {siteConfig.socialLinks.map((link) => {
                    const Icon = contactIcons[link.iconName] ?? ExternalLink;
                    return (
                      <a
                        key={link.platform}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${siteConfig.name} on ${link.platform}`}
                        className="w-10 h-10 rounded-full border border-border-warm flex items-center justify-center text-earth hover:border-signal-orange hover:text-signal-orange transition-colors bg-white/50"
                      >
                        <Icon size={14} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-border-warm w-full" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-signal-orange text-white flex items-center justify-center">
                    <Sun size={14} />
                  </div>
                  <h2 className="eyebrow mb-0">COLLABORATIONS WELCOME</h2>
                </div>
                <div className="pl-11">
                  <p className="text-secondary text-sm leading-relaxed mb-3">
                    We partner with visionary brands, founders, and
                    organizations to craft work that inspires, connects, and
                    lasts.
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-signal-orange hover:text-earth transition-colors"
                  >
                    Let&apos;s build something great together.
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 p-8 md:p-10 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md border border-border-warm rounded-2xl shadow-sm p-8 mx-auto mb-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-border-warm w-16" />
            <p className="eyebrow mb-0">HOW WE CAN HELP</p>
            <div className="h-px bg-border-warm w-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {services.slice(0, 4).map((service, idx) => {
                const Icon = serviceIcons[idx];
                return (
                  <div
                    key={service.title}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full border border-border-warm flex items-center justify-center mb-3 bg-white/50 text-signal-orange">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-metropolis font-bold text-sm uppercase tracking-wider text-earth mb-2 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="hidden md:block md:col-span-1 border-l border-dashed border-border-warm h-24 mx-auto" />

            <div className="md:col-span-4 flex items-center justify-between">
              <div>
                <p className="eyebrow mb-3">OFFICE DETAILS</p>
                <p className="text-sm text-secondary leading-relaxed mb-3">
                  {siteConfig.name}
                  <br />
                  {siteConfig.contact.locations[0]}
                  <br />
                  United States
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-signal-orange hover:text-earth transition-colors"
                >
                  View on Map
                  <div className="w-5 h-5 rounded-full border border-signal-orange flex items-center justify-center">
                    <ArrowRight size={12} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
