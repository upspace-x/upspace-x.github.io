import { useEffect } from 'react';
import styles from '../../styles/Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 2; // how many pages to show around current

    // Always show first page
    pages.push(1);

    // Add ellipsis if currentPage is far from start
    if (currentPage > maxVisible + 2) {
      pages.push('ellipsis-start');
    }

    // Pages around current
    const start = Math.max(2, currentPage - maxVisible);
    const end = Math.min(totalPages - 1, currentPage + maxVisible);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis if currentPage is far from end
    if (currentPage < totalPages - (maxVisible + 1)) {
      pages.push('ellipsis-end');
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  // ✅ Keyboard navigation: left/right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        onPageChange(currentPage - 1);
      }
      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, onPageChange]);

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      {/* Prev button */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={styles.button}
          aria-label="Previous page"
        >
          ← Prev
        </button>
      )}

      {/* Page numbers */}
      <ul className={styles.numbers}>
        {pages.map((page, index) => (
          <li key={index}>
            {typeof page === 'number' ? (
              <button
                onClick={() => onPageChange(page)}
                className={`${styles.number} ${
                  page === currentPage ? styles.active : ''
                }`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            ) : (
              <span className={styles.ellipsis}>…</span>
            )}
          </li>
        ))}
      </ul>

      {/* Next button */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={styles.button}
          aria-label="Next page"
        >
          Next →
        </button>
      )}
    </nav>
  );
};

export default Pagination;