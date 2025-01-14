import React, { useState, useEffect } from 'react';
import styles from './CoachDashboardTopbar.module.css';
import user from "../../../assets/user.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { PiPersonSimpleThrowFill } from 'react-icons/pi';

const CoachDashboardTopbar = ({ toggleSidebar }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    // Sample data for dropdowns
    const notifications = [
        { id: 1, text: "New student joined your class", time: "2 mins ago" },
        { id: 2, text: "Session scheduled for tomorrow", time: "1 hour ago" }
    ];

    const messages = [
        { id: 1, sender: "John Doe", text: "Hello, when is our next session?", time: "5 mins ago" },
        { id: 2, sender: "Sarah Smith", text: "Thanks for the great class!", time: "2 hours ago" }
    ];

    const requests = [
        { id: 1, name: "Mike Johnson", type: "Training Request", status: "Pending" },
        { id: 2, name: "Emily Davis", type: "Session Booking", status: "New" }
    ];

    const handleDropdownClick = (dropdownName, e) => {
        e.stopPropagation();
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setOpenDropdown(null);
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={styles.topbar}>
            <button className={styles.menuBtn} onClick={toggleSidebar}>&#9776;</button>
            <div className={styles.userInfo}>
                <div className="d-flex align-items-center">
                    {/* Requests Dropdown */}
                    <div className={`${styles.iconContainer} me-4`}>
                        <div onClick={(e) => handleDropdownClick('requests', e)}>
                            <PiPersonSimpleThrowFill size={32} />
                            <span className={styles.number}>{requests.length}</span>
                        </div>
                        {openDropdown === 'requests' && (
                            <div className={styles.dropdownMenu}>
                                <div className={styles.dropdownHeader}>Training Requests</div>
                                <div className={styles.dropdownContent}>
                                    {requests.map(request => (
                                        <div key={request.id} className={styles.dropdownItem}>
                                            <div className={styles.itemTitle}>{request.name}</div>
                                            <div className={styles.itemText}>{request.type}</div>
                                            <span className={styles.status}>{request.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Messages Dropdown */}
                    <div className={`${styles.iconContainer} me-4`}>
                        <div onClick={(e) => handleDropdownClick('messages', e)}>
                            <LuMessageCircle size={32} />
                            <span className={styles.number}>{messages.length}</span>
                        </div>
                        {openDropdown === 'messages' && (
                            <div className={styles.dropdownMenu}>
                                <div className={styles.dropdownHeader}>Messages</div>
                                <div className={styles.dropdownContent}>
                                    {messages.map(message => (
                                        <div key={message.id} className={styles.dropdownItem}>
                                            <div className={styles.itemTitle}>{message.sender}</div>
                                            <div className={styles.itemText}>{message.text}</div>
                                            <div className={styles.itemTime}>{message.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Notifications Dropdown */}
                    <div className={`${styles.iconContainer} me-4`}>
                        <div onClick={(e) => handleDropdownClick('notifications', e)}>
                            <IoMdNotificationsOutline size={34} />
                            <span className={styles.number}>{notifications.length}</span>
                        </div>
                        {openDropdown === 'notifications' && (
                            <div className={styles.dropdownMenu}>
                                <div className={styles.dropdownHeader}>Notifications</div>
                                <div className={styles.dropdownContent}>
                                    {notifications.map(notification => (
                                        <div key={notification.id} className={styles.dropdownItem}>
                                            <div>{notification.text}</div>
                                            <div className={styles.itemTime}>{notification.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <img src={user} alt="user image" className={styles.userImg} />
                    <span className="fs-5 fw-bold">Shama</span>
                </div>
            </div>
        </div>
    );
};

export default CoachDashboardTopbar;