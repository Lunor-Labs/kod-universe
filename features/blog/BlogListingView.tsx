"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { BlogHero } from "./BlogHero";
import { FeaturedArticle } from "./FeaturedArticle";
import { BlogGrid } from "./BlogGrid";
import { DecorativeBlossoms } from "@/components/ui/DecorativeBlossoms";
import type { Post, PostCategory } from "@/types/post";

interface BlogListingViewProps {
  initialPosts: Post[];
}

const CATEGORY_MAP: Record<string, PostCategory> = {
  ALL: "ALL",
  "STUDIO NEWS": "STUDIO NEWS",
  NEWS: "STUDIO NEWS",
  "DESIGN ESSAYS": "DESIGN ESSAYS",
  ESSAYS: "DESIGN ESSAYS",
  BLOG: "DESIGN ESSAYS",
  "SPATIAL & ARCHITECTURE": "SPATIAL & ARCHITECTURE",
  SPATIAL: "SPATIAL & ARCHITECTURE",
  ARCHITECTURE: "SPATIAL & ARCHITECTURE",
  "BRAND STRATEGY": "BRAND STRATEGY",
  BRAND: "BRAND STRATEGY",
  "PACKAGING & CRAFT": "PACKAGING & CRAFT",
  PACKAGING: "PACKAGING & CRAFT",
};

function BlogListingContent({ initialPosts }: BlogListingViewProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<PostCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const normalized = categoryParam.toUpperCase().replace(/\+/g, " ");
      if (CATEGORY_MAP[normalized]) {
        setActiveCategory(CATEGORY_MAP[normalized]);
      }
    }
  }, [searchParams]);

  const handleSelectCategory = (category: PostCategory) => {
    setActiveCategory(category);
    const url = new URL(window.location.href);
    if (category === "ALL") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    window.history.replaceState({}, "", url.toString());
  };

  const handleResetFilters = () => {
    setActiveCategory("ALL");
    setSearchQuery("");
    const url = new URL(window.location.href);
    url.searchParams.delete("category");
    window.history.replaceState({}, "", url.toString());
  };

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "ALL" || post.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        (post.subtitle && post.subtitle.toLowerCase().includes(query)) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, activeCategory, searchQuery]);

  const isDefaultView = activeCategory === "ALL" && !searchQuery.trim();
  const featuredPost = useMemo(() => {
    if (isDefaultView) {
      return initialPosts.find((p) => p.featured) || initialPosts[0];
    }
    return null;
  }, [initialPosts, isDefaultView]);

  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  return (
    <div className="relative bg-kod-canvas min-h-screen overflow-hidden">
      <DecorativeBlossoms />

      <BlogHero
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalPostsCount={initialPosts.length}
      />

      <main className="container-site relative z-20 px-4 sm:px-6 lg:px-8">
        {featuredPost && <FeaturedArticle post={featuredPost} />}

        <BlogGrid
          posts={gridPosts}
          title={
            activeCategory === "ALL"
              ? searchQuery
                ? `Search Results for "${searchQuery}"`
                : "Latest Dispatches"
              : `${activeCategory}`
          }
          onResetFilters={handleResetFilters}
        />
      </main>
    </div>
  );
}

export function BlogListingView({ initialPosts }: BlogListingViewProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-kod-canvas flex items-center justify-center">
          <div className="text-sm font-semibold tracking-widest uppercase text-kod-clay animate-pulse">
            Loading Dispatches...
          </div>
        </div>
      }
    >
      <BlogListingContent initialPosts={initialPosts} />
    </Suspense>
  );
}
