import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FaRegTimesCircle } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import logo from "../../../assets/logo.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsFilePerson, BsJournalBookmark } from "react-icons/bs";
import { RiProgress3Line } from "react-icons/ri";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings, CiDark } from "react-icons/ci";

const Sidebar = ({ isOpen, toggleSidebar, toggleTheme, theme }) => {
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
        <li className={getMenuItemClass('/dashboard', true)}>
          <NavLink to="/dashboard" className='text-decoration-none text-light'>
            <IoPersonCircleOutline size={25} className="mx-2" /> Profile
          </NavLink>
        </li>
        <li className={getMenuItemClass('/dashboard/courses')}>
          <NavLink to="/dashboard/courses" className='text-decoration-none text-light'>
            <BsJournalBookmark size={20} className="mx-2" /> Courses
          </NavLink>
        </li>
        <li className={getMenuItemClass('/dashboard/progress')}>
          <NavLink to="/dashboard/progress" className='text-decoration-none text-light'>
            <RiProgress3Line size={25} className="mx-2" /> Progress
          </NavLink>
        </li>
        <li className={getMenuItemClass('/dashboard/sessions')}>
          <NavLink to="/dashboard/sessions" className='text-decoration-none text-light'>
            <MdOutlineSpeakerNotes size={25} className="mx-2" /> Sessions
          </NavLink>
        </li>
        <li className={getMenuItemClass('/dashboard/career')}>
          <NavLink to="/filtered-coaches" className='text-decoration-none text-light'>
            <BsFilePerson size={22} className="mx-2" /> Apply to Coach
          </NavLink>
        </li>
        <li className={`${getMenuItemClass('/dashboard/chat')} mt-5`}>
          <NavLink to="/dashboard/chat" className='text-decoration-none text-light'>
            <BsChat size={22} className="mx-2" /> Chat
          </NavLink>
        </li>
        <li className={getMenuItemClass('/dashboard/purchases')}>
          <NavLink to="/dashboard/purchases" className='text-decoration-none text-light'>
            <IoWalletOutline size={25} className="mx-2" /> Purchases
          </NavLink>
        </li>
        <li className={getMenuItemClass('/dashboard/help')}>
          <IoIosHelpCircleOutline size={25} className="mx-2" /> Help
        </li>
        <li className={getMenuItemClass('/dashboard/settings')}>
          <CiSettings size={25} className="mx-2" /> Settings
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

export default Sidebar;
