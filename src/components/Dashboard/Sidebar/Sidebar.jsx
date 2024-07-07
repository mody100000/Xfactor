import React from 'react';
import styles from './Sidebar.module.css';
import { FaRegTimesCircle } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsJournalBookmark } from "react-icons/bs";
import { RiProgress3Line } from "react-icons/ri";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings, CiDark } from "react-icons/ci";

const Sidebar = ({ isOpen, toggleSidebar, toggleTheme, theme }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={toggleSidebar}><FaRegTimesCircle /></button>
      <h1 className={styles.logo}>
        <img src={logo} className={styles.logo} alt="XFACTOR" />
      </h1>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link to="/dashboard" className='text-decoration-none text-light'><IoPersonCircleOutline size={25} className="mx-2" /> Profile</Link></li>
        <li className={styles.menuItem}><Link to="/dashboard/courses" className='text-decoration-none text-light'><BsJournalBookmark size={20} className="mx-2" /> Courses</Link></li>
        <li className={styles.menuItem}><RiProgress3Line size={25} className="mx-2" /> Progress</li>
        <li className={styles.menuItem}><MdOutlineSpeakerNotes size={25} className="mx-2" /> Notes</li>
        <li className={styles.menuItem}><BiBriefcase size={25} className="mx-2" /> Career</li>
        <li className={`${styles.menuItem} mt-5`}><BsChat size={22} className="mx-2" /> Chat</li>
        <li className={styles.menuItem}><IoWalletOutline size={25} className="mx-2" /> Purchases</li>
        <li className={styles.menuItem}><IoIosHelpCircleOutline size={25} className="mx-2" /> Help</li>
        <li className={styles.menuItem}><CiSettings size={25} className="mx-2" /> Settings</li>
        <li className={styles.menuItem} onClick={toggleTheme}><CiDark size={25} className="mx-2" /> {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</li>
      </ul>
      <Link to="/" className={styles.logoutLink}>
        <button className={styles.logout}><RiLogoutCircleLine size={22} /> Log out</button>
      </Link>
    </div>
  );
};

export default Sidebar;
