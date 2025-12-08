import categoriesData from '../data/categories.json';
import { getAllPosts } from '../data/posts'; // ✅ FIXED import

// ✅ Utility: normalize category names to slugs
function normalizeCategory(value) {
  return value.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Get all categories with dynamic post counts
 */
export function getCategories() {
  const posts = getAllPosts(); // ✅ fetch posts dynamically
  return categoriesData.map(category => ({
    ...category,
    count: posts.filter(
      post => normalizeCategory(post.category) === normalizeCategory(category.slug)
    ).length
  }));
}

/**
 * Get a single category by slug
 */
export function getCategoryBySlug(slug) {
  return categoriesData.find(
    cat => normalizeCategory(cat.slug) === normalizeCategory(slug)
  );
}