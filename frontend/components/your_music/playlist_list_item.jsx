import React from 'react';

const PlaylistListItem = ({ playlist, fetchPlaylistDetails, selected }) => {
  return (
    <li className={ `playlist-list-item ${selected}` }>
      <button onClick={ () => fetchPlaylistDetails(playlist.id) }>
        <img src={ playlist.imageUrl } />

        <span>{ playlist.name }</span>
      </button>
    </li>
  );
};

export default PlaylistListItem;
