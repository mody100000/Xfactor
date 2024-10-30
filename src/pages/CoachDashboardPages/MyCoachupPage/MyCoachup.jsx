import React from 'react';
import styles from "./MyCoachup.module.css";
import { BsPersonCheck } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import MyCoachupMain from '../../../components/CoachDashboardComponents/MyCoachupMain/MyCoachupMain';

function MyCoachup() {
    return (
        <div className='p-3'>
            <h2 className='fw-bold fs-1 my-3'>My CoachUp</h2>

            {/* CoachUp Pro Card */}
            <div className={`${styles.card} ${styles.coachCard}`}>
                <div className={styles.cardHeader}>
                    <span className="fw-bold fs-5 text-white">CoachUp Pro</span>
                    <span className={styles.badge}>Premium</span>
                </div>
                <div className={styles.cardBody}>
                    <div className="d-flex align-items-center gap-2 gap-sm-4">
                        <div className={styles.iconWrapper}>
                            <BsPersonCheck size={30} />
                        </div>
                        <div className="flex-grow-1">
                            <h3 className={styles.title}>Sign Up for CoachUp Pro</h3>
                            <p className={styles.subtitle}>
                                Upgrade your account to create your own custom website
                            </p>
                        </div>
                        <div className={styles.arrowWrapper}>
                            <IoIosArrowForward size={22} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Todo Card */}
            <div className={`${styles.card} ${styles.todoCard}`}>
                <div className={styles.cardHeader}>
                    <div>
                        <span className="fw-bold fs-5 text-white">Your To-Do</span>
                    </div>
                    <div>
                        <span className={styles.badge}>2 Tasks</span>
                    </div>
                </div>

                <div className={styles.cardBody}>
                    {/* Message Task */}
                    <div className={styles.taskItem}>
                        <div className="d-flex align-items-start gap-3">
                            <div className={styles.iconWrapper}>
                                <FaRegComment size={22} />
                            </div>
                            <div className="flex-grow-1">
                                <h3 className={styles.taskTitle}>
                                    Reply to 1 new message
                                    <span className={styles.highlight}>from potential clients</span>
                                </h3>
                                <div className={styles.messagePreview}>
                                    <span className={styles.sender}>Brayan F.</span> says:
                                    <span className={styles.messageText}>Hello sir! I'm called Brayan and I'm willing...</span>
                                </div>
                            </div>
                            <div className={styles.arrowWrapper}>
                                <IoIosArrowForward size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Schedule Task */}
                    <div className={`${styles.taskItem} ${styles.scheduleTask}`}>
                        <div className="d-flex align-items-start gap-3">
                            <div className={styles.iconWrapper}>
                                <GrSchedulePlay size={22} />
                            </div>
                            <div className="flex-grow-1">
                                <h3 className={styles.taskTitle}>
                                    Schedule next session
                                    <span className={styles.highlight}>for 1 client</span>
                                </h3>
                                <div className={styles.messagePreview}>
                                    <span className={styles.sender}>Ki Sun Y.</span>
                                    <span className={styles.messageText}>is waiting to schedule their next session</span>
                                </div>
                            </div>
                            <div className={styles.arrowWrapper}>
                                <IoIosArrowForward size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MyCoachupMain />
        </div>
    )
}

export default MyCoachup;