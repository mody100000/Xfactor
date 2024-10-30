import React from 'react'
import styles from "./MyCoachupMain.module.css"
import CoachDashboardCalendar from '../../common/CoachDashboardCalendar/CoachDashboardCalendar'
import { IoIosArrowForward } from 'react-icons/io';
import { BsBell, BsCircleFill } from 'react-icons/bs';
import MyCoachUpSidebar from './MyCoachUpSidepar/MyCoachUpSidebar';
function MyCoachupMain() {
    const conversations = [
        {
            initials: 'BF',
            name: 'Brayan F.',
            message: 'Hello sir! Im called Brayan and Im willing to join the soccer training and I need it.....',
            isNew: true,
            timestamp: '2h ago'
        },
        {
            initials: 'MV',
            name: 'Maria V.',
            message: 'Sorry I will be out of town starting July 15. I can do 1 or 2 sessions before I go......',
            isNew: true,
            timestamp: '3h ago'
        },
        {
            initials: 'AA',
            name: 'Alex A.',
            message: 'Unfortunately, I am booked until Friday. I am available Saturday or Sunday. If.....',
            isNew: false,
            timestamp: '1d ago'
        }
    ];
    return (
        <div className={`container-fluid ${styles.coachContainer}`}>
            <div className="row mt-3">
                <div className="col-md-8 col-12 order-md-1">
                    <div className="row">
                        <h2 >Your Upcoming Sessions and Events</h2>
                        <span className={styles.line}></span>
                        <CoachDashboardCalendar />
                        <div className={styles.conversationContainer}>
                            <div className={styles.headerSection}>
                                <div className="d-flex align-items-center gap-2">
                                    <h2 className="mb-0">Recent Conversations</h2>
                                </div>
                                <div className={styles.notificationIcon}>
                                    <span className={styles.newBadge}>2 new</span>
                                    <BsBell size={20} />
                                </div>
                            </div>

                            <div className={styles.conversationsList}>
                                {conversations.map((conv, index) => (
                                    <div key={index} className={styles.conversationCard}>
                                        <div className="d-flex gap-3 align-items-center w-100">
                                            <div className={styles.avatarSection}>
                                                <div className={styles.avatar}>
                                                    {conv.initials}
                                                </div>
                                                {conv.isNew && (
                                                    <BsCircleFill className={styles.statusDot} />
                                                )}
                                            </div>

                                            <div className={styles.contentSection}>
                                                <div className="d-flex justify-content-between align-items-center w-100">
                                                    <h3 className={styles.name}>{conv.name}</h3>
                                                    <span className={styles.timestamp}>{conv.timestamp}</span>
                                                </div>
                                                <p className={styles.message}>{conv.message}</p>
                                            </div>

                                            <div className={styles.arrowIcon}>
                                                <IoIosArrowForward size={20} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className={styles.viewAllButton}>
                                View all messages
                                <IoIosArrowForward size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 mb-3">
                    <MyCoachUpSidebar />
                </div>
            </div>
        </div>
    )
}

export default MyCoachupMain