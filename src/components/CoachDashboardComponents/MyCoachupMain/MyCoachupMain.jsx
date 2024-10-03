import React from 'react'
import styles from "./MyCoachupMain.module.css"
import CoachDashboardCalendar from '../../common/CoachDashboardCalendar/CoachDashboardCalendar'
import { IoIosArrowForward } from 'react-icons/io';
import MyCoachUpSidepar from './MyCoachUpSidepar/MyCoachUpSidepar';

function MyCoachupMain() {
    return (
        <div className={`container-fluid ${styles.coachContainer}`}>
            <div className="row mt-3">
                <div className="col-md-8 col-12 order-md-1">
                    <div className="row">
                        <h2 >Your Upcoming Sessions and Events</h2>
                        <span className={styles.line}></span>
                        <CoachDashboardCalendar />
                        <div className='mt-5'>
                            <h2 className='mb-3'>Recent Conversations (0 new)</h2>
                            <div className={styles.messagesCard}>
                                <div className={`p-2  ${styles.cardBody}`}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex flex-row gap-3 align-items-center'>
                                            <div className={styles.ClientName}>
                                                BF
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <p className='text-danger my-1 fw-bold fs-5 p-0 text-start'>Brayan F.</p>
                                                <p className={`fs-6 p-0 m-0 text-start ${styles.supText}`}>Hello sir! I’m called Brayan and I’m willing to join the soccer training and I need it.....</p>
                                            </div>
                                        </div>
                                        <div className={`d-flex justify-content-center align-items-center ${styles.supText}`}>
                                            <IoIosArrowForward size={25} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`p-2  ${styles.cardBody}`}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex flex-row gap-3 align-items-center'>
                                            <div className={styles.ClientName}>
                                                MV
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <p className='text-danger my-1 fw-bold fs-5 p-0 text-start'>Maria V.</p>
                                                <p className={`fs-6 p-0 m-0 text-start ${styles.supText}`}>Sorry I will be out of town starting July 15. I can do 1 or 2 sessions before I go......</p>
                                            </div>
                                        </div>
                                        <div className={`d-flex justify-content-center align-items-center ${styles.supText}`}>
                                            <IoIosArrowForward size={25} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`p-2`}>
                                    <div className='d-flex justify-content-between cursor-pointer'>
                                        <div className='d-flex flex-row gap-3 align-items-center'>
                                            <div className={styles.ClientName}>
                                                AA
                                            </div>
                                            <div className='d-flex flex-column'>
                                                <p className='text-danger my-1 fw-bold fs-5 p-0 text-start'>Alex A.</p>
                                                <p className={`fs-6 p-0 m-0 text-start ${styles.supText}`}>Unfortunately, I am booked until Friday. I am available Saturday or Sunday. If.....</p>
                                            </div>
                                        </div>
                                        <div className={`d-flex justify-content-center align-items-center ${styles.supText}`}>
                                            <IoIosArrowForward size={25} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text-danger fs-5 p-3 cursor-pointer'>View all messages</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 mb-3">
                    <MyCoachUpSidepar />
                </div>
            </div>
        </div>
    )
}

export default MyCoachupMain