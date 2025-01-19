import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import styles from './QuestionsPage2.module.css';

const QuestionsPage2 = ({ currentStep, handleNextStep, handlePrevStep, totalSteps }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [preferredCoachGender, setPreferredCoachGender] = useState('');

  const handleNext = () => {
    handleNextStep();
  };

  const handlePrevious = () => {
    handlePrevStep();
  };

  return (
    <div className={styles.container}>
      <ProgressBar variant='danger' now={(currentStep / (totalSteps - 1)) * 100} className={styles.timelineProgress} />
      <h1 className={styles.title}>Search for All Fitness Training Options</h1>
      <p className={styles.description}>Provide some basic info and we'll recommend great coaches for you</p>
      <div className={styles.questionContainer}>
        <select
          className={styles.dropdown}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          <option value="" disabled style={{ display: 'none' }}>What's your age?</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46-55">46-55</option>
          <option value="56+">56+</option>
        </select>
      </div>
      <div className={styles.questionContainer}>
        <select
          className={styles.dropdown}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" style={{ display: 'none' }}>Your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Female">Other</option>
        </select>
      </div>
      <div className={styles.questionContainer}>
        <select
          className={styles.dropdown}
          value={preferredCoachGender}
          onChange={(e) => setPreferredCoachGender(e.target.value)}
        >
          <option value="" style={{ display: 'none' }}>Preferred coach gender</option>
          <option value="No Preference">No Preference</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className={styles.buttons}>
        <Button onClick={handlePrevious} disabled={currentStep === 0} className={`btn btn-outline-light m-2 ${styles.prevBtn}`}>Previous</Button>
        <Button onClick={handleNext} disabled={!age || !gender || !preferredCoachGender} className={`btn btn-danger m-2 ${styles.nextBtn}`}>Next</Button>
      </div>
    </div>
  );
};

export default QuestionsPage2;
