import React from 'react';
import { values } from 'lodash';
import PlaylistListItem from './playlist_list_item';
import PlaylistCreator from './playlist_creator';

class EditablePlaylistList extends React.Component {
  render() {
    const playlists = values(this.props.playlists);
    const { playlistDetails,
            fetchPlaylistDetails,
            createPlaylist } = this.props;

    const playlistListItems = playlists.map((playlist, idx) => {
      let selected = "";
      if (playlistDetails.id && playlistDetails.id === playlist.id) {
        selected = "selected";
      }

      return (
        <PlaylistListItem
          playlist={ playlist }
          fetchPlaylistDetails={ fetchPlaylistDetails }
          key={ idx }
          selected={ selected } />
      );
    });

    return (
      <div className="your-music-playlists-wrapper">
        <PlaylistCreator
          createPlaylist={ createPlaylist }/>

        <ul className="your-music-playlists">
          { playlistListItems }
        </ul>
      </div>
    );
  }
}

export default EditablePlaylistList;
