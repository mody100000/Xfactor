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
        {/* <li className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ''}`}>
          <button className={styles.pageLink} onClick={() => handlePageChange(1)}>First</button>
        </li>
        <li className={`${styles.pageItem} ${currentPage === 1 ? styles.disabled : ''}`}>
          <button className={styles.pageLink} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        </li> */}
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i + 1} className={`${styles.pageItem} ${i + 1 === currentPage ? styles.active : ''}`}>
            <button className={styles.pageLink} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
          </li>
        ))}
        {/* <li className={`${styles.pageItem} ${currentPage === totalPages ? styles.disabled : ''}`}>
          <button className={styles.pageLink} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </li>
        <li className={`${styles.pageItem} ${currentPage === totalPages ? styles.disabled : ''}`}>
          <button className={styles.pageLink} onClick={() => handlePageChange(totalPages)}>Last</button>
        </li> */}
      </ul>
    </nav>
  );
};

export default CustomPagination;
