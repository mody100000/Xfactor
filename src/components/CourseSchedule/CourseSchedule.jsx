import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { BsArrowDownRightCircle, BsArrowUpRightCircle } from "react-icons/bs";
import { FaReact, FaCode, FaDatabase, FaMobileAlt } from "react-icons/fa";
import styles from "./CourseSchedule.module.css";

const CourseSchedule = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={styles.courses}>
      <div className="d-flex flex-row justify-content-between align-items-center flex-wrap mt-1 mb-4">
        <h1 className="fw-bold">My courses</h1>
        <div className="d-flex justify-content-between">
          <button className={`btn btn-danger ${styles.topBtn}`}>Active</button>
          <button className={`btn btn btn-outline border border-1 border-danger text-danger ${styles.topBtn}`}>Completed</button>
          <button className={`btn btn btn-outline border border-1 border-danger text-danger ${styles.saveIcon}`}>
            <CiBookmark size={25} className={`text-danger mx-1`} />
          </button>
        </div>
      </div>
      <div className="row">
        {courses.map(course => (
          <div className="col-12 mb-3" key={course.id}>
            <div className={`${styles.courseCard} card`}>
              <div className={`${styles.cardBody}`}>
                <div className={styles.titles}>
                  <div>
                    <h2 className={styles.courseTitle}>{course.title}</h2>
                    {/* <p className={styles.courseSubtitle}>{course.subtitle}</p> */}
                  </div>
                  <button className={`btn ${styles.expandBtn}`} onClick={() => toggleExpand(course.id)}>
                    {expanded[course.id] ? <BsArrowUpRightCircle color="#DC3545" size={25} /> : <BsArrowDownRightCircle color="#DC3545"  size={25} />}
                  </button>
                </div>
                <div className={`d-flex justify-content-between align-items-end mt-auto ${styles.tagsAndLastSeen}`}>
                  <div className={styles.courseTags}>
                    {course.tags.map((tag, index) => (
                      <button className={`btn btn-outline-danger me-2 ${styles.courseBtn}`} key={`${tag}-${index}`}>{tag}</button>
                    ))}
                  </div>
                  {/* <div className={styles.lastSeen}>Last seen: {course.lastSeen}</div> */}
                </div>
                {expanded[course.id] && (
                  <div className={styles.expandedContent}>
                    <p className="text-muted mt-1 pt-2">Additional course information goes here...</p>
                    <button className={`btn btn-danger ${styles.topBtn}`}>Continue</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h2 className="fw-bold mb-4">Progress</h2>
        <div className="row">
          {progressCards.map(card => (
            <div className="col-lg-6 mb-3" key={card.id}>
              <div className={`card ${styles.progressCard}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className={styles.iconWrapper}>
                    {card.icon}
                  </div>
                  <span className={styles.progressNumbers}>{card.progressNumbers}</span>
                </div>
                <h3 className={styles.progressTitle}>{card.title}</h3>
                <div className="progress my-3">
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{ width: `${card.progressPercentage}%` }} 
                    aria-valuenow={card.progressPercentage} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  >
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <span>{card.progressPercentage}% complete</span>
                  <span>{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
  // More course objects here
];

const progressCards = [
  {
    id: 1,
    icon: <FaReact size={30} color="#61dafb" />,
    progressNumbers: "7/15",
    title: "React Basics",
    progressPercentage: 50,
    date: "2 Feb, 2024",
  },
  {
    id: 2,
    icon: <FaCode size={30} color="#f0db4f" />,
    progressNumbers: "10/20",
    title: "JavaScript Advanced",
    progressPercentage: 75,
    date: "5 Mar, 2024",
  },
  {
    id: 3,
    icon: <FaDatabase size={30} color="#4DB33D" />,
    progressNumbers: "5/10",
    title: "Database Management",
    progressPercentage: 50,
    date: "12 Jan, 2024",
  },
  {
    id: 4,
    icon: <FaMobileAlt size={30} color="#007acc" />,
    progressNumbers: "12/20",
    title: "Mobile Development",
    progressPercentage: 60,
    date: "20 Apr, 2024",
  },
];

export default CourseSchedule;