import type { Metadata } from "next";
import { HeroSection } from "@/features/home/HeroSection";
import { ServicesSection } from "@/features/home/ServicesSection";
import { WhyUsSection } from "@/features/home/WhyUsSection";
import { InfoCards } from "@/features/home/InfoCards";
import { Testimonials } from "@/features/home/Testimonials";
import { ContactCTA } from "@/features/home/ContactCTA";
import { FAQSection } from "@/features/home/FAQSection";
import { MasonryGallerySection } from "@/features/home/MasonryGallerySection";
import { GallerySection } from "@/features/home/GallerySection";
import { projects, getFeaturedProject } from "@/data/projects";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { ProcessSection } from "@/features/home/ProcessSection";
import { StudioSection } from "@/features/home/StudioSection";

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
      <div className="absolute inset-0 top-[80vh] -z-10 pointer-events-none">
        <Image
          src="/main/wall-main-image-04.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top opacity-50"
          priority
        />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <StudioSection projects={projects} />
        <GallerySection />
        {/* <MasonryGallerySection /> */}
        {/* <ShowreelSection /> */}
        {/* <InfoCards featuredProject={featuredProject} projects={projects} /> */}

        {/* <WhyUsSection /> */}
        <ProcessSection />
        {/* <Testimonials /> */}
        {/* <FAQSection /> */}
        <ContactCTA />
      </div>
    </main>
  );
}
