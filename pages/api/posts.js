// pages/api/posts.js
import { localPosts } from '../../data/posts';

export default async function handler(req, res) {
  try {
    // Try fetching from CMS API
    const cmsRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/posts`);
    if (!cmsRes.ok) throw new Error('CMS fetch failed');

    const data = await cmsRes.json();
    return res.status(200).json({ posts: data.posts || [] });
  } catch (error) {
    console.error('CMS error (falling back to local):', error);
    // Fallback to local mock data
    return res.status(200).json({ posts: localPosts });
  }
}