import React from 'react';
import EditablePlaylistList from './editable_playlist_list';

const YourMusic = ({ playlists }) => {
  return (
    <div className="main-content">
      <h1>Your Music</h1>

      <EditablePlaylistList playlists={ playlists } />
      {
        // <PlaylistDetailsContainer />
      }
    </div>
  );
};

export default YourMusic;
