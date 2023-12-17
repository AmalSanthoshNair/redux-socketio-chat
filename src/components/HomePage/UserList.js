
import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, initiateChat }) => {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} user={user} initiateChat={initiateChat} />
      ))}
    </div>
  );
};

export default UserList;

