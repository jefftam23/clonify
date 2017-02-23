import React from 'react';
import SongDropdown from './song_dropdown';

const SongRow = ({ song,
                   playlists,
                   fetchSongDetails,
                   deletePlaylistListing,
                   createPlaylistListing,
                   playlistView }) => {
  return (
    <tr className="song-row">
      <td>
        <button
          className="play-button-cell"
          onClick={ () => fetchSongDetails(song.id) }>
        </button>
      </td>

      <td>{ song.name }</td>

      <td>
        <SongDropdown
          songId={ song.id }
          listingId={ song.listingId }
          playlists={ playlists }
          fetchSongDetails={ fetchSongDetails }
          deletePlaylistListing={ deletePlaylistListing }
          createPlaylistListing={ createPlaylistListing }
          playlistView={ playlistView } />
      </td>
    </tr>
  );
};

export default SongRow;
