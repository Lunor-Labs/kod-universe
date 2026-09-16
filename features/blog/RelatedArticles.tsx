import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "./BlogCard";
import type { Post } from "@/types/post";

interface RelatedArticlesProps {
  posts: Post[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="border-t border-kod-border/60 bg-kod-canvas/60 py-20">
      <div className="container-site px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-kod-clay">
              Continue Reading
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-kod-earth uppercase mt-1">
              Further Dispatches & Stories
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kod-earth hover:text-kod-orange transition-colors"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
