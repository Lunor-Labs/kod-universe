import Image from "next/image";
import { cn } from "@/lib/utils";

export function KodLogo({ className = "" }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square w-10 h-10", className, className.includes("w-auto") ? "!w-24" : "")}>
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
