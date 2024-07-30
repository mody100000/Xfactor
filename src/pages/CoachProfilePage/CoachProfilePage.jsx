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
      <div className={styles.cardContainer}>
        <div className={`text-center text-white ${styles.gradientCustom}`} style={{ flex: "0 0 25%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <img src={coach.image || coachImage} alt={coach.name} className={`img-fluid mt-5 mb-4 ${styles.coachImage}`} />
          <h5 className='fw-bold fs-3'>{coach.name}</h5>
          <p className='fw-bold'>{coach.category}</p>
        </div>
        <div className={styles.cardMain} style={{ flex: "1" }}>
          <div className={styles.cardBody}>
            <div>
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
              <hr className="mt-0 mb-4" />
              <div className="d-flex align-items-center">
                <div className="me-2">{'★'.repeat(coach.rating)}{'☆'.repeat(5 - coach.rating)}</div>
                <div className={styles.supText}>{coach.reviews} reviews</div>
              </div>
              <h6 className="mt-4">Summary</h6>
              <p className={styles.supText}>{coach.summary}</p>
              <h6 className="mt-4">Salary</h6>
              <p className={styles.supText}>${coach.salary}/session</p>
            </div>
            <div className="d-flex justify-content-start mt-4">
              <button className={`btn btn-danger me-2 ${styles.bookButton}`}>Book Now</button>
              <button className={`btn btn-secondary ${styles.messageButton}`}>Message Coach</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfilePage;
