import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import styles from '../../styles/PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={post.coverImage || '/images/placeholder.jpg'}
            alt={post.title}
            width={600}
            height={400}
            className={styles.image}
          />
          <span className={styles.category}>{post.category}</span>
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.author}>{post.author}</span>
          <span className={styles.date}>
            {format(new Date(post.date), 'MMM dd, yyyy')}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className={styles.title}>{post.title}</h2>
        </Link>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;