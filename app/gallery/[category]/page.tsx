import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { galleryCategoryConfigs } from "@/data/gallery";

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
            sizes="100vw"
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

          {/* Art Page Showcase: Cinematic Exhibition Image & Coming Soon */}
          {config.slug === "art" && (
            <div className="mb-16">
              <div className="relative rounded-2xl overflow-hidden border border-border-warm/60 bg-earth shadow-2xl">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                  <Image
                    src="/gallery/art-cinematic-exhibition.webp"
                    alt="KoD Gallery Cinematic Exhibition"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/30 to-transparent" />
                </div>

                <div className="p-8 sm:p-12 md:p-14 relative -mt-20 sm:-mt-28 z-10">
                  <div className="max-w-2xl bg-earth/95 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/10 shadow-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kod-orange/20 border border-kod-orange/40 w-fit mb-4">
                      <span className="w-2 h-2 rounded-full bg-kod-orange animate-pulse" />
                      <span className="text-xs font-metropolis font-bold tracking-widest uppercase text-kod-orange">
                        Coming Soon
                      </span>
                    </div>

                    <h2 className="heading-section text-canvas mb-3">
                      Original Artworks &{" "}
                      <em className="font-serif italic font-normal text-clay">Fine Prints.</em>
                    </h2>

                    <p className="text-body text-canvas/75 leading-relaxed mb-6">
                      Our inaugural exhibition of original fine art, sacred cave iconography, limited print editions, and digital masterpieces is currently undergoing archival preparation. Private collector preview opens soon.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link href="/contact" className="btn-primary !px-6 !py-3">
                        <span>Request Collector Preview</span>
                        <span className="btn-badge !w-6 !h-6">
                          <ArrowRight size={12} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Merch Page Showcase: Astral Collection Image & Coming Soon */}
          {config.slug === "merch" && (
            <div className="mb-16">
              <div className="relative rounded-2xl overflow-hidden border border-border-warm/60 bg-earth shadow-2xl">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/gallery/merch-astral-collection.webp"
                    alt="KoD Astral Merchandise Collection"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/30 to-transparent" />
                </div>

                <div className="p-8 sm:p-12 md:p-14 relative -mt-20 sm:-mt-28 z-10">
                  <div className="max-w-2xl bg-earth/95 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/10 shadow-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kod-orange/20 border border-kod-orange/40 w-fit mb-4">
                      <span className="w-2 h-2 rounded-full bg-kod-orange animate-pulse" />
                      <span className="text-xs font-metropolis font-bold tracking-widest uppercase text-kod-orange">
                        Coming Soon
                      </span>
                    </div>

                    <h2 className="heading-section text-canvas mb-3">
                      Astral Relics{" "}
                      <em className="font-serif italic font-normal text-clay">Apparel Capsule.</em>
                    </h2>

                    <p className="text-body text-canvas/75 leading-relaxed mb-6">
                      Heavyweight luxury streetwear, chiseled celestial stone hoodies, raw oversized tees, ceremonial caps, and tote bags. Wearable relics designed from the KoD visual universe. Limited inaugural drop arriving soon.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link href="/contact" className="btn-primary !px-6 !py-3">
                        <span>Join Drop Notification List</span>
                        <span className="btn-badge !w-6 !h-6">
                          <ArrowRight size={12} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Drops Page Showcase: Coming Soon Section (bottom images removed) */}
          {config.slug === "drops" && (
            <div className="mb-16">
              <div className="rounded-2xl border border-border-warm/60 bg-gradient-to-br from-earth via-earth to-[#1A1412] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,76,42,0.12)_0%,transparent_70%)] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kod-orange/20 border border-kod-orange/40 w-fit mb-6 mx-auto">
                    <Sparkles size={14} className="text-kod-orange" />
                    <span className="text-xs font-metropolis font-bold tracking-widest uppercase text-kod-orange">
                      Coming Soon · Drop 001
                    </span>
                  </div>

                  <h2 className="heading-section text-canvas mb-4">
                    The Vault is Preparing for{" "}
                    <em className="font-serif italic font-normal text-clay">Drop 001.</em>
                  </h2>

                  <p className="text-lead text-canvas/75 leading-relaxed mb-8">
                    KoD limited releases are time-gated, numbered ceremonial artifacts and artist collaborations that vanish once claimed. Public countdown and release details will be revealed exclusively to waitlist members.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="/contact" className="btn-primary !px-7 !py-3.5">
                      <span>Join Priority Waitlist</span>
                      <span className="btn-badge !w-7 !h-7">
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
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
