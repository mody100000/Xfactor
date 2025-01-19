import React from 'react';
import styles from './DashboardCourses.module.css';
import image from "../../assets/Strength Coach.jpg"
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className={styles.courses}>
      <div className="row">
        {courses.map(course => (
          <div className="col-12 mb-3" key={course.id}>
            <div className={`${styles.courseCard} card`}>
              <div className="row g-4">
                <div className="col-md-3">
                  <img src={course.image} className={`${styles.courseImage} img-fluid rounded-start`} alt={course.title} />
                </div>
                <div className="col-md-9 d-flex flex-column justify-content-between">
                  <div className={styles.cardBody}>
                    <div className={styles.titles}>
                      <h2 className={styles.courseTitle}>{course.title}</h2>
                      <p className={styles.courseSubtitle}>{course.subtitle}</p>
                    </div>
                    <div className={`d-flex justify-content-between align-items-end mt-auto ${styles.tagsAndLastSeen}`}>
                      <div className={styles.courseTags}>
                        {course.tags.map(tag => (
                          <Link to="/dashboard/courses/courseSchedule" key={tag}>
                            <button className={`btn btn-outline-danger me-2 ${styles.courseBtn}`} key={tag}>{tag}</button>
                          </Link>
                        ))}
                      </div>
                      <div className={styles.lastSeen}>Last seen: {course.lastSeen}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const courses = [
  {
    id: 1,
    title: 'Innovation through design',
    subtitle: 'Complete all courses from The University of Sydney',
    tags: ['continue', 'Innovation'],
    lastSeen: '2 Feb, 2024',
    image: image,
  },
  {
    id: 2,
    title: 'Innovation through design',
    subtitle: 'Complete all courses from The University of Sydney',
    tags: ['continue', 'Innovation'],
    lastSeen: '2 Feb, 2024',
    image: image,
  },
  {
    id: 3,
    title: 'Innovation through design',
    subtitle: 'Complete all courses from The University of Sydney',
    tags: ['continue', 'Innovation'],
    lastSeen: '2 Feb, 2024',
    image: image,
  },
  {
    id: 4,
    title: 'Innovation through design',
    subtitle: 'Complete all courses from The University of Sydney',
    tags: ['continue', 'Innovation'],
    lastSeen: '2 Feb, 2024',
    image: image,
  },
];


export default Courses;
