import React from 'react';
import CoursesSidebar from '../../components/DashboardCourses/CoursesSidebar/CoursesSidebar';
import Courses from '../../components/DashboardCourses/DashboardCourses';

const DashboardCoursesPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* Main Content */}
        <div className="col-8">
          <Courses />
        </div>

        {/* Right Sidebar */}
        <div className="col-4">
          <CoursesSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardCoursesPage;
