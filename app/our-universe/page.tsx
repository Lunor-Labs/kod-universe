import type { Metadata } from "next";
import { OurUniverseHero } from "@/features/our-universe/OurUniverseHero";
import { CorePillars } from "@/features/our-universe/CorePillars";
import { TheJourney } from "@/features/our-universe/TheJourney";
import { OurUniverseCTA } from "@/features/our-universe/OurUniverseCTA";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "We Are Messengers of Creative Forces. The story, origin, mission, philosophy, and creative journey behind KOD Universe.",
  alternates: { canonical: "/our-universe" },
};

export default function OurUniversePage() {
  return (
    <div className="bg-canvas text-earth">
      <OurUniverseHero />
      <CorePillars />
      <TheJourney />
      <OurUniverseCTA />
    </div>
  );
}
