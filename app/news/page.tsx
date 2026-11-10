import type { Metadata } from "next";
import { posts } from "@/data/blogs";
import { BlogListingView } from "@/features/blog/BlogListingView";
import { META_IMAGES, buildPageSocialMetadata } from "@/lib/meta-images";

const newsDesc =
  "Official announcements, studio updates, and latest press from KOD Universe.";

export const metadata: Metadata = {
  title: "News & Dispatches",
  description: newsDesc,
  alternates: { canonical: "/news" },
  ...buildPageSocialMetadata({
    title: "News & Dispatches - KOD Universe",
    description: newsDesc,
    path: "/news",
    image: META_IMAGES.news,
  }),
};

export default function NewsPage() {
  return <BlogListingView initialPosts={posts} basePath="/news" />;
}
