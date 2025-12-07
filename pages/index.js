import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.css';
import PostCard from '../components/blog/PostCard';
import { getFeaturedPosts } from '../data/posts';

export default function Home({ featuredPosts }) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.brand}>UpSpaceX</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Curated insights in technology, business, and innovation — daily.
          </p>
          <div className={styles.cta}>
            <a href="/blog" className={styles.ctaButton}>Explore Blog</a>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className={`${styles.section} ${styles.featured}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Posts</h2>
          <div className={styles.grid}>
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className={`${styles.section} ${styles.categories}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explore Topics</h2>
          <div className={styles.categoryGrid}>
            <a href="/blog/category/technology" className={styles.categoryCard}>Technology</a>
            <a href="/blog/category/business" className={styles.categoryCard}>Business</a>
            <a href="/blog/category/entertainment" className={styles.categoryCard}>Entertainment</a>
            <a href="/blog/category/lifestyle" className={styles.categoryCard}>Lifestyle</a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`${styles.section} ${styles.newsletter}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Stay Ahead</h2>
          <p className={styles.subtitle}>Subscribe for weekly insights and updates.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

// ✅ Fetch posts dynamically at build time
export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts().slice(0, 4); // ✅ limit to 4 posts
  
  return {
    props: {
      featuredPosts,
    },
    revalidate: 60, // ✅ ISR: refresh every 60s
  };
}