import React from 'react';
import { values } from 'lodash';

const SongDropdown = ({ songId,
                        listingId,
                        playlists,
                        fetchSongDetails,
                        deletePlaylistListing,
                        createPlaylistListing,
                        playlistView }) => {

  let playlistArr = [];
  if (Boolean(playlists)){
    playlistArr = values(playlists);
  }

  // get the yourMusicPlaylists slice of state
  // If it hasn't yet been populated, fetch them
  const addToPlaylistButtons = playlistArr.map((playlist, idx) => {
    const listing = { playlist_id: playlist.id, song_id: songId };

    return (
      <li key={ idx }>
        <button
          onClick={ () => createPlaylistListing(listing) }>Add to { playlist.name }
        </button>
      </li>
    );
  });

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

        { addToPlaylistButtons }

        { playlistView ? deleteButton : "" }
      </ul>

      </li>
    </ul>
  );
};

export default SongDropdown;
