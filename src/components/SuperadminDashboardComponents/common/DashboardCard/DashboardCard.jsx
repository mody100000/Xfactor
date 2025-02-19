import React from 'react';
import styles from './DashboardCard.module.css';

const DashboardCard = ({ Icon, title, value }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.value}>{value}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;