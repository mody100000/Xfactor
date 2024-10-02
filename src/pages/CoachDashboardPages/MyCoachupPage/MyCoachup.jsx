import React from 'react'
import styles from "./MyCoachup.module.css"
import { BsPersonCheck } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import MyCoachupMain from '../../../components/CoachDashboardComponents/MyCoachupMain/MyCoachupMain';

function MyCoachup() {
    return (
        <div className='p-3'>
            <h2 className='fw-bold fs-1 my-3'>My CoachUp</h2>
            <div className={`d-flex flex-column mb-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>CoachUp Pro</p>
                </div>
                <div className={`p-3  ${styles.cardBody}`}>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-row gap-3 align-items-center'>
                            <div className={styles.supText}>
                                <BsPersonCheck size={35} />
                            </div>
                            <div className='d-flex flex-column'>
                                <p className='text-danger my-1 fs-4 p-0 text-start'> Sign Up for CoachUp Pro</p>
                                <p className={`fs-5 p-0 m-0 text-start ${styles.supText}`}>Upgrade your account to create your own custom website </p>
                            </div>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center ${styles.supText}`}>
                            <IoIosArrowForward size={25} />
                        </div>
                    </div>

                </div>
            </div>
            <div className={`d-flex flex-column mb-5 ${styles.coachCard}`}>
                <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                    <p className='mb-0 fs-5 text-white'>Your To-Do</p>
                </div>
                <div className={`${styles.cardBody}`}>
                    <div className='d-flex justify-content-between py-2 px-3'>
                        <div className='d-flex flex-row gap-3 align-items-center'>
                            <div className={styles.supText}>
                                <FaRegComment size={35} />
                            </div>
                            <div className='d-flex flex-column'>
                                <p className='text-danger my-1 fs-4 p-0 text-start'>Reply to 1 new message from potential clients</p>
                                <p className={`fs-5 p-0 m-0 text-start ${styles.supText}`}>Brayan F. says: Hello sir! I’m called Brayan and I’m willing...</p>
                            </div>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center ${styles.supText}`}>
                            <IoIosArrowForward size={25} />
                        </div>
                    </div>
                    <div className={`d-flex justify-content-between py-2 px-3 ${styles.scheduleCard}`}>
                        <div className='d-flex flex-row gap-3 align-items-center'>
                            <div className={styles.supText}>
                                <GrSchedulePlay size={35} />
                            </div>
                            <div className='d-flex flex-column'>
                                <p className='text-danger my-1 fs-4 p-0 text-start'>Schedule next session for 1 client</p>
                                <p className={`fs-5 p-0 m-0 text-start ${styles.supText}`}>Ki Sun Y. is waiting to schedule their next session</p>
                            </div>
                        </div>
                        <div className={`d-flex justify-content-center align-items-center ${styles.supText}`}>
                            <IoIosArrowForward size={25} />
                        </div>
                    </div>
                </div>
            </div>
            <MyCoachupMain />
        </div>
    )
}

export default MyCoachup