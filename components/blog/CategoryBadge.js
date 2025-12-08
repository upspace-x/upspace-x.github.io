import Link from 'next/link';
import styles from '../../styles/PostCard.module.css';

const CategoryBadge = ({ category }) => {
  const slug = category.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link href={`/blog/${slug}`}>
      <span className={styles.category}>{category}</span>
    </Link>
  );
};

export default CategoryBadge;