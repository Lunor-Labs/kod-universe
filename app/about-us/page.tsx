import type { Metadata } from "next";
import { OurUniverseHero } from "@/features/our-universe/OurUniverseHero";
import { CorePillars } from "@/features/our-universe/CorePillars";
import { TheJourney } from "@/features/our-universe/TheJourney";
import { FounderPanel } from "@/features/our-universe/FounderPanel";
import { MasonryGallerySection } from "@/features/home/MasonryGallerySection";
import { OurUniverseCTA } from "@/features/our-universe/OurUniverseCTA";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "We Are Messengers of Creative Forces. The story, origin, mission, philosophy, and creative journey behind KOD Universe.",
  alternates: { canonical: "/about-us" },
};

export default function OurUniversePage() {
  return (
    <main className="relative bg-canvas overflow-hidden">
      <div className="relative z-10">
        <OurUniverseHero />
        <CorePillars />
        <TheJourney />
        <FounderPanel />
        <MasonryGallerySection />
        <OurUniverseCTA />
      </div>
      <DecorativeBlossoms />
    </main>
  );
}
