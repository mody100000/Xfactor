import React from 'react'
import styles from "./CoachDashboardPackages.module.css"
import ManagePackages from '../../../components/CoachDashboardComponents/CoachDashboardPackagesComponents/ManagePackages'

function CoachDashboardPackages() {
    return (
        <div className='p-4'>
            <h2 className='mb-4 fw-bold text-center text-sm-start'>Pay Structure</h2>
            <p className={styles.supText}>
                Our pay scale rewards coaches for promoting a long-term commitment to personalized training with their clients on the CoachUp platform.
                The longer you train a client, the more you earn for each session!
            </p>
            <div className={`my-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Earnings per session with the same client</p>
                </div>
                <div className={`${styles.cardBody}`}>
                    {/* Responsive flex: flex-column on small screens, flex-row on md and larger */}
                    <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.sessionCard}`}>
                            <div className={styles.sessionHader}>
                                <p className='my-2 fs-5 text-center'>Session 1</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <p className='fw-bold my-2 text-center'>57% of session rate</p>
                                <p className='mb-2'>40% CoachUp fee</p>
                                <p>3% CC processing</p>
                            </div>
                        </div>
                        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.sessionCard}`}>
                            <div className={styles.sessionHader}>
                                <p className='my-2 fs-5 text-center'>Session 2</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <p className='fw-bold my-2 text-center'>72% of session rate</p>
                                <p className='mb-2'>25% CoachUp fee</p>
                                <p>3% CC processing</p>
                            </div>
                        </div>
                        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.sessionCard}`}>
                            <div className={styles.sessionHader}>
                                <p className='my-2 fs-5 text-center'>Session 3</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <p className='fw-bold my-2 text-center'>82% of session rate</p>
                                <p className='mb-2'>15% CoachUp fee</p>
                                <p>3% CC processing</p>
                            </div>
                        </div>
                        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.sessionCard}`}>
                            <div className={styles.sessionHader}>
                                <p className='my-2 fs-5 text-center'>Session 4</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <p className='fw-bold my-2 text-center'>87% of session rate</p>
                                <p className='mb-2'>10% CoachUp fee</p>
                                <p>3% CC processing</p>
                            </div>
                        </div>
                        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.sessionCard}`}>
                            <div className={styles.sessionHader}>
                                <p className='my-2 fs-5 text-center'>Session 5</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <p className='fw-bold my-2 text-center'>94% of session rate</p>
                                <p className='mb-2'>3% CoachUp fee</p>
                                <p>3% CC processing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='mb-4 fw-bold text-center text-sm-start'>Manage Packages</h2>
            <p className={styles.supText}>
                Customize the training packages you offer to athletes. You can train clients in-person, online, or both!
            </p>
            <p className={`mb-5 ${styles.supText}`}>
                Online training is a great option for athletes all over the country who are unable to train in-person due to location or scheduling restraints. Online training can include written training plans, live video sessions, pre-recorded videos, video analysis, and more!
            </p>
            <ManagePackages />
        </div>
    )
}

export default CoachDashboardPackages
