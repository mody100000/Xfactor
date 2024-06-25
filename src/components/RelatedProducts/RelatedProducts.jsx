import React from 'react';
import productsData from '../ShopComponents/productsData/productsData';
import styles from './RelatedProducts.module.css';
import { useNavigate } from 'react-router-dom';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { useEffect } from 'react';

const RelatedProducts = ({ relatedProductIds }) => {
  const relatedProducts = relatedProductIds.map(id => productsData.find(product => product.id === id));

  const navigate = useNavigate();

  const handleSelectOptionClick = (id) => {
    navigate(`/shop/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.relatedProductsSection}>
      <h2>Related Products</h2>
      <div className={`row ${styles.relatedProducts}`}>
        {relatedProducts.map((product, index) => (
          <div key={index} className={`col-md-3 col-12 ${styles.relatedProduct}`}>
            <img src={product.image} alt={product.title} className={styles.relatedProductImage} />
            <h3 className={styles.relatedProductTitle}>{product.title}</h3>
            <p className={styles.cardSubtitle}>{product.subtitle}</p>
            <p className={styles.relatedProductPrice}>{product.price}</p>
            <div className={styles.hoverContent}>
              <p className={styles.additionalText}>{product.info}</p>
              <div className={styles.iconContainer}>
                <CiHeart className={styles.icon} />
                <button className={styles.button} onClick={() => handleSelectOptionClick(product.id)}>Select Option</button>
                <CiSearch className={styles.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
