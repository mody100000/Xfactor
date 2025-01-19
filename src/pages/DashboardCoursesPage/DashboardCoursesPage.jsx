import React, { useState } from 'react';
import CoursesSidebar from '../../components/DashboardCourses/CoursesSidebar/CoursesSidebar';
import Courses from '../../components/DashboardCourses/DashboardCourses';
import { SlCalender } from "react-icons/sl";
import styles from './DashboardCoursesPage.module.css'; // Import styles
import { CiBookmark } from 'react-icons/ci';
import CompletedCourses from '../../components/DashboardCourses/CompletedCourses/CompletedCourses';

const DashboardCoursesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setIsActive] = useState(true)
  const [complete, setIsComplete] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleActiveView = () => {
    setIsActive(true)
    setIsComplete(false)
  }
  const handeleCompleteView = () => {
    setIsComplete(true)
    setIsActive(false)
  }
  return (
    <div className={`container-fluid ${styles.dashboardCoursesPage}`}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}><SlCalender size={26} /></button>

      <div className="row">

        <div className={`col-12 col-lg-8 ${styles.mainContent}`}>
          {/* toggleActiv */}
          <div className='d-flex flex-row justify-content-between align-items-center flex-wrap mb-4'>
            <h2 className={`fw-bold`}>My courses</h2>
            <div className="d-flex justify-content-between">
              <button
                className={`btn ${active ? "btn-danger" : "btn-outline-danger"} ${styles.topBtn}`}
                onClick={handleActiveView}
              >
                Active
              </button>

              <button
                className={`btn ${!active ? "btn-danger" : "btn-outline-danger"} ${styles.topBtn}`}
                onClick={handeleCompleteView}
              >
                Completed
              </button>
              <button className={`btn btn-outline border border-1 border-danger text-danger ${styles.saveIcon}`}>
                <CiBookmark size={25} className={`text-danger mx-1 `} />
              </button>
            </div>
          </div>
          {active ? <Courses /> : <CompletedCourses />}
        </div>

        {/* Right Sidebar */}
        <div className={`col-12 col-lg-4 ${styles.rightSidebar} ${isSidebarOpen ? styles.open : ''}`}>
          <CoursesSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCoursesPage;
