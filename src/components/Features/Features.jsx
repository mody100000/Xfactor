import React from "react";
import styles from "./Features.module.css";
import workout from "../../assets/workout.webp";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import FeatureCards from "../FeatureCards/FeatureCards";

const Features = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <img src={workout} alt="Fitness" />
          <div className={styles.badge1}>
            <div>
              <IoStatsChartOutline size={39} />
            </div>
            <div className="px-2 py-1">
              <p className="m-0 text-white-50">Calories Burned</p>
              <p className="m-0 fs-5 fw-bolder">116 bpm</p>
            </div>
          </div>
          <div className={styles.badge2}>
            <div>
              <IoMdHeart size={39} />
            </div>
            <div className="px-2 py-1">
              <p className="m-0 text-white-50">Heart Rate</p>
              <p className="m-0 fs-5 fw-bolder">116 bpm</p>
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1>Ready to Make Your Fitness</h1>
          <p>
            Gym are an essential part of any successful gym, They will help
            toattract new customers members motivated and track achieve their
            goals
          </p>
          <div className={styles.media}>
            <button className={styles.getStartedBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
