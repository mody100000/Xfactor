import React from 'react';
import styles from './Topbar.module.css';
import user from "../../../assets/user.png"
const TopBar = ({ toggleSidebar }) => {
    return (
      <div className={styles.topbar}>
        <button className={styles.menuBtn} onClick={toggleSidebar}>&#9776;</button>
        <input type="text" className={styles.search} placeholder="Search" />
        <div className={styles.userInfo}>
          <img src={user} alt="user image" className={styles.userImg} />
          <span>Shama Akhmedova</span>
          {/* <button className={styles.account}>Account</button>
          <button className={styles.payment}>Payment</button> */}
        </div>
      </div>
    );
  };
  
  export default TopBar;