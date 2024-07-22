import { useState } from 'react';
import styles from "./CourseDetailsPage.module.css";
import CoursesSidebar from "../../components/DashboardCourses/CoursesSidebar/CoursesSidebar";
import { SlCalender } from "react-icons/sl";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
const CourseDetailsPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`container-fluid ${styles.dashboardCoursesPage}`}>
            {/* Toggle button for small screens */}
            <button className={styles.toggleBtn} onClick={toggleSidebar}><SlCalender size={26} /></button>

            <div className="row">
                {/* Main Content */}
                <div className={`col-12 col-lg-8 ${styles.mainContent}`}>
                    <CourseDetails />
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

export default CourseDetailsPage;