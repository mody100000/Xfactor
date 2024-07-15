import React from "react";
import styles from "./FeatureCards.module.css";
import image1 from "../../assets/f2.jpg"; // Replace with your image paths
import fitness from "../../assets/fitness.jpg"; // Replace with your image paths
import carate from "../../assets/carate.avif"; // Replace with your image paths
import "../../utils/custom.css";
import { useNavigate } from "react-router-dom";


const FeatureCards = () => {
  const navigate = useNavigate()

  const handelNavigate = () => {
    navigate("/CoachUp")
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WHAT WE DO</h1>
      <div className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={image1} alt="Description 3" className={styles.image} />
          </div>
          <h3 className="my-3 fw-bolder">4 Weeks Challenge</h3>
          <button onClick={handelNavigate} className="btn btn-outline-danger porder btn-lg">Learn More</button>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={carate} alt="Description 3" className={styles.image} />
          </div>
          <h3 className="my-3 fw-bolder">Personal Training</h3>
          <button onClick={handelNavigate} className="btn btn-outline-danger porder btn-lg">Learn More</button>

        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={fitness} alt="Description 3" className={styles.image} />
          </div>
          <h3 className="my-3 fw-bolder">Group Classes</h3>
          <button onClick={handelNavigate} className="btn btn-outline-danger porder btn-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
