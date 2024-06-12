import React from "react";
import athelet from "../../assets/athlete_exercise.png"
import happy from "../../assets/emote-smile.png"
import XMLID from "../../assets/XMLID.png"
import tea from "../../assets/tea.png"
import styles from "./Callout.module.css";


const Callout = () => {
  const calloutItems = [
    {
      id: 1,
      icon: <img src={happy} alt="Total Clients" className={styles.icon} />,
      number: "1000+",
      text: "Happy Clients",
    },
    {
      id: 2,
      icon: <img src={athelet} alt="Total Clients" className={styles.icon} />,
      number: "500+",
      text: "Total Clients",
    },
    {
      id: 3,
      icon: <img src={XMLID} alt="Total Clients" className={styles.icon} />,
      number: "300%",
      text: "Total Equipments",
    },
    {
      id: 4,
      icon: <img src={tea} alt="Total Clients" className={styles.icon} />,
      number: "100%",
      text: "Cup of tea",
    },
  ];

  return (
    <div className={styles.calloutContainer}>
      {calloutItems.map((item) => (
        <div key={item.id} className={styles.calloutItem}>
          <div>
          <div className={styles.icon}>{item.icon}</div>
          </div>
          <div>
          <div className={styles.number}>{item.number}</div>
          <div className={styles.text}>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Callout;
