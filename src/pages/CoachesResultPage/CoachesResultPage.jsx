import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CoachesResultPage.module.css';
import coachImage from '../../assets/s3.jpg'; // Placeholder image, replace with actual image source

const CoachesResultPage = () => {
  const sport = useSelector((state) => state.coach.sport);
  const address = useSelector((state) => state.coach.address);
  const coaches = useSelector((state) => state.coaches.list);

  const [currentPage, setCurrentPage] = useState(1);
  const coachesPerPage = 4;

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

  const indexOfLastCoach = currentPage * coachesPerPage;
  const indexOfFirstCoach = indexOfLastCoach - coachesPerPage;
  const currentCoaches = coaches.slice(indexOfFirstCoach, indexOfLastCoach);

  const totalPages = Math.ceil(coaches.length / coachesPerPage);

  const handleClick = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map(number => (
      <button
        key={number}
        onClick={(event) => handleClick(event, number)}
        className={`${styles.paginationButton} ${currentPage === number ? styles.active : ''}`}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>Recommended {sport} coaches near {address}</h1>
      </div>
      <div className={styles.coachesContainer}>
        {currentCoaches.map((coach) => (
          <div key={coach.id} className={styles.coachCard}>
            <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
            <h2 className={styles.coachName}>{coach.name}</h2>
            <p className={styles.coachCategory}>{coach.category}</p>
            <div className={styles.rating}>
              <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
              <span className={styles.reviews}>{coach.reviews} reviews</span>
            </div>
            <span className={`${styles.badge} ${getBadgeClass(coach.badge)}`}>{coach.badge}</span>
            <p className={styles.summary}>{coach.summary}</p>
            <p className={styles.distance}>{coach.distance} miles away from {address}</p>
            <p className={styles.salary}>${coach.salary}/session</p>
            <Link to={`/coach/${coach.id}`} className={styles.viewProfileLink}>
              <button className={styles.viewProfileButton}>View Profile</button>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {renderPagination()}
      </div>
    </div>
  );
};

export default CoachesResultPage;
