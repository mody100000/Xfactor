import React from 'react'
import { useState } from 'react';
import DashboardCalender from '../../../components/Dashboard/DashboardCalender/DashboardCalender';
import ScheduleSessions from '../../../components/ClientDashboardComponents/SessionComponents/ScheduleSessions';
import styles from "./CoachDashboardSessions.module.css"
import CoachCompletedSessions from '../../../components/CoachDashboardComponents/CoachDashboardSessions/CoachCompletedSessions';

function CoachDashboardSessions() {
    const [activeView, setActiveView] = useState('upcoming'); // 'upcoming', 'schedule', or 'completed'

    const renderActiveComponent = () => {
        switch (activeView) {
            case 'upcoming':
                return <DashboardCalender />;
            case 'schedule':
                return <ScheduleSessions />;
            case 'completed':
                return <CoachCompletedSessions />;
            default:
                return <DashboardCalender />;
        }
    };
    return (
        <>
            <div className='p-3'>
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

export default CoachDashboardSessions