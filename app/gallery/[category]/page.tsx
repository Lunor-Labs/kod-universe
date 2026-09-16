import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { galleryItems, galleryCategoryConfigs } from "@/data/gallery";

interface GalleryCategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: "art" },
    { category: "merch" },
    { category: "drops" },
  ];
}

export async function generateMetadata({ params }: GalleryCategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const config = galleryCategoryConfigs[resolvedParams.category];
  if (!config) return {};

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: `/gallery/${config.slug}` },
  };
}

export default async function DynamicGalleryCategoryPage({ params }: GalleryCategoryPageProps) {
  const resolvedParams = await params;
  const config = galleryCategoryConfigs[resolvedParams.category];

  if (!config) {
    notFound();
  }

  const filteredItems = galleryItems.filter((item) => {
    if (config.slug === "art") {
      return ["BRANDING & IDENTITY", "CREATIVE WORK"].includes(item.category);
    }
    if (config.slug === "merch") {
      return (
        item.category === "BRANDING & IDENTITY" ||
        item.projectSlug?.includes("pissu-kanna") ||
        item.projectSlug?.includes("kaiz")
      );
    }
    return true;
  });

  return (
    <main className="relative bg-canvas overflow-hidden">
      <section
        className="relative bg-earth min-h-[60vh] flex items-end pb-16 pt-40 overflow-hidden"
        aria-label={`${config.title} hero`}
      >
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <Image
            src={config.heroImage}
            alt={config.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-canvas via-canvas/40 to-transparent pointer-events-none z-0"
          aria-hidden="true"
        />
        <div className="container-site relative z-10">
          <p className="eyebrow text-clay mb-4">{config.eyebrow}</p>
          <h1 className="heading-hero text-canvas mb-4">
            {config.title}{" "}
            <em className="font-serif italic font-normal">{config.titleItalic}</em>
          </h1>
          <p className="text-lead text-canvas/75 max-w-xl">
            {config.description}
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label={`${config.title} content`}>
        <div className="container-site">
          {config.subTitle && (
            <div className="flex items-center justify-between mb-10">
              <div>
                <SectionLabel>{config.title} Collection</SectionLabel>
                <p className="text-body text-kod-earth/70 mt-1">{config.subTitle}</p>
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
          )}

          {config.categories && (
            <div className="mb-16">
              <SectionLabel>Categories</SectionLabel>
              <h2 className="heading-section text-earth mt-2 mb-10">
                Four ways to{" "}
                <em className="font-serif italic font-normal">collect KoD.</em>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {config.categories.map((cat) => (
                  <div
                    key={cat.label}
                    id={cat.id}
                    className="bg-white rounded-sm p-6 border border-border-warm hover:border-signal-orange transition-colors group"
                  >
                    {cat.badge && (
                      <span className="text-xs font-bold tracking-widest text-signal-orange uppercase mb-4 block">
                        {cat.badge}
                      </span>
                    )}
                    <h3 className="heading-item text-earth mb-3 group-hover:text-signal-orange transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-body text-kod-earth/70">{cat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {config.comingSoonDrops && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Clock size={16} className="text-signal-orange" />
                <h2 className="heading-card text-earth">Upcoming Drops</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {config.comingSoonDrops.map((drop) => (
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
          )}

          {config.slug !== "drops" && (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 mb-16">
              {filteredItems.map((item) => (
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
                          href={`/portfolio/${item.projectSlug}`}
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
          )}

          <div className="bg-earth rounded-sm p-10 md:p-14 text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="eyebrow text-clay mb-4">KOD GALLERY</p>
              <h2 className="heading-section text-canvas mb-4">
                Want custom {config.title.toLowerCase()} for your brand?
              </h2>
              <p className="text-lead text-canvas/70 max-w-lg mx-auto mb-8">
                We design and produce custom artwork, apparel, and creative objects through KoD Creative.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <span>Get in Touch</span>
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
