import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/Dashboard/Topbar/Topbar';
import styles from './DashboardLayout.module.css';
import Sidebar from './../../components/Dashboard/Sidebar/Sidebar';
const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className={styles.dashboard}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={styles.mainSection}>
          <TopBar toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
    );
    }
 
export default DashboardLayout;