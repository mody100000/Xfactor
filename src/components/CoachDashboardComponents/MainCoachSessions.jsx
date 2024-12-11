import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom'; // Assuming you're using React Router
import styles from "./MainCoachSessions.module.css"
import ScheduleSessions from '../ClientDashboardComponents/SessionComponents/ScheduleSessions';
import CoachCompletedSessions from './CoachDashboardSessions/CoachCompletedSessions';
import { RiArrowGoBackLine } from "react-icons/ri";
import { clientData } from '../ClientsData/ClientsData';
import CoachUpcomingSessions from './CoachUpcomingSessions/CoachUpcomingSessions';

function MainCoachSessions() {
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState('upcoming');
    const location = useLocation();
    const { clientId } = useParams();

    const selectedClient = location.state?.client ||
        clientData.find(client => client.id === parseInt(clientId));

    const renderActiveComponent = () => {
        switch (activeView) {
            case 'upcoming':
                return <CoachUpcomingSessions upcomingSessions={selectedClient?.upcomingSessions} />;
            case 'schedule':
                return <ScheduleSessions selectedClient={selectedClient} />;
            case 'completed':
                return <CoachCompletedSessions completedSessions={selectedClient?.completedSessions} />;
            default:
                return <CoachUpcomingSessions upcomingSessions={selectedClient?.upcomingSessions} />;
        }
    };
    console.log(selectedClient?.completedSessions)
    const handleGoBack = () => {
        navigate('/coach-dashboard/client-filter'); // Adjust the path as needed
    };
    { console.log(selectedClient) }

    return (
        <>
            <div className="position-relative p-3">
                <div className="d-flex align-items-center mb-3">
                    <img
                        src={selectedClient.img}
                        alt={selectedClient.coachName}
                        className="rounded-circle me-3"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                        <h4 className="mb-0">{selectedClient.coachName}</h4>
                        <p className="text-muted mb-0">{selectedClient.sessionType}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleGoBack}
                        className={`btn btn-outline-secondary position-absolute mt-2 ${styles.backButton}`}
                    >
                        <RiArrowGoBackLine size={30} />
                    </button>
                </div>
                <div className={styles.tabNavigation}>
                    <button
                        className={`${styles.tabItem} ${activeView === 'upcoming' ? styles.activeTab : ''}`}
                        onClick={() => setActiveView('upcoming')}
                    >
                        Upcoming Sessions ({selectedClient.upcomingSessions.length})
                    </button>
                    <button
                        className={`${styles.tabItem} ${activeView === 'schedule' ? styles.activeTab : ''}`}
                        onClick={() => setActiveView('schedule')}
                    >
                        Schedule Sessions (2)
                    </button>
                    <button
                        className={`${styles.tabItem} ${activeView === 'completed' ? styles.activeTab : ''}`}
                        onClick={() => setActiveView('completed')}
                    >
                        Completed Sessions ({selectedClient.completedSessions.length})
                    </button>
                </div>

                {renderActiveComponent()}
            </div>
            <span className={styles.line}></span>
        </>
    )
}

export default MainCoachSessions;