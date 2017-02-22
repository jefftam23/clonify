import React from 'react';

const SongRow = ({ song, fetchSongDetails }) => {
  return (
    <tr className="song-row">
      <td>
        <button
          className="play-button-cell"
          onClick={ () => fetchSongDetails( song.id ) }>
        </button>
      </td>
      <td>{ song.name }</td>
    </tr>
  );
};

export default SongRow;
