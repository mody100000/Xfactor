import React, { useState, useEffect } from 'react';
import styles from './CoachUpcomingSessions.module.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import event1 from "@assets/user.webp";
import event2 from "@assets/RegisterCoach (1).jpg"
import event3 from "@assets/review2.jpeg"
import event4 from "@assets/review1.jpeg";
import { FaClock, FaTrash, FaFilter } from 'react-icons/fa6';
import { FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import DeleteConfirmationModal from '../../Dashboard/DashboardCalender/DeleteConfirmationModal/DeleteConfirmationModal';

const CoachUpcomingSessions = ({ upcomingSessions }) => {
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

    // New filter states
    const [coachFilter, setCoachFilter] = useState('');
    const [sessionTypeFilter, setSessionTypeFilter] = useState('');
    const [showFilterModal, setShowFilterModal] = useState(false);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Sample events data
    const [events, setEvents] = useState(upcomingSessions);

    // Get unique coach names and session types for filter dropdowns
    const uniqueCoachNames = [...new Set(events.map(event => event.coachName))];
    const uniqueSessionTypes = [...new Set(events.map(event => event.sessionType))];

    // Filter events based on coach and session type
    const filteredEvents = events.filter(event =>
        (!coachFilter || event.coachName === coachFilter) &&
        (!sessionTypeFilter || event.sessionType === sessionTypeFilter)
    );

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

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const eventsForDay = filteredEvents.filter(event =>
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

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const formattedToday = today.toISOString().split('T')[0];

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate >= today) {
            setSelectedNewDate(selectedDate);
        } else {
            toast.error("Please select a future date");
            e.target.value = formattedToday;
        }
    };

    const handleTimeChange = (e) => {
        const selectedTime = e.target.value;
        const [hours, minutes] = selectedTime.split(':');
        const selectedDateTime = new Date(selectedNewDate);
        selectedDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        if (selectedNewDate.toDateString() === today.toDateString() &&
            selectedDateTime < new Date()) {
            toast.error("Please select a future time");
            e.target.value = '';
        } else {
            setSelectedNewTime(selectedTime);
        }
    };

    const handleRescheduleSession = (event) => {
        setSelectedEvent(event);
        setShowModal(false);
        setShowRescheduleModal(true);
    };

    const handleConfirmReschedule = (newDate, newTime) => {
        const updatedEvents = events.map(event =>
            event.id === selectedEvent.id
                ? { ...event, date: newDate, time: newTime }
                : event
        );

        setEvents(updatedEvents);
        setShowRescheduleModal(false);
        toast.success("Session rescheduled successfully!");
        setCurrentDate(new Date(newDate.getFullYear(), newDate.getMonth(), 1));
    };

    const handleDeleteSession = (eventId) => {
        const eventToConfirm = events.find(event => event.id === eventId);
        setEventToDelete(eventToConfirm);
        setShowDeleteConfirmation(true);
        setShowModal(false);
    };

    const confirmDeleteSession = () => {
        if (eventToDelete) {
            const updatedEvents = events.filter(event => event.id !== eventToDelete.id);
            setEvents(updatedEvents);
            toast.success("Session deleted successfully!");
            setShowDeleteConfirmation(false);
            setEventToDelete(null);
        }
    };

    // Clear all filters
    const clearFilters = () => {
        setCoachFilter('');
        setSessionTypeFilter('');
    };

    return (
        <div className={styles.calendarContainer}>
            <ToastContainer />
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className='fw-bold'>Upcoming Sessions</h3>
                <button
                    className={`btn btn-outline-danger ${styles.filterButton}`}
                    onClick={() => setShowFilterModal(true)}
                >
                    <FaFilter /> Filters
                </button>
            </div>

            {/* Filter Modal */}
            {showFilterModal && (
                <div className={`modal show ${styles.modalOverlay}`} style={{ display: 'block' }}>
                    <div className={`modal-dialog modal-dialog-centered`}>
                        <div className={`modal-content ${styles.modal} ${styles.rescheduleModal}`}>
                            <div className="modal-header border-0 d-flex justify-content-between align-items-center p-4">
                                <h5 className="modal-title d-flex align-items-center">
                                    <FaFilter className="me-2 text-danger" />
                                    Filter Sessions
                                </h5>
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setShowFilterModal(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="mb-3">
                                    <label className="form-label">Coach Name</label>
                                    <select
                                        className="form-select"
                                        value={coachFilter}
                                        onChange={(e) => setCoachFilter(e.target.value)}
                                    >
                                        <option value="">All Coaches</option>
                                        {uniqueCoachNames.map(coach => (
                                            <option key={coach} value={coach}>{coach}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Session Type</label>
                                    <select
                                        className="form-select"
                                        value={sessionTypeFilter}
                                        onChange={(e) => setSessionTypeFilter(e.target.value)}
                                    >
                                        <option value="">All Session Types</option>
                                        {uniqueSessionTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="d-flex mt-5 justify-content-between">
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={clearFilters}
                                    >
                                        Clear Filters
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => setShowFilterModal(false)}
                                    >
                                        Apply Filters
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                    const eventsForDay = filteredEvents.filter(event =>
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
                                                    <div className='d-flex justify-content-between'>
                                                        <h3 className='fs-4 fw-bold'>{event.coachName}</h3>
                                                        <div className={styles.dateBox}>
                                                            <FaCalendarAlt />
                                                            <span>{formatDate(event.date)}</span>
                                                        </div>
                                                    </div>

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
                                                    <div className={styles.sport}>
                                                        {event.sessionType} Session
                                                    </div>
                                                    <p className={styles.eventDescription}>
                                                        {event.description}
                                                    </p>
                                                    <div className={styles.eventActions}>
                                                        <button
                                                            className={styles.deleteButton}
                                                            onClick={() => handleDeleteSession(event.id)}
                                                        >
                                                            <FaTrash className='mb-1' /> Delete
                                                        </button>
                                                        <button
                                                            className={styles.rescheduleButton}
                                                            onClick={() => handleRescheduleSession(event)}
                                                        >
                                                            <FaCalendarAlt className='mb-1' /> Reschedule
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
                <div className={`modal show ${styles.modalOverlay}`} style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content ${styles.modal} ${styles.rescheduleModal}`}>
                            <div className="modal-header border-0 d-flex justify-content-between align-items-center p-4">
                                <h5 className="modal-title d-flex align-items-center">
                                    <FaCalendarAlt className="me-2 text-danger" />
                                    Reschedule Session
                                </h5>
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setShowRescheduleModal(false)}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <FaCalendarAlt className="me-2 text-danger" />
                                        Select New Date
                                    </label>
                                    <input
                                        type="date"
                                        className={`form-control form-control-lg ${styles.input}`}
                                        min={formattedToday}
                                        onChange={handleDateChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label d-flex align-items-center">
                                        <FaClock className="me-2 text-danger" />
                                        Select New Time
                                    </label>
                                    <input
                                        type="time"
                                        className={`form-control form-control-lg ${styles.input}`}
                                        onChange={handleTimeChange}
                                        disabled={!selectedNewDate}
                                    />
                                </div>
                                <button
                                    className="btn btn-danger btn-lg w-100 d-flex align-items-center justify-content-center"
                                    onClick={() => {
                                        if (selectedNewDate && selectedNewTime) {
                                            handleConfirmReschedule(selectedNewDate, selectedNewTime);
                                        } else {
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
export default CoachUpcomingSessions;