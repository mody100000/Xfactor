import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import styles from "./MainCoachSessions.module.css"
import DashboardCalender from '../Dashboard/DashboardCalender/DashboardCalender';
import ScheduleSessions from '../ClientDashboardComponents/SessionComponents/ScheduleSessions';
import CoachCompletedSessions from './CoachDashboardSessions/CoachCompletedSessions';
import { RiArrowGoBackLine } from "react-icons/ri";

function MainCoachSessions({ selectedClient }) {
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState('upcoming');

    const renderActiveComponent = () => {
        switch (activeView) {
            case 'upcoming':
                return <DashboardCalender selectedClient={selectedClient} />;
            case 'schedule':
                return <ScheduleSessions selectedClient={selectedClient} />;
            case 'completed':
                return <CoachCompletedSessions selectedClient={selectedClient} />;
            default:
                return <DashboardCalender selectedClient={selectedClient} />;
        }
    };

    const handleGoBack = () => {
        navigate('/coach-dashboard/client-filter'); // Adjust the path as needed
    };

    return (
        <>
            <div className="position-relative p-3">
                <button
                    onClick={handleGoBack}
                    className={`btn btn-outline-secondary position-absolute mt-2 ${styles.backButton}`}
                >
                    <RiArrowGoBackLine size={30} />
                </button>

                <div className={styles.tabNavigation}>
                    <button
                        className={`${styles.tabItem} ${activeView === 'upcoming' ? styles.activeTab : ''}`}
                        onClick={() => setActiveView('upcoming')}
                    >
                        Upcoming Sessions (4)
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
                        Completed Sessions (4)
                    </button>
                </div>

                {renderActiveComponent()}
            </div>
            <span className={styles.line}></span>
        </>
    )
}

export default MainCoachSessions;