import type { Metadata } from "next";

export interface MetaImageAsset {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export const META_IMAGES = {
  home: {
    url: encodeURI("/meta/Futuristic Bronze Canyon Amphitheater-1.png"),
    width: 1672,
    height: 941,
    alt: "KOD Universe - 360° Creative Studio",
  },
  about: {
    url: encodeURI("/meta/Futuristic Canyon Cultural Complex-2.png"),
    width: 1672,
    height: 941,
    alt: "About KOD Universe - Story, Vision & Creative Force",
  },
  services: {
    url: encodeURI("/meta/Golden Cavern and Cosmic Portal-3.png"),
    width: 1730,
    height: 909,
    alt: "KOD Creative Services - Design, Marketing & Visual Storytelling",
  },
  portfolio: {
    url: encodeURI("/meta/Amber Arches_ Underground Art Gallery-4.png"),
    width: 1730,
    height: 909,
    alt: "KOD Universe Selected Works & Portfolio",
  },
  founder: {
    url: encodeURI("/meta/Cinematic Cave Atelier at Dusk-5.png"),
    width: 1734,
    height: 907,
    alt: "Ishara Kodithuwakku - Founder & Creative Director of KOD Universe",
  },
  contact: {
    url: encodeURI("/meta/Cosmic Cave Art Observatory-6.png"),
    width: 1734,
    height: 907,
    alt: "Connect with KOD Universe - Malabe, Sri Lanka",
  },
  gallery: {
    url: encodeURI("/meta/Futuristic Amber Cave Art Gallery-7.png"),
    width: 1734,
    height: 907,
    alt: "KOD Gallery - Art, Merch & Limited Drops",
  },
  news: {
    url: encodeURI(
      "/meta/Futuristic Observatory Newsroom Under the Stars-8.png",
    ),
    width: 1734,
    height: 907,
    alt: "KOD Universe News, Journal & Dispatches",
  },
} satisfies Record<string, MetaImageAsset>;

export function buildPageSocialMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image: MetaImageAsset;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const ogImage = {
    url: image.url,
    width: image.width,
    height: image.height,
    alt: image.alt,
  };

  return {
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "KOD Universe",
      url: path === "/" ? "https://www.kod.lk" : `https://www.kod.lk${path}`,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@koduniverse",
      images: [image.url],
    },
  };
}
