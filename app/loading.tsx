import Image from "next/image";

export default function Loading() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] bg-[#f7f3f1] flex items-center justify-center select-none pointer-events-none"
      style={{ backgroundColor: "#f7f3f1" }}
    >
      <div className="animate-kod-eye-blink flex items-center justify-center">
        <Image
          src="/icons/KoD-Eye.webp"
          alt="Loading..."
          width={90}
          height={106}
          priority
          className="w-[84px] sm:w-[96px] h-auto object-contain select-none pointer-events-none"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
     <p>Loading...</p>
    </div>
  );
}
