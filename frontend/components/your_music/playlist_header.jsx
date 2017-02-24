import React from 'react';
import PlaylistUpdateDropdown from './playlist_update_dropdown';

const PlaylistHeader = ({ playlistDetails, deletePlaylist, updatePlaylist }) => {
  const { id: playlistId, name, imageUrl, ownerUsername } = playlistDetails;

  let buttons = "";
  let playlistOwner = "";
  let dropdown = "";
  if (name) {
    buttons = (
      <div className="playlist-header-buttons">
        <button className="header-play-button">Play</button>

        <button
          className="header-delete-button"
          onClick={ () => deletePlaylist(playlistId) }>Delete
        </button>
      </div>
    );

    playlistOwner = (
      <h2>By&nbsp;
        <a>{ ownerUsername }</a>
      </h2>
    );

    dropdown = (
      <PlaylistUpdateDropdown
        playlistId={ playlistId }
        name={ name }
        update={ updatePlaylist } />
    );
  }

  return (
    <div className="details-header playlist-header">
      <div className="header-img-wrapper">
        <img className="playlist-header-img" src={ imageUrl }/>
      </div>

      <div className="header-info-wrapper">
        <div className="details-header-info">
          <span>Playlist</span>
          <h1>{ name }</h1>
          { dropdown }
          { playlistOwner }
        </div>

        { buttons }
      </div>
    </div>
  );
};

export default PlaylistHeader;
