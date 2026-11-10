import type { Metadata } from "next";
import { FounderHero } from "@/features/founder/FounderHero";
import { FounderStory } from "@/features/founder/FounderStory";
import { FounderAgencies } from "@/features/founder/FounderAgencies";
import { FounderBrands } from "@/features/founder/FounderBrands";
import { FounderEducation } from "@/features/founder/FounderEducation";
import { FounderCTA } from "@/features/founder/FounderCTA";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

export const metadata: Metadata = {
  title: "Ishara Kodithuwakku - Creative Director, Concept Artist & Visual Artist | KOD Universe",
  description:
    "From graphic design and costume design to film production, commercial direction, creative consultation, script development, painting and independent fashion, Ishara Kodithuwakku has built a career around turning ideas into visual experiences.",
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
  return (
    <main className="relative bg-kod-canvas overflow-hidden">
      <div className="relative z-10">
        <FounderHero />
        <FounderStory />
        <FounderAgencies />
        <FounderBrands />
        <FounderEducation />
        <FounderCTA />
      </div>
      <DecorativeBlossoms />
    </main>
  );
}
