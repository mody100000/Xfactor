import React from 'react';
import styles from './ChatWindow.module.css';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ChatWindow = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`${styles.msger} ${isSidebarOpen ? "" : ''}`}>
            <header className={`${styles.msgerHeader}`}>
                <div className={styles.msgerHeaderTitle}>
                    <IoChatbubbleEllipsesOutline size={25} /> SimpleChat
                </div>
                <div className={styles.msgerHeaderOptions}>
                    <button className={`btn btn-danger ${styles.openBtn}`} onClick={toggleSidebar}><IoChatbubbleEllipsesOutline size={25} /></button>
                </div>
            </header>

            <main className={styles.msgerChat}>
                <div className={`${styles.msg} ${styles.leftMsg}`}>
                    <div className={styles.msgImg}></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>BOT</div>
                            <div className={styles.msgInfoTime}>12:45</div>
                        </div>
                        <div className={styles.msgText}>
                            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                        </div>
                    </div>
                </div>

                <div className={`${styles.msg} ${styles.rightMsg}`}>
                    <div className={styles.msgImg} ></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>Sajad</div>
                            <div className={styles.msgInfoTime}>12:46</div>
                        </div>
                        <div className={styles.msgText}>
                            You can change your name in JS section! You can change your name in JS section!
                        </div>
                    </div>
                </div>

                <div className={`${styles.msg} ${styles.leftMsg}`}>
                    <div className={styles.msgImg}></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>BOT</div>
                            <div className={styles.msgInfoTime}>12:45</div>
                        </div>
                        <div className={styles.msgText}>
                            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                        </div>
                    </div>
                </div>

                <div className={`${styles.msg} ${styles.rightMsg}`}>
                    <div className={styles.msgImg} ></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>Sajad</div>
                            <div className={styles.msgInfoTime}>12:46</div>
                        </div>
                        <div className={styles.msgText}>
                            You can change your name in JS section! You can change your name in JS section!
                        </div>
                    </div>
                </div>   <div className={`${styles.msg} ${styles.leftMsg}`}>
                    <div className={styles.msgImg}></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>BOT</div>
                            <div className={styles.msgInfoTime}>12:45</div>
                        </div>
                        <div className={styles.msgText}>
                            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                        </div>
                    </div>
                </div>

                <div className={`${styles.msg} ${styles.rightMsg}`}>
                    <div className={styles.msgImg} ></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>Sajad</div>
                            <div className={styles.msgInfoTime}>12:46</div>
                        </div>
                        <div className={styles.msgText}>
                            You can change your name in JS section! You can change your name in JS section!
                        </div>
                    </div>
                </div>   <div className={`${styles.msg} ${styles.leftMsg}`}>
                    <div className={styles.msgImg}></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>BOT</div>
                            <div className={styles.msgInfoTime}>12:45</div>
                        </div>
                        <div className={styles.msgText}>
                            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                        </div>
                    </div>
                </div>

                <div className={`${styles.msg} ${styles.rightMsg}`}>
                    <div className={styles.msgImg} ></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>Sajad</div>
                            <div className={styles.msgInfoTime}>12:46</div>
                        </div>
                        <div className={styles.msgText}>
                            You can change your name in JS section! You can change your name in JS section!
                        </div>
                    </div>
                </div>   <div className={`${styles.msg} ${styles.leftMsg}`}>
                    <div className={styles.msgImg}></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>BOT</div>
                            <div className={styles.msgInfoTime}>12:45</div>
                        </div>
                        <div className={styles.msgText}>
                            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                        </div>
                    </div>
                </div>

                <div className={`${styles.msg} ${styles.rightMsg}`}>
                    <div className={styles.msgImg} ></div>
                    <div className={styles.msgBubble}>
                        <div className={styles.msgInfo}>
                            <div className={styles.msgInfoName}>Sajad</div>
                            <div className={styles.msgInfoTime}>12:46</div>
                        </div>
                        <div className={styles.msgText}>
                            You can change your name in JS section! You can change your name in JS section!
                        </div>
                    </div>
                </div>
                {/* Additional messages */}
            </main>

            <form className={styles.msgerInputarea}>
                <input type="text" className={styles.msgerInput} placeholder="Enter your message..." />
                <button type="submit" className={styles.msgerSendBtn}>Send</button>
            </form>
        </div>
    );
};

export default ChatWindow;
