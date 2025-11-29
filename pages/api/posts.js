// pages/api/posts.js
import { localPosts } from '../../data/posts';

export default function handler(req, res) {
  // In a real CMS setup, you’d fetch from your database or external API here
  res.status(200).json({ posts: localPosts });
}