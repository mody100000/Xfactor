import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './CoachProfile.module.css';
import coachImage from '../../assets/s3.jpg';

const getBadgeClass = (badge) => {
  switch (badge.toLowerCase()) {
    case 'gold':
      return styles.goldBadge;
    case 'silver':
      return styles.silverBadge;
    case 'bronze':
      return styles.bronzeBadge;
    default:
      return styles.defaultBadge;
  }
};

const CoachProfile = () => {
  const { id } = useParams();
  const coach = useSelector((state) => state.coaches.list.find((coach) => coach.id === parseInt(id)));

  if (!coach) {
    return <div>Coach not found</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
      <h1 className={styles.coachName}>{coach.name}</h1>
      <p className={styles.coachCategory}>{coach.category}</p>
      <div className={styles.rating}>
        <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
        <span className={styles.reviews}>{coach.reviews} reviews</span>
      </div>
      <span className={`${styles.badge} ${getBadgeClass(coach.badge)}`}>{coach.badge}</span>
      <p className={styles.summary}>{coach.summary}</p>
      <p className={styles.distance}>{coach.distance} miles away from your location</p>
      <p className={styles.salary}>${coach.salary}/session</p>
      <button className={styles.bookButton}>Book Now</button>
      <button className={styles.messageButton}>Message Coach</button>
    </div>
  );
};

export default CoachProfile;
