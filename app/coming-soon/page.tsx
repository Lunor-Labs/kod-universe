import type { Metadata } from "next";
import Image from "next/image";
import { META_IMAGES, buildPageSocialMetadata } from "@/lib/meta-images";
import { ComingSoonCountdown } from "@/components/coming-soon/ComingSoonCountdown";

export const metadata: Metadata = {
  title: "Launching Soon",
  description: "The Cave is Almost Open. KOD Universe website is on the way.",
  alternates: { canonical: "/coming-soon" },
  ...buildPageSocialMetadata({
    title: "Launching Soon - KOD Universe",
    description: "The Cave is Almost Open. KOD Universe website is on the way.",
    path: "/coming-soon",
    image: META_IMAGES.home,
  }),
};

export default function ComingSoonPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/coming-soon.jpg"
          alt="KOD Universe - The Cave is Almost Open"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
      </div>
      <div className="relative z-10 flex flex-col items-center pt-48">
        <h1 className="font-serif italic text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-wide uppercase drop-shadow-lg">
          The Cave is Almost Open
        </h1>
        <p className="text-blue-400/80 text-lg md:text-xl lg:text-2xl mb-8 font-medium tracking-wide drop-shadow-md">
          Our new website is on the way
        </p>
        <ComingSoonCountdown />
      </div>
    </main>
  );
}
