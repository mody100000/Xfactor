import styles from "./IntroBanner.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import box from "../../assets/box.webp";
import { Link } from 'react-router-dom';

const IntroBanner = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1>GET HEALTHY BODY WITH THE PERFECT EXERCISE</h1>
        <p>
          We are always there to help you to make a healthy body and mind
          through the power of fitness.
        </p>
        <div className={styles.media}>
        <Link to="/applyToCoach">
          <button className={styles.getStartedBtn}> Get Started</button>
        </Link>
          <span className={styles.playVedio}>
            <FaCirclePlay size={40} className={styles.playIcon} /> Play Video
          </span>
        </div>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureNumber}>
              103 <FaPlus size={20} />
            </span>
            <p>Expert Trainers</p>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureNumber}>
              526 <FaPlus size={20} />
            </span>
            <p>Members Joined</p>{" "}
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureNumber}>
              115 <FaPlus size={20} />
            </span>
            <p>Fitness Programs</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={box} alt="Fitness" />
      </div>
    </div>
  );
};

export default IntroBanner;
