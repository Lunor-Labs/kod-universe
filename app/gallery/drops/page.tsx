import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Limited Drops - KoD Gallery",
  description:
    "KoD Gallery limited releases, seasonal collections, artist collaborations and KoD Originals. Available for a moment, gone forever.",
  alternates: { canonical: "/gallery/drops" },
};

const dropCategories = [
  {
    label: "Limited Releases",
    description:
      "One-off pieces, numbered editions and time-sensitive releases.",
    badge: "DROPS",
  },
  {
    label: "Seasonal Collections",
    description:
      "Curated collections tied to seasons, moments and cultural events.",
    badge: "SEASONAL",
  },
  {
    label: "Artist Collaborations",
    description:
      "Co-created pieces with artists, designers and cultural figures.",
    badge: "COLLAB",
    id: "collabs",
  },
  {
    label: "KoD Originals",
    description:
      "House-created pieces that come from the KoD creative studio directly.",
    badge: "ORIGINAL",
  },
];

const comingSoonDrops = [
  {
    id: "drop-001",
    title: "KoD × Studio - Drop 001",
    description:
      "The first official KoD Gallery drop. Limited to 50 pieces. Date TBA.",
    tag: "UPCOMING DROP",
    image: "/portfolio/digital-art/digital-art-1.webp",
    status: "coming-soon",
  },
  {
    id: "pissu-kanna-collab",
    title: "Pissu Kanna Streetwear - Collab",
    description:
      "The irreverent street mascot meets KoD design. Apparel and collectibles.",
    tag: "COLLABORATION",
    image: "/portfolio/pissu-kanna/mock.webp",
    status: "coming-soon",
  },
  {
    id: "ibiza-print-series",
    title: "IBIZA Mirissa - Architecture Print Series",
    description:
      "Architectural photography and 3D renders from the IBIZA Mirissa project, printed on archival paper.",
    tag: "ART PRINT",
    image: "/portfolio/digital-art/digital-art-3.webp",
    status: "coming-soon",
  },
];

export default function GalleryDropsPage() {
  return (
    <main className="relative bg-canvas overflow-hidden">
      <section
        className="relative bg-earth min-h-[65vh] flex items-end pb-16 pt-40 overflow-hidden"
        aria-label="Drops hero"
      >
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <Image
            src="/gallery/drops.png"
            alt="Limited Drops Hero"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
        <div className="container-site relative z-10">
          <p className="eyebrow text-clay mb-4">KOD GALLERY / DROPS</p>
          <h1 className="heading-hero text-canvas mb-4">
            Limited <em className="font-serif italic font-normal">Drops.</em>
          </h1>
          <p className="text-lead text-canvas/75 max-w-xl">
            Available for a moment, gone forever. Limited releases, seasonal
            collections, artist collaborations and KoD Originals.
          </p>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-canvas via-canvas/40 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />
      </section>

      <section className="section-padding" aria-label="Drop categories">
        <div className="container-site">
          <SectionLabel>Drop Categories</SectionLabel>
          <h2 className="heading-section text-earth mt-2 mb-10">
            Four ways to{" "}
            <em className="font-serif italic font-normal">collect KoD.</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {dropCategories.map((cat) => (
              <div
                key={cat.label}
                id={cat.id}
                className="bg-white rounded-sm p-6 border border-border-warm hover:border-signal-orange transition-colors group"
              >
                <span className="text-xs font-bold tracking-widest text-signal-orange uppercase mb-4 block">
                  {cat.badge}
                </span>
                <h3 className="heading-item text-earth mb-3 group-hover:text-signal-orange transition-colors">
                  {cat.label}
                </h3>
                <p className="text-body text-kod-earth/70">{cat.description}</p>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Clock size={16} className="text-signal-orange" />
              <h2 className="heading-card text-earth">Upcoming Drops</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comingSoonDrops.map((drop) => (
                <div
                  key={drop.id}
                  id={drop.id}
                  className="group relative rounded-sm overflow-hidden bg-earth aspect-[4/5] flex flex-col justify-end"
                >
                  <Image
                    src={drop.image}
                    alt={drop.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth/95 via-earth/30 to-transparent" />

                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-bold tracking-widest uppercase bg-earth/80 backdrop-blur-sm text-clay px-3 py-1.5 rounded-full border border-clay/30">
                      Coming Soon
                    </span>
                  </div>

                  <div className="relative z-10 p-6">
                    <span className="eyebrow text-clay mb-2 block text-xs">
                      {drop.tag}
                    </span>
                    <h3 className="heading-item text-canvas mb-2">
                      {drop.title}
                    </h3>
                    <p className="text-body text-canvas/65 line-clamp-2">
                      {drop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-earth rounded-sm p-10 md:p-14 text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="eyebrow text-clay mb-4">DON&apos;T MISS A DROP</p>
              <h2 className="heading-section text-canvas mb-4">
                Be first to{" "}
                <em className="font-serif italic font-normal">know.</em>
              </h2>
              <p className="text-lead text-canvas/70 max-w-lg mx-auto mb-8">
                Limited drops sell out fast. Follow KoD on social or reach out
                to get on our early access list.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/kod.universe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Follow on Instagram</span>
                  <span className="btn-badge">
                    <ArrowRight size={13} />
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary !h-14 !px-8 !text-canvas !border-canvas/50 hover:!border-canvas hover:!bg-canvas hover:!text-earth"
                >
                  <span>Early Access List</span>
                  <span className="btn-badge">
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
