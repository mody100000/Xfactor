import React from "react";
import styles from "./WhyChooseUs.module.css";
import { FaCirclePlus } from "react-icons/fa6";
import image1 from "../../../assets/Facility Amenities.jpg"; // Replace with your image paths
import image2 from "../../../assets/Train Qualification.jpg";
import image3 from "../../../assets/legGroup.png";
import image4 from "../../../assets/sixBags.jpg";

const WhyChooseUs = () => {
  const classes = [
    {
      id: 1,
      title: "Facility Amenities",
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
      <h2 className="text-center fw-bold mt-3 mb-5 fs-1">Why Choose Us</h2>
      <div className={styles.cardsContainer}>
        {classes.map((item) => (
          <div key={item.id} className={`card ${styles.card}`}>
            <div className={styles.imageContainer}>
              <img src={item.image} className={`card-img-top ${styles.gallary}`} alt={item.title} />
              <div className={styles.imageOverlay}>
                <h5 className={styles.imageTitle}>{item.title}</h5>
                <div><p className="text-left mb-4">{item.description}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
