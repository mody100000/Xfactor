import React, { useState } from 'react';
import styles from './ProductSlider.module.css';
import img1 from "../../assets/intro.webp";
import img2 from "../../assets/intro.webp";
import img3 from "../../assets/intro.webp";
import img4 from "../../assets/intro.webp";
import img5 from "../../assets/intro.webp";

const images = [
  { src: img1, alt: 'Image 1' },
  { src: img2, alt: 'Image 2' },
  { src: img3, alt: 'Image 3' },
  { src: img4, alt: 'Image 4' },
  { src: img5, alt: 'Image 5' },
];

const ImageSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getTransformStyle = (index) => {
    const offset = (index - selectedIndex) * 120;
    return {
      transform: `translateX(${offset}px)`,
    };
  };

  return (
    <div className={`container ${styles.sliderContainer}`}>
      <h2 className={styles.title}>Choose Your Product And Boost Your Body Strength</h2>
      <div className={styles.slider}>
        <button className={`btn ${styles.arrowButton}`} onClick={handlePrevClick}>&lt;</button>
        <div className={styles.imagesWrapper}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.imageContainer}
              style={getTransformStyle(index)}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`${styles.image} ${index === selectedIndex ? styles.selectedImage : ''}`}
              />
            </div>
          ))}
        </div>
        <button className={`btn ${styles.arrowButton}`} onClick={handleNextClick}>&gt;</button>
      </div>
      <div className={styles.productInfo}>
        <h3>Platinum Whey Protein</h3>
        <p>
          <span className={styles.price}>Rs. 1499</span> <span className={styles.oldPrice}>Rs. 1999</span>
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
