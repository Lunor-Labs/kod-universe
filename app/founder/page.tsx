import type { Metadata } from "next";
import { FounderHero } from "@/features/founder/FounderHero";
import { FounderStory } from "@/features/founder/FounderStory";
import { FounderAgencies } from "@/features/founder/FounderAgencies";
import { FounderBrands } from "@/features/founder/FounderBrands";
import { FounderEducation } from "@/features/founder/FounderEducation";
import { FounderCTA } from "@/features/founder/FounderCTA";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

export const metadata: Metadata = {
  title: "Ishara Kodithuwakku - Founder & Creative Director | KOD Universe",
  description:
    "Explore the personal journey, Grade 10 roots, agency leadership across Limra Holdings, Iraj Production, Hashtag, global brand collaborations, and education of Ishara Kodithuwakku, Founder of KOD Universe.",
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
