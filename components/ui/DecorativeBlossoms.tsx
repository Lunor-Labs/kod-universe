import Image from "next/image";

export function DecorativeBlossoms() {
  return (
    <>
      <div className="absolute top-[26%] -left-[200px] w-[600px] h-[600px] pointer-events-none opacity-30 mix-blend-multiply z-30 transform -rotate-12">
        <Image src="/main/blossom.webp" alt="" fill className="object-contain" priority />
      </div>
      <div className="absolute top-[40%] -right-[200px] w-[600px] h-[600px] pointer-events-none opacity-[0.15] mix-blend-multiply z-30 transform rotate-135">
        <Image src="/main/blossom.webp" alt="" fill className="object-contain" />
      </div>
      <div className="absolute top-[82%] left-0 w-[1000px] h-[1000px] pointer-events-none opacity-[0.12] mix-blend-multiply z-30 transform rotate-[360deg]">
        <Image src="/main/blossom.webp" alt="" fill className="object-contain" />
      </div>
    </>
  );
}
