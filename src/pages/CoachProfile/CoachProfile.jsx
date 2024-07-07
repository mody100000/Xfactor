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
    return <div className={styles.container}>Coach not found</div>;
  }

  return (
    <div>
      <section className="py-5 h-100">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div className={`col-md-4 text-center text-white ${styles.gradientCustom}`} style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                    <img src={coach.image || coachImage} alt={coach.name} className={`img-fluid mt-5 mb-4 ${styles.coachImage}`} />
                    <h5 className='fw-bold fs-3'>{coach.name}</h5>
                    <p className='fw-bold'>{coach.category}</p>
                  </div>
                  <div className={`col-md-8 ${styles.card}`}>
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Category</h6>
                          <p className={styles.supText}>{coach.category}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Location</h6>
                          <p className={styles.supText}>{coach.location}</p>
                        </div>
                      </div>
                      <h6>Rating</h6>
                      <hr className="mt-0 mb-2" />
                      <div className="d-flex align-items-center">
                        <div className="me-2">{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</div>
                        <div className={styles.supText}>{coach.reviews} reviews</div>
                      </div>
                      <span className={`${styles.badge} ${getBadgeClass(coach.badge)} mt-3`}>{coach.badge}</span>
                      <h6 className="mt-4">Summary</h6>
                      <p className={styles.supText}>{coach.summary}</p>
                      <h6 className="mt-4">Salary</h6>
                      <p className={styles.supText}>${coach.salary}/session</p>
                      <p className={styles.distance}>{coach.distance} miles away from your location</p>
                      <div className="d-flex justify-content-start mt-4">
                        <button className={`btn btn-danger me-2 ${styles.bookButton}`}>Book Now</button>
                        <button className={`btn btn-secondary ${styles.messageButton}`}>Message Coach</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachProfile;
