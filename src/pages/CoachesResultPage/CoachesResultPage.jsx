import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CoachesResultPage.module.css';
import coachImage from '../../assets/s3.jpg';
import { IoMdAdd } from "react-icons/io";
import { MdOnlinePrediction } from 'react-icons/md';

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
  const getReponseRate = (rate) => {
    if (rate >= 80) return "Fast";
    else if (rate >= 50 && rate < 80) return "Good";
    return "Bad"
  }
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.overlay}>
          <div className='d-flex flex-column align-items-center justify-content-center p-5'>
            <h1 className="fw-bold">Coaches</h1>
            <h3 className={`text-center ${styles.suptitle}`}>
              Recommended {sport} coaches near {address}
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className='row'>
          {currentCoaches.map((coach) => (
            <div key={coach.id} className={`col-md-6 ${styles.coachColumn}`}>
              <div className={styles.coachCard}>
                {coach.badge && (
                  <span className={`${styles.badge} ${getBadgeClass(coach.badge)}`}>
                    {coach.badge}
                  </span>
                )}
                <div className={styles.coachMain}>
                  <div className='d-flex gap-4'>
                    <img src={coach.image || coachImage} alt={coach.name} className={styles.coachImage} />
                    <div className={styles.coachDetails}>
                      <h2 className={styles.coachName}>{coach.name}</h2>
                      <div className={styles.rating}>
                        <span className={styles.stars}>{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</span>
                        <span className={styles.reviews}>{coach.reviews} reviews</span>
                      </div>
                      <p className={styles.coachCategory}>{coach.category}</p>
                      {coach.trainingType === "Online" ? <p className={styles.onlineOffer}> <MdOnlinePrediction size={25} className='mb-1' color='green' /> Offers Online Training</p> : ""}
                    </div>
                  </div>
                  <div className='d-flex flex-column justify-content-end '>
                    {/* {coach.trainingType === "Online" ? <p className={styles.onlineOffer}> <MdOnlinePrediction size={25} className='mb-1' /> Offers Online Training</p> : ""} */}
                    <p className={styles.summary}>{coach.summary}</p>
                    <p className={styles.distance}><span className='fw-bold'>{coach.distance}</span> miles away from {address}</p>
                    <p className={`${styles.distance} mt-2 mb-0`}> {getReponseRate(coach.responseRate)} Reponse Rate: <span className='fw-bold'>{coach.responseRate}%</span></p>
                  </div>
                </div>
                <div className={styles.coachInfo}>
                  {coach.recommended && <span className={styles.recommendedBadge}>Recomended</span>}
                  <p className='mt-3 mb-1 fs-5'>Starting At</p>
                  <p className='my-1'><span className='fs-4'>$</span><span className={styles.salary}>{coach.salary}</span>/session</p>
                  <IoMdAdd size={25} />
                  <p className={styles.fee}>Applicable Fees</p>
                  <Link to={`/coach/${coach.id}`} className={styles.viewProfileLink}>
                    <button className={styles.viewProfileButton}>View Profile</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          {renderPagination()}
        </div>
      </div>
    </>
  );
};

export default CoachesResultPage;
