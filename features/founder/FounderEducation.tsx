import { GraduationCap, Award, Box, Sparkles } from "lucide-react";

export function FounderEducation() {
  const credentials = [
    {
      institution: "University of Kelaniya Sri Lanka",
      degree: "Bachelor of Arts (BA) in Film and Television",
      period: "2012 – 2015",
      icon: GraduationCap,
      highlights: [
        "Creative Direction & Cinematic Visual Storytelling",
        "Team Leadership & Production Management",
        "Screenplay Structure & Visual Composition",
        "Costume & Production Design Foundation",
      ],
      description:
        "Comprehensive academic training in cinematic aesthetics, moving image psychology, art direction, and production leadership.",
    },
    {
      institution: "Teleview Academy",
      degree: "Diploma in 3D Animation & Visual Special Effects",
      period: "2014 – 2015",
      icon: Box,
      highlights: [
        "Autodesk 3ds Max & CGI Environment Modeling",
        "Architectural 3D Visualization & Interior Renderings",
        "Interactive Technology & Video Graphics",
        "Collaborative projects with Skyco Construction",
      ],
      description:
        "Rigorous technical diploma focusing on 3D spatial modeling, architectural layout rendering, lighting simulations, and VFX.",
    },
    {
      institution: "Walasmulla National School",
      degree: "Primary & Secondary Education · Mathematics Stream",
      period: "2004 – 2012",
      icon: Award,
      highlights: [
        "President's Scout Parchment Award (2011) - Highest national honor",
        "Member of the Senior School Prefect Board",
        "Provincial Educational Software Competition Winner (2008, 2009, 2010)",
        "Artificial Intelligence Certificate (University of Moratuwa SL Association)",
        "All-Island & International Art & Dancing Competition Awards",
      ],
      description:
        "Formative schooling grounded in Advanced Level Mathematics, disciplined leadership in scouting, and early awards in computer software and visual arts.",
    },
  ];

  return (
    <section
      className="section-padding bg-kod-mist relative overflow-hidden"
      aria-label="Education and Formative Honors"
    >
      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-kod-border/80 text-xs font-metropolis font-semibold tracking-wider uppercase text-kod-clay mb-4">
            <Sparkles size={14} className="text-kod-orange" />
            <span>Academic Roots & Honors</span>
          </div>

          <h2 className="heading-section text-kod-earth mb-4">
            Education & Creative Discipline
          </h2>

          <p className="text-body text-kod-earth/80 text-base sm:text-lg leading-relaxed">
            The mathematical logic, cinematic storytelling, and 3D architectural
            disciplines that underpin every project at KOD Universe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-kod-border/80 shadow-xs hover:border-kod-clay transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-kod-canvas border border-kod-border flex items-center justify-center text-kod-clay mb-6">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-kod-orange font-metropolis block mb-1">
                    {cred.period}
                  </span>

                  <h3 className="font-metropolis font-bold text-xl text-kod-earth mb-2">
                    {cred.institution}
                  </h3>

                  <p className="text-sm font-semibold text-kod-clay mb-4">
                    {cred.degree}
                  </p>

                  <p className="text-xs text-kod-earth/80 leading-relaxed mb-6 font-light">
                    {cred.description}
                  </p>

                  <div className="pt-4 border-t border-kod-border/60">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-kod-text-2 mb-2.5">
                      Honors & Key Focus
                    </p>
                    <ul className="space-y-2">
                      {cred.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-kod-earth/85"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-kod-clay flex-shrink-0 mt-1" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
