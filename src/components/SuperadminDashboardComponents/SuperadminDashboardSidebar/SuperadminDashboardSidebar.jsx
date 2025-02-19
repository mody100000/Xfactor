import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './SuperadminDashboardSidebar.module.css';
import { FaRegTimesCircle } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import logo from "../../../assets/logo.png";
import { BsChat } from "react-icons/bs";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { CiDark } from 'react-icons/ci';

const SuperadminDashboardSidebar = ({ isOpen, toggleSidebar, toggleTheme, theme }) => {
    const location = useLocation();

    const getMenuItemClass = (path, exact = false) => {
        if (exact) {
            return location.pathname === path ? `${styles.menuItem} ${styles.active}` : styles.menuItem;
        }
        return location.pathname.startsWith(path) ? `${styles.menuItem} ${styles.active}` : styles.menuItem;
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <button className={styles.closeBtn} onClick={toggleSidebar}><FaRegTimesCircle /></button>
            <h1 className={styles.logo}>
                <img src={logo} className={styles.logo} alt="XFACTOR" />
            </h1>
            <ul className={styles.menu}>
                <li className={getMenuItemClass('/superadmin-dashboard', true)}>
                    <NavLink to="/superadmin-dashboard" className='text-decoration-none text-light'>
                        <MdGroups size={25} className="mx-2 my-2" /> Clients
                    </NavLink>
                </li>
                <li className={getMenuItemClass('/superadmin-dashboard/coaches')}>
                    <NavLink to="/superadmin-dashboard/coaches" className='text-decoration-none text-light'>
                        <MdOutlineSportsKabaddi size={22} className="mx-2 my-2" /> Coaches
                    </NavLink>
                </li>
                <li className={getMenuItemClass('/superadmin-dashboard/chat')}>
                    <NavLink to="/superadmin-dashboard/chat" className='text-decoration-none text-light'>
                        < BsChat size={25} className="mx-2 my-2" /> Chat
                    </NavLink>
                </li>
            </ul>
            <ul className={`${styles.menu} mt-auto`}>
                <li className={styles.menuItem} onClick={toggleTheme}>
                    <CiDark size={25} className="mx-2 my-2" /> {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </li>
            </ul>
            <NavLink to="/" className={styles.logoutLink}>
                <button className={styles.logout}><RiLogoutCircleLine size={22} /> Log out</button>
            </NavLink>
        </div>
    );
};

export default SuperadminDashboardSidebar;