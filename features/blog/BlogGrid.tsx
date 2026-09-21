import { BlogCard } from "./BlogCard";
import type { Post } from "@/types/post";

interface BlogGridProps {
  posts: Post[];
  title?: string;
  onResetFilters?: () => void;
}

export function BlogGrid({
  posts,
  title = "Recent Dispatches & Articles",
  onResetFilters,
}: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center bg-white rounded border border-dashed border-kod-border p-12 max-w-2xl mx-auto my-12">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-kod-mist flex items-center justify-center text-kod-clay text-xl font-bold">
          !
        </div>
        <h3 className="text-xl font-bold text-kod-earth mb-2">
          No Dispatches Found
        </h3>
        <p className="text-sm text-kod-text-2 mb-6 max-w-md mx-auto">
          We couldn't find any articles matching your search query or selected
          category.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-6 py-2.5 rounded-full bg-kod-earth text-white text-xs font-bold tracking-wider uppercase hover:bg-kod-orange transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="mb-24">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-kod-border/60">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-kod-earth uppercase">
          {title}
        </h2>
        <span className="text-xs font-semibold tracking-wider text-kod-clay uppercase">
          {posts.length} {posts.length === 1 ? "Story" : "Stories"}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
