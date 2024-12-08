import React, { useState } from 'react';
import styles from "./CoachCompletedSessions.module.css";
import { FaClock, FaMapMarkerAlt, FaCheckCircle, FaCalendarAlt, FaFilter, FaTimes } from 'react-icons/fa';
import event1 from "@assets/user.webp";
import event2 from "@assets/RegisterCoach (1).jpg";
import event3 from "@assets/review2.jpeg";
import event4 from "@assets/review1.jpeg";
import { BsArrowDownRightSquare, BsArrowUpRightSquare } from "react-icons/bs";
import { FaCalendar, FaComment, FaEnvelope } from 'react-icons/fa6';

function CoachCompletedSessions() {
    const completedSessions = [
        {
            id: 1, coachName: "Leo", sessionType: "Football", sessionLocation: "On-site", img: event1,
            description: "", time: "11:30AM", date: new Date(2024, 10, 21)
        },
        { id: 2, coachName: "Mark", sessionType: "Tennis", sessionLocation: "Online", img: event2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.", time: "1:30PM", date: new Date(2024, 10, 5) },
        { id: 3, coachName: "Taric", sessionType: "Swimming", sessionLocation: "Campus", img: event3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in error rem eveniet, quisquam et eaque. Rem ducimus, quo accusantium possimus veritatis, quos dolores reiciendis et dignissimos fugiat cupiditate enim!", time: "5:30PM", date: new Date(2024, 10, 5) },
        { id: 4, coachName: "Jhin", sessionType: "Football", sessionLocation: "Online", img: event4, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsam commodi odit molestiae debitis, maiores tempore in! Dolorum, fugit obcaecati! Voluptates provident eius ad laudantium exercitationem, vel corrupti aliquid quo?", time: "8:30PM", date: new Date(2024, 10, 28) }
    ];
    const [showModal, setShowModal] = useState(false);
    const [selectedCoach, setSelectedCoach] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [sessions, setSessions] = useState(completedSessions);
    const [messageModal, setMessageModal] = useState({ show: false, sessionId: null });
    const [commentModal, setCommentModal] = useState({ show: false, sessionId: null, comment: '' });
    const [rescheduleModal, setRescheduleModal] = useState({ show: false, sessionId: null, date: null });


    const uniqueCoaches = [...new Set(completedSessions.map(session => session.coachName))];
    const uniqueTypes = [...new Set(completedSessions.map(session => session.sessionType))];

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const filteredSessions = completedSessions.filter(session => {
        const matchesCoach = selectedCoach === 'all' || session.coachName === selectedCoach;
        const matchesType = selectedType === 'all' || session.sessionType === selectedType;
        return matchesCoach && matchesType;
    });

    const resetFilters = () => {
        setSelectedCoach('all');
        setSelectedType('all');
    };
    const toggleDescription = (id) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const openMessageModal = (sessionId) => {
        setMessageModal({ show: true, sessionId });
    };

    const openCommentModal = (sessionId) => {
        const session = sessions.find(s => s.id === sessionId);
        setCommentModal({
            show: true,
            sessionId,
            comment: session.description || ''
        });
    };

    const openRescheduleModal = (sessionId) => {
        const session = sessions.find(s => s.id === sessionId);
        setRescheduleModal({
            show: true,
            sessionId,
            date: session.date
        });
    };

    const handleSendMessage = () => {
        // Implement message sending logic
        setMessageModal({ show: false, sessionId: null });
    };

    const handleUpdateComment = () => {
        setSessions(prevSessions =>
            prevSessions.map(session =>
                session.id === commentModal.sessionId
                    ? { ...session, description: commentModal.comment }
                    : session
            )
        );
        setCommentModal({ show: false, sessionId: null, comment: '' });
    };

    const handleReschedule = () => {
        setSessions(prevSessions =>
            prevSessions.map(session =>
                session.id === rescheduleModal.sessionId
                    ? { ...session, date: rescheduleModal.date }
                    : session
            )
        );
        setRescheduleModal({ show: false, sessionId: null, date: null });
    };

    return (
        <div className={styles.eventsGrid}>
            <div className={styles.headerContainer}>
                <h3 className='fw-bold'>Completed Sessions</h3>
                <button
                    className='btn btn-outline-danger'
                    onClick={() => setShowModal(true)}
                >
                    <FaFilter />
                    Filter
                </button>
            </div>
            {messageModal.show && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>
                                <FaEnvelope color='#bf1e2e' /> Send Message
                            </h5>
                            <button
                                className={styles.closeButton}
                                onClick={() => setMessageModal({ show: false, sessionId: null, message: '' })}
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <textarea
                                className={styles.input}
                                value={messageModal.message}
                                onChange={(e) => setMessageModal(prev => ({
                                    ...prev,
                                    message: e.target.value
                                }))}
                                placeholder='Type your message...'
                            />
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                className='btn btn-danger'
                                onClick={() => {
                                    // Here you can add logic to send the message
                                    setMessageModal({ show: false, sessionId: null, message: '' });
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Comment Modal */}
            {commentModal.show && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>
                                <FaComment color='#bf1e2e' /> Description
                            </h5>
                            <button
                                className={styles.closeButton}
                                onClick={() => setCommentModal({ show: false, sessionId: null, comment: '' })}
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <textarea
                                className={styles.input}
                                value={commentModal.comment}
                                onChange={(e) => setCommentModal(prev => ({
                                    ...prev,
                                    comment: e.target.value
                                }))}
                                placeholder='Update session description...'
                            />
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                className='btn btn-danger'
                                onClick={handleUpdateComment}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Reschedule Modal */}
            {rescheduleModal.show && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>
                                <FaCalendar color='#bf1e2e' /> Reschedule Session
                            </h5>
                            <button
                                className={styles.closeButton}
                                onClick={() => setRescheduleModal({ show: false, sessionId: null, date: null })}
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <input
                                type='date'
                                className={`form-control ${styles.dateInput}`}
                                value={rescheduleModal.date ? rescheduleModal.date.toISOString().split('T')[0] : ''}
                                onChange={(e) => setRescheduleModal(prev => ({
                                    ...prev,
                                    date: new Date(e.target.value)
                                }))}
                            />
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                className='btn btn-danger'
                                onClick={handleReschedule}
                            >
                                Reschedule
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Modal */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h5 className={styles.modalTitle}>
                                <FaFilter color='#bf1e2e' />
                                Filter Sessions</h5>
                            <button
                                className={styles.closeButton}
                                onClick={() => setShowModal(false)}
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.filterGroup}>
                            <label className={styles.filterLabel} htmlFor="coachSelect">
                                Coach
                            </label>
                            <select
                                className={styles.filterSelect}
                                id="coachSelect"
                                value={selectedCoach}
                                onChange={(e) => setSelectedCoach(e.target.value)}
                            >
                                <option value="all">All Coaches</option>
                                {uniqueCoaches.map(coach => (
                                    <option key={coach} value={coach}>{coach}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.filterGroup}>
                            <label className={styles.filterLabel} htmlFor="typeSelect">
                                Session Type
                            </label>
                            <select
                                className={styles.filterSelect}
                                id="typeSelect"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                            >
                                <option value="all">All Types</option>
                                {uniqueTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                className='btn btn-outline-danger'
                                onClick={resetFilters}
                            >
                                Reset Filters
                            </button>
                            <button
                                className='btn btn-danger'
                                onClick={() => setShowModal(false)}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {sessions.map(session => (
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
                        <div className={`${!session.description ? "bg-danger" : "bg-success"} ${styles.completedBadge}`}>
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
                            {expandedDescriptions[session.id]
                                ? session.description
                                : session.description.length > 100
                                    ? `${session.description.slice(0, 100)}...`
                                    : session.description}
                            {session.description.length > 100 && (
                                <span
                                    className={styles.readMore}
                                    onClick={() => toggleDescription(session.id)}
                                >
                                    {expandedDescriptions[session.id] ? <BsArrowUpRightSquare size={40} /> : <BsArrowDownRightSquare size={40} />}
                                </span>
                            )}
                        </p>
                        <div className={styles.cardActions}>
                            <button
                                className='btn btn-outline-primary me-2'
                                onClick={() => openMessageModal(session.id)}
                            >
                                <FaEnvelope /> Message
                            </button>
                            <button
                                className='btn btn-outline-secondary me-2'
                                onClick={() => openCommentModal(session.id)}
                            >
                                <FaComment /> Comment
                            </button>
                            <button
                                className='btn btn-outline-warning'
                                onClick={() => openRescheduleModal(session.id)}
                            >
                                <FaCalendar /> Reschedule
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CoachCompletedSessions;