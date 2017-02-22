import React from 'react';

const PlaylistHeader = ({ name }) => {
  return (
    <div className="details-header">
      <div className="header-img-wrapper">
        <img />
      </div>

      <div className="details-header-info">
        <span>Playlist</span>
        <h1>{ name }</h1>
      </div>
    </div>
  );
};

export default PlaylistHeader;
