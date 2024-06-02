import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionsPage1.module.css';

const QuestionsPage1 = () => {
  const [sessionFor, setSessionFor] = useState('');
  const [sessionsNeeded, setSessionsNeeded] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/questions2');
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleOptionClick = (value) => {
    setSessionFor(value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search for All Fitness Training Options</h1>
      <p className={styles.description}>Provide some basic info and we'll recommend great coaches for you</p>
      <div className={styles.questionContainer}>
        <div className={styles.question}>Who are the sessions for?</div>
        <div className={styles.options}>
          <div
            className={`${styles.option} ${sessionFor === 'Myself' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('Myself')}
          >
            Myself
          </div>
          <div
            className={`${styles.option} ${sessionFor === 'My child' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('My child')}
          >
            My child
          </div>
          <div
            className={`${styles.option} ${sessionFor === 'Someone else' ? styles.selected : ''}`}
            onClick={() => handleOptionClick('Someone else')}
          >
            Someone else
          </div>
        </div>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>
          How many sessions do you expect to need to meet your goals?
        </div>
        <select
          className={styles.dropdown}
          value={sessionsNeeded}
          onChange={(e) => setSessionsNeeded(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="1">1</option>
          <option value="2-4">2-4</option>
          <option value="5-10">5-10</option>
          <option value="10+">10+</option>
        </select>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handlePrevious}>Previous</button>
        <button className={styles.button} onClick={handleNext} disabled={!sessionFor || !sessionsNeeded}>Next</button>
      </div>
    </div>
  );
};

export default QuestionsPage1;
