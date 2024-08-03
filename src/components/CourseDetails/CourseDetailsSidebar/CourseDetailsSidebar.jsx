import React, { useState } from 'react';
import styles from "./CourseDetailsSidebar.module.css";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";

const CourseDetailsSidebar = ({ isOpen, toggleSidebar }) => {
    const initialCourses = [
        {
            id: 1,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
        {
            id: 2,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
        {
            id: 3,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
        {
            id: 4,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
        {
            id: 5,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
        {
            id: 6,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
        {
            id: 7,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
        {
            id: 8,
            active: false,
            duration: 38,
            description: "Incorporating Abstraction",
            type: "Video material"
        },
    ];

    const [checkCourse, setCheckCourses] = useState(initialCourses);

    const handelChecked = (id) => {
        setCheckCourses(prevCourses =>
            prevCourses.map(course =>
                course.id === id ? { ...course, active: !course.active } : course
            )
        );
    };


    return (
        <div className={`${styles.sidebarContent} ${isOpen ? styles.open : ''}`}>
            <button className={styles.closeBtn} onClick={toggleSidebar}><FaRegTimesCircle /></button>
            <div className={styles.topSidepar}>
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Swiss Design</h3>
                    <IoSearchCircleOutline size={35} className={styles.iconSearch} />
                </div>
                <div className={`d-flex gap-3 my-3 ${styles.iconSearch}`}>
                    <p className={styles.likeActive}>All</p>
                    <p>Notes</p>
                    <p>Completed</p>
                </div>
            </div>
            {checkCourse.map(course => (
                <div className={`${course.active ? styles.cardActive : styles.card} mb-3`} key={course.id}>
                    <div className={styles.cardBody}>
                        <div className="d-flex align-items-center">
                            <p onClick={() => handelChecked(course.id)} className={`${course.active ? styles.checkedActive : styles.checked}`}></p>
                            <p className={styles.iconSearch}>{course.duration} min</p>
                        </div>
                        <h5 className={styles.cardTitle}>{course.description}</h5>
                        <p className={styles.cardText}>
                            {course.type}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}



export default CourseDetailsSidebar