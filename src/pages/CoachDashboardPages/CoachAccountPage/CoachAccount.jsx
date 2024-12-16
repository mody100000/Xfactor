import React, { useState } from 'react';
import styles from "./CoachAccount.module.css"
const CoachAccountPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [vacationReason, setVacationReason] = useState('');
    const [traineeModeEnabled, setTraineeModeEnabled] = useState(false);

    const handleVacationSubmit = (e) => {
        e.preventDefault();
        // Vacation submission logic
        console.log('Vacation Details:', {
            startDate,
            endDate,
            reason: vacationReason
        });
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
                                    className="form-control"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Vacation Reason</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                value={vacationReason}
                                onChange={(e) => setVacationReason(e.target.value)}
                                placeholder="Enter reason for vacation"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!startDate || !endDate || !vacationReason}
                        >
                            Submit Vacation Request
                        </button>
                    </form>
                </div>

                {/* Trainee Mode Section */}
                <div className={styles.traineeModeSection}>
                    <h2 className="h4 mb-3">Trainee Mode</h2>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="traineeModeSwitch"
                            checked={traineeModeEnabled}
                            onChange={(e) => setTraineeModeEnabled(e.target.checked)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="traineeModeSwitch"
                        >
                            {traineeModeEnabled ? "Trainee Mode Enabled" : "Enable Trainee Mode"}
                        </label>
                    </div>
                    {traineeModeEnabled && (
                        <p className="text-muted mt-2">
                            Trainee mode is currently active. Additional features may be limited.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoachAccountPage;