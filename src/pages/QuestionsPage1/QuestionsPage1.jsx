import React, { useState } from 'react';
import styles from './QuestionsPage1.module.css';
import { ProgressBar, Button } from 'react-bootstrap';

const QuestionsPage1 = ({ currentStep, handleNextStep, handlePrevStep, totalSteps }) => {
  const [sessionFor, setSessionFor] = useState('');
  const [sessionsNeeded, setSessionsNeeded] = useState('');

  const handleOptionClick = (value) => {
    setSessionFor(value);
  };

  return (
    <div className={styles.container}>
      <ProgressBar now={(currentStep / (totalSteps - 1)) * 100} className={styles.timelineProgress} />
      <h1 className={styles.title}>Search For All Fitness Training Options</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur. Massa enim arcu quis libero donec ultrices</p>
      <div className={styles.questionContainer}>
        <div className={styles.question}>Who Are The Sessions For?</div>
        <div className={styles.options}>
          <div
            className={`${styles.option} ${sessionFor === 'Myself' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('Myself')}
          >
            My Self
          </div>
          <div
            className={`${styles.option} ${sessionFor === 'My child' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('My child')}
          >
            My Child
          </div>
          <div
            className={`${styles.option} ${sessionFor === 'Someone else' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('Someone else')}
          >
            Else
          </div>
        </div>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>
          How Many Sessions do You Expect To Need To Meet Your Goals?
        </div>
        <select
          className={styles.dropdown}
          value={sessionsNeeded}
          onChange={(e) => setSessionsNeeded(e.target.value)}
        >
          <option value=""  style={{ display: 'none' }}>Select...</option>
          <option value="1">1</option>
          <option value="2-4">2-4</option>
          <option value="5-10">5-10</option>
          <option value="10+">10+</option>
        </select>
      </div>
      <div className={styles.buttons}>
        <Button onClick={handlePrevStep} disabled={currentStep === 0} className={`btn btn-outline-light m-2  ${styles.nextBtn}`}>Previous</Button>
        <Button onClick={handleNextStep} disabled={!sessionFor||!sessionsNeeded} className={`btn btn-danger m-2 ${styles.nextBtn}`}>Next</Button>
      </div>
    </div>
  );
};

export default QuestionsPage1;
