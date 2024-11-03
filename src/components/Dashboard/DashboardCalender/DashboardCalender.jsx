import React, { useState, useEffect } from 'react';
import styles from './DashboardCalender.module.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import event1 from "@assets/user.webp";
import event2 from "@assets/RegisterCoach (1).jpg"
import event3 from "@assets/review2.jpeg"
import event4 from "@assets/review1.jpeg";
import { FaClock, FaTrash } from 'react-icons/fa6';
import { FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import DeleteConfirmationModal from './DeleteConfirmationModal/DeleteConfirmationModal';

// DashboardCalender.jsx

const DashboardCalender = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showRescheduleModal, setShowRescheduleModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedNewDate, setSelectedNewDate] = useState(null);
    const [selectedNewTime, setSelectedNewTime] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Sample events data (replace with your actual events)
    const [events, setEvents] = useState([
        { id: 1, coachName: "Leo", sessionType: "Football", sessionLocation: "On-site", img: event1, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates blanditiis velit distinctio iusto nulla eos quidem quos cupiditate dolorum vel reprehenderit praesentium architecto libero excepturi esse molestiae quas, temporibus nam?", time: "11:30AM", date: new Date(2024, 10, 21) },
        { id: 2, coachName: "Mark", sessionType: "Football", sessionLocation: "Online", img: event2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.", time: "1:30PM", date: new Date(2024, 10, 5) },
        { id: 3, coachName: "Taric", sessionType: "Football", sessionLocation: "Campus", img: event3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in error rem eveniet, quisquam et eaque. Rem ducimus, quo accusantium possimus veritatis, quos dolores reiciendis et dignissimos fugiat cupiditate enim!", time: "5:30PM", date: new Date(2024, 10, 5) },
        { id: 4, coachName: "Jhin", sessionType: "Football", sessionLocation: "Online", img: event4, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsam commodi odit molestiae debitis, maiores tempore in! Dolorum, fugit obcaecati! Voluptates provident eius ad laudantium exercitationem, vel corrupti aliquid quo?", time: "8:30PM", date: new Date(2024, 10, 28) }
    ]);
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
            setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
        }
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const formatMonthYear = (date) => {
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const formatSelectedDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const eventsForDay = events.filter(event =>
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getFullYear() === date.getFullYear()
        );
        setSelectedEvents(eventsForDay);
        if (eventsForDay.length > 0) {
            setShowModal(true);
        }
    };

    const getEmptyCells = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        return Array(firstDayOfMonth).fill(null);
    };

    const isPreviousMonthDisabled = () => {
        const now = new Date();
        return currentDate.getMonth() === now.getMonth() && currentDate.getFullYear() === now.getFullYear();
    };
    const handleRescheduleSession = (event) => {
        setSelectedEvent(event);
        setShowModal(false);
        setShowRescheduleModal(true);
    };

    const handleConfirmReschedule = (newDate, newTime) => {
        // Update the event's date and time
        const updatedEvents = events.map(event =>
            event.id === selectedEvent.id
                ? { ...event, date: newDate, time: newTime }
                : event
        );

        setEvents(updatedEvents);
        setShowRescheduleModal(false);

        // Trigger a re-render of the calendar
        setCurrentDate(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
    };
    const handleDeleteSession = (eventId) => {
        const eventToConfirm = events.find(event => event.id === eventId);
        setEventToDelete(eventToConfirm);
        setShowDeleteConfirmation(true);
        setShowModal(false); // Close the parent modal
    };

    const confirmDeleteSession = () => {
        if (eventToDelete) {
            const updatedEvents = events.filter(event => event.id !== eventToDelete.id);
            setEvents(updatedEvents);

            setShowDeleteConfirmation(false);
            setEventToDelete(null); // Clear the selected event
        }
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
                                            <img src={event.img} alt={event.coachName} className={styles.eventImg} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bootstrap Modal */}
            {showModal && (
                <div className={`modal show ${styles.modalOverlay}`}
                >
                    <div className={`modal-dialog modal-dialog-centered modal-lg ${styles.modalWrapper}`}>
                        <div className={`modal-content ${styles.modalCard}`}>
                            {/* Modal Header */}
                            <div className={styles.modalHeader}>
                                <div className={styles.dateInfo}>
                                    <h2>{formatSelectedDate(selectedDate)}</h2>
                                    <span className={styles.eventCount}>
                                        {selectedEvents.length} Event{selectedEvents.length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setShowModal(false)}
                                >
                                    &times;
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className={styles.modalBody}>
                                {selectedEvents.length > 0 ? (
                                    <div className={styles.eventsGrid}>
                                        {selectedEvents.map(event => (
                                            <div key={event.id} className={styles.eventCard}>
                                                <div className={styles.eventImageContainer}>
                                                    <img
                                                        src={event.img}
                                                        alt={event.coachName}
                                                        className={styles.eventImage}
                                                    />
                                                    <div className={styles.eventType}>
                                                        {event.sessionType}
                                                    </div>
                                                </div>
                                                <div className={styles.eventDetails}>
                                                    <h3>{event.coachName}</h3>
                                                    <div className={styles.eventMeta}>
                                                        <div className={styles.metaItem}>
                                                            <FaClock />
                                                            <span>{event.time}</span>
                                                        </div>
                                                        <div className={styles.metaItem}>
                                                            <FaMapMarkerAlt />
                                                            <span>{event.sessionLocation}</span>
                                                        </div>
                                                    </div>
                                                    <p className={styles.eventDescription}>
                                                        {event.description}
                                                    </p>
                                                    <div className={styles.eventActions}>
                                                        <button
                                                            className={styles.deleteButton}
                                                            onClick={() => handleDeleteSession(event.id)}
                                                        >
                                                            <FaTrash /> Delete
                                                        </button>
                                                        <button
                                                            className={styles.rescheduleButton}
                                                            onClick={() => handleRescheduleSession(event)}
                                                        >
                                                            <FaCalendarAlt /> Reschedule
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className={styles.noEvents}>
                                        <p>No events scheduled for this day</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <DeleteConfirmationModal
                isOpen={showDeleteConfirmation}
                onClose={() => setShowDeleteConfirmation(false)}
                onConfirmDelete={confirmDeleteSession}
                eventDetails={eventToDelete || {}}
            />
            {/* Reschedule Modal */}
            {showRescheduleModal && (
                <div className={`modal show ${styles.modalBackdrop}`} style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content ${styles.modal} ${styles.rescheduleModal}`}>
                            <div className="modal-header border-0 d-flex justify-content-between align-items-center p-4">
                                <h5 className="modal-title d-flex align-items-center">
                                    <FaCalendarAlt className="me-2 text-primary" />
                                    Reschedule Session
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowRescheduleModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <FaCalendarAlt className="me-2 text-primary" />
                                        Select New Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        onChange={(e) => {
                                            const newDate = new Date(e.target.value);
                                            setSelectedNewDate(newDate);
                                        }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <FaClock className="me-2 text-primary" />
                                        Select New Time
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control form-control-lg"
                                        onChange={(e) => {
                                            setSelectedNewTime(e.target.value);
                                        }}
                                    />
                                </div>
                                <button
                                    className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center"
                                    onClick={() => {
                                        if (selectedNewDate && selectedNewTime) {
                                            handleConfirmReschedule(selectedNewDate, selectedNewTime);
                                        } else {
                                            // Optional: Add some validation feedback
                                            alert('Please select both date and time');
                                        }
                                    }}
                                    disabled={!selectedNewDate || !selectedNewTime}
                                >
                                    <FaCheckCircle className="me-2" />
                                    Confirm Reschedule
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default DashboardCalender;