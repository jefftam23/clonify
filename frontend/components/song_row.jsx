import React from 'react';
import SongDropdown from './song_dropdown';
import { Link } from 'react-router';

const SongRow = ({ song,
                   playlists,
                   fetchSongDetails,
                   deletePlaylistListing,
                   createPlaylistListing,
                   playlistView }) => {

  const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  };

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
        <Link to={ `/artists/${song.artistId}` }>{ song.artistName }</Link>
      </td>

      <td>
        <Link to={ `/albums/${song.albumId}` }>{ song.albumName }</Link>
      </td>

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

      <td>{ formatTime(song.duration) }</td>
    </tr>
  );
};

export default SongRow;
