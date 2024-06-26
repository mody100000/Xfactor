import React from 'react';
import styles from "./IntroCart.module.css";


const IntroCart = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
        <h1 className="fw-bold">Cart</h1>
      </div>
    </div>
  );
};

export default IntroCart;
