import {
  Sparkles,
  Compass,
  GraduationCap,
  Palette,
  ArrowRight,
  Clapperboard,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export function FounderStory() {
  const productionExperience = [
    {
      discipline: "Costume Design",
      detail:
        "Feature film (2018), music videos, documentaries, short films and commercials",
    },
    {
      discipline: "Assistant Direction",
      detail: "Music videos and commercial productions",
    },
    {
      discipline: "Commercial Direction",
      detail: "Advertising and branded productions",
    },
    {
      discipline: "Script Development",
      detail: "Writing, editing and finalisation",
    },
    {
      discipline: "Art Direction",
      detail: "Visual concepts and production design",
    },
  ];

  const credentialsAtAGlance = [
    { label: "2014", value: "Professional career in graphic design began" },
    { label: "2018", value: "Feature-length film, Costume Designer" },
    {
      label: "2014–2015",
      value: "Diploma in 3D Animation - Teleview, Colombo",
    },
    {
      label: "2017–2018",
      value: "Diploma in Film & Television Studies - University of Kelaniya",
    },
    { label: "2023–Present", value: "Creative Consultation" },
    {
      label: "Costume Design",
      value:
        "Film, music videos, documentaries, short films and commercials",
    },
    {
      label: "Assistant Direction",
      value: "Music videos and commercials",
    },
    {
      label: "Commercial Direction",
      value: "Advertising and branded productions",
    },
    {
      label: "Script Development",
      value:
        "Scriptwriting, script editing and finalisation - Creative production",
    },
    {
      label: "70+ brands",
      value:
        "Professional collaborations across organizations and independent work",
    },
    {
      label: "24 selected logos",
      value: "16 international and 8 national/local, displayed on the website",
    },
    { label: "Founder", value: "KOD Universe and Rouka Clothing" },
    { label: "Artistic practice", value: "Digital painting and canvas painting" },
  ];

  const chapters = [
    {
      icon: Sparkles,
      era: "Origins · Grade 10 Experiments",
      title: "From Curiosity to a Creative Calling",
      description:
        "Ishara’s interest in making things began during Grade 10 at Walasmulla National School, when creative experimentation was still a personal hobby alongside his Advanced Level Mathematics studies. Early curiosity earned provincial software awards in 2008, 2009, and 2010, as well as the President's Scout Parchment Award in 2011.",
    },
    {
      icon: GraduationCap,
      era: "2014 · Professional Career & Diplomas",
      title: "Graphic Designer & Creative Training",
      description:
        "In 2014, Ishara began his professional career as a Graphic Designer. His earlier creative CV lists a Diploma in 3D Animation from Teleview, Colombo (2014–2015) and a Diploma in Film & Television Studies from the University of Kelaniya (2017–2018), alongside practical filmmaking, art direction, and production experience.",
    },
    {
      icon: Compass,
      era: "Production, Direction & 2023–Present Consultation",
      title: "Film, Costume Design & Creative Consultation",
      description:
        "His experience expanded across branding, freelance art direction, costume design-including a feature-length film in 2018, music videos, documentaries, short films, and TV commercials-assistant direction, commercial direction, and script development. Since 2023, he has also worked in creative consultation, guiding brand development and visual direction.",
    },
    {
      icon: Palette,
      era: "Fine Art Practice · Beyond the Commercial Brief",
      title: "Digital Paintings, Canvas Art & Independent Ventures",
      description:
        "Beyond commissioned work, Ishara creates digital paintings and traditional canvas artworks-exploring visual worlds that do not begin with a marketing brief. That relationship between independent art and commercial creativity also shapes KOD Gallery and his independent apparel label, Rouka Clothing.",
    },
  ];

  const ventures = [
    {
      name: "KOD Universe",
      role: "Founder & Creative Director",
      tagline: "Creative Agency & Upcoming Artist-Led Platform",
      description:
        "Founded to bring ideas to life across design, marketing campaigns, and visual storytelling-while developing KOD Gallery as an upcoming space for artists, creative merchandise, and collaborative Drops.",
      linkText: "Explore KOD Universe",
      href: "/about-us",
    },
    {
      name: "Rouka Clothing",
      role: "Founder & Creative Director",
      tagline: "Fashion, Identity & Self-Expression",
      description:
        "Through Rouka Clothing, Ishara explores another medium for identity, art, and self-expression: fashion. Together, KOD Universe and Rouka reflect a belief that an idea can move across design, image, clothing, film, and experience without losing its meaning.",
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
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 border border-kod-border/80 shadow-xs space-y-10">
          <div>
            <span className="eyebrow text-kod-orange mb-3 block">
              Founder Biography
            </span>
            <h2 className="heading-section text-kod-earth mb-2">
              The Creative Journey Behind KOD
            </h2>
            <p className="text-xs sm:text-sm font-metropolis font-semibold tracking-wider uppercase text-kod-clay">
              Ishara Kodithuwakku | Founder · Creative Director · Concept Artist
              · Visual Artist
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-kod-earth/85 text-base leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-metropolis font-bold text-xl text-kod-earth">
                From curiosity to a creative calling
              </h3>
              <p>
                Ishara Kodithuwakku is a Sri Lankan creative director, concept
                artist, commercial director, visual artist and entrepreneur. His
                work brings together branding, film production, digital and
                canvas painting, and fashion. He is the founder of KOD Universe
                and Rouka Clothing.
              </p>
              <p>
                His interest in making things began during Grade 10, when
                creative experimentation was still a personal hobby. In 2014, he
                began his professional career as a Graphic Designer. What
                followed was a career shaped by the disciplines behind the
                visuals: composition, narrative, production, collaboration and
                understanding what an audience needs to feel.
              </p>

              <h3 className="font-metropolis font-bold text-xl text-kod-earth pt-4">
                Creative training and experience
              </h3>
              <p>
                His earlier creative CV lists a Diploma in 3D Animation from
                Teleview, Colombo (2014–2015), and a Diploma in Film &amp;
                Television Studies from the University of Kelaniya (2017–2018).
                His practical experience in filmmaking, art direction, visual
                concepts and commercial production has been central to his
                creative development.
              </p>

              <h3 className="font-metropolis font-bold text-xl text-kod-earth pt-4">
                A career across creative disciplines
              </h3>
              <p>
                He began working professionally as a Graphic Designer in 2014,
                later expanding his experience across graphic design, branding,
                visual communication and freelance art direction. Today, his
                work encompasses concept art, commercial directing, costume
                design, script development, visual storytelling and creative
                leadership.
              </p>
              <p>
                Since 2023, Ishara has also been working in creative
                consultation, contributing his multidisciplinary experience to
                brand development, creative concepts, visual direction and
                creative decision-making.
              </p>
              <p>
                Over his professional career, he has contributed to projects
                involving more than 70 local and international brands through
                different agencies, teams, freelance projects and
                collaborations. The website features a selected collection of 24
                brand logos-16 international and eight national/local-not the
                complete list, and not all direct KOD Universe clients.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-metropolis font-bold text-xl text-kod-earth">
                Film, costume design and visual storytelling
              </h3>
              <p>
                Ishara&apos;s journey in film and commercial production extends
                beyond directing and visual concepts. His experience as a
                Costume Designer includes music videos, documentaries, short
                films, television commercials and feature-length cinema. In
                2018, he worked as a Costume Designer on a feature-length film,
                bringing his understanding of character, visual identity and
                storytelling into cinematic production.
              </p>
              <p>
                Alongside costume design, he has worked in assistant direction
                for music videos and commercials, and has directed commercial
                productions. His experience also includes scriptwriting, script
                editing and script finalisation, connecting the earliest stages
                of an idea with its final visual expression.
              </p>
              <p>
                Working across different production disciplines has shaped his
                approach to creative direction, allowing him to see a project
                not simply as a visual outcome, but as a complete experience
                built through concept, narrative, design and execution.
              </p>

              <h3 className="font-metropolis font-bold text-xl text-kod-earth pt-4">
                Art beyond the commercial brief
              </h3>
              <p>
                Beyond commissioned work, Ishara creates digital paintings and
                traditional canvas artworks. His artistic practice offers room
                to explore visual worlds that do not begin with a marketing
                brief. That relationship between independent art and commercial
                creativity is also part of the vision for KOD Gallery, an
                upcoming space for artists, creative merchandise and
                collaborative Drops.
              </p>
              <p>
                Through Rouka Clothing, he explores another medium for identity,
                art and self-expression: fashion. Together, KOD Universe and
                Rouka Clothing reflect a belief that an idea can move across
                design, image, clothing, film and experience without losing its
                meaning.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-kod-border/70">
            <div className="lg:col-span-5 bg-kod-canvas rounded-2xl p-6 sm:p-8 border border-kod-border/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <Clapperboard size={18} className="text-kod-orange" />
                  <h3 className="font-metropolis font-bold text-lg uppercase tracking-wider text-kod-earth">
                    Production Experience
                  </h3>
                </div>
                <ul className="space-y-3.5 text-sm text-kod-earth/85">
                  {productionExperience.map((item) => (
                    <li key={item.discipline} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-kod-orange mt-2 flex-shrink-0" />
                      <span>
                        <strong className="text-kod-earth font-semibold">
                          {item.discipline}
                        </strong>{" "}
                        - {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-kod-border/70">
                <a
                  href="https://www.imdb.com/name/nm10295287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-metropolis font-bold uppercase tracking-wider text-kod-clay hover:text-kod-orange transition-colors"
                >
                  <span>View IMDb Film Profile</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-kod-canvas rounded-2xl p-6 sm:p-8 border border-kod-border/70">
              <div className="flex items-center gap-2.5 mb-5">
                <CheckCircle2 size={18} className="text-kod-clay" />
                <h3 className="font-metropolis font-bold text-lg uppercase tracking-wider text-kod-earth">
                  Credentials at a Glance
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm text-kod-earth/85">
                {credentialsAtAGlance.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-kod-clay mt-1.5 flex-shrink-0" />
                    <span>
                      <strong className="text-kod-earth font-semibold">
                        {cred.label}
                      </strong>{" "}
                      - {cred.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
            &ldquo;When a hobby turns into a lifelong calling, work never
            makes you tired. The creative needs of others are fuel for my
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
