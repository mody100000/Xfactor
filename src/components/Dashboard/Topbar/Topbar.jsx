import React from 'react';
import styles from './Topbar.module.css';

const TopBar = ({ toggleSidebar }) => {
    return (
      <div className={styles.topbar}>
        <button className={styles.menuBtn} onClick={toggleSidebar}>&#9776;</button>
        <input type="text" className={styles.search} placeholder="Search" />
        <div className={styles.userInfo}>
          <span>Shama Akhmedova</span>
          <button className={styles.account}>Account</button>
          <button className={styles.payment}>Payment</button>
        </div>
      </div>
    );
  };
  
  export default TopBar;