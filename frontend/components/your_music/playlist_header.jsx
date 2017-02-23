import React from 'react';


const PlaylistHeader = ({ playlistDetails, deletePlaylist }) => {
  const { id: playlistId, name, imageUrl, ownerUsername } = playlistDetails;

  let buttons = "";
  let playlistCreator = "";
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

    playlistCreator = (
      <h2>By&nbsp;
        <a>{ ownerUsername }</a>
      </h2>
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
          { playlistCreator }
        </div>

        { buttons }
      </div>
    </div>
  );
};

export default PlaylistHeader;
