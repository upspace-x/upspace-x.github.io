import { getAllPosts } from '../data/posts'; // ✅ FIXED import

// ✅ Utility: normalize category names to slugs
function normalizeCategory(value) {
  return value.toLowerCase().replace(/\s+/g, '-');
}

export function getAllPostsSorted() {
  return getAllPosts().sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}

export function getPostsByCategory(categorySlug) {
  const posts = getAllPosts();
  return posts.filter(
    post => normalizeCategory(post.category) === normalizeCategory(categorySlug)
  );
}

export function getRecentPosts(limit = 5) {
  return getAllPostsSorted().slice(0, limit);
}

export function getFeaturedPosts() {
  const posts = getAllPosts();
  return posts.filter(post => post.featured);
}