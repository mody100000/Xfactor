import React from 'react';
import styles from "./IntroInfo.module.css";
import { Link } from 'react-router-dom';


const IntroInfo = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.overlay}>
        <h1 className="fw-bold">Word on The Street</h1>
        <div className={styles.icons}>
          <Link to="/applyToCoach"  className={styles.apply}>
        <div>Apply To Coach</div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroInfo;
