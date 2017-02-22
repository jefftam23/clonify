import React from 'react';

const PlaylistListItem = ({ playlist, fetchPlaylistDetails }) => {
  return (
    <li className="playlist_list_item">
      {
        // wrap everything in a button that will fetch the album details
        // and trigger a re-render of the SongTable
      }
      <button onClick={ () => fetchPlaylistDetails(playlist.id) }>
        <img src={ playlist.imageUrl } />
        <span>{ playlist.name }</span>
      </button>
    </li>
  );
};

export default PlaylistListItem;
