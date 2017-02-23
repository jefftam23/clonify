import React from 'react';

const SongDropdown = ({ songId, listingId, fetchSongDetails, deletePlaylistListing, playlistView }) => {
  const deleteButton = (
    <li>
      <button
        onClick={ () => deletePlaylistListing(listingId) }>Delete
      </button>
    </li>
  );

  return (
    <ul className="song-dropdown">
      <li>

      <ul>
        <li>
          <button
            onClick={ () => fetchSongDetails(songId) }>Play
          </button>
        </li>

        { playlistView ? deleteButton : "" }
      </ul>

      </li>
    </ul>
  );
};

export default SongDropdown;
