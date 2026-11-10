import type { Metadata } from "next";
import Image from "next/image";
import { ComingSoonCountdown } from "@/components/coming-soon/ComingSoonCountdown";
import { formatCountdownLabel, getCountdownParts } from "@/lib/launch";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const now = Date.now();
  const parts = getCountdownParts(now);
  const summary = formatCountdownLabel(parts);
  const minuteBucket = Math.floor(now / 60000);

  const title = parts.isLaunched
    ? "The Cave Is Open - KOD Universe"
    : `Launching in ${summary} - The Cave Is Almost Open`;

  const description = parts.isLaunched
    ? "KOD Universe is now live. Explore design, marketing, and visual storytelling."
    : `Countdown: ${summary} remaining until launch on November 11, 2026 at 11:11:11 AM SLST.`;

  const ogImageUrl = `/api/og/coming-soon?t=${minuteBucket}`;

  return {
    title,
    description,
    alternates: { canonical: "/coming-soon" },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "KOD Universe",
      url: "https://www.kod.lk/coming-soon",
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@koduniverse",
      images: [ogImageUrl],
    },
  };
}

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
