import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ✅ Correct path to your Markdown files
const postsDirectory = path.join(process.cwd(), 'content/posts');

// ✅ Helper: calculate read time (~200 words/minute)
function calculateReadTime(text) {
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// ✅ Normalize category slug
function normalizeCategory(category) {
  return category ? category.toLowerCase().replace(/\s+/g, '-') : 'uncategorized';
}

// ✅ Get all posts
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const categorySlug = normalizeCategory(data.category);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      coverImage: data.image,
      featured: data.featured || false,
      content,
      readTime: calculateReadTime(content),
      url: `/${categorySlug}/${slug}`, // ✅ fixed
    };
  });

  // Sort newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// ✅ Get post by slug
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`); // ✅ fixed
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const categorySlug = normalizeCategory(data.category);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    category: data.category,
    tags: data.tags || [],
    coverImage: data.image,
    featured: data.featured || false,
    content,
    readTime: calculateReadTime(content),
    url: `/${categorySlug}/${slug}`, // ✅ fixed
  };
}

// ✅ Get post by BOTH category and slug
export function getPostByCategoryAndSlug(categorySlug, slug) {
  const posts = getAllPosts();
  const post = posts.find(
    (p) =>
      p.slug === slug &&
      normalizeCategory(p.category) === categorySlug.toLowerCase()
  );
  return post || null;
}

// ✅ Get posts by category
export function getPostsByCategory(categorySlug) {
  const posts = getAllPosts();
  return posts.filter(
    (post) => normalizeCategory(post.category) === categorySlug.toLowerCase()
  );
}

// ✅ Get featured posts
export function getFeaturedPosts() {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured);
}