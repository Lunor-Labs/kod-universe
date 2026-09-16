import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { BlogListingView } from "@/features/blog/BlogListingView";

export const metadata: Metadata = {
  title: "News & Dispatches",
  description:
    "Official announcements, studio updates, and latest press from KOD Universe.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News & Dispatches - KOD Universe",
    description:
      "Official announcements, studio updates, and latest press from KOD Universe.",
    type: "website",
    url: "https://www.kod.lk/news",
  },
};

export default function NewsPage() {
  return <BlogListingView initialPosts={posts} />;
}
