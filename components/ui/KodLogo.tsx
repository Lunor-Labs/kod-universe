import Image from "next/image";
import { cn } from "@/lib/utils";

export function KodLogo({ className = "" }: { className?: string }) {
  // If className includes w-auto, we should supply an aspect ratio so the container has width
  return (
    <div className={cn("relative aspect-square w-10 h-10", className, className.includes("w-auto") ? "!w-10" : "")}>
      <Image
        src="/logo-black-1.png"
        alt="KOD Universe"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
