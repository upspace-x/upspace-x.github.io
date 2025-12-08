import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/SEO';
import PostCard from '../../components/blog/PostCard';
import Pagination from '../../components/common/Pagination';
import { getPostsByCategory } from '../../lib/posts'; // ✅ FIXED import
import { getCategories } from '../../lib/categories'; // ✅ FIXED import
import { useState, useEffect } from 'react';
import styles from '../../styles/Blog.module.css';

const POSTS_PER_PAGE = 12;

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

export default function CategoryPage({ posts, category, categories }) {
  const router = useRouter();
  const { page = '1' } = router.query;
  
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  
  useEffect(() => {
    setCurrentPage(parseInt(page));
  }, [page]);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push({
      pathname: `/blog/${category.slug}`,
      query: { page: newPage }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const categoryKey = category.slug ? category.slug.toLowerCase() : null;
  const icon = categoryKey && categoryIcons[categoryKey];
  
  return (
    <Layout showSidebar={true} posts={posts} categories={categories}>
      <SEO
        title={`${category.name} Articles - UpSpaceX`}
        description={category.description || `Explore articles in ${category.name}`}
      />

      <div className={styles.blog}>
        <div className="container">
          <header className={styles.header}>
            <h1>
              {icon && <span className={styles.categoryIcon}>{icon}</span>}
              {category.name}
            </h1>
            <p>{posts.length} articles</p>
          </header>

          {currentPosts.length > 0 ? (
            <>
              <div className={styles.grid}>
                {currentPosts.map(post => (
                  <PostCard
                    key={post.slug}
                    post={{
                      ...post,
                      url: `/${post.category.toLowerCase()}/${post.slug}`
                    }}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className={styles.noResults}>
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map(cat => ({
    params: { category: cat.slug }
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = getPostsByCategory(params.category);
  const categories = getCategories();
  const category = categories.find(cat => cat.slug === params.category);
  
  return {
    props: {
      posts,
      category: category || { slug: params.category, name: params.category, description: '' },
      categories
    }
  };
}