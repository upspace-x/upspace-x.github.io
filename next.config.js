/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Use remotePatterns to allow external images safely
    remotePatterns: [
      { protocol: 'https', hostname: 'upspacex.vercel.app' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  env: {
    // ✅ Only expose public variables here
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
  },
};

module.exports = nextConfig;