import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TrainingOptions.module.css';
import session from "../../assets/registerCoach.webp";
import online from "../../assets/Online Training.webp";
import clinic from "../../assets/coachIntro.webp"; // New image import
import ImageBackground from '../../components/common/ImageBackground/ImageBackground';

const TrainingOptions = () => {
  const sport = useSelector((state) => state.coach.sport);
  const address = useSelector((state) => state.coach.address);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/ApplicationTimeline');
  };

  const handleCardClickForOnline = () => {
    navigate('/filtered-coaches');
  };

  // const handleCardClickForClinic = () => {
  //   navigate('/clinic-options');
  // };

  return (
    <ImageBackground>
      <div className={styles.container}>
        <div className={styles.mainSection}>
          <h2 className='fw-bold mb-3'>You are looking for {sport} coaches near {address}</h2>
          <h2 className={`my-4 ${styles.supText}`}>What Kind of Training Are You Looking For?</h2>
          <div className={styles.cardsContainer}>
            <div className={`card ${styles.card}`} onClick={handleCardClick}>
              <div className={styles.imageContainer}>
                <img src={session} className={`card-img-top ${styles.cardImage}`} alt="1 to 1 session" />
                <div className={styles.imageOverlay}>
                  <h5 className={styles.imageTitle}>1 To 1 Session</h5>
                </div>
              </div>
            </div>
            <div className={`card ${styles.card}`} onClick={handleCardClickForOnline}>
              <div className={styles.imageContainer}>
                <img src={online} className={`card-img-top ${styles.cardImage}`} alt="Online Training" />
                <div className={styles.imageOverlay}>
                  <h5 className={styles.imageTitle}>Online Training</h5>
                </div>
              </div>
            </div>
            <div className={`card ${styles.card}`} onClick={handleCardClickForOnline}>
              <div className={styles.imageContainer}>
                <img src={clinic} className={`card-img-top ${styles.cardImage}`} alt="Clinic & Campus" />
                <div className={styles.imageOverlay}>
                  <h5 className={styles.imageTitle}>Clinic & Campus</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ImageBackground>
  );
};

export default TrainingOptions;