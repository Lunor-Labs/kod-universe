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
      {/* Page hero */}
      <section
        className="relative overflow-hidden texture-cave bg-earth pt-32 pb-20"
        aria-label="Portfolio page hero"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(58,47,45,0.96) 0%, rgba(58,47,45,0.82) 60%, rgba(201,186,186,0.2) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Background hero image faded */}
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <Image src="/hero.jpg" alt="" fill className="object-cover" priority />
        </div>

        <div className="container-site relative z-10">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-dust-rose mb-5">
            Seeds of ideas. Forged on earth.
          </p>
          <h1 className="font-metropolis font-semibold text-canvas text-display-xl mb-6 leading-tight">
            Selected Works.
          </h1>
          <p className="text-dust-rose text-base leading-relaxed max-w-md mb-10">
            Ideas have energy. We transform them into visual stories that connect, inspire, and leave a lasting mark.
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 border border-dust-rose/60 text-canvas
                       px-6 py-3 rounded-sm text-sm font-medium tracking-wide
                       hover:border-signal-orange hover:text-signal-orange transition-all duration-200 group"
          >
            Start a project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Portfolio grid with filters */}
      <section className="py-12 md:py-16" aria-label="Portfolio projects">
        <ProjectGrid projects={projects} featuredProject={featuredProject} />
      </section>
      </div>
      <DecorativeBlossoms />
    </main>
  );
}
