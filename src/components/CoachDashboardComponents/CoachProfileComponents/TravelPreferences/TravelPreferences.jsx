import React, { useState } from 'react';
import styles from './TravelPreferences.module.css'; // Import CSS Module

const TravelPreferences = () => {
    const [canTravel, setCanTravel] = useState(true);
    const [location, setLocation] = useState('');
    const [distance, setDistance] = useState('Up to 25 miles');

    const distances = [
        "Up to 5 miles",
        "Up to 10 miles",
        "Up to 25 miles",
        "Up to 50 miles"
    ];

    return (
        <div className={`card mt-5 ${styles.mainCard}`}>
            <div className={`card-header ${styles.cardHeader}`}>
                <div className="d-flex flex-column align-items- gap-2">
                    <i className={`bi bi-geo-alt text-white ${styles.icon}`}></i>
                    <h3 className="mb-2 text-white">Travel Preferences</h3>
                    <p className='mb-0 text-white'>Are you willing to meet clients at a training location near them? If so, enter your base address
                        and specify how far you're willing to travel.</p>
                </div>
            </div>

            <div className={`card-body ${styles.cardBody}`}>
                {/* <div className={styles.description}>
                    <i className="bi bi-info-circle me-2"></i>
                    Are you willing to meet clients at a training location near them? If so, enter your base address
                    and specify how far you're willing to travel.
                </div> */}

                <div className={styles.toggleContainer}>
                    <button
                        onClick={() => setCanTravel(true)}
                        className={`${styles.toggleButton} ${canTravel ? styles.toggleButtonActive : ''}`}
                    >
                        <i className="bi bi-check2-circle me-2"></i>
                        Yes, I can travel
                    </button>
                    <button
                        onClick={() => setCanTravel(false)}
                        className={`${styles.toggleButton} ${!canTravel ? styles.toggleButtonActive : ''}`}
                    >
                        <i className="bi bi-x-circle me-2"></i>
                        No, I can't travel
                    </button>
                </div>

                {canTravel && (
                    <div className={`row g-3 ${styles.inputGroup}`}>
                        <div className="col-12 col-md-6">
                            <label className={styles.label}>
                                <i className="bi bi-house-door me-2"></i>
                                Base Location
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your address (e.g., Falls Church, VA)"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className={styles.input}
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label className={styles.label}>
                                <i className="bi bi-arrows-move me-2"></i>
                                Travel Distance
                            </label>
                            <select
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                                className={styles.select}
                            >
                                {distances.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                <div className="d-flex justify-content-end">
                    <button className={`d-flex align-items-center ${styles.saveButton}`}>
                        <i className="bi bi-geo-alt me-2"></i>
                        Update Location
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TravelPreferences;
