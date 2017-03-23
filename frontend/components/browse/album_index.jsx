import React from 'react';
import GridIndexItem from '../grid_index_item';

const AlbumIndex = ({ albums }) => {
  const albumIndexItems = albums.map((album, idx) => {
    return (
      <GridIndexItem
        key={ idx }
        id={ album.id }
        name={ album.name }
        imageUrl={ album.imageUrl }
        type="albums" />
    );
  });

  return (
    <ul className="grid-index">
      { albumIndexItems }
    </ul>
  );
};

export default AlbumIndex;
