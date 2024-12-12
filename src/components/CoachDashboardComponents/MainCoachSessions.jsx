import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./MainCoachSessions.module.css";
import ScheduleSessions from '../ClientDashboardComponents/SessionComponents/ScheduleSessions';
import CoachCompletedSessions from './CoachDashboardSessions/CoachCompletedSessions';
import { RiArrowGoBackLine } from "react-icons/ri";
import CoachUpcomingSessions from './CoachUpcomingSessions/CoachUpcomingSessions';

function MainCoachSessions() {
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState('upcoming');
    const location = useLocation();

    // Retrieve all selected clients
    const selectedClients = location.state?.clients || [];

    const handleGoBack = () => {
        navigate('/coach-dashboard/client-filter');
    };

    if (selectedClients.length === 0) {
        return <div>No clients selected</div>;
    }

    // Aggregate sessions across all selected clients
    const allUpcomingSessions = selectedClients.flatMap(client => client.upcomingSessions);
    const allCompletedSessions = selectedClients.flatMap(client => client.completedSessions);

    return (
        <>
            <div className="position-relative p-3">
                <div className={styles.buttonContainer} >
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
                        Upcoming Sessions ({allUpcomingSessions.length})
                    </button>
                    <button
                        className={`${styles.tabItem} ${activeView === 'schedule' ? styles.activeTab : ''}`}
                        onClick={() => setActiveView('schedule')}
                    >
                        Schedule Sessions
                    </button>
                    <button
                        className={`${styles.tabItem} ${activeView === 'completed' ? styles.activeTab : ''}`}
                        onClick={() => setActiveView('completed')}
                    >
                        Completed Sessions ({allCompletedSessions.length})
                    </button>
                </div>

                {/* Render data based on active tab */}
                {activeView === 'upcoming' && (
                    <CoachUpcomingSessions
                        upcomingSessions={allUpcomingSessions}
                        selectedClients={selectedClients}
                    />
                )}
                {activeView === 'schedule' && (
                    <ScheduleSessions
                        selectedClients={selectedClients}
                    />
                )}
                {activeView === 'completed' && (
                    <CoachCompletedSessions
                        completedSessions={allCompletedSessions}
                        selectedClients={selectedClients}
                    />
                )}
            </div>
        </>
    );
}

export default MainCoachSessions;