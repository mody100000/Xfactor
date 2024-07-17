import React from 'react';
import styles from './ChatSidebar.module.css';

const contacts = [
    { name: 'Mark William', message: "Count me in then! I can't wait to...", time: '05:18' },
    { name: 'Benjamin Hughes', message: "Watch your creativity bloom with...", time: '05:15' },
    { name: 'Olivia Patel', message: "Explore the vibrant realm of water...", time: '05:10' },
    { name: 'Jack Anderson', message: "Step into the realm of magical re...", time: '05:05' },
    { name: 'Emily Reynolds', message: "Embark on a biking adventure that...", time: '05:00' },
    { name: 'Matthew Campbell', message: "Count me in then! I can't wait to...", time: '04:12' },
    { name: 'Christian Buehner', message: "Discover the art of mindfulness...", time: '04:09' }
];

const ChatSidebar = () => {
    return (
        <div className={`${styles.sidebar} p-3`}>
            <input type="text" className="form-control mb-3" placeholder="Search" />
            {contacts.map((contact, index) => (
                <div key={index} className={`${styles.contact} mb-3 p-2`}>
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
