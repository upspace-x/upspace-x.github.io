import { posts } from '../data/posts';

// ✅ Utility: normalize category names to slugs
function normalizeCategory(value) {
  return value.toLowerCase().replace(/\s+/g, '-');
}

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}

export function getPostsByCategory(categorySlug) {
  return posts.filter(post => normalizeCategory(post.category) === normalizeCategory(categorySlug));
}

export function getRecentPosts(limit = 5) {
  return getAllPosts().slice(0, limit);
}

export function getFeaturedPosts() {
  return posts.filter(post => post.featured);
}