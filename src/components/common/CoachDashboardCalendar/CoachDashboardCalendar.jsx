import React, { useState, useEffect } from 'react';
import styles from './CoachDashboardCalendar.module.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const CoachDashboardCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    useEffect(() => {
        try {
            const newDays = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
            setDays(newDays);
        } catch (error) {
            console.error("Error in useEffect:", error);
        }
    }, [currentDate]);

    const getDaysInMonth = (year, month) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const handlePreviousMonth = () => {
        const now = new Date();
        if (currentDate.getMonth() > now.getMonth() || currentDate.getFullYear() > now.getFullYear()) {
            setCurrentDate(prevDate => {
                const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
                console.log("Previous month:", newDate);
                return newDate;
            });
        }
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
            console.log("Next month:", newDate);
            return newDate;
        });
    };

    const formatMonthYear = (date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const formatSelectedDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    const getEmptyCells = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        return Array(firstDayOfMonth).fill(null);
    };

    const isPreviousMonthDisabled = () => {
        const now = new Date();
        return currentDate.getMonth() === now.getMonth() && currentDate.getFullYear() === now.getFullYear();
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.dateRangeSelector}>
                <i
                    className={`${styles.chevronLeft} ${isPreviousMonthDisabled() ? styles.disabled : ''}`}
                    onClick={handlePreviousMonth}
                >
                    <GrFormPrevious size={25} />
                </i>
                <span>{formatMonthYear(currentDate)}</span>
                <i className={styles.chevronRight} onClick={handleNextMonth}>
                    <GrFormNext size={25} />
                </i>
            </div>
            <div className={styles.daysGrid}>
                {dayNames.map(day => (
                    <div key={day} className={styles.dayBox}>
                        {day}
                    </div>
                ))}
                {getEmptyCells().map((_, index) => (
                    <div key={`empty-${index}`} className={styles.dayBox}></div>
                ))}
                {days.map(day => (
                    <div
                        key={day.toString()}
                        className={`${styles.dayBox} ${isToday(day) ? styles.activeDay : ''} ${selectedDate && day.getTime() === selectedDate.getTime() ? styles.selected : ''}`}
                        onClick={() => handleDateClick(day)}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
            <div className={styles.showDay}>
                {!selectedDate ? (
                    <h4 className='my-0'>Today</h4>
                ) : (
                    <div className={styles.selectedDateDisplay}>
                        <h4 className='my-0'>{formatSelectedDate(selectedDate)}</h4>
                    </div>
                )}
            </div>
            <div className={styles.scheduleInf}>
                <p className='mb-0 fs-6'>You have no upcoming sessions.</p>
                <span className={styles.line}></span>
                <p className='mb-0 fs-6'>Click a date to schedule a session.</p>
                <span className={styles.line}></span>
                <p className='mb-0 fs-6 text-danger'>Manage Group Events</p>
            </div>
        </div>
    );
};

export default CoachDashboardCalendar;