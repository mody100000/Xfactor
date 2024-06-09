import React, { useState } from 'react';
import styles from './CoursesSidebar.module.css';
import NewCalendar from './NewCalendar/NewCalendar';

const CoursesSidebar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const showDetailsHandle = (dayStr) => {
    console.log("Selected Date:", dayStr);
    // Handle displaying details for the selected date
  };

  return (
    <div className={styles.rightSidebar}>
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
        <h5>Tasks of the week</h5>
        <ul>
          <li>
            <span className={styles.taskDate}>07 May</span> - Course Introduction <span className={styles.taskTime}>12:00 PM</span>
          </li>
          <li>
            <span className={styles.taskDate}>06 May</span> - Career Seminar <span className={styles.taskTime}>5:00 PM</span>
          </li>
          <li>
            <span className={styles.taskDate}>05 May</span> - Study Skills Workshop <span className={styles.taskTime}>1:00 PM</span>
          </li>
          <li>
            <span className={styles.taskDate}>04 May</span> - Industry Insights Panel <span className={styles.taskTime}>2:00 PM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesSidebar;
