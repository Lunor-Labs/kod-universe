import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/blogs";
import { ArticleHeader } from "@/features/blog/ArticleHeader";
import { ArticleContent } from "@/features/blog/ArticleContent";
import { RelatedArticles } from "@/features/blog/RelatedArticles";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import { buildPostJsonLd, buildPostMetadata } from "@/lib/post-seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildPostMetadata(post, "/blog");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);
  const jsonLd = buildPostJsonLd(post, "/blog");

  return (
    <main className="relative bg-kod-canvas min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DecorativeBlossoms />
      <div className="relative z-10">
        <ArticleHeader post={post} basePath="/blog" />
        <ArticleContent post={post} basePath="/blog" />
        <RelatedArticles posts={related} basePath="/blog" />
      </div>
    </main>
  );
}
