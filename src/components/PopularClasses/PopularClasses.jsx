import React from "react";
import styles from "./PopularClasses.module.css";
import { FaCirclePlus } from "react-icons/fa6";
import image1 from "../../assets/fitness.jpg"; // Replace with your image paths
import image2 from "../../assets/s3.jpg";
import image3 from "../../assets/legGroup.png";
import image4 from "../../assets/sixBags.jpg";

const PopularClasses = () => {
  const classes = [
    {
      id: 1,
      title: "Fitness Workout",
      image: image1,
      description: "Get fit with our high intensity workout classes.",
    },
    {
      id: 2,
      title: "Yoga Class",
      image: image2,
      description: "Relax and rejuvenate with our yoga sessions.",
    },
    {
      id: 3,
      title: "Cardio Blast",
      image: image3,
      description: "Boost your heart health with cardio exercises.",
    },
    {
      id: 4,
      title: "Strength Training",
      image: image4,
      description: "Build muscle and strength with our training program.",
    },
  ];

  return (
    <div className={styles.popularClassesContainer}>
      <h2 className="text-center my-4">OUR POPULAR CLASSES</h2>
      <div className={styles.cardsContainer}>
        {classes.map((item) => (
          <div key={item.id} className={`card ${styles.card}`}>
            <div className={styles.imageContainer}>
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className={styles.imageOverlay}>
                <h5 className={styles.imageTitle}>{item.title}</h5>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">{item.description}</p>
              <div className={styles.cardFooter}>
                <button className="btn">Read More</button>
                <FaCirclePlus size={35} className={styles.plusIcon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
