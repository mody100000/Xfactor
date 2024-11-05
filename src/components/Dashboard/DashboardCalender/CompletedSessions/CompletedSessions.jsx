import React from 'react';
import event1 from "@assets/user.webp";
import event2 from "@assets/RegisterCoach (1).jpg";
import event3 from "@assets/review2.jpeg";
import event4 from "@assets/review1.jpeg";
import styles from "./CompletedSessions.module.css";
import { FaClock } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

function CompletedSessions() {
    const completedSessions = [
        { id: 1, coachName: "Leo", sessionType: "Football", sessionLocation: "On-site", img: event1, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates blanditiis velit distinctio iusto nulla eos quidem quos cupiditate dolorum vel reprehenderit praesentium architecto libero excepturi esse molestiae quas, temporibus nam?", time: "11:30AM", date: new Date(2024, 10, 21) },
        { id: 2, coachName: "Mark", sessionType: "Football", sessionLocation: "Online", img: event2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.", time: "1:30PM", date: new Date(2024, 10, 5) },
        { id: 3, coachName: "Taric", sessionType: "Football", sessionLocation: "Campus", img: event3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in error rem eveniet, quisquam et eaque. Rem ducimus, quo accusantium possimus veritatis, quos dolores reiciendis et dignissimos fugiat cupiditate enim!", time: "5:30PM", date: new Date(2024, 10, 5) },
        { id: 4, coachName: "Jhin", sessionType: "Football", sessionLocation: "Online", img: event4, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsam commodi odit molestiae debitis, maiores tempore in! Dolorum, fugit obcaecati! Voluptates provident eius ad laudantium exercitationem, vel corrupti aliquid quo?", time: "8:30PM", date: new Date(2024, 10, 28) }
    ];

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className={styles.eventsGrid}>
            <h3 className='fw-bold'>Completed Sessions</h3>
            {completedSessions.map(session => (
                <div key={session.id} className={styles.eventCard}>
                    <div className={styles.eventImageContainer}>
                        <img
                            src={session.img}
                            alt={session.coachName}
                            className={styles.eventImage}
                        />
                        <div className={styles.overlay}></div>
                        <div className={styles.eventType}>
                            {session.sessionType}
                        </div>
                        <div className={styles.completedBadge}>
                            <FaCheckCircle />
                            Completed
                        </div>
                    </div>
                    <div className={styles.eventDetails}>
                        <div className={styles.headerSection}>
                            <h3>{session.coachName}</h3>
                            <div className={styles.dateBox}>
                                <FaCalendarAlt />
                                <span>{formatDate(session.date)}</span>
                            </div>
                        </div>
                        <div className={styles.eventMeta}>
                            <div className={styles.metaItem}>
                                <FaClock />
                                <span>{session.time}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <FaMapMarkerAlt />
                                <span>{session.sessionLocation}</span>
                            </div>
                        </div>
                        <div className={styles.sport}>
                            {session.sessionType} Session
                        </div>
                        <p className={styles.eventDescription}>
                            {session.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CompletedSessions;