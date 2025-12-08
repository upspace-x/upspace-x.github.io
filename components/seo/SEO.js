import Head from 'next/head';
import { useRouter } from 'next/router';

// ✅ Category → Icon mapping
const categoryIcons = {
  technology: '💻',
  business: '💼',
  newsinsights: '📰',
  education: '📚',
  careersjobs: '📈',
  sports: '⚽',
  lifestyle: '🌿',
  health: '❤️',
  opinion: '✍️',
  entertainment: '🎬',
};

const SEO = ({
  title = 'UpSpaceX - Your daily space for everything that matters.',
  description = 'Your daily space for everything that matters.',
  image = '/images/og-image.jpg',
  article = false,
  keywords = 'UpSpaceX, technology, business, education, careers, sports, lifestyle, health, opinion',
  category = null, // ✅ new optional prop
}) => {
  const router = useRouter();
  
  // ✅ Use environment variables instead of hardcoding
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || '';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'UpSpaceX';
  const canonicalURL = `${siteURL}${router.asPath}`;
  
  // ✅ Add icon if category is provided
  const categoryKey = category ? category.toLowerCase() : null;
  const icon = categoryKey && categoryIcons[categoryKey];
  const seoTitle = icon ? `${icon} ${title}` : title;
  const seoDescription = icon ? `${icon} ${description}` : description;
  
  return (
    <Head>
      {/* ✅ Basic Meta */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalURL} />

      {/* ✅ Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:image" content={`${siteURL}${image}`} />
      <meta property="og:site_name" content={siteName} />

      {/* ✅ Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${siteURL}${image}`} />

      {/* ✅ Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO;