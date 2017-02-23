import React from 'react';
import PlaylistHeader from './playlist_header';
import SongTable from '../song_table';

class PlaylistDetails extends React.Component {
  componentWillMount() {
    // clear the playlist details state
    this.props.receivePlaylistDetails({});
  }

  render() {
    const { playlistDetails: { name, imageUrl, songs } } = this.props;
    const { fetchSongDetails } = this.props;

    return (
      <div className="playlist-details">
        I'm the playlist details container
        <PlaylistHeader
          name={ name }
          imageUrl={ imageUrl } />

        <SongTable
          songs={ songs }
          playlistView="true" />
      </div>
    );
  }
}

export default PlaylistDetails;
