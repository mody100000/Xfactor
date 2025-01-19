import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionsPage3.module.css';
import { ProgressBar, Button } from 'react-bootstrap';

const positions = [
  'Not Sure', 'Punter', 'Kicker', 'Running Back', 'Tight End',
  'Wide Receiver', 'Quarterback', 'Linebacker', 'Offensive Line',
  'Defensive Line', 'Defensive Back'
];

const QuestionsPage3 = ({ currentStep, handleNextStep, handlePrevStep, totalSteps }) => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const navigate = useNavigate();

  const handleViewCoaches = () => {
    navigate('/filtered-coaches'); // assuming you have a page to display coaches
  };
  const handlePrevious = () => {
    handlePrevStep();
  };
  const handleOptionClick = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div className={styles.container}>
      <ProgressBar variant='danger' now={(currentStep / (totalSteps - 1)) * 100} className={styles.timelineProgress} />
      <h1 className={styles.title}>Search For All Fitness Training Options</h1>
      <p className={styles.description}>Provide some basic info and we'll recommend great coaches for you</p>
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
        <Button onClick={handlePrevious} disabled={currentStep === 0} className={`btn btn-outline-light m-2 ${styles.prevBtn}`}>Previous</Button>
        <Button onClick={handleViewCoaches} disabled={!selectedPosition} className={`btn btn-danger m-2 ${styles.nextBtn}`}>View Coaches</Button>
      </div>
    </div>
  );
};

export default QuestionsPage3;
