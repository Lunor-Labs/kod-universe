import type { Metadata } from "next";
import { GalleryCinematic } from "@/components/gallery/GalleryCinematic";
import { META_IMAGES, buildPageSocialMetadata } from "@/lib/meta-images";

const galleryDesc =
  "KoD Gallery is where art meets commerce. Original creations, limited drops, prints, merch and more.";

export const metadata: Metadata = {
  title: "KoD Gallery - Art, Merch & Limited Drops",
  description: galleryDesc,
  alternates: { canonical: "/gallery" },
  ...buildPageSocialMetadata({
    title: "KoD Gallery - Art, Merch & Limited Drops | KOD Universe",
    description: galleryDesc,
    path: "/gallery",
    image: META_IMAGES.gallery,
  }),
};

export default function GalleryPage() {
  return <GalleryCinematic />;
}
