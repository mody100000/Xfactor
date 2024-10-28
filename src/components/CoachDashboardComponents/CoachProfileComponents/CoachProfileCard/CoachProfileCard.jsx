import React from 'react'
import styles from "./CoachProfileCard.module.css"
import coachImg from "@assets/user.webp";

function CoachProfileCard() {
    return (
        <div className={`${styles.coachCard}`}>
            <div className="row">
                {/* Left Column - Profile Info */}
                <div className="col-md-4">
                    <div className={styles.profileSection}>
                        <div className="text-center">
                            <img src={coachImg} alt="Coach" className={styles.coachImage} />
                            <button className={styles.uploadButton}>
                                <i className="bi bi-camera-fill me-2"></i>
                                Upload Photo
                            </button>
                        </div>
                    </div>
                    <div className="text-center text-md-start">
                        <h2 className="display-4 fw-bold mb-3 text-center">Arbi H.</h2>
                        <div className="d-flex flex-column gap-2">
                            <button className="btn btn-outline-danger">
                                <i className="bi bi-plus-circle me-2"></i>
                                Coach Another Sport
                            </button>
                            <button className="btn btn-outline-danger">
                                <i className="bi bi-eye me-2"></i>
                                View Public Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Middle Column - Coach Info */}
                <div className="col-md-2 my-5">

                </div>

                {/* Right Column - Stats */}
                <div className="col-md-6">
                    <div className="row g-3">
                        {/* Coach Score Card */}
                        <div className="col-12">
                            <div className={styles.statsCard}>
                                <h6 className="text-muted mb-1 fs-5">Coach Score</h6>
                                <p className={styles.statValue}>1,219</p>
                                <a href="#" className="text-danger text-decoration-none">
                                    <small>What is Coach Score?</small>
                                </a>
                            </div>
                        </div>

                        {/* Tier and Stats Card */}
                        <div className="col-12">
                            <div className={styles.statsCard}>
                                <span className={styles.tierBadge}>TIER: SILVER</span>
                                <div className="mb-2 fs-5">
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
                    </div>

                    {/* Progress Section */}
                    <div className={styles.progressContainer}>
                        <p className="mb-2 fs-5">Profile Completion</p>
                        <div className="progress" style={{ height: "10px" }}>
                            <div
                                className={styles.progressBar}
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <small className="text-muted">Your Profile is 100% Complete</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachProfileCard