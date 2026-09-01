import type { Metadata } from "next";
import { HeroSection } from "@/features/home/HeroSection";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { ServicesOverview } from "@/features/home/ServicesOverview";
import { ProcessSection } from "@/features/home/ProcessSection";
import { ImpactStats } from "@/features/home/ImpactStats";
import { InfoCards } from "@/features/home/InfoCards";
import { Testimonials } from "@/features/home/Testimonials";
import { ContactCTA } from "@/features/home/ContactCTA";
import { projects, getFeaturedProject } from "@/data/projects";
import { siteConfig } from "@/data/site";

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
    <>
      <HeroSection />
      <FeaturedProjects projects={projects} />
      <ServicesOverview />
      <ProcessSection />
      <ImpactStats />
      <InfoCards featuredProject={featuredProject} />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
