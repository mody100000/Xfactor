import React, { useState } from 'react';
import styles from './MyCredentials.module.css';

const MyCredentials = () => {
    const collegeOptions = [
        "None", "US", "CA", "MX", "UK", "FR", "DE", "AL", "AK", "AZ", "AR",
        "CO", "CT", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
        "KS", "KY", "LA"
    ];

    const yearsOptions = Array.from({ length: 26 }, (_, i) => i.toString());

    // State to manage selected options
    const [selectedCollege, setSelectedCollege] = useState('');
    const [selectedYears, setSelectedYears] = useState('');

    return (
        <div className={`container my-4 ${styles.cardContainer}`}>
            <div className={`${styles.credentialsCard} bg-white rounded-3 overflow-hidden`}>
                {/* Header */}
                <div className={`${styles.cardHeader} d-flex align-items-center p-4`}>
                    <div className={`${styles.iconContainer} me-3`}>
                        <i className="bi bi-award-fill text-white fs-4"></i>
                    </div>
                    <h2 className="mb-0 text-white fw-bold">My Credentials</h2>
                </div>

                {/* Content */}
                <div className={`p-4 ${styles.cardBody}`}>
                    <div className="row g-4">
                        {/* College Selection */}
                        <div className="col-12 col-md-6">
                            <div className={styles.formGroup}>
                                <label className={`${styles.label} mb-2`}>College Attended</label>
                                <select
                                    className={`form-select ${styles.customSelect}`}
                                    value={selectedCollege}
                                    onChange={(e) => setSelectedCollege(e.target.value)}
                                >
                                    <option value="" disabled>Select Location</option>
                                    {collegeOptions.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                                <small className={`mt-1 d-block ${styles.supText}`}>
                                    Select your college location
                                </small>
                            </div>
                        </div>

                        {/* Years Experience */}
                        <div className="col-12 col-md-6">
                            <div className={styles.formGroup}>
                                <label className={`${styles.label} mb-2`}>Years of Coaching Experience</label>
                                <select
                                    className={`form-select ${styles.customSelect}`}
                                    value={selectedYears}
                                    onChange={(e) => setSelectedYears(e.target.value)}
                                >
                                    <option value="" disabled>Select Years</option>
                                    {yearsOptions.map((year) => (
                                        <option key={year} value={year}>
                                            {year} {parseInt(year) === 1 ? 'Year' : 'Years'}
                                        </option>
                                    ))}
                                </select>
                                <small className={`mt-1 d-block ${styles.supText}`}>
                                    How long have you been coaching?
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* Update Button */}
                    <div className="mt-4 text-center text-md-start">
                        <button className={`btn ${styles.updateButton}`}>
                            Update Credentials
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCredentials;
