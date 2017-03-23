import React from 'react';
import { values } from 'lodash';
import GridIndexItem from '../grid_index_item';

const PlaylistIndex = ({ playlists }) => {
  const playlistIndexItems = values(playlists).map((playlist, idx) => {
    return (
      <GridIndexItem
        id={ playlist.id }
        name={ playlist.name }
        imageUrl={ playlist.imageUrl }
        type="playlists" />
    );
  });

  return (
    <div className="playlist-index-wrapper">
      <ul className="playlist-index">
        { playlistIndexItems }
      </ul>
    </div>
  );
};

export default PlaylistIndex;
