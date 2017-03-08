import React from 'react';
import { Link } from 'react-router';

const UserIndexItem = ({ user, createUserFollow, deleteUserFollow }) => {
  const { id, followId, username, followee, follower } = user;
  const buttonText = followee ? "Following" : "Follow";

  let toggleFollow;
  if (followee) {
    // unfollow
    toggleFollow = () => deleteUserFollow(followId);
  } else {
    // follow
    toggleFollow = () => createUserFollow({ followee_id: id });
  }

  return (
    <li>
      <div className="details-header user">
        <div className="header-img-wrapper">
          <Link to={ `/users/${id}` }><img src="" /></Link>
        </div>

        <div className="details-header-info">
          <span>User</span>
          <h1>
            <Link to={ `/users/${id}` }>{ username }</Link>
          </h1>
          <span>{ follower ? "Follows You" : "" }</span>
          <button
            onClick={ toggleFollow }>{ buttonText }
          </button>
        </div>
      </div>
    </li>
  );
};

export default UserIndexItem;
