import React from 'react';
import { values } from 'lodash';
import SongRow from './song_row';

const SongTable = (props) => {
  const songs = values(props.songs);

  const songRows = songs.map((song, idx) => {
    return (
      <SongRow song={ song } key={ idx } />
    );
  });

  return (
    <table>
      <tbody>
        <tr>
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
