import React from 'react';
import styles from './CoursesSidebar.module.css';
import NewCalendar from './NewCalendar/NewCalendar';
import { FaRegTimesCircle, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const CoursesSidebar = ({ isOpen, toggleSidebar }) => {

  const showDetailsHandle = (dayStr) => {
    console.log("Selected Date:", dayStr);
  };

  return (
    <div className={`${styles.sidebarContent} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={toggleSidebar}><FaRegTimesCircle /></button>
      <div className={`${styles.card} mb-3`}>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>Let's set a weekly goal</h5>
          <p className={styles.cardText}>
            Learners who set a goal are 75% more likely to complete the course
          </p>
        </div>
      </div>
      <div className={styles.calendarHeader}>
        <div className={styles.calendarContainer}>
          <NewCalendar showDetailsHandle={showDetailsHandle} />
        </div>
      </div>
      <div className={styles.tasksContainer}>
        <h4 className='fw-bold'>Tasks of the week</h4>
        <ul>
          <li className='d-flex align-items-center'>
            <span className={styles.taskDate}>07 May</span> - Course Introduction <span className={styles.taskTime}>12:00 PM</span>
          </li>
          <li className='d-flex align-items-center'>
            <span className={styles.taskDate}>06 May</span> - Career Seminar <span className={styles.taskTime}>5:00 PM</span>
          </li>
          <li className='d-flex align-items-center'>
            <span className={styles.taskDate}>05 May</span> - Study Skills Workshop <span className={styles.taskTime}>1:00 PM</span>
          </li>
          <li className='d-flex align-items-center'>
            <span className={styles.taskDate}>04 May</span> - Industry Insights Panel <span className={styles.taskTime}>2:00 PM</span>
          </li>
        </ul>
      </div>
      <div>
      </div>
      <div className={styles.ProgressContainer}>
        <h5 className='fw-bold my-4'>Progress by courses</h5>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "55%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h5 className='my-3'>user experience</h5>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "45%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        {/*   */}
        <h5 className='my-3'>user experience</h5>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "65%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h5 className='my-3'>user experience</h5>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h5 className='mt-3'>user experience</h5>
      </div>
      <div className={`container mt-5`}>
        <div className="row">
          <div className="col">
            <h3 className="text-center">Rate this course so we can improve it</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <Rating
              emptySymbol={<FaStar color="lightgray" size={30} />}
              fullSymbol={<FaStar color="#BF1E2E" size={30} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSidebar;
