import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './CoachProfilePage.module.css';
import coachImage from '../../assets/s3.jpg';

const CoachProfilePage = () => {
  const { id } = useParams();
  const coach = useSelector((state) =>
    state.coaches.list.find((coach) => coach.id === parseInt(id))
  );

  if (!coach) {
    return <div className={styles.container}>Coach not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
        <div className={styles.details}>
          <h1 className={styles.coachName}>{coach.name}</h1>
          <p className={styles.coachCategory}>{coach.category}</p>
          <div className={styles.rating}>
            <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
            <span className={styles.reviews}>{coach.reviews} reviews</span>
          </div>
          <p className={styles.summary}>{coach.summary}</p>
          <p className={styles.location}>Location: {coach.location}</p>
          <p className={styles.salary}>${coach.salary}/session</p>
          <button className={styles.bookButton}>Book Now</button>
          <button className={styles.messageButton}>Message Coach</button>
        </div>
      </div>
    </div>
  );
};

export default CoachProfilePage;
