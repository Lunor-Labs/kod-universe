import Image from "next/image";
import { Globe, MapPin, Users } from "lucide-react";

interface BrandItem {
  name: string;
  category: string;
  logo: string;
  bgClass?: string;
}

export function FounderBrands() {
  const internationalBrands: BrandItem[] = [
    {
      name: "Barbie",
      category: "Global Toy & Entertainment Icon",
      logo: "/brands/International/barbie.webp",
    },
    {
      name: "Disney",
      category: "Global Media & Character Franchise",
      logo: "/brands/International/disney.webp",
    },
    {
      name: "Hot Wheels",
      category: "Die-Cast & Toy Design Franchise",
      logo: "/brands/International/hot-wheels.webp",
    },
    {
      name: "Lego",
      category: "Modular Play & Creative Building System",
      logo: "/brands/International/lego.webp",
    },
    {
      name: "Mattel",
      category: "Global Toy Manufacturing & Entertainment",
      logo: "/brands/International/mattel.webp",
    },
    {
      name: "Thomas & Friends",
      category: "Children's Heritage Franchise",
      logo: "/brands/International/thomas-and-friends.webp",
    },
    {
      name: "Toy Story",
      category: "Pixar Animated Feature Franchise",
      logo: "/brands/International/toy-story.webp",
    },
    {
      name: "Alex Toys",
      category: "Creative Children's Play & Crafts",
      logo: "/brands/International/alex-toys.webp",
    },
    {
      name: "LeapFrog",
      category: "Educational Tech & Child Learning",
      logo: "/brands/International/leapfrog.webp",
    },
    {
      name: "Toy Craft",
      category: "Artisanal Toy & Hobby Crafts",
      logo: "/brands/International/toy-craft.webp",
    },
    {
      name: "Chicco",
      category: "Italian Infant Care & Hardware",
      logo: "/brands/International/chicco.webp",
    },
    {
      name: "Farlin",
      category: "Baby Care & Maternal Healthcare",
      logo: "/brands/International/farlin.webp",
    },
    {
      name: "ESET",
      category: "Cybersecurity & Software Solutions",
      logo: "/brands/International/eset.webp",
    },
    {
      name: "Symantec",
      category: "Enterprise Threat & Data Protection",
      logo: "/brands/International/symantec.webp",
    },
    {
      name: "Michelin",
      category: "Global Automotive & Mobility",
      logo: "/brands/International/michelin.webp",
    },
    {
      name: "Zaizi",
      category: "Digital Consultancy & Cloud Architecture",
      logo: "/brands/International/zaizi.webp",
    },
  ];

  const localBrands: BrandItem[] = [
    {
      name: "Dialog Axiata",
      category: "Telecommunications & Digital Services",
      logo: "/brands/local/dialog-axiata.webp",
    },
    {
      name: "Hemas",
      category: "Healthcare, FMCG & Retail Conglomerate",
      logo: "/brands/local/hemas.webp",
    },
    {
      name: "Union Assurance",
      category: "Life Insurance & Financial Services",
      logo: "/brands/local/union-assurance.webp",
    },
    {
      name: "Arpico Supercentre",
      category: "Retail Supercentre & Household Manufacturing",
      logo: "/brands/local/arpico.webp",
    },
    {
      name: "Colombo Fashion Week",
      category: "Premier Fashion Platform & Runway",
      logo: "/brands/local/colombo-fashion-week.webp",
    },
    {
      name: "Club House Vivaldi",
      category: "Luxury Hospitality & Entertainment",
      logo: "/brands/local/club-house-vivaldi.webp",
    },
    {
      name: "Iraj Productions",
      category: "Music Production & Visual Entertainment",
      logo: "/brands/local/iraj-production.webp",
      bgClass: "bg-[#0c0c0e] border border-white/10",
    },
    {
      name: "Bubblicious",
      category: "Youth Confectionery & Brand Activation",
      logo: "/brands/local/bubblicious.webp",
      bgClass: "bg-[#181222] border border-white/10",
    },
  ];

  return (
    <section
      className="section-padding bg-kod-black text-white relative overflow-hidden"
      aria-label="Collaborative Brand Portfolio"
    >
      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-metropolis font-semibold tracking-wider uppercase text-kod-orange mb-4">
            <Users size={14} />
            <span>Collaborative Track Record</span>
          </div>

          <h2 className="heading-section text-white mb-4">
            Brands Contributed to Throughout the Journey
          </h2>

          <p className="text-body text-white/80 text-base sm:text-lg leading-relaxed">
            A selection of renowned global and national household names where
            Ishara contributed creative direction, design systems, and campaign
            deliverables collaboratively alongside talented teams and colleagues
            at previous organizations.
          </p>
        </div>

        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-white/15 pb-4">
            <Globe className="text-kod-orange" size={20} />
            <h3 className="font-metropolis font-bold text-xl sm:text-2xl text-white tracking-wide">
              International Brands
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 ml-auto">
              {internationalBrands.length} Brands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
            {internationalBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white/[0.04] border border-white/10 hover:border-kod-orange/60 hover:bg-white/[0.07] rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`w-full h-20 sm:h-24 rounded-xl ${
                    brand.bgClass || "bg-white"
                  } flex items-center justify-center p-3 relative overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                    className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3.5 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-metropolis font-bold text-sm sm:text-base text-white group-hover:text-kod-orange transition-colors truncate">
                      {brand.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-white/60 line-clamp-2 font-light leading-snug">
                    {brand.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-white/15 pb-4">
            <MapPin className="text-kod-clay" size={20} />
            <h3 className="font-metropolis font-bold text-xl sm:text-2xl text-white tracking-wide">
              National & Local Brands
            </h3>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 ml-auto">
              {localBrands.length} Brands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
            {localBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white/[0.04] border border-white/10 hover:border-kod-gold/60 hover:bg-white/[0.07] rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`w-full h-20 sm:h-24 rounded-xl ${
                    brand.bgClass || "bg-white"
                  } flex items-center justify-center p-3 relative overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                    className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3.5 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-metropolis font-bold text-sm sm:text-base text-white group-hover:text-kod-gold transition-colors truncate">
                      {brand.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-white/60 line-clamp-2 font-light leading-snug">
                    {brand.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed">
            * All respective brand trademarks, marks, and IP belong to their
            individual owners. Contributions were delivered in collaborative team
            environments across previous agencies and production companies.
          </p>
        </div>
      </div>
    </section>
  );
}
