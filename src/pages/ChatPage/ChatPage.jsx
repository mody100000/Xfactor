import React from 'react';
import './ChatPage.module.css';
import ChatSidebar from '../../components/Chat/ChatSidebar/ChatSidebar';
import ChatWindow from '../../components/Chat/ChatWindow/ChatWindow';

const ChatPage = () => {
    return (
        <div className="d-flex h-100">
            <ChatSidebar />
            <ChatWindow />
        </div>
    );
};

export default ChatPage;