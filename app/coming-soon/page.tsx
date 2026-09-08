import Image from "next/image";
import { KodLogo } from "@/components/ui/KodLogo";

export default function ComingSoonPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/coming-soon.jpg"
          alt="KOD Universe - The Cave is Almost Open"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
      </div>
      <div className="relative z-10 flex flex-col items-center pt-40">
        <h1 className="font-serif italic text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-wide uppercase drop-shadow-lg">
          The Cave is Almost Open
        </h1>
        <p className="text-blue-400/80 text-lg md:text-xl lg:text-2xl mb-10 font-medium tracking-wide drop-shadow-md">
          Our new website is on the way
        </p>
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-blue-400/40 bg-blue-900/10 backdrop-blur-sm text-blue-400/90 tracking-[0.2em] uppercase text-sm md:text-2xl transition-all hover:bg-blue-900/20 hover:border-blue-200/60 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          Launching Soon
        </div>
      </div>
    </main>
  );
}
