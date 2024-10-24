import React, { useState } from 'react'
import styles from "./BasicInfo.module.css"

function BasicInfo() {
    const [isPublic, setIsPublic] = useState(false);
    const [bio, setBio] = useState('');

    const handleSave = () => {
        // Handle save logic here
        console.log('Saving:', { isPublic, bio });
    };
    return (
        <div className={`card mt-5 ${styles.mainCard}`}>
            <div className={`${styles.cardHeader}`}>
                <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-person-badge text-white"></i>
                    <h3 className="mb-0 text-white">Basic Info</h3>
                </div>
            </div>

            <div className={`card-body ${styles.cardBodyCustom}`}>
                <div className={styles.checkboxContainer}>
                    <div className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            id="displayName"
                            checked={isPublic}
                            onChange={(e) => setIsPublic(e.target.checked)}
                            className={styles.customCheckbox}
                        />
                        <label
                            htmlFor="displayName"
                            className={`${styles.checkboxLabel} mb-0`}
                        >
                            Display full name publicly
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className={styles.bioLabel}>
                        One Sentence Bio
                    </label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className={`${styles.textArea} shadow-sm`}
                        placeholder="To develop players to achieve their maximum potential."
                    />
                </div>

                <div className="d-flex justify-content-end">
                    <button
                        onClick={handleSave}
                        className={`btn d-flex align-items-center gap-2 ${styles.btnSave}`}
                    >
                        <i className="bi bi-check2"></i>
                        Save Description
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo