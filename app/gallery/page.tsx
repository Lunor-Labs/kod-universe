import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "KoD Gallery — Art, Merch & Limited Drops",
  description:
    "KoD Gallery is an independent creative-commercial world inside KOD Universe. Original art, prints, merchandise, apparel and limited edition drops.",
  alternates: { canonical: "/gallery" },
};

const galleryCategories = [
  {
    id: "art",
    title: "Art",
    description:
      "Original artwork, prints, digital art and limited editions — created by KoD.",
    image: "/gallery/art.png",
    tags: ["Originals", "Prints", "Digital Art"],
  },
  {
    id: "merch",
    title: "Merch",
    description:
      "Apparel, t-shirts, posters, creative objects and accessories carrying the KoD universe.",
    image: "/gallery/merch.png",
    tags: ["Apparel", "Objects", "Accessories"],
  },
  {
    id: "drops",
    title: "Drops",
    description:
      "Limited releases, seasonal collections, artist collaborations and KoD originals — available for a moment, gone forever.",
    image: "/gallery/drops.png",
    tags: ["Limited Releases", "Collabs", "KoD Originals"],
  },
];

export default function GalleryPage() {
  return (
    <main className="relative bg-canvas overflow-hidden">
      <section
        className="relative bg-earth overflow-hidden texture-cave flex items-center justify-center min-h-[90vh]"
        aria-label="Gallery page hero"
      >
        <div className="absolute inset-0 scale-105 " aria-hidden="true">
          <Image
            src="/main/our-work.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-kod-canvas/90 via-kod-canvas/60 to-transparent md:w-1/2"
            aria-hidden="true"
          />
        </div>

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-clay mb-5">KOD UNIVERSE / GALLERY</p>
              <h1 className="heading-hero text-kod-earth mb-6">
                Art + Commerce.{" "}
                <em className="font-serif italic font-normal text-kod-earth">
                  A Creative World.
                </em>
              </h1>
              <p className="text-lead text-kod-earth max-w-sm mb-10">
                An independent creative-commercial destination. Original pieces,
                limited drops, and objects that tell a story.
              </p>
              <Link href="#gallery-collections" className="btn-primary">
                <span>Explore the collections</span>
                <span className="btn-badge">
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-canvas via-canvas/40 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />
      </section>
      <section
        id="gallery-collections"
        className="py-20 lg:py-32 bg-canvas"
        aria-label="Gallery Collections"
      >
        <div className="container-site space-y-8 md:space-y-16">
          {galleryCategories.map((category, index) => (
            <ScrollReveal
              key={category.id}
              variant="up"
              className="relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div
                  className={`lg:col-span-6 h-[300px] lg:h-[400px] w-full relative overflow-hidden rounded bg-earth shadow-xl ${index % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain object-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${index % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <h2 className="text-6xl md:text-7xl font-bold text-earth tracking-tight mb-8 group-hover:text-signal-orange transition-colors duration-500">
                    {category.title}
                  </h2>

                  <p className="text-xl md:text-2xl text-kod-earth/80 mb-12 leading-relaxed max-w-lg">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {category.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm font-bold uppercase tracking-widest px-4 py-2 bg-white border border-border-warm text-earth/60 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/gallery/${category.id}`}
                    className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-earth group-hover:text-signal-orange transition-colors"
                  >
                    <span>View {category.title} Gallery</span>
                    <span className="w-14 h-14 rounded-full border border-earth/20 flex items-center justify-center group-hover:border-signal-orange group-hover:bg-signal-orange group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section
        className="section-padding-bottom"
        aria-label="Gallery Call to Action"
      >
        <div className="container-site">
          <div className="bg-earth rounded-sm p-12 md:p-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <SectionLabel>Collaborate & Commission</SectionLabel>
              <h3 className="text-5xl md:text-6xl text-canvas mb-8 leading-tight mt-6">
                Art that lives{" "}
                <em className="font-serif italic font-normal text-clay">
                  beyond the screen.
                </em>
              </h3>
              <p className="text-lg text-canvas/70 mb-12 max-w-lg mx-auto">
                Looking for a bespoke creation or interested in our latest
                drops? Step into the studio and let's collaborate.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/gallery/drops" className="btn-primary !h-14 !px-8">
                  <span>See Latest Drops</span>
                  <span className="btn-badge">
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary !h-14 !px-8 !text-canvas !border-canvas/50 hover:!border-canvas hover:!bg-canvas hover:!text-earth"
                >
                  <span>Commission a Piece</span>
                  <span className="btn-badge !border-current !text-current">
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DecorativeBlossoms />
    </main>
  );
}
