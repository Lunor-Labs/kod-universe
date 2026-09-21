import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import type { Post } from "@/types/post";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col bg-white rounded overflow-hidden border border-kod-border/60 hover:border-kod-orange/40 hover:shadow-xl transition-all duration-300 h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-kod-mist block"
      >
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-kod-canvas/90 backdrop-blur-md text-kod-earth border border-kod-border/50 shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-kod-text-2 mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-kod-clay" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-kod-clay" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-kod-earth group-hover:text-kod-orange transition-colors duration-200 line-clamp-2 mb-2.5">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>

          <p className="text-sm text-kod-text-2 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-4 border-t border-kod-border/40 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-kod-border/60">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium text-kod-earth truncate max-w-[130px]">
              {post.author.name}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-kod-earth group-hover:text-kod-orange transition-colors"
            aria-label={`Read ${post.title}`}
          >
            <span>Read</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
