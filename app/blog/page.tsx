import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { BlogListingView } from "@/features/blog/BlogListingView";

export const metadata: Metadata = {
  title: "Journal & Dispatches",
  description:
    "Essays on design philosophy, architectural horizons, brand engineering, and studio dispatches from KOD Universe.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Journal & Dispatches - KOD Universe",
    description:
      "Essays on design philosophy, architectural horizons, brand engineering, and studio dispatches from KOD Universe.",
    type: "website",
    url: "https://www.kod.lk/blog",
  },
};

export default function BlogPage() {
  return <BlogListingView initialPosts={posts} />;
}
