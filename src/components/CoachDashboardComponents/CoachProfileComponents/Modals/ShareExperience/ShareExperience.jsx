import React, { useState } from 'react'
import styles from "./ShareExperience.module.css"
function ShareExperience({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        quote: '',
        name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic here
        setFormData({ quote: '', name: '' });
    };
    if (!isOpen) return null
    return (
        <div className={`modal ${styles.modalOverlay}`}>
            <div className={`modal-dialog modal-lg px-4 px-sm-1`}>
                <div className={`modal-content ${styles.card} mb-5`}>
                    <div className={styles.cardHeaderNew}>
                        <div>
                            <h2 className="mb-0">
                                <i className="bi bi-chat-quote-fill "></i>
                                Share Your Experience
                            </h2>
                            <p className="mt-3 mb-0 text-start">
                                We value your feedback. Please share your thoughts below.
                            </p>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={onClose}
                                aria-label="Close"
                            ></button>
                        </div>
                    </div>
                    <div className={styles.cardBodyNew}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className={styles.formLabel}>
                                    Your Testimonial
                                </label>
                                <textarea
                                    className={styles.textarea}
                                    rows="4"
                                    placeholder="Share your experience working with me..."
                                    value={formData.quote}
                                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className={styles.formLabel}>
                                    Your Name & Title
                                </label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="e.g., John Doe, Soccer Player"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Submit Testimonial
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareExperience