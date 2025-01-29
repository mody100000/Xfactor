import React, { useCallback, useState } from 'react'
import coach_1 from "@assets/RegisterCoach (1).jpg"
import coach_2 from "@assets/review2.jpeg";
import coach_3 from "@assets/review1.jpeg";
import coach_4 from "@assets/user.webp";

import styles from "./SelectChoach.module.css"
import { PiPersonSimpleThrowFill } from 'react-icons/pi'
import { ImCancelCircle } from 'react-icons/im'
import { LuMessageCircle } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
function SelectChoach() {
    const coaches = [{
        id: 1,
        name: "Leo Jackson",
        img: coach_1,
        sport: "football",
        type: "on-site",
        sessions: {
            upcoming: 3,
            completed: 5,
            pending: 2
        }
    },
    {
        id: 2,
        name: "Jhin Mason",
        img: coach_2,
        sport: "Yoga",
        type: "Online",
        sessions: {
            upcoming: 3,
            completed: 5,
            pending: 2
        }
    },
    {
        id: 3,
        name: "Taric Addison",
        img: coach_3,
        sport: "Tennis",
        type: "on-site",
        sessions: {
            upcoming: 3,
            completed: 5,
            pending: 2
        }
    },
    {
        id: 4,
        name: "Taric Addison",
        img: coach_4,
        sport: "football",
        type: "Campus",
        sessions: {
            upcoming: 3,
            completed: 5,
            pending: 2
        }
    }]

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [coach, setCoach] = useState([...coaches]);
    const navigate = useNavigate()
    const handelNavigate = () => {
        navigate("/dashboard/select-choach/sessions")
    }
    const handleDeleteClient = useCallback((coachToDelete) => {
        setShowDeleteModal(true);
        setSelectedCoach(coachToDelete);
    }, []);

    const confirmDeleteClient = useCallback(() => {
        if (selectedCoach) {
            setCoach(prevCoaches =>
                prevCoaches.filter(coach => coach.id !== selectedCoach.id)
            );
            setShowDeleteModal(false);
            setSelectedCoach(null);
        }
    }, [selectedCoach]);


    const handleSendMessage = (coach) => {
        setSelectedCoach(coach);
        setShowMessageModal(true);
    };

    const sendMessage = () => {
        setShowMessageModal(false);
        setMessageText('');
        setSelectedCoach(null);
    };
    return (
        <div className='overflow-hidden '>
            <div className={`row ${styles.filterContainer}`}>
                <div className="col-12 p-4 overflow-hidden">
                    <div className="row d-flex justify-content-center gap-2">
                        {coach.map(coach => (
                            <div
                                key={coach.id}
                                className={`col-md-3 mb-4 ${styles.cardWidth}`}
                            >
                                <div className={`card ${styles.clientCard}`}>
                                    <div className={`card-body ${styles.clientCardBody}`}>
                                        <div onClick={handelNavigate}>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className={styles.circleImageWrapper}>
                                                    <img
                                                        src={coach.img}
                                                        alt={coach.name}
                                                        className={styles.clientCircleImage}
                                                    />
                                                </div>
                                                <div className='d-flex flex-column align-items-center'>
                                                    <h5 className="card-title ms-3 mb-0">{coach.name}</h5>
                                                    <p className={styles.coachSport}>{coach.sport}</p>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between mb-3">
                                                <div className={styles.sessionInfo}>
                                                    <span className={styles.sessionLabel}>Completed</span>
                                                    <span className={styles.sessionCount}>{coach.sessions.completed}</span>
                                                </div>
                                                <div className={styles.sessionInfo}>
                                                    <span className={styles.sessionLabel}>Upcoming</span>
                                                    <span className={styles.sessionCount}>{coach.sessions.upcoming}</span>
                                                </div>
                                                <div className={styles.sessionInfo}>
                                                    <span className={styles.sessionLabel}>Pending</span>
                                                    <span className={styles.sessionCount}>{coach.sessions.pending}</span>
                                                </div>
                                            </div>

                                            <div className={styles.infoSection}>
                                                <div className={styles.infoRow}>
                                                    <span className={styles.infoLabel}>Sport:</span>
                                                    <span className={styles.infoValue}>{coach.sport}</span>
                                                </div>
                                                <div className={styles.infoRow}>
                                                    <span className={styles.infoLabel}>Type:</span>
                                                    <span className={styles.infoValue}>{coach.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className={styles.line}></span>
                                        <div className="d-flex flex-row gap-2 justify-content-between">
                                            <button
                                                className="btn btn-outline-danger px-4"
                                                onClick={handelNavigate}
                                            >
                                                <PiPersonSimpleThrowFill size={25} />
                                            </button>
                                            <button
                                                className="btn btn-outline-danger px-4"
                                                onClick={() => handleDeleteClient(coach)}
                                            >
                                                <ImCancelCircle size={25} />
                                            </button>
                                            <button
                                                className="btn btn-outline-danger px-4"
                                                onClick={() => handleSendMessage(coach)}
                                            >
                                                <LuMessageCircle size={25} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {coaches.length === 0 && (
                        <div className={`col-12 ${styles.noResultsMessage}`}>
                            No coachs found matching your filters.
                        </div>
                    )}
                </div>

                {showDeleteModal && (
                    <div className={`modal ${styles.modalOverlay}`}>
                        <div className="modal-dialog">
                            <div className={`modal-content ${styles.mainCard}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button
                                        type="button"
                                        className={`btn-close`}
                                        onClick={() => setShowDeleteModal(false)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete {selectedCoach?.name}?
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setShowDeleteModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={confirmDeleteClient}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Message Modal */}
                {showMessageModal && (
                    <div className={`modal ${styles.modalOverlay}`}>
                        <div className="modal-dialog">
                            <div className={`modal-content ${styles.mainCard}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Send Message to {selectedCoach?.name}</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowMessageModal(false)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <textarea
                                        className={`form-control ${styles.input}`}
                                        rows="4"
                                        value={messageText}
                                        onChange={(e) => setMessageText(e.target.value)}
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setShowMessageModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={sendMessage}
                                        disabled={!messageText.trim()}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SelectChoach