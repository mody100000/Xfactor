import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from './../../components/Dashboard/Sidebar/Sidebar';
import TopBar from './../../components/Dashboard/Topbar/Topbar';
import MainContent from './../../components/Dashboard/MainContent/MainContent';
import { useState } from 'react';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className={styles.dashboard}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={styles.mainSection}>
          <TopBar toggleSidebar={toggleSidebar} />
          <MainContent />
        </div>
      </div>
    );
  };
  
  export default Dashboard;