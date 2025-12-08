import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/SEO';
import PostCard from '../../components/blog/PostCard';
import { getAuthorById, getAuthors } from '../../lib/authors';
import { getAllPosts } from '../../data/posts';
import styles from '../../styles/Blog.module.css';

export default function AuthorPage({ author, authorPosts }) {
  return (
    <Layout>
      <SEO 
        title={`${author.name} - UpSpaceX`}
        description={author.bio}
      />

      <div className={styles.blog}>
        <div className="container">
          <header className={styles.authorHeader}>
            <div className={styles.authorAvatar}>
              {author.name.charAt(0)}
            </div>
            <div>
              <h1>{author.name}</h1>
              <p>{author.bio}</p>
              <p className={styles.postCount}>{authorPosts.length} articles</p>
            </div>
          </header>

          <div className={styles.grid}>
            {authorPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const authors = getAuthors();
  const paths = authors.map(author => ({
    params: { id: author.id }
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const author = getAuthorById(params.id);
  
  const allPosts = getAllPosts();
  
  const authorPosts = allPosts.filter(
    post => post.author.toLowerCase().replace(/\s+/g, '-') === params.id
  );
  
  return {
    props: {
      author,
      authorPosts
    }
  };
}