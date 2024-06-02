import React from "react";
import styles from "./Testimonials.module.css";
import clientImage from "../../assets/user.png"; // Example client image
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.leftSide}>
        <FaArrowLeft className={styles.arrow} />
        <div className={styles.card}>
          <div className={styles.clientImageContainer}>
            <img
              src={clientImage}
              alt="Client"
              className={styles.clientImage}
            />
          </div>
          <h2 className="mt-4 fw-bold">Henry</h2>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={styles.star} />
            ))}
          </div>
          <p className={styles.comment}>
            "I recently joined Fithubb, and I couldn't be happier with my
            decision. From the moment I stepped inside, I knew this was gym that
            truly cares about its members' fitness journey."
          </p>
          <span className={styles.viewAll}>View All</span>
        </div>
        <FaArrowRight className={styles.arrow} />
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.title}>What Our Clients Say About Us</h1>
        <p className={styles.bestRating}>
          I've been a member of fitness within for 6 months now and i absolutely
          love it! The trainers are so motive and they really help to reach
          fitness goals.
        </p>
        <div className={styles.ratingSummary}>
          <IoMdAddCircle size={40} className={styles.plusIcon} />
          <FaStar className={styles.coloredStar} />
          <span className={styles.rating}>4.8</span>
          <span className={styles.reviews}>(330 reviews)</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
