"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Check, Copy, Quote } from "lucide-react";
import { LinkedinIcon, TwitterXIcon } from "@/components/ui/SocialIcons";
import type { Post } from "@/types/post";

interface ArticleContentProps {
  post: Post;
}

export function ArticleContent({ post }: ArticleContentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(post.title);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <p className="text-lg sm:text-xl md:text-2xl text-kod-earth font-light leading-relaxed border-l-2 border-kod-orange pl-6 py-1">
          {post.excerpt}
        </p>
      </div>

      <div className="space-y-12 text-kod-earth/90 text-base sm:text-lg leading-relaxed">
        {post.content.map((section, idx) => (
          <section key={idx} className="space-y-6">
            {section.heading && (
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-kod-earth pt-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-kod-orange" />
                {section.heading}
              </h2>
            )}

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-kod-text-2 leading-[1.8]">
                {p}
              </p>
            ))}

            {section.quote && (
              <blockquote className="my-8 p-8 rounded bg-white border border-kod-border/60 shadow-sm relative overflow-hidden">
                <Quote className="absolute -right-2 -bottom-2 w-24 h-24 text-kod-clay/10 rotate-180 pointer-events-none" />
                <p className="font-editorial italic text-xl sm:text-2xl text-kod-earth relative z-10 leading-relaxed">
                  "{section.quote}"
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-kod-clay">
                  <span className="w-6 h-[1.5px] bg-kod-clay inline-block" />
                  KOD Perspective
                </div>
              </blockquote>
            )}

            {section.image && (
              <figure className="my-10">
                <div className="relative aspect-[16/10] w-full rounded overflow-hidden border border-kod-border/50 bg-kod-mist shadow-md">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                {section.image.caption && (
                  <figcaption className="text-center text-xs text-kod-text-2/80 mt-2.5 italic">
                    {section.image.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-kod-border/60">
        <h4 className="text-xs font-bold uppercase tracking-widest text-kod-text-2 mb-4">
          Tags & Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="text-xs px-3.5 py-1.5 rounded bg-white text-kod-earth/80 hover:text-kod-orange hover:border-kod-orange/40 border border-kod-border/60 transition-colors font-medium"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 rounded bg-white border border-kod-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-kod-earth">
          <Share2 className="w-4 h-4 text-kod-clay" />
          <span>Share this Dispatch</span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-kod-border text-xs font-semibold text-kod-earth hover:bg-kod-canvas transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-600">Copied Link!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-kod-text-2" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="p-2 rounded-full border border-kod-border text-kod-earth hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:bg-kod-canvas transition-colors"
          >
            <LinkedinIcon size={16} className="text-[#0a66c2]" />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="p-2 rounded-full border border-kod-border text-kod-earth hover:text-black hover:border-black/40 hover:bg-kod-canvas transition-colors"
          >
            <TwitterXIcon size={16} className="text-black" />
          </a>
        </div>
      </div>
    </article>
  );
}
