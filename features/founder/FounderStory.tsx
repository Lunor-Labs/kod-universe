import { Sparkles, Heart, Compass, GraduationCap, Palette, Shirt, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FounderStory() {
  const chapters = [
    {
      icon: Sparkles,
      era: "Origins · Grade 10 Experiments",
      title: "Artistic Experiments & Maths Stream Curiosity",
      description:
        "Ishara’s creative fascination began during Grade 10 at Walasmulla National School. While studying in the Advanced Level Mathematics stream, evenings were dedicated to exploring digital media, provincial educational software competitions, and visual art. What started as pure personal curiosity earned provincial software awards in 2008, 2009, and 2010, alongside the President's Scout Parchment Award in 2011.",
    },
    {
      icon: GraduationCap,
      era: "2014 · Professional Career Launch",
      title: "Graphic Designer & Film Academic Foundation",
      description:
        "In 2014, Ishara officially entered the creative industry as a professional Graphic Designer. To deepen his interdisciplinary craft, he earned a Bachelor of Arts in Film & Television from the University of Kelaniya and a Diploma in 3D Animation & VFX at Teleview Academy, integrating cinematic storytelling, spatial geometry, and art direction into his work.",
    },
    {
      icon: Compass,
      era: "Industry Direction · Iraj Productions & Beyond",
      title: "Freelance Art Direction to Commercial Director",
      description:
        "His experience expanded into freelance Art Direction with Iraj Productions, producing high-impact visual productions, music videos, and pop culture media. Today, his commercial and concept direction bridges advertising campaigns, comprehensive brand transformations, and narrative worldbuilding across global and local brands.",
    },
    {
      icon: Palette,
      era: "Fine Art Practice · Beyond Commercial Projects",
      title: "Digital Paintings & Canvas Art",
      description:
        "Beyond client and commercial work, Ishara maintains an active personal fine art practice spanning digital paintings and traditional canvas paintings. These personal explorations of light, atmosphere, and mythology directly inspire and fuel his wider approach to visual storytelling.",
    },
  ];

  const ventures = [
    {
      name: "KOD Universe",
      role: "Founder & Creative Director",
      tagline: "Creative Agency & Artist-Led Platform",
      description:
        "Founded to bring ideas to life across creative strategy, branding, packaging, marketing campaigns, and visual storytelling—while hosting an independent gallery platform connecting artists and audiences.",
      linkText: "Explore KOD Universe",
      href: "/about-us",
    },
    {
      name: "Rouka Clothing",
      role: "Founder & Creative Director",
      tagline: "Fashion, Sustainable Apparel & Streetwear",
      description:
        "An independent founded label connecting contemporary design direction into mindful fashion, limited-edition apparel, and wearable creative expression.",
      linkText: "Discover Rouka",
      href: "/portfolio/rouka-brand-identity",
    },
  ];

  return (
    <section
      className="section-padding bg-kod-mist relative overflow-hidden"
      aria-label="Ishara Kodithuwakku personal story from Grade 10 to now"
    >
      <div className="container-site relative z-10 space-y-16 sm:space-y-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-kod-border/80 shadow-xs">
          <span className="eyebrow text-kod-orange mb-3 block">
            Founder Profile &amp; Biography
          </span>
          <h2 className="heading-section text-kod-earth mb-8">
            Multidisciplinary Direction Rooted in Authentic Craft
          </h2>

          <div className="text-kod-earth/85 text-base sm:text-lg leading-relaxed space-y-5">
            <p>
              Ishara Kodithuwakku is a multidisciplinary creative professional,
              visual artist, Concept Artist, Commercial Director, and founder of
              KOD Universe and Rouka Clothing.
            </p>
            <p>
              His creative journey began with an interest in art and design
              during Grade 10. He entered the industry professionally as a
              Graphic Designer in 2014 and later broadened his experience
              through freelance Art Direction with Iraj Productions, concept
              development, advertising, and commercial direction.
            </p>
            <p>
              Across his professional career, Ishara has contributed to
              projects involving more than 70 local and international brands,
              building experience in branding, graphic design, campaigns,
              visual storytelling, and commercial productions. The 24 logos shown
              on the website represent selected brands from this wider career
              experience, not an exhaustive list of KOD Universe agency clients.
            </p>
            <p>
              Beyond commercial projects, his artistic practice includes digital
              painting and traditional canvas painting. These creative
              explorations inform his approach to visual storytelling and
              original concepts.
            </p>
            <p>
              Through KOD Universe, he develops creative brand experiences while
              supporting a wider art-driven platform for artists and audiences.
              Through Rouka Clothing, he extends his creative direction into
              fashion and apparel. Together, these ventures reflect his belief in
              bringing imagination to life across design, art, film, fashion, and
              commerce.
            </p>
          </div>
        </div>

        <div>
          <div className="max-w-3xl mb-8">
            <span className="eyebrow text-kod-orange mb-2 block">
              Founded Ventures
            </span>
            <h3 className="font-metropolis font-bold text-2xl sm:text-3xl text-kod-earth">
              Two Distinct Expressions of Creative Vision
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ventures.map((v) => (
              <div
                key={v.name}
                className="bg-white rounded-2xl p-7 sm:p-9 border border-kod-border/80 shadow-xs flex flex-col justify-between hover:border-kod-orange/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-kod-orange">
                    {v.role}
                  </span>
                  <h4 className="font-metropolis font-bold text-2xl text-kod-earth mt-1 mb-2">
                    {v.name}
                  </h4>
                  <p className="font-editorial italic text-base text-kod-clay mb-4">
                    {v.tagline}
                  </p>
                  <p className="text-body text-kod-earth/80 text-sm sm:text-base leading-relaxed mb-6">
                    {v.description}
                  </p>
                </div>
                <Link
                  href={v.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-kod-earth hover:text-kod-orange transition-colors"
                >
                  <span>{v.linkText}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="max-w-3xl mb-10">
            <span className="eyebrow text-kod-orange mb-2 block">
              The Evolution
            </span>
            <h3 className="font-metropolis font-bold text-2xl sm:text-3xl text-kod-earth">
              From Early Curiosity to Multi-Hyphenate Practice
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {chapters.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 sm:p-10 border border-kod-border/80 shadow-xs hover:border-kod-clay/60 hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="text-xs font-semibold tracking-widest uppercase text-kod-clay font-metropolis">
                        {ch.era}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-kod-canvas border border-kod-border flex items-center justify-center text-kod-clay group-hover:bg-kod-clay group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h4 className="font-metropolis font-bold text-xl sm:text-2xl text-kod-earth mb-4 leading-snug">
                      {ch.title}
                    </h4>

                    <p className="text-body text-kod-earth/80 text-base leading-relaxed">
                      {ch.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-kod-border/60 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-kod-text-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-kod-orange" />
                    <span>Phase 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-kod-canvas border border-kod-border text-center max-w-4xl mx-auto shadow-xs">
          <p className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-kod-earth leading-snug mb-4">
            &ldquo;When a hobby becomes a lifelong calling, the work never
            feels tiring. Bringing others’ creative visions to life fuels my
            passion.&rdquo;
          </p>
          <p className="font-metropolis font-bold text-sm tracking-widest uppercase text-kod-clay">
            - Ishara Kodithuwakku
          </p>
        </div>
      </div>
    </section>
  );
}
