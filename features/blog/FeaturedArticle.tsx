import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import type { Post } from "@/types/post";

interface FeaturedArticleProps {
  post: Post;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <article className="group relative bg-white rounded overflow-hidden border border-kod-border/70 hover:border-kod-orange/50 hover:shadow-2xl transition-all duration-500 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <Link
          href={`/blog/${post.slug}`}
          className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] w-full overflow-hidden bg-kod-mist block"
        >
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />

          <div className="absolute top-6 left-6 z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-kod-orange text-white shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Dispatch
            </span>
          </div>
        </Link>

        <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-kod-text-2 uppercase tracking-wider mb-4">
              <span className="text-kod-clay font-bold">{post.category}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-normal text-kod-text-2 lowercase tracking-normal">
                <Clock className="w-3.5 h-3.5 text-kod-clay" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-normal text-kod-text-2 tracking-normal">
                <Calendar className="w-3.5 h-3.5 text-kod-clay" />
                {post.publishedAt}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-kod-earth group-hover:text-kod-orange transition-colors duration-300 leading-tight mb-4">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            {post.subtitle && (
              <p className="text-sm sm:text-base font-medium text-kod-clay mb-4">
                {post.subtitle}
              </p>
            )}

            <p className="text-base text-kod-text-2 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-kod-canvas text-kod-earth/80 border border-kod-border/40 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-kod-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-kod-border">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-kod-earth">
                  {post.author.name}
                </p>
                <p className="text-xs text-kod-text-2">{post.author.role}</p>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-kod-earth text-white hover:bg-kod-orange transition-all duration-300 text-xs font-bold tracking-wider uppercase group-hover:shadow-md"
            >
              <span>Read Story</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
