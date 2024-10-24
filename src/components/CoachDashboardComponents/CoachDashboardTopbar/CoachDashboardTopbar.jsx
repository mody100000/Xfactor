import React from 'react';
import styles from './CoachDashboardTopbar.module.css';
import user from "../../../assets/user.png"
const CoachDashboardTopbar = ({ toggleSidebar }) => {
    return (
        <div className={styles.topbar}>
            <button className={styles.menuBtn} onClick={toggleSidebar}>&#9776;</button>
            <div className={styles.userInfo}>
                <img src={user} alt="user image" className={styles.userImg} />
                <span>Shama Akhmedova</span>
            </div>
        </div>
    );
};

export default CoachDashboardTopbar;