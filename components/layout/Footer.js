// components/layout/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* ✅ About / Logo */}
          <div className={styles.about}>
            <Image
              src="/logo2.png"
              alt="UpSpaceX Logo"
              width={150}
              height={40}
              priority
            />
            <p>Your daily space for everything that matters.</p>
            <div className={styles.social}>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
            </div>
          </div>

          {/* ✅ Quick Links */}
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>

          {/* ✅ Categories */}
          <div className={styles.links}>
            <h4>Categories</h4>
            <Link href="/blog/newsinsights">News & Insights</Link>
            <Link href="/blog/education">Education</Link>
            <Link href="/blog/careersjobs">Careers & Jobs</Link>
            <Link href="/blog/technology">Technology</Link>
            <Link href="/blog/business">Business</Link>
            <Link href="/blog/sports">Sports</Link>
            <Link href="/blog/lifestyle">Lifestyle</Link>
            <Link href="/blog/health">Health</Link>
            <Link href="/blog/opinion">Opinion</Link>
          </div>

          {/* ❌ Newsletter removed */}
        </div>

        {/* ✅ Bottom bar */}
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} UpSpaceX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;