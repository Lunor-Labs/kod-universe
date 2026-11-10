import type { Metadata } from "next";
import { posts } from "@/data/blogs";
import { BlogListingView } from "@/features/blog/BlogListingView";
import { META_IMAGES, buildPageSocialMetadata } from "@/lib/meta-images";

const blogDesc =
  "Essays on design philosophy, architectural horizons, brand engineering, and studio dispatches from KOD Universe.";

export const metadata: Metadata = {
  title: "Journal & Dispatches",
  description: blogDesc,
  alternates: { canonical: "/blog" },
  ...buildPageSocialMetadata({
    title: "Journal & Dispatches - KOD Universe",
    description: blogDesc,
    path: "/blog",
    image: META_IMAGES.news,
  }),
};

export default function BlogPage() {
  return <BlogListingView initialPosts={posts} />;
}
