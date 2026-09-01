import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-canvas"
      aria-label="Page not found"
    >
      <div className="container-site text-center py-24">
        {/* Large 404 */}
        <div className="relative mb-8">
          <p
            className="text-[8rem] md:text-[12rem] font-metropolis font-semibold text-earth/5 leading-none select-none"
            aria-hidden="true"
          >
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <p className="eyebrow mb-3">Lost in the universe</p>
              <h1 className="font-metropolis font-semibold text-earth text-display-lg mb-4">
                Page not found.
              </h1>
            </div>
          </div>
        </div>

        <p className="text-secondary text-base leading-relaxed max-w-sm mx-auto mb-10">
          The page you&apos;re looking for has drifted into another dimension. Let&apos;s get you back on course.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-signal-orange text-white 
                       px-6 py-3 rounded-sm font-medium text-sm tracking-wide
                       hover:bg-deep-crimson transition-all duration-200 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-earth text-earth 
                       px-6 py-3 rounded-sm font-medium text-sm tracking-wide
                       hover:bg-earth hover:text-canvas transition-all duration-200"
          >
            View our work
          </Link>
        </div>

        <p className="mt-12 font-serif italic text-secondary text-sm">
          Ancient ideas. Modern impact.
        </p>
      </div>
    </main>
  );
}
