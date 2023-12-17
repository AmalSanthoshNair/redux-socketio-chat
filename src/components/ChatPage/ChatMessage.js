
import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div>
      <strong>{message.user}:</strong> {message.text}
    </div>
  );
};

export default ChatMessage;
