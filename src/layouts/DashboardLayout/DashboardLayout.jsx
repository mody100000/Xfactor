import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/Dashboard/Topbar/Topbar';
import styles from './DashboardLayout.module.css';
import Sidebar from './../../components/Dashboard/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme } from '../../store/reducers/themeSlice';

const DashboardLayout = () => {

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
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} toggleTheme={() => dispatch(toggleTheme())} />
      <div className={styles.mainSection}>
        <TopBar toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
