import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './CoachDashboardSidebar.module.css';
import { FaRegTimesCircle } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import logo from "../../../assets/logo.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlineEventAvailable, MdOutlineSpeakerNotes } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { CiSettings, CiDark } from "react-icons/ci";
import { LuPackageSearch } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";


const CoachDashboardSidebar = ({ isOpen, toggleSidebar, toggleTheme, theme }) => {
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
                <li className={getMenuItemClass('/coach-dashboard/coach-profile')}>
                    <NavLink to="/coach-dashboard/coach-profile" className='text-decoration-none text-light'>
                        <IoPersonCircleOutline size={25} className="mx-2" /> Profile
                    </NavLink>
                </li>
                <li className={getMenuItemClass('/coach-dashboard', true)}>
                    <NavLink to="/coach-dashboard" className='text-decoration-none text-light'>
                        <BsJournalBookmark size={20} className="mx-2" /> My Coachup
                    </NavLink>
                </li>
                <li className={getMenuItemClass('/coach-dashboard/coach-Packages')}>
                    <NavLink to="/coach-dashboard/coach-Packages" className='text-decoration-none text-light'>
                        <LuPackageSearch size={25} className="mx-2" /> Packages
                    </NavLink>
                </li>
                <li className={getMenuItemClass('/coach-dashboard/client-filter')}>
                    <NavLink to="/coach-dashboard/client-filter" className='text-decoration-none text-light'>
                        <MdOutlineSpeakerNotes size={25} className="mx-2" /> Sessions
                    </NavLink>
                </li>
                <li className={getMenuItemClass('/dashboard/career')}>
                    <BiBriefcase size={25} className="mx-2" /> Camps
                </li>
                <li className={`${getMenuItemClass('/coach-dashboard/coach-clients')} mt-5`}>
                    <NavLink to="/coach-dashboard/coach-clients" className='text-decoration-none text-light'>
                        <IoPeopleOutline size={22} className="mx-2" /> Clients
                    </NavLink>
                </li>
                <li className={getMenuItemClass('/dashboard/purchases')}>
                    {/* <NavLink to="/dashboard/purchases" className='text-decoration-none text-light'> */}
                    <MdOutlineEventAvailable size={25} className="mx-2" /> Availability
                    {/* </NavLink> */}
                </li>
                <li className={getMenuItemClass('/dashboard/help')}>
                    < IoWalletOutline size={25} className="mx-2" /> Payments
                </li>
                <li className={getMenuItemClass('/dashboard/settings')}>
                    <CiSettings size={25} className="mx-2" /> Account
                </li>
                <li className={styles.menuItem} onClick={toggleTheme}>
                    <CiDark size={25} className="mx-2" /> {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </li>
            </ul>
            <NavLink to="/" className={styles.logoutLink}>
                <button className={styles.logout}><RiLogoutCircleLine size={22} /> Log out</button>
            </NavLink>
        </div>
    );
};

export default CoachDashboardSidebar;
