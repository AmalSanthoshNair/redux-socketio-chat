
import React from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ chatHistory }) => {
  return (
    <div>
      {chatHistory.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatWindow;
