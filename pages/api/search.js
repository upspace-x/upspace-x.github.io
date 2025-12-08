import { getAllPosts } from '../../data/posts'; // ✅ FIXED import

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Query parameter required' });
  }
  
  const query = q.toLowerCase();
  
  // ✅ Get all posts dynamically
  const allPosts = getAllPosts();
  
  const results = allPosts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query) ||
    post.tags.some(tag => tag.toLowerCase().includes(query))
  );
  
  return res.status(200).json({ results, count: results.length });
}