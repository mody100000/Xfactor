import React, { useState, useEffect } from 'react';
import styles from './CoachDashboardAvailability.module.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoachDashboardAvailability = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [currentWeekStartDate, setCurrentWeekStartDate] = useState(() => getStartOfWeek(new Date()));
    const [days, setDays] = useState([]);

    const times = [
        { time: '6:00', available: true },
        { time: '7:00', available: true },
        { time: '8:00', available: false },
        { time: '9:00', available: true },
        { time: '10:00', available: false },
        { time: '11:00', available: false },
        { time: '12:00PM', available: true },
        { time: '1:00PM', available: false },
        { time: '2:00PM', available: false },
        { time: '3:00PM', available: false },
        { time: '4:00PM', available: false },
        { time: '5:00PM', available: true },
        { time: '6:00PM', available: true },
        { time: '7:00PM', available: false },
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
                fullDate: currentDate, // Save the full date
            });
        }
        return daysArray;
    };

    useEffect(() => {
        const generatedDays = generateDays(currentWeekStartDate);
        setDays(generatedDays);
    }, [currentWeekStartDate]);

    useEffect(() => {
        const today = new Date();
        const currentWeekStart = getStartOfWeek(today);
        if (currentWeekStartDate.getTime() < currentWeekStart.getTime()) {
            setCurrentWeekStartDate(currentWeekStart);
        }
    }, []);

    const toggleDay = (day) => {
        setSelectedDay(day); // Set only one selected day
    };

    const toggleTime = (time) => {
        setSelectedTime(time); // Set only one selected time
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
        if (selectedDay && selectedTime) {
            const options = { month: 'short', day: 'numeric' };
            const formattedDate = selectedDay.fullDate.toLocaleDateString('en-US', options);
            return `${selectedDay.name}, ${formattedDate}, ${selectedTime}`;
        }
        return "none selected";
    };

    const handleConfirm = () => {
        if (selectedDay && selectedTime) {
            const formattedDate = selectedDay.fullDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            toast.success(`You have scheduled a session on ${selectedDay.name}, ${formattedDate}, at ${selectedTime}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <div className={styles.calendarContainer}>
            <ToastContainer />
            <h3 className='mb-3 fw-bold text-center fs-1'>Availability</h3>
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
                        className={`${styles.dayBox} ${selectedDay && selectedDay.name === day.name ? styles.active : ''}`}
                    >
                        <input
                            type="radio"
                            name="day"
                            onChange={() => toggleDay(day)}
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
                        className={`${styles.timeBox} ${timeSlot.available ? '' : styles.unavailable} ${selectedTime === timeSlot.time ? styles.selected : ''}`}
                    >
                        <input
                            type="radio"
                            name="time"
                            disabled={!timeSlot.available}
                            onChange={() => toggleTime(timeSlot.time)}
                        />
                        {timeSlot.time}
                    </label>
                ))}
            </div>

            <div className={styles.legend}>
                <div className='d-flex'>
                    <span className={styles.generalAvailability}></span> available time
                </div>
                <div className='d-flex'>
                    <span className={styles.confirmedAvailability}></span> unavailable time
                </div>
            </div>
        </div>
    );
};

export default CoachDashboardAvailability;
