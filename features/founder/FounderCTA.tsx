import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export function FounderCTA() {
  return (
    <section
      className="section-padding bg-kod-canvas relative overflow-hidden"
      aria-label="Connect with Ishara Kodithuwakku"
    >
      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow text-kod-orange mb-3 block">
            Start a Conversation
          </span>

          <h2 className="heading-section text-kod-earth mb-6">
            Let&apos;s Create Something Lasting Together
          </h2>

          <p className="text-body text-kod-earth/80 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are establishing a new brand identity, conceptualizing
            spatial architecture, or exploring creative direction for your next
            major milestone, every great collaboration begins with an honest
            dialogue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
            <Link href="/contact-us" className="btn-primary">
              <span>Discuss Your Project</span>
              <span className="btn-badge">
                <ArrowRight size={13} aria-hidden="true" />
              </span>
            </Link>

            <a
              href="https://www.linkedin.com/in/ishara-kod/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-kod-border bg-white text-kod-earth font-metropolis font-semibold text-sm uppercase tracking-wider hover:border-kod-clay hover:text-kod-clay transition-all shadow-xs group"
            >
              <LinkedinIcon size={16} />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="pt-8 border-t border-kod-border/80 flex flex-wrap items-center justify-center gap-6 text-sm text-kod-text-2 font-medium">
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-kod-clay" />
              <a
                href="mailto:hello@koduniverse.com"
                className="hover:text-kod-earth transition-colors"
              >
                hello@koduniverse.com
              </a>
            </div>
            <span>•</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ishara-kod/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ishara on LinkedIn"
                className="hover:text-kod-clay transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/kod.universe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KOD Universe on Instagram"
                className="hover:text-kod-clay transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/kod.universe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KOD Universe on Facebook"
                className="hover:text-kod-clay transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
