import React from 'react';

const SongRow = ({ song: { name } }) => {
  return (
    <tr>
      <td>{ name }</td>
    </tr>
  );
};

export default SongRow;
