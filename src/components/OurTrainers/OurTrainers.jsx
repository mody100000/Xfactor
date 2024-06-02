import React from "react";
import styles from "./OurTrainers.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import trainer1 from "../../assets/s3.jpg"; // Example image paths
import trainer2 from "../../assets/girl.jpg";
import trainer3 from "../../assets/Strength Coach.jpg";
import trainer4 from "../../assets/workout.webp";

const trainers = [
  {
    name: "John Doe",
    category: "Yoga Instructor",
    image: trainer1,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Jane Smith",
    category: "Female Body Trainer",
    image: trainer2,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Mike Johnson",
    category: "Strength Coach",
    image: trainer3,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Emily Davis",
    category: "Cardio Trainer",
    image: trainer4,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const OurTrainers = () => {
  return (
    <section className={styles.ourTrainersSection}>
      <h1 className={styles.title}>OUR TRAINERS</h1>
      <div className={styles.trainersContainer}>
        {trainers.map((trainer, index) => (
          <div className={styles.card} key={index}>
            <img
              src={trainer.image}
              alt={trainer.name}
              className={styles.trainerImage}
            />
            <h2 className={styles.trainerName}>{trainer.name}</h2>
            <p className={styles.trainerCategory}>{trainer.category}</p>
            <div className={styles.socialMedia}>
              <a
                href={trainer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles.socialIcon} />
              </a>
              <a
                href={trainer.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className={styles.socialIcon} />
              </a>
              <a
                href={trainer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTrainers;
