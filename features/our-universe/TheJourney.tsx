const steps = [
  {
    n: 1,
    title: "Curiosity",
    body: "We listen to the universe—observing signals, shifts, and stories waiting to be discovered.",
    svg: (
      <svg
        className="w-full h-full text-kod-text-2"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.3" />
        <path d="M35 70c5-10 10-18 20-20 8-1 12 3 10 9-2 6-8 10-14 11M52 48c0-4 3-7 7-7s7 3 7 7-3 7-7 7M25 75c10-2 25-5 35 2M75 75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM65 80a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM80 65a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <circle cx="45" cy="72" r="1.5" fill="#A2533B" stroke="none" />
        <circle cx="55" cy="75" r="1" fill="#A2533B" stroke="none" />
        <circle cx="68" cy="70" r="1.5" fill="#A2533B" stroke="none" />
        <circle cx="78" cy="60" r="1" fill="#A2533B" stroke="none" />
      </svg>
    ),
  },
  {
    n: 2,
    title: "Purpose",
    body: "We find meaning in the spark—aligning it with truth, intention, and human need.",
    svg: (
      <svg
        className="w-full h-full text-kod-text-2"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="50" cy="50" r="38" />
        <circle cx="50" cy="50" r="28" strokeDasharray="2 2" />
        <circle cx="50" cy="50" r="4" fill="#A2533B" />
        <path d="M50 12v76M12 50h76M23 23l54 54M23 77l54-54" opacity="0.6" />
        <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.3" />
      </svg>
    ),
  },
  {
    n: 3,
    title: "Imagination",
    body: "We shape the idea into form—through strategy, storytelling, and inspired design.",
    svg: (
      <svg
        className="w-full h-full text-kod-text-2"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="currentColor"
          strokeDasharray="3 3"
          opacity="0.3"
        />
        <path
          d="M50 25c13 0 24 11 24 24 0 18-24 36-24 36s-24-18-24-36c0-13 11-24 24-24z"
          fill="#C57053"
          opacity="0.9"
        />
        <path
          d="M50 38a11 11 0 1 1-7.8 18.8 8 8 0 1 0 7.8-13.8 5 5 0 1 1-5 5"
          stroke="#FAF7F2"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    n: 4,
    title: "Impact",
    body: "We launch experiences that connect, inspire, and create ripples that last.",
    svg: (
      <svg
        className="w-full h-full text-kod-orange"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="#8A7568"
          strokeDasharray="3 3"
          opacity="0.3"
        />
        <path
          d="M50 28a3 3 0 0 0-3 3v13h-2v-11a3 3 0 0 0-6 0v14h-2v-8a3 3 0 0 0-6 0v14c0 14 11 25 25 25s25-11 25-25V40a3 3 0 0 0-6 0v7h-2V31a3 3 0 0 0-3-3h-1v13h-2V31a3 3 0 0 0-3-3h-1z"
          opacity="0.8"
        />
      </svg>
    ),
  },
];

export function TheJourney() {
  return (
    <section className="section-padding-sm" aria-label="The Journey">
      <div className="container-site">
        <div className="rounded-xl bg-kod-mist/70 p-8 sm:p-12 shadow-sm">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.25em] uppercase text-kod-text-2">
              <span aria-hidden="true">✦</span>
              <span>The Journey: From Spark to Impact</span>
              <span aria-hidden="true">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 flex items-center justify-center">
                  {step.svg}
                </div>

                <div className="step-badge mb-3">{step.n}</div>

                <h4 className="pillar-heading mb-2">{step.title}</h4>
                <p className="text-kod-text-2 text-sm leading-relaxed max-w-[200px]">
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
