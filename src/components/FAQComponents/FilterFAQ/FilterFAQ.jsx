import React from 'react';
import styles from './FilterFAQ.module.css';

const FilterFAQ = () => {
  return (
    <div className={styles.filterSidebar}>
      <h4>Q&A Sports!</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="baseballQuestions" />
        <label htmlFor="baseballQuestions">Baseball Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="boxingQuestions" />
        <label htmlFor="boxingQuestions">Boxing Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="danceQuestions" />
        <label htmlFor="danceQuestions">Dance Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="footballQuestions" />
        <label htmlFor="footballQuestions">Football Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="divingQuestions" />
        <label htmlFor="divingQuestions">Diving Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fitnessQuestions" />
        <label htmlFor="fitnessQuestions">Fitness Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="golfQuestions" />
        <label htmlFor="golfQuestions">Golf Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="gymnasticsQuestions" />
        <label htmlFor="gymnasticsQuestions">Gymnastics Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="kickboxingQuestions" />
        <label htmlFor="kickboxingQuestions">Kickboxing Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="runningQuestions" />
        <label htmlFor="runningQuestions">Running Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="skiingQuestions" />
        <label htmlFor="skiingQuestions">Skiing Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="soccerQuestions" />
        <label htmlFor="soccerQuestions">Soccer Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="speedQuestions" />
        <label htmlFor="speedQuestions">Speed Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="swimmingQuestions" />
        <label htmlFor="swimmingQuestions">Swimming Questions</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="tennisQuestions" />
        <label htmlFor="tennisQuestions">Tennis Questions</label>
      </div>
      <div className={`${styles.checkboxGroup} mb-5`}>
        <input type="checkbox" id="trackAndFieldQuestions" />
        <label htmlFor="trackAndFieldQuestions">Track & Field Questions</label>
      </div>
    </div>
  );
};

export default FilterFAQ;
