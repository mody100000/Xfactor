import React, { useState } from 'react';
import styles from '../DashboardCalender.module.css';
import { FaTrash, FaTimes, FaCheck } from 'react-icons/fa';

const DeleteConfirmationModal = ({
    isOpen,
    onClose,
    onConfirmDelete,
    eventDetails,

}) => {
    if (!isOpen) return null;

    return (
        <div className={`${styles.modalOverlay} ${styles.confirmationModal}`}>
            <div className={`${styles.modalWrapper} ${styles.confirmationModalWrapper}`}>
                <div className={`${styles.modalCard} ${styles.confirmationModalCard}`}>
                    <div className={styles.modalHeader}>
                        <h2 className='fw-bold'>Confirm Deletion</h2>
                        <button
                            className={styles.closeButton}
                            onClick={() => {
                                onClose();
                            }}
                        >
                            &times;
                        </button>
                    </div>

                    <div className={styles.modalBody}>
                        <p>Are you sure you want to delete this session with {eventDetails.coachName}?</p>
                        <div className={styles.confirmationActions}>
                            <button
                                className={`${styles.deleteButton} ${styles.confirmDelete}`}
                                onClick={onConfirmDelete}
                            >
                                <FaTrash /> Delete
                            </button>
                            <button
                                className={`${styles.rescheduleButton} ${styles.cancelDelete}`}
                                onClick={onClose}
                            >
                                <FaTimes /> Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;