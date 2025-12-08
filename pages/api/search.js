import { getAllPosts } from '../../data/posts';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: 'Query parameter required' });
  }
  
  const query = q.trim().toLowerCase();
  const allPosts = getAllPosts();
  
  const results = allPosts
    .filter(post =>
      (post.title && post.title.toLowerCase().includes(query)) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
      (post.content && post.content.toLowerCase().includes(query)) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
    )
    .map(post => ({
      ...post,
      // ✅ Always include the correct URL
      url: `/${post.category.toLowerCase()}/${post.slug}`,
    }));
  
  return res.status(200).json({ results, count: results.length });
}