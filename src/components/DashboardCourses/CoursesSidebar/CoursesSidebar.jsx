import React from 'react';
import styles from './CouesesSidebar.module.css';

const CoursesSidebar = () => {
  return (
    <div className={styles.rightSidebar}>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Let's set a weekly goal</h5>
          <p className="card-text">
            Learners who set a goal are 75% more likely to complete the course
          </p>
          {/* Goal setting component */}
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">May 2024</h5>
          <input type="date" className="form-control mb-3" />
          <ul className="list-unstyled">
            {tasks.map(task => (
              <li key={task.id} className="mb-2">
                <strong>{task.date}</strong> - {task.name}
                <div>{task.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const tasks = [
  {
    id: 1,
    date: '07 May',
    name: 'Course Introduction',
    time: '12:00 PM',
  },
  // More task objects here
];


export default CoursesSidebar;
