import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionsPage3.module.css';

const positions = [
  'Not Sure', 'Punter', 'Kicker', 'Running Back', 'Tight End',
  'Wide Receiver', 'Quarterback', 'Linebacker', 'Offensive Line',
  'Defensive Line', 'Defensive Back'
];

const QuestionsPage3 = () => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleViewCoaches = () => {
    navigate('/coaches'); // assuming you have a page to display coaches
  };

  const handleOptionClick = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search for All Fitness Training Options</h1>
      <p className={styles.description}>
        Provide some basic info and we'll recommend great coaches for you
      </p>
      <div className={styles.questionContainer}>
        <div className={styles.question}>What position?</div>
        <div className={styles.options}>
          {positions.map((position, index) => (
            <div
              key={index}
              className={`${styles.option} ${selectedPosition === position ? styles.selected : ''}`}
              onClick={() => handleOptionClick(position)}
            >
              {position}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handlePrevious}>Previous</button>
        <button className={styles.button} onClick={handleViewCoaches} disabled={!selectedPosition}>
          View Coaches
        </button>
      </div>
    </div>
  );
};

export default QuestionsPage3;
