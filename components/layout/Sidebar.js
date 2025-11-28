import Link from 'next/link';
import { getCategories } from '../../lib/categories';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const categories = getCategories();
  
  const recentPosts = [
    { title: "The Future of AI in 2025", slug: "future-of-artificial-intelligence" },
    { title: "Startup Funding Guide", slug: "startup-funding-guide-2025" },
    { title: "Remote Work Best Practices", slug: "remote-work-best-practices" }
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Categories Widget */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>Categories</h3>
        <ul className={styles.categoryList}>
          {categories.map(category => (
            <li key={category.slug}>
              <Link href={`/blog/category/${category.slug}`}>
                {category.name}
                <span className={styles.count}>({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>Recent Posts</h3>
        <ul className={styles.postList}>
          {recentPosts.map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Widget */}
      <div className={`${styles.widget} ${styles.newsletterWidget}`}>
        <h3 className={styles.widgetTitle}>Newsletter</h3>
        <p>Get weekly updates delivered to your inbox.</p>
        <form className={styles.form}>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;