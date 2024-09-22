import React, { useState, useEffect } from 'react';
import styles from './CoachCalendar.module.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const CoachCalendar = () => {
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [currentWeekStartDate, setCurrentWeekStartDate] = useState(getStartOfWeek(new Date()));
    const [days, setDays] = useState([]);

    const times = [
        { time: '6:00', available: true },
        { time: '7:00', available: true },
        { time: '8:00', available: true },
        { time: '9:00', available: true },
        { time: '10:00', available: true },
        { time: '11:00', available: true },
        { time: '12:00PM', available: true },
        { time: '1:00PM', available: true },
        { time: '2:00PM', available: true },
        { time: '3:00PM', available: true },
        { time: '4:00PM', available: true },
        { time: '5:00PM', available: true },
        { time: '6:00PM', available: true },
        { time: '7:00PM', available: true },
        { time: '8:00PM', available: true },
        { time: '9:00PM', available: true }
    ];

    function getStartOfWeek(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day;
        return new Date(d.setDate(diff));
    }

    const generateDays = (startDate) => {
        const daysArray = [];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);

            daysArray.push({
                name: dayNames[currentDate.getDay()],
                date: currentDate.getDate(),
                fullDate: currentDate,
            });
        }
        return daysArray;
    };

    useEffect(() => {
        const today = new Date();
        const currentWeekStart = getStartOfWeek(today);

        if (currentWeekStartDate.getTime() < currentWeekStart.getTime()) {
            setCurrentWeekStartDate(currentWeekStart);
        } else {
            const generatedDays = generateDays(currentWeekStartDate);
            setDays(generatedDays);
        }
    }, [currentWeekStartDate]);

    const toggleDay = (day) => {
        setSelectedDays(prevSelectedDays => {
            const isSelected = prevSelectedDays.some(d => d.name === day.name && d.date === day.date);
            if (isSelected) {
                return prevSelectedDays.filter(d => d.name !== day.name || d.date !== day.date);
            } else {
                return [...prevSelectedDays, day];
            }
        });
    };

    const toggleTime = (time) => {
        setSelectedTimes(prevSelectedTimes => {
            if (prevSelectedTimes.includes(time)) {
                return prevSelectedTimes.filter(t => t !== time);
            } else {
                return [...prevSelectedTimes, time];
            }
        });
    };

    const handlePreviousWeek = () => {
        const today = new Date();
        const currentWeekStart = getStartOfWeek(today);
        const newStartDate = new Date(currentWeekStartDate);
        newStartDate.setDate(currentWeekStartDate.getDate() - 7);

        if (newStartDate >= currentWeekStart) {
            setCurrentWeekStartDate(newStartDate);
        } else {
            setCurrentWeekStartDate(currentWeekStart);
        }
    };

    const goToNextWeek = () => {
        const newStartDate = new Date(currentWeekStartDate);
        newStartDate.setDate(currentWeekStartDate.getDate() + 7);
        setCurrentWeekStartDate(newStartDate);
    };

    const formatDateRange = (startDate) => {
        const startDay = new Date(startDate);
        const endDay = new Date(startDate);
        endDay.setDate(startDay.getDate() + 6);

        const options = { month: 'short', day: 'numeric' };
        return `${startDay.toLocaleDateString('en-US', options)} - ${endDay.toLocaleDateString('en-US', options)}`;
    };

    const isCurrentWeek = getStartOfWeek(new Date()).getTime() === currentWeekStartDate.getTime();

    const formatSelected = () => {
        if (selectedDays.length === 0 || selectedTimes.length === 0) {
            return "none selected";
        }

        const formattedSelections = selectedDays.flatMap(day => {
            const options = { month: 'short', day: 'numeric' };
            const formattedDate = day.fullDate.toLocaleDateString('en-US', options);
            return selectedTimes.map(time => `${day.name}, ${formattedDate}, ${time}`);
        });

        return formattedSelections.join('; ');
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.dateRangeSelector}>
                <i
                    className={`${styles.chevronLeft} ${isCurrentWeek ? styles.disabled : ''}`}
                    onClick={handlePreviousWeek}
                >
                    <GrFormPrevious size={25} />
                </i>
                <span>{formatDateRange(currentWeekStartDate)}</span>
                <i className={styles.chevronRight} onClick={goToNextWeek}>
                    <GrFormNext size={25} />
                </i>
            </div>
            <div className={styles.daysGrid}>
                {days.map((day, index) => (
                    <label
                        key={index}
                        className={`${styles.dayBox} ${selectedDays.some(d => d.name === day.name && d.date === day.date) ? styles.active : ''}`}
                    >
                        <input
                            type="checkbox"
                            name="day"
                            onChange={() => toggleDay(day)}
                            checked={selectedDays.some(d => d.name === day.name && d.date === day.date)}
                        />
                        <div>{day.name}</div>
                        <div>{day.date}</div>
                    </label>
                ))}
            </div>

            <div className={styles.timesGrid}>
                {times.map((timeSlot, index) => (
                    <label
                        key={index}
                        className={`${styles.timeBox} ${timeSlot.available ? '' : styles.unavailable} ${selectedTimes.includes(timeSlot.time) ? styles.selected : ''}`}
                    >
                        <input
                            type="checkbox"
                            name="time"
                            disabled={!timeSlot.available}
                            onChange={() => toggleTime(timeSlot.time)}
                            checked={selectedTimes.includes(timeSlot.time)}
                        />
                        {timeSlot.time}
                    </label>
                ))}
            </div>

            <div className={styles.legend}>
                <div className='d-flex'>
                    <span className={styles.generalAvailability}></span> General availability
                </div>
                <div className='d-flex'>
                    <span className={styles.confirmedAvailability}></span> Confirmed times
                </div>
            </div>
        </div>
    );
};

export default CoachCalendar;