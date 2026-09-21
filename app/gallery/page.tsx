import type { Metadata } from "next";
import { GalleryCinematic } from "@/components/gallery/GalleryCinematic";

export const metadata: Metadata = {
  title: "KoD Gallery — Art, Merch & Limited Drops",
  description:
    "KoD Gallery is where art meets commerce. Original creations, limited drops, prints, merch and more.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryCinematic />;
}
