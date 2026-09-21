export type PostCategory =
  | "ALL"
  | "STUDIO NEWS"
  | "DESIGN ESSAYS"
  | "SPATIAL & ARCHITECTURE"
  | "BRAND STRATEGY"
  | "PACKAGING & CRAFT";

export type PostType = "NEWS" | "BLOG";

export interface PostAuthor {
  name: string;
  role: string;
  avatar: string;
  linkedIn?: string;
}

export interface PostContentSection {
  heading?: string;
  paragraphs: string[];
  quote?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  type: PostType;
  category: PostCategory;
  coverImage: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  author: PostAuthor;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  content: PostContentSection[];
}
