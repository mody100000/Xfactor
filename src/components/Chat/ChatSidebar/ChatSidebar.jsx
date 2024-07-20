import React from 'react';
import styles from './ChatSidebar.module.css';
import user from "@assets/user.jpeg"
const contacts = [
    { name: 'Mark William', img: user, message: "Count me in then! I can't wait to...", time: '05:18' },
    { name: 'Benjamin Hughes', img: user, message: "Watch your creativity bloom with...", time: '05:15' },
    { name: 'Olivia Patel', img: user, message: "Explore the vibrant realm of water...", time: '05:10' },
    { name: 'Jack Anderson', img: user, message: "Step into the realm of magical re...", time: '05:05' },
    { name: 'Jack Anderson', img: user, message: "Step into the realm of magical re...", time: '05:05' },
    { name: 'Jack Anderson', img: user, message: "Step into the realm of magical re...", time: '05:05' },
    { name: 'Jack Anderson', img: user, message: "Step into the realm of magical re...", time: '05:05' },
    { name: 'Jack Anderson', img: user, message: "Step into the realm of magical re...", time: '05:05' },

    { name: 'Emily Reynolds', img: user, message: "Embark on a biking adventure that...", time: '05:00' },
    { name: 'Matthew Campbell', img: user, message: "Count me in then! I can't wait to...", time: '04:12' },
    { name: 'Matthew Campbell', img: user, message: "Count me in then! I can't wait to...", time: '04:12' },
    { name: 'Matthew Campbell', img: user, message: "Count me in then! I can't wait to...", time: '04:12' },
    { name: 'Matthew Campbell', img: user, message: "Count me in then! I can't wait to...", time: '04:12' },
    { name: 'Matthew Campbell', img: user, message: "Count me in then! I can't wait to...", time: '04:12' },
    { name: 'Matthew Campbell', img: user, message: "Count me in then! I can't wait to...", time: '04:12' },
    { name: 'Matthew Campbell', img: user, message: "Count me in then! I can't wait to...", time: '04:12' },

    { name: 'Christian Buehner', img: user, message: "Discover the art of mindfulness...", time: '04:09' }
];

const ChatSidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
            <button className={`btn btn-secondary d-md-none ${styles.closeBtn}`} onClick={toggleSidebar}>Close</button>
            <div className='p-3'>
                <input type="text" className={`form-control mb-3 ${styles.searchInput}`} placeholder="Search" />
            </div>
            {contacts.map((contact, index) => (
                <div key={index} className={`${styles.contact} mb-3 p-2`}>
                    <div>
                        <img src={contact.img} alt="" className={styles.userImg} />
                    </div>
                    <div>
                        <strong>{contact.name}</strong>
                        <div className={`${styles.message} text-muted`}>{contact.message}</div>
                    </div>
                    <div className={`${styles.time} text-muted`}>{contact.time}</div>
                </div>
            ))}
        </div>
    );
};

export default ChatSidebar;