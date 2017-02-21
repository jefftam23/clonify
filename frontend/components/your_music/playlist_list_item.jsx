import React from 'react';

const PlaylistListItem = ({ playlist }) => {
  return (
    <li className="playlist_list_item">
      <span>{ playlist.name }</span>
    </li>
  );
};

export default PlaylistListItem;
