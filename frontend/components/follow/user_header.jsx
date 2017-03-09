import React from 'react';
import FollowButton from '../follow_button';

const UserHeader = ({ id,
                      name,
                      imageUrl,
                      followId,
                      follower,
                      deleteUserFollow,
                      createUserFollow}) => {

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
    <div className="details-header user">
      <div className="header-img-wrapper">
        <img className="header-img" src={ imageUrl } />
      </div>

      <div className="details-header-info">
        <span>User</span>
        <h1>{ name }</h1>
        <span>{ follower ? "Follows You" : "" }</span>
        <FollowButton action={ toggleFollow } text={ buttonText } />
      </div>
    </div>
  );
};

export default UserHeader;
