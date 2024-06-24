import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, title, subtitle, price,badge }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.productImage} />
        {badge && (
          <div className={`${styles.badge} ${badge === 'Hot' ? styles.hotBadge : styles.otherBadge}`}>
            {badge}
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardSubtitle}>{subtitle}</p>
        <p className={styles.cardPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
