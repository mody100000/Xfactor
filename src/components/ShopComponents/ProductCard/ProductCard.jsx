import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { CiHeart, CiSearch } from "react-icons/ci";

const ProductCard = ({ id, image, title, subtitle, price, badge, info }) => {
  const navigate = useNavigate();

  const handleSelectOptionClick = () => {
    navigate(`product/${id}`);
  };

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
        <div className={styles.hoverContent}>
          <p className={styles.additionalText}>{info}</p>
          <div className={styles.iconContainer}>
            <CiHeart className={styles.icon} />
            <button className={styles.button} onClick={handleSelectOptionClick}>Select Option</button>
            <CiSearch className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
