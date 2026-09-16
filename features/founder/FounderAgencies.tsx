import {
  Building2,
  Film,
  Hash,
  Compass,
  Shirt,
  Clapperboard,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export function FounderAgencies() {
  const experiences = [
    {
      company: "KoD (KOD Universe)",
      role: "Founder & Creative Director",
      period: "Dec 2018 - Present · 7+ yrs",
      location: "United Arab Emirates & Sri Lanka",
      icon: Compass,
      highlight:
        "Founded as an interdisciplinary creative powerhouse across the UAE and Sri Lanka.",
      description:
        "Directed social media strategy and brand transformation for major clients including Bio-Oil Sri Lanka, Coats Sri Lanka, and Hemas Pharmaceuticals. Conceptualized 3D architectural masterplans, luxury spatial interiors, packaging architectures, and directed commercials, costume designs, and video productions.",
      deliverables: [
        "Bio-Oil, Coats & Hemas Campaigns",
        "3D Spatial & Architectural Masterplans",
        "360 Brand & Packaging Architecture",
        "Commercial Direction & Production",
      ],
      tag: "Present",
    },
    {
      company: "ROUKA",
      role: "Founder & Creative Director",
      period: "Nov 2022 - Present · 3+ yrs",
      location: "Colombo, Sri Lanka",
      icon: Shirt,
      highlight:
        "Sustainable fashion, nature-inspired apparel, and 360 brand craftsmanship.",
      description:
        "Built ROUKA from the ground up: brand ethos, iconic logomark, limited-edition apparel designs, e-commerce rollouts, and social storytelling. Explored the synergy between mindful living, sustainable materials, and contemporary urban clothing.",
      deliverables: [
        "Brand Identity & Logo Architecture",
        "Limited-Edition Garment Design",
        "Creative Campaign Development",
        "Social Media & Direct-to-Consumer Strategy",
      ],
      tag: "Active Brand",
    },
    {
      company: "Hashtag Sri Lanka",
      role: "Creative Director (2023–2024) & Senior Designer (2016–2017)",
      period: "Jan 2023 - Jan 2024 & Oct 2016 - Oct 2017",
      location: "Colombo, Sri Lanka",
      icon: Hash,
      highlight:
        "Led creative direction on national commercials, banking campaigns, and gaming leagues.",
      description:
        "Led design teams generating breakthrough commercial concepts. Directed and wrote television commercials including the kids' hand-washing awareness campaign and high-profile Union Assurance PLC 'Uniship' commercial productions alongside KoD Productions. Crafted visual identities for Dialog Gaming League, Noize, and Hot Panda.",
      deliverables: [
        "Union Assurance Commercial Shoots",
        "Kids TV Commercial Writing & Direction",
        "Dialog Gaming League Identity",
        "Design Team Leadership & Brand Sprints",
      ],
      tag: "Agency Leadership",
    },
    {
      company: "IRAJ Productions (PVT) LTD",
      role: "Multimedia Creative Specialist",
      period: "Oct 2017 - Oct 2019 · 2 yrs",
      location: "Kirulapone, Colombo 05",
      icon: Film,
      highlight:
        "High-velocity music video art direction, 2D animation, casting, and pop culture media.",
      description:
        "Managed art direction, costume design, casting, storyboarding, scriptwriting, and assistant directing for prominent nationwide music video releases. Produced animated sequences, character illustrations, and promotional collateral commanding millions of organic digital views.",
      deliverables: [
        "Nil Denethi Music Video (Iraj ft. Kaizer)",
        "Mama Hinahenawa (Louzy ft. Romaine Willis)",
        "Kathirina Music Video Art Direction",
        "Storyboarding, 2D Animation & Scripting",
      ],
      tag: "Media & Cinema",
    },
    {
      company: "LIMRA Holdings PLC",
      role: "Creative Graphic Designer",
      period: "Oct 2015 - Oct 2016 · 1 yr",
      location: "Kohuwela, Sri Lanka",
      icon: Building2,
      highlight:
        "3D showroom design and campaigns across four holding companies for global titans.",
      description:
        "Operated across Kiddies & Toys International, DCS Pvt Ltd, Digital Engineering Solution, and EGUARDIAN (Sri Lanka). Designed 3D showroom interiors, exhibition racks, packaging, and outdoor campaigns for world-renowned international franchises including LEGO, Hot Wheels, Disney, Barbie, Farlin, Chicco, and ESET.",
      deliverables: [
        "LEGO Building Event & Display Architecture",
        "Disney Frozen Merchandise Campaigns",
        "ESET 5-in-1 Multi-Device Protection",
        "Hot Wheels, Farlin & Chicco Retail Branding",
      ],
      tag: "Global Brand Governance",
    },
    {
      company: "Feature Film 'Viyasiduru'",
      role: "Costume Designer & Art Department",
      period: "Oct 2018 - Nov 2018 · University of Kelaniya",
      location: "Sri Lanka · IMDb Feature",
      icon: Clapperboard,
      highlight:
        "Theatrical costume engineering and wardrobe continuity for feature film cinema.",
      description:
        "Designed period and contemporary costumes, character wardrobes, and on-set art styling for the acclaimed Sri Lankan feature film 'Viyasiduru' (listed on IMDb), produced under the auspices of the University of Kelaniya film department.",
      deliverables: [
        "Character Wardrobe Design",
        "Period Fabric & Texture Sourcing",
        "On-Set Wardrobe Continuity",
        "Art Direction Collaboration",
      ],
      tag: "Feature Film",
    },
  ];

  return (
    <section
      className="section-padding bg-kod-canvas relative overflow-hidden"
      aria-label="Professional Experience & Agency History"
    >
      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="eyebrow text-kod-orange mb-3 block">
            Professional Experience & Timeline
          </span>
          <h2 className="heading-section text-kod-earth mb-4">
            Hands-On Leadership Across Studios, Agencies & Brands
          </h2>
          <p className="text-body text-kod-earth/80 text-base sm:text-lg leading-relaxed">
            Over eight years of multidisciplinary craftsmanship spanning corporate
            conglomerates, national media houses, independent startups, and
            cinema.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-kod-border/80 shadow-xs hover:border-kod-clay transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-kod-mist border border-kod-border flex items-center justify-center text-kod-clay">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-kod-mist border border-kod-border rounded-full text-kod-clay font-metropolis">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="font-metropolis font-bold text-2xl text-kod-earth mb-1">
                    {exp.company}
                  </h3>

                  <p className="font-metropolis font-semibold text-sm text-kod-orange mb-3">
                    {exp.role}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-kod-text-2 mb-5 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-kod-clay" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-kod-clay" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="font-editorial italic text-base sm:text-lg text-kod-clay mb-4">
                    &ldquo;{exp.highlight}&rdquo;
                  </p>

                  <p className="text-body text-kod-earth/80 text-sm sm:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="pt-5 border-t border-kod-border/70">
                    <p className="text-xs font-semibold tracking-wider uppercase text-kod-text-2 mb-3">
                      Key Highlights & Deliverables
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-kod-earth/90">
                      {exp.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-kod-orange flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-kod-text-2 uppercase tracking-wider">
                  <span>Chapter 0{idx + 1}</span>
                  <span className="text-kod-clay font-metropolis">
                    Verified Experience
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-kod-mist border border-kod-border/80">
          <div>
            <h4 className="font-metropolis font-bold text-xl text-kod-earth mb-1">
              Explore KOD Universe Portfolio
            </h4>
            <p className="text-body text-kod-earth/80 text-sm sm:text-base">
              Discover how these years of multidisciplinary craft translate into
              architectural masterplans, luxury brand systems, and packaging.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="btn-primary flex-shrink-0 whitespace-nowrap"
          >
            <span>View All Work</span>
            <span className="btn-badge">
              <ArrowRight size={13} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
