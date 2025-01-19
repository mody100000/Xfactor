import React, { useState, useMemo, useCallback } from 'react';
import styles from './CoachDashboardClients.module.css';
import { clientData } from '../../../components/ClientsData/ClientsData';
import { useNavigate } from 'react-router-dom';
import { PiPersonSimpleThrowFill } from "react-icons/pi";
import { ImCancelCircle } from "react-icons/im";
import { LuMessageCircle } from "react-icons/lu";

function CoachDashboardClients() {
    const navigate = useNavigate();
    const [clients, setClients] = useState(clientData);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [messageText, setMessageText] = useState('');
    const [filters, setFilters] = useState({
        sport: '',
        location: '',
        search: ''
    });

    // Memoized filtering logic
    const processedClients = useMemo(() => {
        return clients.filter(client => {
            const matchesSport = !filters.sport || client.sessionType === filters.sport;
            const matchesLocation = !filters.location || client.sessionLocation === filters.location;
            const matchesSearch = !filters.search ||
                client.coachName.toLowerCase().includes(filters.search.toLowerCase()) ||
                client.sessionType.toLowerCase().includes(filters.search.toLowerCase());
            return matchesSport && matchesLocation && matchesSearch;
        });
    }, [clients, filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSessions = (client) => {
        navigate('/coach-dashboard/client-filter/coach-sessions', {
            state: { clients: [client] }
        });
    };

    const handleDeleteClient = useCallback((clientToDelete) => {
        setShowDeleteModal(true);
        setSelectedClient(clientToDelete);
    }, []);

    const confirmDeleteClient = useCallback(() => {
        if (selectedClient) {
            setClients(prevClients =>
                prevClients.filter(client => client.id !== selectedClient.id)
            );
            setShowDeleteModal(false);
            setSelectedClient(null);
        }
    }, [selectedClient]);

    const handleSendMessage = (client) => {
        setSelectedClient(client);
        setShowMessageModal(true);
    };

    const sendMessage = () => {
        setShowMessageModal(false);
        setMessageText('');
        setSelectedClient(null);
    };

    const sports = [...new Set(clientData.map(client => client.sessionType))];
    const locations = [...new Set(clientData.map(client => client.sessionLocation))];

    return (
        <div className='overflow-hidden'>
            <div className={`row ${styles.filterContainer}`}>
                <div className="col-12 mb-4">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <select
                                name="sport"
                                value={filters.sport}
                                onChange={handleFilterChange}
                                className={`form-select ${styles.filterInput}`}
                            >
                                <option value="">All Sports</option>
                                {sports.map(sport => (
                                    <option key={sport} value={sport}>{sport}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select
                                name="location"
                                value={filters.location}
                                onChange={handleFilterChange}
                                className={`form-select ${styles.filterInput}`}
                            >
                                <option value="">All Locations</option>
                                {locations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="search"
                                value={filters.search}
                                onChange={handleFilterChange}
                                placeholder="Search clients or sports"
                                className={`form-control ${styles.filterInput}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Clients Grid */}
                <div className="col-12 p-4 overflow-hidden">
                    <div className="row d-flex justify-content-center gap-2">
                        {processedClients.map(client => (
                            <div
                                key={client.id}
                                className={`col-md-3 mb-4 ${styles.cardWidth}`}
                            >
                                <div className={`card ${styles.clientCard}`}>
                                    <div className={`card-body ${styles.clientCardBody}`}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className={styles.circleImageWrapper}>
                                                <img
                                                    src={client.img}
                                                    alt={client.coachName}
                                                    className={styles.clientCircleImage}
                                                />
                                            </div>
                                            <div className='d-flex flex-column align-items-center'>
                                                <h5 className="card-title ms-3 mb-0">{client.coachName}{" "}{client.coachLastName}</h5>
                                                <p className={styles.coachSport}>{client.sessionType}</p>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between mb-3">
                                            <div className={styles.sessionInfo}>
                                                <span className={styles.sessionLabel}>Completed</span>
                                                <span className={styles.sessionCount}>{client.completedSessions.length}</span>
                                            </div>
                                            <div className={styles.sessionInfo}>
                                                <span className={styles.sessionLabel}>Upcoming</span>
                                                <span className={styles.sessionCount}>{client.upcomingSessions.length}</span>
                                            </div>
                                            <div className={styles.sessionInfo}>
                                                <span className={styles.sessionLabel}>Pending</span>
                                                <span className={styles.sessionCount}>{client.pendingSessions}</span>
                                            </div>
                                        </div>

                                        <div className={styles.infoSection}>
                                            <div className={styles.infoRow}>
                                                <span className={styles.infoLabel}>Sport:</span>
                                                <span className={styles.infoValue}>{client.sessionType}</span>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <span className={styles.infoLabel}>Type:</span>
                                                <span className={styles.infoValue}>{client.sessionLocation}</span>
                                            </div>
                                        </div>
                                        <span className={styles.line}></span>
                                        <div className="d-flex flex-row gap-2 justify-content-between">
                                            <button
                                                className="btn btn-outline-danger px-4"
                                                onClick={() => handleSessions(client)}
                                            >
                                                <PiPersonSimpleThrowFill size={25} />
                                            </button>
                                            <button
                                                className="btn btn-outline-danger px-4"
                                                onClick={() => handleDeleteClient(client)}
                                            >
                                                <ImCancelCircle size={25} />
                                            </button>
                                            <button
                                                className="btn btn-outline-danger px-4"
                                                onClick={() => handleSendMessage(client)}
                                            >
                                                <LuMessageCircle size={25} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {processedClients.length === 0 && (
                        <div className={`col-12 ${styles.noResultsMessage}`}>
                            No clients found matching your filters.
                        </div>
                    )}
                </div>
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
                                Are you sure you want to delete {selectedClient?.coachName}?
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
                                <h5 className="modal-title">Send Message to {selectedClient?.coachName}</h5>
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
    );
}

export default CoachDashboardClients;