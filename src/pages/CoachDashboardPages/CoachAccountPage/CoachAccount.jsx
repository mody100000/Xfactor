import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./CoachAccount.module.css"

const CoachAccountPage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [vacationReason, setVacationReason] = useState('');
    const [traineeModeEnabled, setTraineeModeEnabled] = useState(false);

    const handleVacationSubmit = (e) => {
        e.preventDefault();
        console.log('Vacation Details:', {
            startDate,
            endDate,
            reason: vacationReason
        });
    };

    const handleTraineeModeClick = () => {
        setTraineeModeEnabled(!traineeModeEnabled);

        navigate('/dashboard');
    };

    return (
        <div className="container">
            <div className={`${styles.accountPage} p-4`}>
                <h1 className={`mb-4 ${styles.text}`}>Coach Account Settings</h1>

                {/* Vacation Section */}
                <div className={`${styles.vacationSection} mb-4`}>
                    <h2 className="h4 mb-3">Set Vacation</h2>

                    <form onSubmit={handleVacationSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Start Date</label>
                                <input
                                    type="date"
                                    className={`form-control ${styles.dateInput}`}
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">End Date</label>
                                <input
                                    type="date"
                                    className={`form-control ${styles.dateInput}`}
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Vacation Reason</label>
                            <textarea
                                className={`${styles.input} text-black`}
                                rows="3"
                                value={vacationReason}
                                onChange={(e) => setVacationReason(e.target.value)}
                                placeholder="Enter reason for vacation"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-danger"
                            disabled={!startDate || !endDate}
                        >
                            Submit Vacation Request
                        </button>
                    </form>
                </div>

                {/* Trainee Mode Section */}
                <div className={styles.traineeModeSection}>
                    <h2 className="h4 mb-3">Trainee Mode</h2>
                    <button
                        className={`${styles.traineeModeButton} ${traineeModeEnabled ? styles.active : ''}`}
                        onClick={handleTraineeModeClick}
                    >
                        <span className={styles.buttonText}>
                            {traineeModeEnabled ? "Trainee Mode On" : "Enter Trainee Mode"}
                        </span>
                        <div className={styles.buttonIcon}>
                            {traineeModeEnabled ? '🚀' : '👩‍🎓'}
                        </div>
                    </button>

                    {traineeModeEnabled && (
                        <p className={styles.modeNotice}>
                            Trainee mode is currently active. Some features may be limited.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoachAccountPage;