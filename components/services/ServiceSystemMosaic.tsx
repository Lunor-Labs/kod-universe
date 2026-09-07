import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceSystemMosaic() {
  return (
    <section
      className="section-padding border-b border-kod-border bg-kod-canvas relative overflow-hidden"
      aria-label="The System in Use"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            <ScrollReveal variant="left">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase text-kod-orange mb-3 block">
                THE SYSTEM IN USE
              </span>
              <h2 className="font-metropolis font-semibold text-3xl sm:text-4xl lg:text-5xl text-kod-earth leading-[1.08] mb-6">
                Built to work <br />
                <span className="font-editorial italic font-normal text-kod-earth">
                  everywhere.
                </span>
              </h2>
              <p className="text-kod-text-2 text-sm leading-relaxed font-light max-w-xs">
                Every brand touchpoint is engineered as part of a seamless
                ecosystem—from digital handheld screens to architectural
                packaging and campaign applications.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-9">
            <ScrollReveal variant="zoomIn" delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
                <div className="md:col-span-3 flex flex-col gap-3.5">
                  <div className="relative aspect-[16/11] rounded overflow-hidden bg-kod-black border border-white/10 shadow-md group">
                    <Image
                      src="/system/hd/stone.jpg"
                      alt="Core mark stone texture"
                      fill
                      className="object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="flex items-center gap-3">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-12 h-12 text-kod-orange drop-shadow-[0_0_12px_rgba(229,76,42,0.6)]"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="44"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            opacity="0.4"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            stroke="currentColor"
                            strokeWidth="4.5"
                            strokeDasharray="22 8"
                          />
                          <path
                            d="M50 25 C63.8 25 75 36.2 75 50 C75 63.8 63.8 75 50 75 C36.2 75 25 63.8 25 50 C25 39 34 30 45 30 C56 30 65 39 65 50 C65 58 58 65 50 65 C42 65 35 58 35 50 C35 44 40 39 46 39 C52 39 57 44 57 50"
                            stroke="#EAC240"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div>
                          <div className="text-white tracking-[0.25em] text-sm font-bold font-metropolis uppercase leading-tight">
                            NOVA
                          </div>
                          <div className="text-white/80 tracking-[0.28em] text-sm font-light font-metropolis uppercase leading-tight">
                            ORIGIN
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="absolute bottom-3 left-3 text-sm text-white/70 font-light tracking-wider select-none">
                      Core mark
                    </span>
                  </div>
                  <div className="relative aspect-[16/11] rounded overflow-hidden bg-kod-black border border-white/10 shadow-md group flex-1">
                    <Image
                      src="/system/hd/collateral-terra.jpg"
                      alt="Collateral and corporate stationery flatlay"
                      fill
                      className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-sm text-white/70 font-light tracking-wider select-none">
                      Collateral
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="relative h-full min-h-[300px] md:min-h-[360px] rounded overflow-hidden bg-kod-black border-2 border-kod-border shadow-xl group p-2.5 flex flex-col justify-between">
                    <div className="relative h-full w-full rounded overflow-hidden bg-kod-black flex flex-col justify-between p-4 border border-white/5">
                      <Image
                        src="/project-cosmic.jpg"
                        alt="Mobile digital experience cosmic artwork"
                        fill
                        className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
                      <div className="relative z-10 flex items-center justify-center gap-2 pt-2">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-6 h-6 text-kod-orange"
                          fill="none"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="38"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeDasharray="20 8"
                          />
                          <path
                            d="M50 30 C60 30 70 40 70 50 C70 60 60 70 50 70 C40 70 30 60 30 50"
                            stroke="#EAC240"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-sm tracking-[0.25em] font-semibold text-white uppercase">
                          NOVA ORIGIN
                        </span>
                      </div>
                      <div className="relative z-10 text-center my-auto py-6">
                        <div className="w-16 h-16 mx-auto rounded-full border border-kod-gold/40 flex items-center justify-center shadow-[0_0_20px_rgba(234,194,64,0.3)]">
                          <div className="w-10 h-10 rounded-full bg-kod-orange/30 blur-sm" />
                        </div>
                      </div>

                      <div className="relative z-10 pb-2">
                        <p className="font-editorial italic text-sm text-white/95 leading-snug mb-3">
                          Exploring today.
                          <br />
                          Advancing tomorrow.
                        </p>
                        <div className="bg-kod-orange text-white text-xs sm:text-sm tracking-widest uppercase font-semibold text-center py-2 rounded-full shadow">
                          LEARN MORE
                        </div>
                      </div>
                    </div>

                    <span className="absolute bottom-4 left-4 text-sm text-white/80 font-medium tracking-wider select-none z-20">
                      Digital
                    </span>
                  </div>
                </div>

                <div className="md:col-span-6 flex flex-col gap-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="relative aspect-[16/11] rounded overflow-hidden bg-kod-black border border-white/10 shadow-md group">
                      <Image
                        src="/system/hd/packaging-soluna.jpg"
                        alt="Nova Origin luxury dark packaging box with gold foil"
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-sm text-white/80 font-medium tracking-wider select-none">
                        Packaging
                      </span>
                    </div>

                    <div className="relative aspect-[16/11] rounded overflow-hidden bg-kod-black border border-white/10 shadow-md group">
                      <Image
                        src="/system/hd/cosmic.jpg"
                        alt="Beyond possible campaign billboard visual"
                        fill
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="font-editorial italic text-xl lg:text-2xl text-kod-gold block drop-shadow-md leading-tight">
                          Beyond
                          <br />
                          possible.
                        </span>
                      </div>
                      <span className="absolute bottom-3 left-3 text-sm text-white/80 font-medium tracking-wider select-none z-10">
                        Campaign
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] md:aspect-[32/13] rounded overflow-hidden bg-kod-black border border-white/10 shadow-md group flex-1 min-h-[180px]">
                    <Image
                      src="/system/hd/guidelines-spread.jpg"
                      alt="Brand guidelines and style manual book spread"
                      fill
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs sm:text-sm text-white/70 font-light tracking-wider select-none">
                      Guidelines
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
