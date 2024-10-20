import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './CoachDashboardLayout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme } from '../../store/reducers/themeSlice';
import CoachDashboardSidebar from '../../components/CoachDashboardComponents/CoachDashboardSidebar/CoachDashboardSidebar';
import CoachDashboardTopbar from '../../components/CoachDashboardComponents/CoachDashboardTopbar/CoachDashboardTopbar';
import Footer from '../../components/Footer/Footer';

const CoachDashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
    dispatch(setTheme(localStorage.getItem('theme') || 'dark'));
  }, [theme, dispatch]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className={styles.dashboard}>
      <CoachDashboardSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} toggleTheme={() => dispatch(toggleTheme())} />
      <div className={styles.mainSection}>
        <CoachDashboardTopbar toggleSidebar={toggleSidebar} />
        <Outlet />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default CoachDashboardLayout;
