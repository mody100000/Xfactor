import React from 'react'
import styles from "./MyCoachupMain.module.css"
import CoachDashboardCalendar from '../../common/CoachDashboardCalendar/CoachDashboardCalendar'
import { IoIosArrowForward } from 'react-icons/io';
import { BsBell, BsCircleFill, BsPersonCheck } from 'react-icons/bs';
import { IoNotifications, IoCalendar, IoMail } from 'react-icons/io5';
import MyCoachUpSidebar from './MyCoachUpSidepar/MyCoachUpSidebar';
import { GrSchedulePlay } from 'react-icons/gr';
import { FaRegComment } from 'react-icons/fa6';
import intro from "@assets/f2.jpg"
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
            <div className={`container-fluid ${styles.coachContainer}`}>
                <div className="row mt-3">
                    <div className="col-md-8 col-12 order-md-1">
                        <div className="row">
                            <div className={styles.imgContainer}>
                                <img src={intro} alt="intro" className={styles.img} />
                            </div>
                            <div>
                                <div className={styles.rankCard}>
                                    <h4 className={styles.sectionTitle}>Coach Ranking and Stats</h4>
                                    <div className={styles.rankNumber}>21st</div>
                                    <p className={styles.rankLocation}>in Virginia Soccer</p>
                                    <button className={styles.linkButton}>View Coach Leaderboard</button>
                                </div>
                            </div>
                            {/*statistics card*/}
                            <div className={styles.statsCard}>
                                <div className={styles.cardContent}>
                                    <h2 className={styles.cardTitle}>Activity Overview</h2>

                                    {/* Notifications Section */}
                                    <div className={styles.statSection}>
                                        <div className={styles.statIconWrapper}>
                                            <IoNotifications size={20} />
                                        </div>
                                        <div className={styles.statInfo}>
                                            <h3 className={styles.statTitle}>Notifications</h3>
                                            <div className={styles.statNumber}>12</div>
                                        </div>
                                    </div>

                                    {/* Sessions Section */}
                                    <div className={styles.statSection}>
                                        <div className={styles.statIconWrapper}>
                                            <IoCalendar size={20} />
                                        </div>
                                        <div className={styles.statInfo}>
                                            <h3 className={styles.statTitle}>Sessions</h3>
                                            <div className={styles.statsGrid}>
                                                <div className={styles.statItem}>
                                                    <span className={styles.statLabel}>Upcoming</span>
                                                    <span className={styles.statValue}>5</span>
                                                </div>
                                                <div className={styles.statItem}>
                                                    <span className={styles.statLabel}>Complete</span>
                                                    <span className={styles.statValue}>8</span>
                                                </div>
                                                <div className={styles.statItem}>
                                                    <span className={styles.statLabel}>Pending</span>
                                                    <span className={styles.statValue}>3</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Messages Section */}
                                    <div className={styles.statSection}>
                                        <div className={styles.statIconWrapper}>
                                            <IoMail size={20} />
                                        </div>
                                        <div className={styles.statInfo}>
                                            <h3 className={styles.statTitle}>Messages</h3>
                                            <div className={styles.statsGrid}>
                                                <div className={styles.statItem}>
                                                    <span className={styles.statLabel}>Read</span>
                                                    <span className={styles.statValue}>15</span>
                                                </div>
                                                <div className={styles.statItem}>
                                                    <span className={styles.statLabel}>Unread</span>
                                                    <span className={styles.statValue}>4</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CoachUp Pro Card */}
                            <div className={`${styles.card} ${styles.coachCard}`}>
                                <div className={styles.cardContent}>
                                    <div className={styles.premiumTag}>Premium</div>
                                    <div className={styles.mainContent}>
                                        <div className={styles.iconContainer}>
                                            <BsPersonCheck size={35} />
                                        </div>
                                        <div className={styles.textContent}>
                                            <h3 className={styles.cardTitle}>Sign Up for CoachUp Pro</h3>
                                            <p className={styles.cardDescription}>
                                                Upgrade your account to create your own custom website
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.actionArea}>
                                        <span className={styles.actionText}>Upgrade Now</span>
                                        <div className={styles.arrowIcon}>
                                            <IoIosArrowForward size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Todo Card */}
                            <div className={`${styles.card} ${styles.todoCard}`}>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <h2 className={styles.cardTitle}>Your To-Do</h2>
                                        <div className={styles.taskCounter}>2 Tasks</div>
                                    </div>

                                    <div className={styles.tasksList}>
                                        {/* Message Task */}
                                        <div className={styles.taskItem}>
                                            <div className={styles.taskIconWrapper}>
                                                <FaRegComment size={20} />
                                                <div className={styles.iconLine}></div>
                                            </div>

                                            <div className={styles.taskContent}>
                                                <div className={styles.taskHeader}>
                                                    <h3 className={styles.taskTitle}>
                                                        Reply to 1 new message
                                                        <span className={styles.highlight}>from potential clients</span>
                                                    </h3>
                                                    <div className={styles.arrowWrapper}>
                                                        <IoIosArrowForward size={20} />
                                                    </div>
                                                </div>

                                                <div className={styles.messageContainer}>
                                                    <div className={styles.senderAvatar}>BF</div>
                                                    <div className={styles.messageContent}>
                                                        <span className={styles.sender}>Brayan F.</span>
                                                        <p className={styles.messagePreview}>Hello sir! I'm called Brayan and I'm willing...</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Schedule Task */}
                                        <div className={styles.taskItem}>
                                            <div className={styles.taskIconWrapper}>
                                                <GrSchedulePlay size={20} />
                                            </div>

                                            <div className={styles.taskContent}>
                                                <div className={styles.taskHeader}>
                                                    <h3 className={styles.taskTitle}>
                                                        Schedule next session
                                                        <span className={styles.highlight}>for 1 client</span>
                                                    </h3>
                                                    <div className={styles.arrowWrapper}>
                                                        <IoIosArrowForward size={20} />
                                                    </div>
                                                </div>

                                                <div className={styles.messageContainer}>
                                                    <div className={styles.senderAvatar}>KY</div>
                                                    <div className={styles.messageContent}>
                                                        <span className={styles.sender}>Ki Sun Y.</span>
                                                        <p className={styles.messagePreview}>is waiting to schedule their next session</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-4 col-12 order-md-2 mb-3">
                        <MyCoachUpSidebar />
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
        </>
    )
}

export default MyCoachupMain