import React from 'react';
import styles from "./IntroCoachUp.module.css";


const IntroCoachUp = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
        <div className='d-flex flex-column align-items-center justify-content-center p-2 p-sm-5'>
          <h1 className="fw-bold">How CoachUp Works</h1>
          <h3 className={`text-center ${styles.suptitle}`}>
            CoachUp is the easiest, safest and most affordable way to connect with an experienced coach who can help you improve your athletic performance and reach your individual goals.
          </h3>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default IntroCoachUp;
