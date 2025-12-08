import categoriesData from '../data/categories.json';
import { getAllPosts } from '../data/posts';

function normalizeCategory(value) {
  return value.toLowerCase().replace(/\s+/g, '-');
}

export function getCategories() {
  const posts = getAllPosts();
  return categoriesData.map(category => ({
    ...category,
    count: posts.filter(
      post => normalizeCategory(post.category) === normalizeCategory(category.slug)
    ).length
  }));
}

export function getCategoryBySlug(slug) {
  return categoriesData.find(
    cat => normalizeCategory(cat.slug) === normalizeCategory(slug)
  );
}