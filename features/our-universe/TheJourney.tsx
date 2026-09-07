import Image from "next/image";

const steps = [
  {
    n: 1,
    title: "Curiosity",
    body: "We listen to the universe-observing signals, shifts, and stories waiting to be discovered.",
    icon: "/icons/journey/curiosity.webp",
  },
  {
    n: 2,
    title: "Purpose",
    body: "We find meaning in the spark-aligning it with truth, intention, and human need.",
    icon: "/icons/journey/purpose.webp",
  },
  {
    n: 3,
    title: "Imagination",
    body: "We shape the idea into form-through strategy, storytelling, and inspired design.",
    icon: "/icons/journey/imagination.webp",
  },
  {
    n: 4,
    title: "Impact",
    body: "We launch experiences that connect, inspire, and create ripples that last.",
    icon: "/icons/journey/impact.webp",
  },
];

export function TheJourney() {
  return (
    <section className="section-padding-sm" aria-label="The Journey">
      <div className="container-site">
        <div className="rounded-xl bg-kod-mist/70 p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-kod-earth">
              <span aria-hidden="true" className="text-kod-orange">
                ✦
              </span>
              <span>The Journey: From Spark to Impact</span>
              <span aria-hidden="true" className="text-kod-orange">
                ✦
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="step-badge mb-3">{step.n}</div>

                <h4 className="pillar-heading mb-2">{step.title}</h4>
                <p className="text-kod-earth/85 text-base leading-relaxed max-w-[260px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
