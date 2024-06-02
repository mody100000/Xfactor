import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionsPage2.module.css';

const QuestionsPage2 = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [preferredCoachGender, setPreferredCoachGender] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/questions3');
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search for All Fitness Training Options</h1>
      <p className={styles.description}>Provide some basic info and we'll recommend great coaches for you</p>
      <div className={styles.questionContainer}>
        <div className={styles.question}>What's your age?</div>
        <select
          className={styles.dropdown}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46-55">46-55</option>
          <option value="56+">56+</option>
        </select>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>Your gender:</div>
        <select
          className={styles.dropdown}
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>Preferred coach gender:</div>
        <select
          className={styles.dropdown}
          value={preferredCoachGender}
          onChange={(e) => setPreferredCoachGender(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="No Preference">No Preference</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handlePrevious}>Previous</button>
        <button className={styles.button} onClick={handleNext} disabled={!age || !gender || !preferredCoachGender}>Next</button>
      </div>
    </div>
  );
};

export default QuestionsPage2;
