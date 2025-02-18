import React from 'react';
import styles from "./ViewPackages.module.css";
import ManagePackages from '../../../../components/CoachDashboardComponents/CoachDashboardPackagesComponents/ManagePackages';

function ViewPackages() {
    return (
        <div className='container py-5 px-sm-4'>
            {/* Header Section */}
            <div className={styles.headerSection}>
                <h2 className='display-5 mb-4 text-center'>Your Earning Structure</h2>
                <p className={`lead ${styles.supText}`}>
                    Build lasting relationships and earn more! Our tiered payment structure rewards your dedication
                    to client success. Watch your earnings grow with each session.
                </p>
            </div>

            {/* Main Card */}
            <div className={`${styles.mainCard} my-5`}>
                <div className={styles.cardHeaderNew}>
                    <h3 className='mb-0'>Session-Based Earnings</h3>
                    <span className={styles.headerBadge}>Up to 94% earnings</span>
                </div>

                {/* Progress Timeline */}
                <div className={styles.timelineContainer}>
                    <div className={styles.timeline}></div>
                    <div className={`row g-0 position-relative ${styles.sessionsRow}`}>
                        {[
                            { session: 1, rate: 57, fee: 40 },
                            { session: 2, rate: 72, fee: 25 },
                            { session: 3, rate: 82, fee: 15 },
                            { session: 4, rate: 87, fee: 10 },
                            { session: 5, rate: 94, fee: 3 }
                        ].map((item, index) => (
                            <div key={index} className='col'>
                                <div className={styles.sessionCardNew}>
                                    <div className={styles.sessionNumber}>
                                        Session {item.session}
                                        <div className={styles.dot}></div>
                                    </div>
                                    <div className={styles.rateBox}>
                                        <span className={styles.percentage}>{item.rate}%</span>
                                        <span className={styles.label}>Your Rate</span>
                                    </div>
                                    <div className={styles.feeDetails}>
                                        <p>Platform Fee: {item.fee}%</p>
                                        <p>Processing: 3%</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className={styles.packagesSection}>
                <h2 className='display-5 mb-4 text-center'>Training Packages</h2>
                <div className='row mb-4'>
                    <div className='col-md-12'>
                        <p className={styles.supText}>
                            Create custom training packages that work for you and your athletes.
                            Offer flexibility with both in-person and online training options.
                        </p>
                    </div>
                </div>
                <ManagePackages />
            </div>
        </div>
    );
}

export default ViewPackages;