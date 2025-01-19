import { useState } from "react";
import { BsArrowDownRightCircle, BsArrowUpRightCircle } from "react-icons/bs";
import styles from "./CourseSchedule.module.css";
import { useNavigate } from "react-router-dom";

const CourseSchedule = () => {
  const [expanded, setExpanded] = useState({});

  const navigate = useNavigate()

  const handelNavigate = () => {
    navigate("/dashboard/courses/CourseDetails")
  }

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={styles.courses}>
      <div className="row">
        {courses.map(course => (
          <div className="col-12 mb-3" key={course.id}>
            <div className={`${styles.courseCard} card`}>
              <div className={`${styles.cardBody}`}>
                <div className={styles.titles}>
                  <div>
                    <h2 className={styles.courseTitle}>{course.title}</h2>
                  </div>
                  <button className={`btn ${styles.expandBtn}`} onClick={() => toggleExpand(course.id)}>
                    {expanded[course.id] ? <BsArrowUpRightCircle color="#DC3545" size={25} /> : <BsArrowDownRightCircle color="#DC3545" size={25} />}
                  </button>
                </div>
                <div className={`d-flex justify-content-between align-items-end mt-auto ${styles.tagsAndLastSeen}`}>
                  <div className={styles.courseTags}>
                    {course.tags.map((tag, index) => (
                      <button className={`btn btn-outline-danger me-2 ${styles.courseBtn}`} key={`${tag}-${index}`}>{tag}</button>
                    ))}
                  </div>
                </div>
                {expanded[course.id] && (
                  <div className={styles.expandedContent}>
                    <p className="mt-1 pt-2">Additional course information goes here...</p>
                    <button onClick={handelNavigate} className={`btn btn-danger ${styles.topBtn}`}>Continue</button>
                  </div>
                )}
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
    tags: ['Design Management', 'Innovation', 'Innovation'],
    lastSeen: '2 Feb, 2024',
  },
  {
    id: 2,
    title: 'Innovation through design',
    subtitle: 'Complete all courses from The University of Sydney',
    tags: ['Design Management', 'Innovation'],
    lastSeen: '2 Feb, 2024',
  },
  {
    id: 3,
    title: 'Innovation through design',
    subtitle: 'Complete all courses from The University of Sydney',
    tags: ['Design Management', 'Innovation'],
    lastSeen: '2 Feb, 2024',
  },
  {
    id: 4,
    title: 'Innovation through design',
    subtitle: 'Complete all courses from The University of Sydney',
    tags: ['Design Management', 'Innovation'],
    lastSeen: '2 Feb, 2024',
  },
];


export default CourseSchedule;
