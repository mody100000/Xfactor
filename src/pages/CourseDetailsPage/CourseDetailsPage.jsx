import { useState } from 'react';
import styles from "./CourseDetailsPage.module.css";
import { SlCalender } from "react-icons/sl";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import CourseDetailsSidebar from '../../components/CourseDetails/CourseDetailsSidebar/CourseDetailsSidebar';
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
                    <CourseDetailsSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsPage;