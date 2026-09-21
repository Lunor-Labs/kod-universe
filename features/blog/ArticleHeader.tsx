import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import type { Post } from "@/types/post";

interface ArticleHeaderProps {
  post: Post;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="pt-28 sm:pt-36 md:pt-40 pb-8 sm:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-1.5 text-xs text-kod-text-2 mb-8"
        >
          <Link
            href="/"
            className="hover:text-kod-earth transition-colors uppercase tracking-wider font-medium"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-kod-border" />
          <Link
            href="/blog"
            className="hover:text-kod-earth transition-colors uppercase tracking-wider font-medium"
          >
            Journal
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-kod-border" />
          <Link
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="text-kod-clay hover:text-kod-orange transition-colors uppercase tracking-wider font-semibold"
          >
            {post.category}
          </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-kod-text-2 mb-5">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-kod-orange/10 text-kod-orange border border-kod-orange/20">
            {post.type}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-kod-clay" />
            {post.publishedAt}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-kod-clay" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-kod-earth font-metropolis leading-[1.15] mb-6">
          {post.title}
        </h1>

        {post.subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl font-light text-kod-text-2 leading-relaxed mb-8">
            {post.subtitle}
          </p>
        )}

        <div className="flex items-center justify-between py-6 border-y border-kod-border/60 mb-10">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-kod-clay/30">
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

          {post.author.linkedIn && (
            <a
              href={post.author.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.author.name} on LinkedIn`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-kod-border bg-white text-xs font-semibold text-kod-earth hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-colors"
            >
              <LinkedinIcon size={14} className="text-[#0a66c2]" />
              <span className="hidden sm:inline">Connect</span>
            </a>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded overflow-hidden shadow-xl border border-kod-border/50 bg-kod-mist">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        {post.coverImage.alt && (
          <p className="text-center text-xs text-kod-text-2/80 mt-3 font-normal italic">
            {post.coverImage.alt}
          </p>
        )}
      </div>
    </header>
  );
}
