import React from 'react';
import AlbumIndexItem from './album_index_item';

const AlbumIndex = ({ albums }) => {
  const albumIndexItems = albums.map((album, idx) => {
    return (
      <AlbumIndexItem
        key={ idx }
        album={ album } />
    );
  });

  return (
    <ul className="grid-index">
      { albumIndexItems }
    </ul>
  );
};

export default AlbumIndex;
