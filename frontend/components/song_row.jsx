import React from 'react';
import SongDropdown from './song_dropdown';

const SongRow = ({ song, rowFetchSongDetails }) => {
  return (
    <tr className="song-row">
      <td>
        <button
          className="play-button-cell"
          onClick={ () => rowFetchSongDetails( song.id ) }>
        </button>
      </td>

      <td>{ song.name }</td>

      <td>
        <SongDropdown />
      </td>
    </tr>
  );
};

export default SongRow;
