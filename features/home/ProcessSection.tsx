import { Search, Compass, Pen, Rocket } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep to understand your goals, audience, and opportunities.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Define",
    description: "We shape the strategy and creative direction with clarity and intent.",
    Icon: Compass,
  },
  {
    number: "03",
    title: "Create",
    description: "We design, craft, and refine ideas that connect and convert.",
    Icon: Pen,
  },
  {
    number: "04",
    title: "Deliver",
    description: "We launch with precision and support your growth every step ahead.",
    Icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding border-t border-border-warm" aria-label="Our creative process">
      <div className="container-site">
        <div className="text-center mb-14">
          <SectionLabel>Our process</SectionLabel>
          <h2 className="font-metropolis font-semibold text-earth text-display-lg text-balance">
            A clear path from spark to{" "}
            <em className="font-serif italic font-normal">impact.</em>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px bg-border-warm"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6" role="list">
            {steps.map((step, index) => (
              <li key={step.number} className="relative flex flex-col items-center text-center">
                {/* Icon circle */}
                <div
                  className="relative z-10 w-11 h-11 rounded-full border-2 border-border-warm bg-canvas 
                             flex items-center justify-center mb-5 group-hover:border-signal-orange"
                >
                  <step.Icon size={16} className="text-signal-orange" aria-hidden="true" />
                </div>

                {/* Number + title */}
                <div className="mb-2">
                  <span className="eyebrow text-[10px] block mb-1">{step.number}</span>
                  <h3 className="font-metropolis font-semibold text-earth text-sm tracking-wide uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="text-secondary text-xs leading-relaxed max-w-[160px]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
