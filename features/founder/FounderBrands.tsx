import { Globe, MapPin, Users } from "lucide-react";

export function FounderBrands() {
  const internationalBrands = [
    { name: "Barbie", category: "Global Toy & Entertainment Icon" },
    { name: "Disney", category: "Global Media & Character Franchise" },
    { name: "Hotwheels", category: "Die-Cast & Toy Design Franchise" },
    { name: "Lego", category: "Modular Play & Creative Building System" },
    { name: "Thomas & Friends", category: "Children's Heritage Franchise" },
    { name: "Leapfrog", category: "Educational Tech & Child Learning" },
    { name: "Toy Story", category: "Pixar Animated Feature Franchise" },
    { name: "Uno", category: "Global Card Game & Family Recreation" },
    { name: "Farlin", category: "Baby Care & Maternal Healthcare" },
    { name: "Chicco", category: "Italian Infant Care & Hardware" },
    { name: "ESET Virus Guard", category: "Cybersecurity & Software Solutions" },
    { name: "Symantec", category: "Enterprise Threat & Data Protection" },
    { name: "Zaizi", category: "Digital Consultancy & Cloud Architecture" },
    { name: "Michelin", category: "Global Automotive & Mobility" },
  ];

  const localBrands = [
    { name: "Hemas", category: "Healthcare, FMCG & Retail Conglomerate" },
    { name: "Arpico", category: "Retail Supercentre & Household Manufacturing" },
    { name: "Kids Joy", category: "Maternal & Childcare Essentials" },
    { name: "Dialog", category: "Telecommunications & Digital Services" },
    { name: "Bubblicious", category: "Youth Confectionery & Brand Activation" },
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
              14 Brands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {internationalBrands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-kod-orange/70 hover:bg-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 group min-h-[110px]"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40 block mb-2 font-metropolis">
                    Global
                  </span>
                  <h4 className="font-metropolis font-bold text-base sm:text-lg text-white group-hover:text-kod-orange transition-colors">
                    {brand.name}
                  </h4>
                </div>
                <p className="text-[11px] text-white/60 line-clamp-2 mt-2 font-light leading-snug">
                  {brand.category}
                </p>
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
              5 Brands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {localBrands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-kod-clay/70 hover:bg-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 group min-h-[110px]"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40 block mb-2 font-metropolis">
                    Sri Lanka
                  </span>
                  <h4 className="font-metropolis font-bold text-base sm:text-lg text-white group-hover:text-kod-gold transition-colors">
                    {brand.name}
                  </h4>
                </div>
                <p className="text-[11px] text-white/60 line-clamp-2 mt-2 font-light leading-snug">
                  {brand.category}
                </p>
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
