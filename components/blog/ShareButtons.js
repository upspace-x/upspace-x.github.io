import { FiTwitter, FiFacebook, FiLinkedin, FiLink } from 'react-icons/fi';
import { useState } from 'react';
import styles from '../../styles/PostContent.module.css';

const ShareButtons = ({ post }) => {
  const [copied, setCopied] = useState(false);
  
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const title = post.title;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.shareButtons}>
      <span className={styles.shareLabel}>Share:</span>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
        <FiTwitter />
      </a>
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <FiFacebook />
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
        <FiLinkedin />
      </a>
      <button onClick={copyLink} aria-label="Copy link">
        <FiLink />
        {copied && <span className={styles.copied}>Copied!</span>}
      </button>
    </div>
  );
};

export default ShareButtons;