// Local mock data (useful for dev or fallback)
export const localPosts = [
  // ... your existing post objects (unchanged)
];

export const posts = localPosts;

// ✅ Get all posts
export function getAllPosts() {
  return [...localPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// ✅ Get post by slug
export function getPostBySlug(slug) {
  return localPosts.find((post) => post.slug === slug) || null;
}

// ✅ Get featured posts (e.g., by tag or author)
export function getFeaturedPosts() {
  // You can customize this logic — here we feature posts by Maruf Quadri
  return localPosts.filter((post) => post.author === 'Maruf Quadri');
}