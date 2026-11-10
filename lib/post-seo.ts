import type { Metadata } from "next";
import type { Post } from "@/types/post";

export function buildPostMetadata(
  post: Post,
  basePath: "/blog" | "/news"
): Metadata {
  const defaultSuffix = basePath === "/news" ? "KOD News" : "KOD Journal";
  const seoTitle = post.seoTitle ?? `${post.title} | ${defaultSuffix}`;
  const seoDesc = post.seoDescription ?? post.excerpt;

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: { canonical: `${basePath}/${post.slug}` },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      url: `https://www.kod.lk${basePath}/${post.slug}`,
      images: [
        {
          url: post.coverImage.src,
          width: post.coverImage.width ?? 1600,
          height: post.coverImage.height ?? 900,
          alt: post.coverImage.alt,
        },
      ],
    },
  };
}

export function buildPostJsonLd(post: Post, basePath: "/blog" | "/news") {
  const articleUrl = `https://www.kod.lk${basePath}/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": basePath === "/news" ? "Article" : "BlogPosting",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    datePublished: new Date(post.publishedAt).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.linkedIn,
    },
    publisher: {
      "@type": "Organization",
      name: "KOD Universe",
      url: "https://www.kod.lk",
    },
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    image: `https://www.kod.lk${post.coverImage.src}`,
  };
}

