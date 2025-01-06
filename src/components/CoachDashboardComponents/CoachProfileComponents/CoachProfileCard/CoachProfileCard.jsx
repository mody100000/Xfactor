import React from 'react';
import styles from "./CoachProfileCard.module.css";
import coachImg from "@assets/user.webp";

function CoachProfileCard() {
    return (
        <div className={styles.coachCard}>
            <div className="d-flex flex-column flex-lg-row gap-4 h-100">
                <div className="flex-grow-1 order-1">
                    {/* Profile Info */}
                    <div className="mb-5">
                        <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
                            <div className={styles.profileImageContainer}>
                                <img src={coachImg} alt="Coach" className={styles.coachImage} />
                                <button className={styles.cameraButton}>
                                    <i className="bi bi-camera-fill"></i>
                                </button>
                            </div>
                            <h2 className="display-4 fw-bold mb-0 text-center text-sm-start">Arbi H.</h2>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="row g-3 mt-5">
                        <div className="col-12 col-md-4">
                            <div className={styles.statsCard}>
                                <h6 className="text-muted mb-1 fs-5">Coach Score</h6>
                                <p className={styles.statValue}>1,219</p>
                                <a href="#" className="text-danger text-decoration-none">
                                    <small>What is Coach Score?</small>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className={styles.statsCard}>
                                <span className={styles.tierBadge}>TIER: SILVER</span>
                                <div className="mb-2">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    <span className="fw-bold">108</span> Completed Sessions
                                </div>
                                <div>
                                    <i className="bi bi-heart-fill text-danger me-2"></i>
                                    <span className="fw-bold">0%</span> Client Loyalty Rate
                                </div>
                                <a href="#" className="text-danger text-decoration-none d-block mt-2">
                                    <small>Learn more about your Coach Tier</small>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className={`${styles.progressCard}`}>
                                <p className="mb-2 fs-5">Profile Completion</p>
                                <div className="progress" style={{ height: "10px" }}>
                                    <div className={styles.progressBar} style={{ width: "100%" }}></div>
                                </div>
                                <small className="text-muted">Your Profile is 100% Complete</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.actionButtons} d-flex flex-row flex-lg-column flex-wrap gap-2 order-2`}>
                    <button className="btn btn-outline-danger flex-grow-1">
                        <i className="bi bi-plus-circle me-2"></i>
                        Coach Another Sport
                    </button>
                    <button className="btn btn-outline-danger flex-grow-1">
                        <i className="bi bi-eye me-2"></i>
                        View Public Profile
                    </button>
                    <button className="btn btn-outline-danger flex-grow-1">
                        <i className="bi bi-people me-2"></i>
                        Trainee Mode
                    </button>
                    <button className="btn btn-outline-danger flex-grow-1">
                        <i className="bi bi-gear me-2"></i>
                        Settings
                    </button>
                    <button className="btn btn-outline-danger flex-grow-1">
                        <i className="bi bi-calendar me-2"></i>
                        Schedule
                    </button>
                    <button className="btn btn-outline-danger flex-grow-1">
                        <i className="bi bi-graph-up me-2"></i>
                        Analytics
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CoachProfileCard;