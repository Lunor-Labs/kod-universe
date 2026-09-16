import type { Metadata } from "next";
import { HeroSection } from "@/features/home/HeroSection";
import { ShowreelSection } from "@/features/home/ShowreelSection";
import { ServicesOverview } from "@/features/home/ServicesOverview";
import { StudioSection } from "@/features/home/StudioSection";
import { WhyUsSection } from "@/features/home/WhyUsSection";
import { InfoCards } from "@/features/home/InfoCards";
import { Testimonials } from "@/features/home/Testimonials";
import { ContactCTA } from "@/features/home/ContactCTA";
import { FAQSection } from "@/features/home/FAQSection";
import { MasonryGallerySection } from "@/features/home/MasonryGallerySection";
import { projects, getFeaturedProject } from "@/data/projects";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { ProcessSection } from "@/features/home/ProcessSection";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },
};

export default function HomePage() {
  const featuredProject = getFeaturedProject();

  return (
    <main className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 top-[100vh] -z-10 pointer-events-none opacity-40">
        <Image
          src="/main/our-universe-cave.png"
          alt=""
          fill
          className="object-cover object-top opacity-30 mix-blend-multiply"
          priority
        />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <ServicesOverview />
        <StudioSection projects={projects} />
        <MasonryGallerySection />
        {/* <ShowreelSection /> */}
        {/* <InfoCards featuredProject={featuredProject} projects={projects} /> */}

        <WhyUsSection />
        <ProcessSection />
        {/* <Testimonials /> */}
        {/* <FAQSection /> */}
        <ContactCTA />
      </div>
    </main>
  );
}
