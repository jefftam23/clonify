import React from 'react';
import { values } from 'lodash';
import SongRow from './song_row';

const SongTable = (props) => {
  const songs = values(props.songs);
  const fetchSongDetails = props.fetchSongDetails;

  const songRows = songs.map((song, idx) => {
    return (
      <SongRow
        song={ song }
        key={ idx }
        fetchSongDetails={ fetchSongDetails } />
    );
  });

  return (
    <table className="song-table">
      <tbody>
        <tr className="st-header-row">
          <th></th>
          <th>Song</th>
        </tr>
        {
          songRows
        }
      </tbody>
    </table>
  );
};

export default SongTable;
