import type { Metadata } from "next";
import { HeroSection } from "@/features/home/HeroSection";
import { ShowreelSection } from "@/features/home/ShowreelSection";
import { RadicalSceneSection } from "@/features/home/RadicalSceneSection";
import { FeaturedProjects } from "@/features/home/FeaturedProjects";
import { ServicesOverview } from "@/features/home/ServicesOverview";
import { WhyUsSection } from "@/features/home/WhyUsSection";
import { ProcessSection } from "@/features/home/ProcessSection";
import { ImpactStats } from "@/features/home/ImpactStats";
import { InfoCards } from "@/features/home/InfoCards";
import { Testimonials } from "@/features/home/Testimonials";
import { ContactCTA } from "@/features/home/ContactCTA";
import { FAQSection } from "@/features/home/FAQSection";
import { MasonryGallerySection } from "@/features/home/MasonryGallerySection";
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
    <main className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 top-[100vh] -z-10 pointer-events-none opacity-40">
        <Image
          src="/main/Wall-main-image-04.png"
          alt=""
          fill
          className="object-contain object-top "
          priority
        />
        {/* <Image
          src="/main/cave-small-items.webp"
          alt=""
          fill
          className="object-contain object-bottom opacity-30"
          priority
        /> */}
      </div>
      <div className="relative z-10">
        <HeroSection />
        <FeaturedProjects projects={projects} />
        <ServicesOverview />

        <ProcessSection />
        {/* <ImpactStats /> */}
        <ShowreelSection />
        <InfoCards featuredProject={featuredProject} projects={projects} />
        <MasonryGallerySection />
        {/* <RadicalSceneSection /> */}
        <Testimonials />
        <WhyUsSection />
        <FAQSection />
        <ContactCTA />
      </div>
      {/* <DecorativeBlossoms /> */}
    </main>
  );
}
