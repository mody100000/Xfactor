import React from 'react';
import styles from "./IntroShop.module.css";
import happy from "../../../assets/athlete_exercise.png";
import XMLID from "../../../assets/XMLID.png";
import tea from "../../../assets/tea.png";

const IntroShop = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
        <h1 className="fw-bold">Shop</h1>
        <div className={styles.icons}>
          <div className={styles.item}>
            <img src={happy} alt="Total Clients" className={styles.icon} />
            <div className={styles.info}>
              <div className={styles.number}>752</div>
              <div className={styles.text}>Total Clients</div>
            </div>
          </div>
          <div className={styles.item}>
            <img src={XMLID} alt="Total Clients" className={styles.icon} />
            <div className={styles.info}>
              <div className={styles.number}>564</div>
              <div className={styles.text}>Total Equipments</div>
            </div>
          </div>
          <div className={styles.item}>
            <img src={tea} alt="Total Clients" className={styles.icon} />
            <div className={styles.info}>
              <div className={styles.number}>423</div>
              <div className={styles.text}>Cup of tea</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroShop;
