import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectGrid } from "@/features/work/ProjectGrid";
import { projects, getFeaturedProject } from "@/data/projects";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "Explore KOD Universe's portfolio of branding, social media, packaging, and digital experience projects.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const featuredProject = getFeaturedProject();

  return (
    <main className="relative bg-canvas overflow-hidden">
      <div className="relative z-10">
        <section
          className="relative overflow-hidden bg-earth flex items-center justify-center min-h-[70vh] pt-32 pb-20"
          aria-label="Portfolio page hero"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/main/work-hero.jpg"
              alt="KOD Universe Selected Works"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="container-site relative z-10">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-black mb-5">
              Seeds of ideas. Forged on earth.
            </p>
            <h1 className="font-metropolis font-semibold text-black text-display-xl mb-6 leading-tight">
              Selected Works.
            </h1>
            <p className="text-black text-base leading-relaxed max-w-md mb-10">
              Ideas have energy. We transform them into visual stories that
              connect, inspire, and leave a lasting mark.
            </p>
            <Link href="/connect" className="btn-primary">
              <span>Start a project</span>
              <span className="btn-badge">
                <ArrowRight size={13} aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div
            className="absolute -bottom-1 left-0 w-full h-48 bg-gradient-to-t from-canvas via-canvas/30 to-transparent pointer-events-none z-20"
            aria-hidden="true"
          />
        </section>

        <section className="section-padding" aria-label="Portfolio projects">
          <ProjectGrid projects={projects} featuredProject={featuredProject} />
        </section>
      </div>
      <DecorativeBlossoms />
    </main>
  );
}
