import React from 'react';
import EditablePlaylistList from './editable_playlist_list';
import PlaylistDetails from './playlist_details';

class YourMusic extends React.Component {
  componentDidMount() {
    const { fetchPlaylists } = this.props;
    fetchPlaylists();
  }

  render() {
    const { playlists,
            fetchPlaylistDetails,
            playlistDetails,
            createPlaylist,
            receivePlaylistDetails } = this.props;

    return (
      <div className="main-content">
        <h1>Your Music</h1>

        <div className="your-music-wrapper">
          <EditablePlaylistList
            playlists={ playlists }
            fetchPlaylistDetails={ fetchPlaylistDetails }
            createPlaylist={ createPlaylist } />

          <PlaylistDetails
            playlistDetails={ playlistDetails }
            receivePlaylistDetails={ receivePlaylistDetails } />
        </div>
      </div>
    );
  }
}
export default YourMusic;
