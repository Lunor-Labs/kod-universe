import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <Image
        src="/coming-soon.png"
        alt="KOD Universe - The Cave is Almost Open. Launching Soon."
        fill
        className="object-cover object-center"
        priority
      />
    </main>
  );
}
