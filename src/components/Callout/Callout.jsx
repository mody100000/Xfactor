import React from "react";
import { FaSmile, FaUsers, FaChartLine, FaHeart } from "react-icons/fa";
import styles from "./Callout.module.css";

const Callout = () => {
  const calloutItems = [
    {
      id: 1,
      icon: <FaSmile size={40} />,
      number: "1000+",
      text: "Happy Clients",
    },
    {
      id: 2,
      icon: <FaUsers size={40} />,
      number: "500+",
      text: "Team Members",
    },
    {
      id: 3,
      icon: <FaChartLine size={40} />,
      number: "300%",
      text: "Growth Rate",
    },
    {
      id: 4,
      icon: <FaHeart size={40} />,
      number: "100%",
      text: "Satisfaction",
    },
  ];

  return (
    <div className={styles.calloutContainer}>
      {calloutItems.map((item) => (
        <div key={item.id} className={styles.calloutItem}>
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.number}>{item.number}</div>
          <div className={styles.text}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Callout;
