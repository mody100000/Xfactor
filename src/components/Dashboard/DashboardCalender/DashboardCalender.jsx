import React, { useState, useEffect } from 'react';
import styles from './DashboardCalender.module.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import event1 from "@assets/user.webp";
import event2 from "@assets/RegisterCoach (1).jpg"
import event3 from "@assets/review2.jpeg"
import event4 from "@assets/review1.jpeg";

const DashboardCalender = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvents, setSelectedEvents] = useState([]);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const events = [
        { id: 1, title: "First Event", img: event1, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates blanditiis velit distinctio iusto nulla eos quidem quos cupiditate dolorum vel reprehenderit praesentium architecto libero excepturi esse molestiae quas, temporibus nam?", date: new Date(2024, 9, 21) }, // 21st October 2024
        { id: 2, title: "Second Event", img: event2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.", date: new Date(2024, 9, 5) }, // 5th October 2024
        { id: 3, title: "Third Event", img: event3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in error rem eveniet, quisquam et eaque. Rem ducimus, quo accusantium possimus veritatis, quos dolores reiciendis et dignissimos fugiat cupiditate enim!", date: new Date(2024, 9, 5) }, // 5th October 2024
        { id: 4, title: "Fourth Event", img: event4, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsam commodi odit molestiae debitis, maiores tempore in! Dolorum, fugit obcaecati! Voluptates provident eius ad laudantium exercitationem, vel corrupti aliquid quo?", date: new Date(2024, 9, 28) }  // 28th October 2024
    ];

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
        // Filter events for the clicked day
        const eventsForDay = events.filter(event =>
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getFullYear() === date.getFullYear()
        );
        setSelectedEvents(eventsForDay);
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
                    <GrFormPrevious size={45} />
                </i>
                <span className='fs-3'>{formatMonthYear(currentDate)}</span>
                <i className={styles.chevronRight} onClick={handleNextMonth}>
                    <GrFormNext size={45} />
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
                {days.map(day => {
                    const eventsForDay = events.filter(event =>
                        event.date.getDate() === day.getDate() &&
                        event.date.getMonth() === day.getMonth() &&
                        event.date.getFullYear() === day.getFullYear()
                    );

                    return (
                        <div
                            key={day.toString()}
                            className={`${styles.dayBox} ${isToday(day) ? styles.activeDay : ''} ${selectedDate && day.getTime() === selectedDate.getTime() ? styles.selected : ''}`}
                            onClick={() => handleDateClick(day)}
                        >
                            <span>{day.getDate()}</span>
                            {eventsForDay.length > 0 && (
                                <div className={styles.eventContainer}>
                                    {eventsForDay.map(event => (
                                        <div key={event.id} className={styles.event}>
                                            <img src={event.img} alt={event.title} className={styles.eventImg} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
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
                {selectedEvents.length > 0 ? (
                    selectedEvents.map(event => (
                        <div key={event.id}>
                            <div className={`d-flex flex-column flex-sm-row gap-4 px-3 py-1 ${styles.eventDetails}`}>
                                <div>
                                    <img src={event.img} alt={event.title} className={styles.eventImage} />
                                </div>
                                <div className='d-flex flex-column mt-3'>
                                    <h5 className='fw-bolder fs-2 text-center text-sm-start '>{event.title}</h5>
                                    <p className={styles.eventDescription}>{event.description}</p>
                                </div>
                            </div>
                            <span className={styles.line}></span>
                        </div>
                    ))
                ) : (
                    <p className='my-2 fs-5 text-center'>You have no upcoming sessions.</p>
                )}
            </div>
        </div>
    );
};

export default DashboardCalender;
