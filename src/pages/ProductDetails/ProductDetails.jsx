import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
import productsData from '../../components/ShopComponents/productsData/productsData';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(product => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handelNavigate = ()=>{
   navigate("/cart")
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={`container-fluid ${styles.productDetailsPage}`}>
      <div className="row">
        {/* Right Column for Images */}
        <div className={`col-md-7 col-12 ${styles.rightColumn}`}>
          <div className="row">
            <div className="col-md-3 col-12">
              <div className={styles.thumbnails}>
                {product.thumbnails.map((thumb, index) => (
                  <img key={index} src={thumb} alt={`Thumbnail ${index}`} className={styles.thumbnail} />
                ))}
              </div>
            </div>
            <div className="col-md-9 col-12">
              <img src={product.image} alt={product.title} className={styles.mainImage} />
            </div>
          </div>
        </div>

        {/* Left Column for Product Info */}
        <div className={`col-md-5 col-12 ${styles.leftColumn}`}>
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productPrice}>{product.price}</p>
            <p className={styles.productDescription}>{product.info}</p>
            <div className={styles.quantityContainer}>
              <button className={styles.quantityButton} onClick={handleDecrease}>-</button>
              <input type="text" value={quantity} className={styles.quantityInput} readOnly />
              <button className={styles.quantityButton} onClick={handleIncrease}>+</button>
            </div>
            <button className={styles.addToCartButton} onClick={handelNavigate}>Add To Cart</button>
          </div>
        </div>
      </div>
      <span className={styles.line}></span>

      {/* Descriptions Section */}
      <div className={styles.productDetailsSection}>
        <h2>Descriptions</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Magna dui tincidunt mi amet. Nulla massa mauris tristique auctor. Fermentum sit eget pulvinar mi amet gravida nulla. Velit enim neque quam purus.Lorem ipsum dolor sit amet consectetur. Magna dui tincidunt mi amet. Nulla massa mauris tristique auctor. Fermentum sit eget pulvinar mi amet gravida nulla. Velit enim neque quam purus. </p>
        <p>Lorem ipsum dolor sit amet consectetur. Magna dui tincidunt mi amet. Nulla massa mauris tristique auctor. Fermentum sit eget pulvinar mi amet gravida nulla. Velit enim neque quam purus.Lorem ipsum dolor sit amet consectetur. Magna dui tincidunt mi amet. Nulla massa mauris tristique auctor. Fermentum sit eget pulvinar mi amet gravida nulla. Velit enim neque quam purus. </p>
      </div>
      <RelatedProducts relatedProductIds={product.relatedProducts} />
    </div>
  );
};

export default ProductDetails;
