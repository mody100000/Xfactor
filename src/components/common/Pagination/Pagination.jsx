import React from 'react';
import styles from './Pagination.module.css';

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null; // Only show pagination if there's more than one page

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav className={styles.paginationNav}>
      <ul className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i + 1} className={`${styles.pageItem} ${i + 1 === currentPage ? styles.active : ''}`}>
            <button className={styles.pageLink} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CustomPagination;
