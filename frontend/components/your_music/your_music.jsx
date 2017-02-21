import React from 'react';
import EditablePlaylistList from './editable_playlist_list';

class YourMusic extends React.Component {
  componentDidMount() {
    const { fetchUserPlaylists, currentUser } = this.props;
    fetchUserPlaylists(currentUser.id);
  }

  render() {
    const { playlists, fetchUserPlaylists } = this.props;

    return (
      <div className="main-content">
        <h1>Your Music</h1>

        <EditablePlaylistList playlists={ playlists } />
        {
          // <PlaylistDetailsContainer />
        }
      </div>
    );
  }
}
export default YourMusic;
