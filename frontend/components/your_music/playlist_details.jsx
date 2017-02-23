import React from 'react';
import PlaylistHeader from './playlist_header';
import SongTable from '../song_table';

class PlaylistDetails extends React.Component {
  componentWillMount() {
    // clear the playlist details state
    this.props.receivePlaylistDetails({});
  }

  render() {
    const { playlistDetails, deletePlaylist } = this.props;

    return (
      <div className="playlist-details">
        <PlaylistHeader
          playlistDetails={ playlistDetails }
          deletePlaylist={ deletePlaylist } />

        <SongTable
          songs={ playlistDetails.songs }
          playlistView="true" />
      </div>
    );
  }
}

export default PlaylistDetails;
