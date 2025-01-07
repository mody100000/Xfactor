import React, { useState } from 'react'
import styles from "./ProfileURL.module.css"
function ProfileURL({ isOpen, onClose }) {
    const [url, setUrl] = useState('');
    const [saved, setSaved] = useState(false);


    const handleSave = () => {
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
            onClose();
        }, 1000);
    };
    if (!isOpen) return null;

    return (
        <div className={`modal ${styles.modalOverlay}`}>
            <div className={`modal-dialog modal-lg px-4 px-sm-1`}>
                <div className={`modal-content ${styles.mainCard}`}>
                    <div className={`d-flex border-0 ${styles.cardHeader}`}>
                        <div className="d-flex flex-column gap-2 align-items-start">
                            <i className="bi bi-link-45deg text-white"></i>
                            <h3 className="mb-2 text-white">Custom Profile URL</h3>
                            <p className="mb-0 text-white text-start">
                                Create a memorable URL for your profile that's easy to share with others.
                                Make it unique and professional!
                            </p>
                        </div>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className={`card-body ${styles.cardBody}`}>
                        <div className={`${styles.urlInputContainer} p-4 mb-4`}>
                            <div className="row g-2 align-items-center">
                                <div className="col-12 col-sm-auto">
                                    <div className={styles.baseUrl}>
                                        <span>xfactor.com/me/</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className={`form-control ${styles.urlInput}`}
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="your-profile-name"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mb-4">
                            <button
                                onClick={handleSave}
                                className={`btn ${saved ? styles.btnSaved : styles.btnSave}`}
                            >
                                {saved ? (
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="bi bi-check-circle"></i>
                                        Saved!
                                    </span>
                                ) : (
                                    'Save URL'
                                )}
                            </button>
                        </div>

                        <div className={styles.previewContainer}>
                            <p className={styles.previewText}>
                                Your profile will be available at:{' '}
                                <span className={styles.previewUrl}>
                                    xfactor.com/me/{url || 'your-profile-name'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileURL