export function FounderPanel() {
  return (
    <section
      className="section-padding bg-kod-canvas border-t border-kod-border"
      aria-label="Founder Biography"
    >
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="eyebrow mb-3">Founder</span>
            <h2 className="text-display-md text-kod-black">
              The Vision Behind KOD
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5 relative aspect-project-card overflow-hidden rounded-md border border-kod-border">
              <div className="w-full h-full bg-kod-mist flex items-center justify-center texture-cave min-h-[400px]">
                <span className="text-kod-text-2 font-editorial italic">
                  Founder Portrait
                </span>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col gap-6">
              <blockquote className="font-editorial italic text-kod-earth text-xl sm:text-2xl leading-relaxed">
                &ldquo;Our role is to observe the moment, understand the
                culture, then create work that belongs to that moment.&rdquo;
              </blockquote>

              <div className="h-px w-16 bg-kod-orange" aria-hidden="true" />

              <div className="text-kod-text-2 text-sm leading-relaxed space-y-4">
                <p>
                  KOD Universe was founded on the belief that ideas are not
                  invented—they are discovered. Like a rare creative seed
                  traveling through the universe, inspiration arrives and takes
                  root in the present.
                </p>
                <p>
                  By cultivating a profound respect for ancient traces and
                  historical context, while maintaining an unwavering commitment
                  to modern, precise execution, our founder established a space
                  where creativity is a responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
