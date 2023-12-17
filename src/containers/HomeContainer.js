import React, { useState } from 'react';
import UserList from '../components/HomePage/UserList';
import ChatContainer from './ChatContainer';

const usersData = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  
];

const HomeContainer = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const initiateChat = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      {selectedUser ? (
        <ChatContainer user={selectedUser} />
      ) : (
        <UserList users={usersData} initiateChat={initiateChat} />
      )}
    </div>
  );
};

export default HomeContainer;
