import React from 'react';

const FollowButton = ({ action, text }) => {
  return (
    <button
      className={`follow-button ${text}`}
      onClick={ action }>
        <span>{ text }</span>
    </button>
  );
};

export default FollowButton;
