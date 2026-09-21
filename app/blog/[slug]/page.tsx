import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getRelatedPosts } from "@/data/posts";
import { ArticleHeader } from "@/features/blog/ArticleHeader";
import { ArticleContent } from "@/features/blog/ArticleContent";
import { RelatedArticles } from "@/features/blog/RelatedArticles";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";

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

  return {
    title: `${post.title} | KOD Journal`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | KOD Journal`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage.src,
          alt: post.coverImage.alt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);

  return (
    <main className="relative bg-kod-canvas min-h-screen overflow-hidden">
      <DecorativeBlossoms />
      <div className="relative z-10">
        <ArticleHeader post={post} />
        <ArticleContent post={post} />
        <RelatedArticles posts={related} />
      </div>
    </main>
  );
}
