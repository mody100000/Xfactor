import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './SuperadminDashboardLayout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggleTheme } from '../../store/reducers/themeSlice';
import SuperadminDashboardNavbar from '../../components/SuperadminDashboardComponents/SuperadminDashboardNavbar/SuperadminDashboardNavbar';
import SuperadminDashboardSidebar from '../../components/SuperadminDashboardComponents/SuperadminDashboardSidebar/SuperadminDashboardSidebar';

const SuperadminDashboardLayout = () => {

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
            <SuperadminDashboardSidebar isOpen={isSidebarOpen} theme={theme} toggleSidebar={toggleSidebar} toggleTheme={() => dispatch(toggleTheme())} />
            <div className={styles.mainSection}>
                <SuperadminDashboardNavbar toggleSidebar={toggleSidebar} />
                <Outlet />
            </div>
        </div>
    );
}

export default SuperadminDashboardLayout;
