import React from "react";
import styles from "./FeatureCards.module.css";
import image1 from "../../assets/f2.jpg"; // Replace with your image paths
import fitness from "../../assets/fitness.jpg"; // Replace with your image paths
import carate from "../../assets/carate.avif"; // Replace with your image paths
import "../../utils/custom.css";
const FeatureCards = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WHAT WE DO</h1>
      <div className={styles.imagesContainer}>
        <div>
          <div className={styles.imageWrapper}>
            <img src={image1} alt="Description 3" className={styles.image} />
          </div>
          <h3 className="my-2 fw-bolder">4 Weeks Challenge</h3>
          <p className="text-muted fs-5 fw-bold cursor-pointer">Learn More</p>
        </div>
        <div>
          <div className={styles.imageWrapper}>
            <img src={carate} alt="Description 3" className={styles.image} />
          </div>
          <h3 className="my-2 fw-bolder">Personal Training</h3>
          <p className="text-muted fs-5 fw-bold cursor-pointer">Learn More</p>
        </div>
        <div>
          <div className={styles.imageWrapper}>
            <img src={fitness} alt="Description 3" className={styles.image} />
          </div>
          <h3 className="my-2 fw-bolder">Group Classes</h3>
          <p className="text-muted fs-5 fw-bold cursor-pointer">Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
