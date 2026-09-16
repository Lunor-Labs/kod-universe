import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Art & Prints - KoD Gallery",
  description:
    "Original artwork, art prints, digital illustrations and limited editions by KOD Universe. Each piece is created with intention and connected to a story.",
  alternates: { canonical: "/gallery/art" },
};

const artItems = galleryItems.filter((item) =>
  ["BRANDING & IDENTITY", "CREATIVE WORK"].includes(item.category),
);

export default function GalleryArtPage() {
  return (
    <main className="relative bg-canvas overflow-hidden">
      <section
        className="relative bg-earth min-h-[60vh] flex items-end pb-16 pt-40 overflow-hidden"
        aria-label="Art gallery hero"
      >
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <Image
            src="/gallery/art.png"
            alt="Art Hero"
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
          <p className="eyebrow text-clay mb-4">KOD GALLERY / ART</p>
          <h1 className="heading-hero text-canvas mb-4">
            Original Art{" "}
            <em className="font-serif italic font-normal">& Prints.</em>
          </h1>
          <p className="text-lead text-canvas/75 max-w-xl">
            Artwork, prints and digital illustrations created by KoD - each
            piece rooted in story, process and intention.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Art collection">
        <div className="container-site">
          <div className="flex items-center justify-between mb-10">
            <div>
              <SectionLabel>Art Collection</SectionLabel>
              <p className="text-body text-kod-earth/70 mt-1">
                Original Artwork • Art Prints • Digital Art • Limited Editions
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-secondary hidden md:flex !h-11 !px-5"
            >
              <span>Commission a Piece</span>
              <span className="btn-badge !w-7 !h-7">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {artItems.map((item) => (
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
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-earth/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-xs text-clay mb-1">{item.category}</p>
                    <p className="text-sm font-semibold text-canvas">
                      {item.title}
                    </p>
                    {item.projectSlug && (
                      <Link
                        href={`/work/${item.projectSlug}`}
                        className="text-xs text-signal-orange mt-1 inline-flex items-center gap-1"
                      >
                        View Project <ArrowRight size={10} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-body text-kod-earth/60 mb-4">
              Looking for something specific or want a custom commission?
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Get in Touch</span>
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
