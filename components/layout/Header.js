import Link from 'next/link';
import Image from 'next/image';   // ✅ Import Next.js Image component
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import Search from '../common/Search';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          {/* ✅ Replace text logo with image */}
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.jpeg" 
              alt="UpSpaceX Logo" 
              width={150} 
              height={40} 
              priority   // ensures logo loads fast
            />
          </Link>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/blog/category/technology">Technology</Link>
            <Link href="/blog/category/business">Business</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className={styles.actions}>
            <button 
              className={styles.searchBtn} 
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <FiSearch />
            </button>
            <button 
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      <Search isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;