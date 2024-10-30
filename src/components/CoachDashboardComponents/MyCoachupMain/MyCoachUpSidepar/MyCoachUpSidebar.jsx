// MyCoachUpSidebar.jsx
import React from 'react';
import styles from "./MyCoachUpSidebar.module.css";
import xlogo from "@assets/Xlogo.png";
import { Link } from 'react-router-dom';

function MyCoachUpSidebar() {
    return (
        <div className={styles.sidebarContainer}>
            {/* Profile Completion Section */}
            <div className={styles.section}>
                <div className={styles.completionHeader}>
                    <span className={`${styles.checkmark} mb-2`}>✓</span>
                    <p className='fs-5'>Your Profile is 100% Complete</p>
                </div>
                <div className={`progress ${styles.customProgress}`}>
                    <div
                        className={`progress-bar ${styles.customProgressBar}`}
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <button className={`${styles.linkButton} mt-3`}>
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Social Accounts
                </button>
            </div>

            <div className={styles.divider}></div>

            {/* Ranking Section */}
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Coach Ranking and Stats</h4>
                <div className={styles.rankCard}>
                    <div className={styles.rankNumber}>21st</div>
                    <p className={styles.rankLocation}>in Virginia Soccer</p>
                    <button className={styles.linkButton}>View Coach Leaderboard</button>
                </div>

                <div className={styles.statsContainer}>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Leads Acquired</span>
                        <span className={styles.statValue}>71</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Paid Clients</span>
                        <span className={styles.statValue}>28</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statLabel}>Leads Converted</span>
                        <span className={styles.statValue}>28 (39%)</span>
                    </div>
                    <button className={`${styles.linkButton} text-center w-100`}>
                        View All Your Coaching Stats
                    </button>
                </div>
            </div>

            {/* Pro Shop Section */}
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Pro Shop Reward</h4>
                <div className={styles.proShopCard}>
                    <div className={styles.proShopHeader}>
                        <img src={xlogo} alt="logo" className={styles.shopLogo} />
                        <h2 className={styles.shopTitle}>Pro Shop</h2>
                    </div>
                    <div className={styles.discountBadge}>20% OFF</div>
                    <p className={styles.shopDescription}>
                        The CoachUp Pro Shop offers a wide selection of apparel and equipment
                        for your training needs from top brands including Under Armour, SKLZ,
                        Wilson, EvoShield, and more!
                    </p>
                    <Link to="/shop" className={styles.shopNowLink}>
                        <button className={styles.primaryButton}>Shop Now</button>
                    </Link>
                </div>
            </div>

            {/* Helpful Links Section */}
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Helpful Links</h4>
                <div className={styles.linksList}>
                    {['Insurance Info', 'FAQ', 'Training Center', 'Apparel and Business Cards'].map((link) => (
                        <button key={link} className={styles.linkButton}>{link}</button>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className={`${styles.section} ${styles.actionButtons}`}>
                <button className={styles.primaryButton}>Invite a Client</button>
                <button className={styles.primaryButton}>Refer a Coach</button>
            </div>
        </div>
    );
}

export default MyCoachUpSidebar;