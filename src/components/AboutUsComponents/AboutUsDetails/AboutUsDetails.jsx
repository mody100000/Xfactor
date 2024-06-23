import styles from "./AboutUsDetails.module.css";
import workout from "../../../assets/AboutUsDetails.jpg";

const AboutUsDetails = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <img src={workout} alt="Fitness" />
        </div>
        <div className={styles.textContainer}>
          <h2 className="text-dark mb-4">Ready to Make Your Fitness</h2>
          <p>
            Gym are an essential part of any successful gym, They will help
            to attract new customers, keep members motivated and track achieve their
            goals
          </p>
          <div className={styles.media}>
            <button className={`btn btn-outline-danger p-2 ${styles.getStartedBtn}`}>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsDetails;
