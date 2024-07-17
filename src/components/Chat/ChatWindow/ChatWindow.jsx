import React from 'react';
import styles from './ChatWindow.module.css';

const ChatWindow = () => {
    return (
        <div className={`${styles.chatWindow} d-flex flex-column`}>
            <div className={`${styles.header} p-3`}>
                <strong>Mark William</strong>
                <div className="text-muted">Last seen recently</div>
            </div>
            <div className={`${styles.messages} flex-grow-1 p-3`}>
                <div className={`${styles.message} mb-2`}>
                    <span>Oh, really? No, I didn't! Tell me more about it.</span>
                    <div className={`${styles.timestamp} text-muted`}>08:35</div>
                </div>
                <div className={`${styles.message} ${styles.sent} mb-2`}>
                    <span>Well, it's supposed to be super exciting! They cover everything from the basics of machine learning to advanced neural networks. Plus, there are hands-on projects where we get to build our own AI models.</span>
                    <div className={`${styles.timestamp} text-muted`}>08:35</div>
                </div>
                <div className={`${styles.message} mb-2`}>
                    <span>That sounds awesome! I've always been fascinated by AI but never knew where to start. Do you think beginners can also join?</span>
                    <div className={`${styles.timestamp} text-muted`}>08:35</div>
                </div>
                <div className={`${styles.message} ${styles.sent} mb-2`}>
                    <span>Absolutely! The course is designed for all levels, so whether you're a newbie or already familiar with the topic, you'll definitely learn a lot.</span>
                    <div className={`${styles.timestamp} text-muted`}>08:35</div>
                </div>
            </div>
            <div className={`${styles.inputBox} p-3`}>
                <input type="text" className="form-control" placeholder="Type a message..." />
            </div>
        </div>
    );
};

export default ChatWindow;
