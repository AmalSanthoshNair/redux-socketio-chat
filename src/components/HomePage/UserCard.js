
import React from 'react';

const UserCard = ({ user, initiateChat }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={() => initiateChat(user)}>Chat</button>
    </div>
  );
};

export default UserCard;
