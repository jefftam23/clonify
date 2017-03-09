import React from 'react';
import { Link } from 'react-router';
import FollowButton from '../follow_button';

const UserIndexItem = ({ user, createUserFollow, deleteUserFollow }) => {
  const { id, imageUrl, followId, username, follower } = user;
  const buttonText = followId ? "Following" : "Follow";

  let toggleFollow;
  if (followId) {
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
          <Link to={ `/users/${id}` }>
            <img className="header-img" src={ imageUrl } />
          </Link>
        </div>

        <div className="details-header-info">
          <span>User</span>
          <h1>
            <Link to={ `/users/${id}` }>{ username }</Link>
          </h1>
          <span>{ follower ? "Follows You" : "" }</span>
          <FollowButton action={ toggleFollow } text={ buttonText } />
        </div>
      </div>
    </li>
  );
};

export default UserIndexItem;
