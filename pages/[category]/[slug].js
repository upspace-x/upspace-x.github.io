import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/SEO';
import { getAllPosts, getPostByCategoryAndSlug } from '../../data/posts';
import { getCategories } from '../../lib/categories';
import styles from '../../styles/PostContent.module.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Post({ post, allPosts, categories }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout showSidebar={true} posts={allPosts} categories={categories}>
        <section className={styles.section}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>Loading…</h1>
            <p>We’re preparing this article for you.</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout showSidebar={true} posts={allPosts} categories={categories}>
        <section className={styles.section}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1>Post not found</h1>
            <p>The article you're looking for doesn't exist.</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout showSidebar={true} posts={allPosts} categories={categories}>
      <SEO
        title={`${post.title} | UpSpaceX`}
        description={post.excerpt}
        image={post.coverImage}
        article={true}
        category={post.category}
      />

      <article className={`${styles.section} ${styles.article}`}>
        <div className="container">
          <header className={styles.header}>
            <span className={`${styles.category} ${post.category?.toLowerCase()}`}>
              {post.category}
            </span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  {post.author ? post.author.charAt(0).toUpperCase() : "?"}
                </div>
                <div className={styles.authorDetails}>
                  <p className={styles.authorName}>{post.author}</p>
                  <p className={styles.date}>
                    {format(new Date(post.date), 'MMMM dd, yyyy')} · {post.readTime} min read
                  </p>
                </div>
              </div>
            </div>
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className={styles.coverImage}
              />
            )}
          </header>

          <div className={styles.content}>
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={atomDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {post.tags?.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}

// ✅ Generate paths like /entertainment/egungun-of-lagos-flaunts
export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map(post => ({
    params: {
      category: post.category.toLowerCase().replace(/\s+/g, "-"),
      slug: post.slug,
    },
  }));

  return { paths, fallback: true }; // or 'blocking' if you prefer
}

// ✅ Fetch post data by BOTH category + slug
export async function getStaticProps({ params }) {
  const post = getPostByCategoryAndSlug(params.category, params.slug);
  const allPosts = getAllPosts();
  const categories = getCategories();

  return {
    props: { post: post || null, allPosts, categories },
    revalidate: 60,
  };
}