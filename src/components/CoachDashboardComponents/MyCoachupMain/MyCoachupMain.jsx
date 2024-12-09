import React from 'react'
import styles from "./MyCoachupMain.module.css"
import CoachDashboardCalendar from '../../common/CoachDashboardCalendar/CoachDashboardCalendar'
import { IoIosArrowForward } from 'react-icons/io';
import { BsBell, BsCircleFill, BsPersonCheck } from 'react-icons/bs';
import MyCoachUpSidebar from './MyCoachUpSidepar/MyCoachUpSidebar';
import { GrSchedulePlay } from 'react-icons/gr';
import { FaRegComment } from 'react-icons/fa6';
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
        <>
            <h2 className='fw-bold fs-1 my-3'>My CoachUp</h2>
            <div className={`container-fluid ${styles.coachContainer}`}>

                <div className="row mt-3">

                    <div className="col-md-8 col-12 order-md-1">
                        <div className="row">

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
        </>
    )
}

export default MyCoachupMain