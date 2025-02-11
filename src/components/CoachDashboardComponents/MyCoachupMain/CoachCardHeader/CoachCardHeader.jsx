import React, { useState } from "react";
import coachImg from "@assets/user.webp";
import styles from "./CoachCardHeader.module.css";
import { IoCalendar, IoMail, IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

function CoachCardHeader() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.coachCard}>
            <div className="d-flex flex-column flex-lg-row gap-4 h-100">
                <div className="flex-grow-1 order-1">
                    {/* Profile Info */}
                    <div className="mb-5">
                        <div className="d-flex justify-content-between flex-column flex-sm-row align-items-center gap-3">
                            <div>
                                <h3 className="mb-0 text-center">
                                    Welcome Back, <span className="fw-bold fs-2"> Arbi H</span>
                                </h3>
                                <p className="text-muted fs-5">Football Coach</p>
                            </div>
                            <div className={styles.profileImageContainer}>
                                <img src={coachImg} alt="Coach" className={styles.coachImage} />
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="row g-3 mt-5">
                        {/* Notifications Card */}
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className={styles.statsCard} onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
                                <div className="d-flex align-items-center gap-3">
                                    <div className={styles.statIconWrapper}>
                                        <IoNotifications size={20} />
                                    </div>
                                    <h3 className={styles.statTitle}>Notifications</h3>
                                </div>
                                <div className={styles.statInfo}>
                                    <div className="d-flex align-items-center justify-content-around gap-3 mt-3">
                                        <div className="text-muted fs-5">Total :</div>
                                        <div className={styles.statNumber}>4</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other Cards */}
                        <div className="col-12 col-md-12 col-lg-4">
                            <Link to="./client-filter">
                                <div className={styles.statsCard}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className={styles.statIconWrapper}>
                                            <IoCalendar size={20} />
                                        </div>
                                        <h3 className={styles.statTitle}>Sessions</h3>
                                    </div>
                                    <div className={styles.statInfo}>
                                        <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                                            <div className="text-muted">Upcoming :</div>
                                            <div className={styles.statNumber}>5</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                                            <div className="text-muted">Complete :</div>
                                            <div className={styles.statNumber}>8</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                                            <div className="text-muted">Pending :</div>
                                            <div className={styles.statNumber}>3</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-md-12 col-lg-4">
                            <Link to="./coach-chat">
                                <div className={styles.statsCard}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className={styles.statIconWrapper}>
                                            <IoMail size={20} />
                                        </div>
                                        <h3 className={styles.statTitle}>Messages</h3>
                                    </div>
                                    <div className={styles.statInfo}>
                                        <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                                            <div className="text-muted">Read :</div>
                                            <div className={styles.statNumber}>15</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between gap-3 mt-3">
                                            <div className="text-muted">Unread :</div>
                                            <div className={styles.statNumber}>4</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Floating Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Notifications</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <ul className="list-group">
                                    <li className="list-group-item">🔔 New message from John</li>
                                    <li className="list-group-item">✅ Your task has been completed</li>
                                    <li className="list-group-item">🚀 Your profile was viewed 10 times today</li>
                                    <li className="list-group-item">🛒 Your order has been shipped</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay (closes modal when clicked) */}
            {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
        </div>
    );
}

export default CoachCardHeader;
