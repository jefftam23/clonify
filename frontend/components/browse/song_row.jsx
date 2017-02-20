import React from 'react';

const SongRow = ({ song, fetchSongDetails }) => {
  return (
    <tr>
      <td>
        <button
          onClick={ () => fetchSongDetails( song.id ) }>PLAY
        </button>
      </td>
      <td>{ song.name }</td>
    </tr>
  );
};

export default SongRow;
