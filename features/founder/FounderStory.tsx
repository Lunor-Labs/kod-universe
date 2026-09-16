import { Sparkles, Heart, Compass, GraduationCap } from "lucide-react";

export function FounderStory() {
  const chapters = [
    {
      icon: Sparkles,
      era: "Origins · Grade 10 to School Years",
      title: "The Schoolboy Experiment & Maths Stream",
      description:
        "The fascination started early at Walasmulla National School. While studying in the Advanced Level Mathematics stream, evenings were spent exploring digital media, provincial educational software competitions, and art. What began as pure post-homework curiosity earned provincial software awards in 2008, 2009, and 2010, alongside the prestigious President's Scout Parchment Award in 2011.",
    },
    {
      icon: GraduationCap,
      era: "Academic Foundation · Film & 3D Tech",
      title: "Merging Cinema, Motion & Architecture",
      description:
        "Driven to deepen his craft, Ishara completed a Bachelor of Arts in Film & Television at the University of Kelaniya and a Diploma in 3D Animation and VFX at Teleview Academy. This interdisciplinary training bridged architectural 3D space, cinematic lighting, costume design, and narrative storytelling into a unified creative vocabulary.",
    },
    {
      icon: Compass,
      era: "The Natural Transition · Hobby to Career",
      title: "Where Work Ceases to Feel Like Work",
      description:
        "Because every project is rooted in that original childlike excitement of turning nothing into something, work does not make me feel tired. Creative problem-solving is not a tedious duty—it is an energizing daily playground where fatigue naturally gives way to creative momentum and joy.",
    },
    {
      icon: Heart,
      era: "The Guiding Philosophy",
      title: "The Creative Needs of Others as Fuel",
      description:
        "Every client, entrepreneur, or collaborator arrives with a vision they have nurtured deeply. Finding the exact visual language, structural packaging, or spatial presence to give their dream form is a profound privilege. Their ambitions and challenges become the genuine fuel for my passion.",
    },
  ];

  return (
    <section
      className="section-padding bg-kod-mist relative overflow-hidden"
      aria-label="Ishara Kodithuwakku personal story from Grade 10 to now"
    >
      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="eyebrow text-kod-orange mb-3 block">
            The Personal Journey
          </span>
          <h2 className="heading-section text-kod-earth mb-4">
            From Grade 10 Experiments to a Lifelong Creative Calling
          </h2>
          <p className="text-body text-kod-earth/80 text-base sm:text-lg leading-relaxed">
            A humble look at how curiosity in school grew into film, 3D
            animation, agency leadership, and an enduring respect for client
            partnership.
          </p>
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

                  <h3 className="font-metropolis font-bold text-xl sm:text-2xl text-kod-earth mb-4 leading-snug">
                    {ch.title}
                  </h3>

                  <p className="text-body text-kod-earth/80 text-base leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-kod-border/60 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-kod-text-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-kod-orange" />
                  <span>Chapter 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-kod-canvas border border-kod-border text-center max-w-4xl mx-auto shadow-xs">
          <p className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-kod-earth leading-snug mb-4">
            &ldquo;Work does not make me feel tired, and I am always happy to
            explore my passion for creative solutions. The creative needs of
            others are fuel for my passion.&rdquo;
          </p>
          <p className="font-metropolis font-bold text-sm tracking-widest uppercase text-kod-clay">
            — Ishara Kodithuwakku
          </p>
        </div>
      </div>
    </section>
  );
}
