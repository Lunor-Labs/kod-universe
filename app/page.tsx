import type { Metadata } from "next";
import { HeroSection } from "@/features/home/HeroSection";
import { ShowreelSection } from "@/features/home/ShowreelSection";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { ServicesOverview } from "@/features/home/ServicesOverview";
import { ProcessSection } from "@/features/home/ProcessSection";
import { ImpactStats } from "@/features/home/ImpactStats";
import { InfoCards } from "@/features/home/InfoCards";
import { Testimonials } from "@/features/home/Testimonials";
import { ContactCTA } from "@/features/home/ContactCTA";
import { projects, getFeaturedProject } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const featuredProject = getFeaturedProject();

  return (
    <main className="relative bg-canvas overflow-hidden">
      <div className="relative z-10">
        <div className="absolute top-[50%] -left-[100px] w-[700px] h-[700px] pointer-events-none opacity-[0.12] mix-blend-multiply z-30 transform rotate-90">
          <Image
            src="/main/deco-2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <HeroSection />
        <FeaturedProjects projects={projects} />
        <ServicesOverview />
        <ProcessSection />
        <ImpactStats />
        <ShowreelSection />
        <InfoCards featuredProject={featuredProject} />
        <Testimonials />
        <ContactCTA />
      </div>
      <DecorativeBlossoms />
    </main>
  );
}
