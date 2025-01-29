import CourseSchedule from "../../components/CourseSchedule/CourseSchedule";
import { useState } from 'react';
import styles from "./CourseSchedulePage.module.css";
import CoursesSidebar from "../../components/DashboardCourses/CoursesSidebar/CoursesSidebar";
import { SlCalender } from "react-icons/sl";
import { CiBookmark } from "react-icons/ci";
import ProgressCards from "../../components/CourseSchedule/ProgressCards/ProgressCards";
const CourseSchedulePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState(true)
  const [complete, setComplete] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleActiveView = () => {
    setActive(true)
    setComplete(false)
  }
  const handleCompleteView = () => {
    setComplete(true)
    setActive(false)
  }
  return (
    <div className={`container-fluid ${styles.dashboardCoursesPage}`}>
      {/* Toggle button for small screens */}
      <button className={styles.toggleBtn} onClick={toggleSidebar}><SlCalender size={26} /></button>

      <div className="row">
        {/* Main Content */}
        <div className={`col-12 col-lg-8 ${styles.mainContent}`}>
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
                onClick={handleCompleteView}
              >
                Completed
              </button>
              <button className={`btn btn-outline border border-1 border-danger text-danger ${styles.saveIcon}`}>
                <CiBookmark size={25} className={`text-danger mx-1 `} />
              </button>
            </div>
          </div>
          <CourseSchedule />
          <ProgressCards />
          {/* <Courses /> */}
        </div>

        {/* Right Sidebar */}
        <div className={`col-12 col-lg-4 ${styles.rightSidebar} ${isSidebarOpen ? styles.open : ''}`}>
          <CoursesSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </div>
  );
}

export default CourseSchedulePage;