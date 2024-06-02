import { useState } from "react";
import styles from "./FitnessGallery.module.css";
import image1 from "../../assets/f2.jpg";
import fitness from "../../assets/fitness.jpg";
import carate from "../../assets/carate.avif";
import s3 from "../../assets/s3.jpg";
const FitnessGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);



  const images = [image1, fitness, carate, s3];

  return (
    <section className={styles.fitnessGallerySection}>
      <h1 className={styles.title}>Fitness Gallery</h1>
      <p className={styles.description}>
        Check out our amazing fitness gallery showcasing our state-of-the-art
        facilities and enthusiastic members.
      </p>
      <div className={styles.fitnessGallery}>
        <div className={styles.galleryContainer}>
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`${styles.galleryImageContainer} ${
                selectedIndex === idx ? styles.active : ""
              }`}
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                className={styles.galleryImage}
                src={image}
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>
        <div className={styles.slideLabels}>
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.slideLabel} ${
                selectedIndex === idx ? styles.activeLabel : ""
              }`}
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessGallery;
