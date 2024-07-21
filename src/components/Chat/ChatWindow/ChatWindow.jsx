import React from 'react';
import styles from './ChatWindow.module.css';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ChatWindow = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`${styles.chatWindow} ${isSidebarOpen ? "" : ''}`}>
            <div className={`${styles.header} p-2`}>
                <div className='d-flex flex-column justify-content-center pt-2'>
                    <span>Mark William</span>
                    <p className="text-muted">Last seen recently</p>
                </div>
                <div>
                    <button className={`btn btn-danger d-md-none ${styles.openBtn}`} onClick={toggleSidebar}><IoChatbubbleEllipsesOutline size={25} /></button>
                </div>
            </div>
            <div className={`${styles.messages} flex-grow-1 p-3`}>
                <div className={`${styles.message} mb-2`}>
                    <span>Oh, really? No, I didn't! Tell me more about it.</span>
                    <div className={`${styles.timestamp} text-muted`}>08:35</div>
                </div>
                <div className='my-3'>
                    <div className={`${styles.message} ${styles.sent} mb-2`}>
                        <span>Well, it's supposed to be super exciting! They cover everything from the basics of machine learning to advanced neural networks. Plus, there are hands-on projects where we get to build our own AI models</span>
                    </div>
                    <div className={`${styles.timestampSend} text-muted`}>08:35</div>
                </div>
                <div className={`${styles.message} mb-2`}>
                    <span>That sounds awesome! I've always been fascinated by AI but never knew where to start. Do you think beginners can also join?</span>
                    <div className={`${styles.timestamp} text-muted`}>08:35</div>
                </div>
                <div className='my-3'>
                    <div className={`${styles.message} ${styles.sent} mb-2`}>
                        <span>Absolutely! The course is designed for all levels, so whether you're a newbie or already familiar with the topic, you'll definitely learn a lot</span>
                    </div>
                    <div className={`${styles.timestampSend} text-muted`}>08:35</div>
                </div>
                {/* Additional messages */}
            </div>
            <div className={`${styles.inputBox} p-3`}>
                <input type="text" className="form-control" placeholder="Type a message..." />
            </div>
        </div>
    );
};

export default ChatWindow;
