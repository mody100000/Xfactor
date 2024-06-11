import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TrainingOptions.module.css';
import session from "../../assets/1 to 1 Session.png";
import online from "../../assets/Online Training.png";
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

  return (
    <ImageBackground>
    <div className={styles.container}>
        <div className={styles.mainSection}>
        <h2 className='fw-bold mb-3'>You are looking for {sport} coaches near {address}</h2>
          <h2 className='mb-5'>What Kind of Training Are You Looking For?</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.card} onClick={handleCardClick}>
              <img src={session} alt="1 to 1 session" className={`${styles.cardImage}`}onClick={handleCardClick}/>
            </div>
            <div className={styles.card} onClick={handleCardClickForOnline}>
              <img src={online} alt="Online Training" className={styles.cardImage} />
            </div>
          </div>
        </div>
    </div>
    </ImageBackground>
  );
};

export default TrainingOptions;
