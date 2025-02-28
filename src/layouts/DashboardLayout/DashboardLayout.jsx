import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './DashboardLayout.module.css';
import Sidebar from './../../components/Dashboard/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme } from '../../store/reducers/themeSlice';
import CoachDashboardTopbar from '../../components/CoachDashboardComponents/CoachDashboardTopbar/CoachDashboardTopbar';

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
    dispatch(setTheme(localStorage.getItem('theme') || 'light'));
  }, [theme, dispatch]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className={styles.dashboard}>
      <Sidebar isOpen={isSidebarOpen} theme={theme} toggleSidebar={toggleSidebar} toggleTheme={() => dispatch(toggleTheme())} />
      <div className={styles.mainSection}>
        <CoachDashboardTopbar toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
