import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TrainingOptions.module.css';
import session from "../../assets/1 to 1 Session.png";
import online from "../../assets/Online Training.jpg";

const TrainingOptions = () => {
  const sport = useSelector((state) => state.coach.sport);
  const address = useSelector((state) => state.coach.address);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/questions1');
  };
  const handleCardClickForOnline = () => {
    navigate('/filtered-coaches');
  };

  return (
    <div className={styles.container}>
      <div className={styles.trainingOptionsContainer}>
        <div className={styles.topSection}>
          <p>You are looking for {sport} coaches near {address}</p>
        </div>
        <div className={styles.mainSection}>
          <h1>What Kind of Training Are You Looking For?</h1>
          <p className={styles.subText}>Provide some basic info and we'll recommend great coaches for you</p>
          <div className={styles.cardsContainer}>
            <div className={styles.card} onClick={handleCardClick}>
              <img src={session} alt="1 to 1 session" className={styles.cardImage} />
              <h2>1 to 1 Session</h2>
            </div>
            <div className={styles.card} onClick={handleCardClickForOnline}>
              <img src={online} alt="Online Training" className={styles.cardImage} />
              <h2>Online Training</h2>
            </div>
          </div>
          <button className={styles.viewAllButton} onClick={handleCardClick}>View All Fitness Training Options</button>
        </div>
      </div>
    </div>
  );
};

export default TrainingOptions;
