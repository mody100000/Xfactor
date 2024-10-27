import React, { useState } from 'react';
import styles from './MyCredentials.module.css';

const CustomDropdownMenu = ({ options, placeholder }) => (
    <select className={`${styles.customSelect} border-2`} defaultValue="">
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
        ))}
    </select>
);

const MyCredentials = () => {
    const collegeOptions = [
        "None", "US", "CA", "MX", "UK", "FR", "DE", "AL", "AK", "AZ", "AR",
        "CO", "CT", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
        "KS", "KY", "LA"
    ];

    const yearsOptions = Array.from({ length: 26 }, (_, i) => i.toString());
    const [selectedCollege, setSelectedCollege] = useState('');
    const [selectedYears, setSelectedYears] = useState('');

    return (
        <div className="mt-3">
            <div className={styles.credentialsCard}>
                {/* Header */}
                <div className={`${styles.cardHeader} flex items-center p-4`}>

                    <h2 className="mb-3 text-white font-bold">My Credentials</h2>
                    <p className="font-semibold mb-0 text-white">
                        Fill out your coaching credentials below
                    </p>
                </div>

                {/* Body */}
                <div className={`${styles.cardBody} p-4`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* College Selection */}
                        <div className={styles.formGroup}>
                            <div className="flex items-center mb-2">
                                <i className="bi bi-mortarboard-fill text-red-600 mr-2"></i>
                                <label className={styles.label}>College Attended</label>
                            </div>
                            <select
                                className={styles.customSelect}
                                value={selectedCollege}
                                onChange={(e) => setSelectedCollege(e.target.value)}
                            >
                                <option value="" disabled>Select Location</option>
                                {collegeOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            <small className={`${styles.supText} mt-2 block`}>
                                <i className="bi bi-info-circle mr-1"></i>
                                Select your college location
                            </small>
                        </div>

                        {/* Years Experience */}
                        <div className={styles.formGroup}>
                            <div className="flex items-center mb-2">
                                <i className="bi bi-clock-history text-red-600 mr-2"></i>
                                <label className={styles.label}>Years of Experience</label>
                            </div>
                            <select
                                className={styles.customSelect}
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
                            <small className={`${styles.supText} mt-2 block`}>
                                <i className="bi bi-info-circle mr-1"></i>
                                How long have you been coaching?
                            </small>
                        </div>

                        {/* Facility Costs */}
                        <div className="col-span-full">
                            <div className={styles.formGroup}>
                                <div className="flex items-center mb-2">
                                    <i className="bi bi-building text-red-600 mr-2"></i>
                                    <label className={styles.label}>Facility Costs</label>
                                </div>
                                <CustomDropdownMenu
                                    options={[
                                        "N/A - No Facility",
                                        "Not Included",
                                        "Included",
                                    ]}
                                    placeholder="N/A - No Facility"
                                />
                                <small className={`${styles.supText} mt-2 block`}>
                                    <i className="bi bi-info-circle mr-1"></i>
                                    Specify how facility costs are handled
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* Update Button */}
                    <div className="mt-4 text-center md:text-left">
                        <button className={styles.updateButton}>
                            <i className="bi bi-save mr-2"></i>
                            Update Credentials
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCredentials;