import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/Dashboard/Topbar/Topbar';
import styles from './DashboardLayout.module.css';
import Sidebar from './../../components/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [theme, setTheme] = useState('light');
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
      <div className={styles.dashboard}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} theme={theme} />
        <div className={styles.mainSection}>
          <TopBar toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
    );
}

export default DashboardLayout;
