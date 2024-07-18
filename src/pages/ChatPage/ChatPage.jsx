import React, { useState } from 'react';
import styles from './ChatPage.module.css';
import ChatSidebar from '../../components/Chat/ChatSidebar/ChatSidebar';
import ChatWindow from '../../components/Chat/ChatWindow/ChatWindow';

const ChatPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='d-flex flex-row justify-content-between align-items-center flex-wrap px-3 my-3'>
                <h2 className={styles.headerTitle}>Chat</h2>
                <div className="d-flex justify-content-between">
                    <button className={`btn btn-danger ${styles.topBtn}`}>ALL (25)</button>
                    <button className={`btn btn btn-outline border border-1 border-danger text-danger ${styles.topBtn}`}>UNREAD</button>
                    <button className={`btn btn btn-outline border border-1 border-danger text-danger ${styles.topBtn}`}>
                        FAVORITE
                    </button>
                    <button className={`btn btn btn-outline border border-1 border-danger text-danger ${styles.topBtn}`}>
                        TEACHERS
                    </button>
                </div>
            </div>
            <div className={styles.chatPage}>
                <ChatSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <ChatWindow isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
        </>

    );
};

export default ChatPage;
