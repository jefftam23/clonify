import React from 'react';

const UserIndexItem = ({user: { username, followee, follower } }) => {
  return (
    <li>
      <div className="details-header user">
        <div className="header-img-wrapper">
          <img src="" />
        </div>

        <div className="details-header-info">
          <span>User</span>
          <h1>{ username }</h1>
          <span>{ follower ? "Follows You" : "" }</span>
          <button>hi</button>
        </div>
      </div>
    </li>
  );
};

export default UserIndexItem;
