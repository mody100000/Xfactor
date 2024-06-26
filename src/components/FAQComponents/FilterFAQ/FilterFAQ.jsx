import React from 'react';
import styles from './FilterFAQ.module.css';

const FilterFAQ = () => {
  return (
    <div className={styles.filterSidebar}>
      <h4>Q&A Sports!</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Baseball Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Boxing Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Dance Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Football Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Diving Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Fitness Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Golf Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Gymnastics Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Kickboxing Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Running Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Skiing Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Soccer Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Speed Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Swimming Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Tennis Questions</label>
      </div>
      <div className={`${styles.checkboxGroup} mb-5`}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Track & Field Questions</label>
      </div>
    </div>
  );
};

export default FilterFAQ;
