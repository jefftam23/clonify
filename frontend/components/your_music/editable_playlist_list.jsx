import React from 'react';
import { values } from 'lodash';
import PlaylistListItem from './playlist_list_item';

class EditablePlaylistList extends React.Component {
  render() {
    const playlists = values(this.props.playlists);

    const playlistListItems = playlists.map((playlist, idx) => {
      return (
        <PlaylistListItem
          playlist={ playlist }
          key={ idx } />
      );
    });

    return (
      <div className="your-music-playlists-wrapper">
        <ul className="your-music-playlists">
        {
          // <PlaylistCreator />
        }

        { playlistListItems }
        </ul>
      </div>
    );
  }
}

export default EditablePlaylistList;
