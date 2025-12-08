// components/layout/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import Search from '../common/Search';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState('light');
  
  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // ✅ Theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };
  
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          {/* ✅ Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo1.png"
              alt="UpSpaceX Logo"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* ✅ Navigation */}
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>

            {/* ✅ Dropdown for Categories */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => !isMobile && setCategoriesOpen(true)}
              onMouseLeave={() => !isMobile && setCategoriesOpen(false)}
            >
              <button
                className={styles.navButton}
                onClick={() => isMobile && setCategoriesOpen(!categoriesOpen)}
              >
                Categories
              </button>
              <div
                className={`${styles.dropdownMenu} ${
                  categoriesOpen ? 'open' : ''
                }`}
              >
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
            </div>

            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* ✅ Actions */}
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

            {/* ✅ Theme Toggle */}
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Search overlay */}
      <Search isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;