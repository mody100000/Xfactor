import React from 'react';
import styles from "./IntroFAQ.module.css";


const IntroFAQ = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
          <div className='d-flex flex-column align-items-center justify-content-center p-5'>
          <h1 className="fw-bold">CoachUp Training Q&A</h1>
          <h3 className={`text-center ${styles.suptitle}`}>
          Explore questions from other athletes and parents, or submit your own to receive free expert training advice from CoachUp Coaches.
          </h3>
          </div>
         </div>
          <div>
      </div>
    </div>
  );
};

export default IntroFAQ;
