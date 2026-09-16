import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Merch & Objects - KoD Gallery",
  description:
    "KoD branded merchandise - apparel, t-shirts, posters, creative objects and accessories extending the KOD Universe into tangible, wearable items.",
  alternates: { canonical: "/gallery/merch" },
};

const merchItems = galleryItems.filter(
  (item) =>
    item.category === "BRANDING & IDENTITY" ||
    item.projectSlug?.includes("pissu-kanna") ||
    item.projectSlug?.includes("kaiz"),
);

const merchCategories = [
  {
    label: "Apparel",
    description: "T-shirts, hoodies, and wearable pieces from KoD.",
  },
  {
    label: "Posters",
    description: "Art prints and graphic posters from the studio.",
  },
  {
    label: "Creative Objects",
    description: "One-of-a-kind objects with a KoD story.",
  },
  {
    label: "Accessories / Collectibles",
    description: "Hats, bags, and collectible items.",
  },
];

export default function GalleryMerchPage() {
  return (
    <main className="relative bg-canvas overflow-hidden">
      <section
        className="relative bg-earth min-h-[60vh] flex items-end pb-16 pt-40 overflow-hidden"
        aria-label="Merch gallery hero"
      >
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <Image
            src="/gallery/merch.png"
            alt="Merch & Objects Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-kod-canvas/90 via-kod-canvas/60 to-transparent md:w-1/2"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-canvas via-canvas/40 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />
        <div className="container-site relative z-10">
          <p className="eyebrow text-clay mb-4">KOD GALLERY / MERCH</p>
          <h1 className="heading-hero text-canvas mb-4">
            Merch <em className="font-serif italic font-normal">& Objects.</em>
          </h1>
          <p className="text-lead text-canvas/75 max-w-xl">
            Apparel, creative objects and accessories that carry the KoD
            universe - things people actually want to own and wear.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Merch categories">
        <div className="container-site">
          <SectionLabel>What&apos;s Available</SectionLabel>
          <h2 className="heading-section text-earth mt-2 mb-10">
            Wearable{" "}
            <em className="font-serif italic font-normal">creativity.</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {merchCategories.map((cat) => (
              <div
                key={cat.label}
                className="bg-white rounded-sm p-6 border border-border-warm"
              >
                <div className="w-2 h-2 rounded-full bg-signal-orange mb-4" />
                <h3 className="heading-item text-earth mb-2">{cat.label}</h3>
                <p className="text-body text-kod-earth/70">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {merchItems.slice(0, 9).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-sm overflow-hidden bg-earth break-inside-avoid"
              >
                <div
                  className={`relative w-full ${item.aspectClass ?? "aspect-square"}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-semibold text-canvas">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-earth rounded-sm p-10 text-center">
            <p className="eyebrow text-clay mb-3">CUSTOM MERCH</p>
            <h3 className="heading-card text-canvas mb-4">
              Want branded merch for your brand?
            </h3>
            <p className="text-body text-canvas/70 max-w-md mx-auto mb-6">
              We design and produce custom merchandise for brands through KoD
              Creative. Apparel, packaging and creative objects - all tell your
              brand story.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Start a Merch Project</span>
              <span className="btn-badge">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
