import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import socket from '../sockets/socket';
import { addMessage } from '../redux/actions';
import ChatWindow from '../components/ChatPage/ChatWindow';
import ChatInput from '../components/ChatPage/ChatInput';

const ChatContainer = () => {
  const chatHistory = useSelector((state) => state.chat.chatHistory);
  const dispatch = useDispatch();

  const sendMessage = (text) => {
    const newMessage = { user: 'You', text };
    dispatch(addMessage(newMessage));
    socket.emit('message', newMessage); 
  };

  React.useEffect(() => {
    
    socket.on('message', (message) => {
      dispatch(addMessage(message));
    });

    return () => {
      
      socket.off('message');
    };
  }, [dispatch]);

  return (
    <div>
      <ChatWindow chatHistory={chatHistory} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatContainer;
