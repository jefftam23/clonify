import React from 'react';
import EditablePlaylistList from './editable_playlist_list';
import PlaylistDetails from './playlist_details';

class YourMusic extends React.Component {
  componentWillMount() {
    this.props.receiveActiveNavItem();
  }

  componentDidMount() {
    const { fetchPlaylists } = this.props;
    fetchPlaylists();
  }

  render() {
    const { playlists,
            playlistDetails,
            fetchPlaylistDetails,
            createPlaylist,
            receivePlaylistDetails,
            deletePlaylist,
            updatePlaylist } = this.props;

    return (
      <div className="main-content">
        <h1>Your Music</h1>

        <div className="your-music-wrapper">
          <EditablePlaylistList
            playlists={ playlists }
            playlistDetails={ playlistDetails }
            fetchPlaylistDetails={ fetchPlaylistDetails }
            createPlaylist={ createPlaylist } />

          <PlaylistDetails
            playlistDetails={ playlistDetails }
            receivePlaylistDetails={ receivePlaylistDetails }
            deletePlaylist={ deletePlaylist }
            updatePlaylist={ updatePlaylist } />
        </div>
      </div>
    );
  }
}
export default YourMusic;
