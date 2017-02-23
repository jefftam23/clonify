import React from 'react';
import PlaylistHeader from './playlist_header';
import SongTable from '../song_table';

class PlaylistDetails extends React.Component {
  componentWillMount() {
    // if current user has at least one playlist,
    // fetch the most recent one and display it upon entering
    // the your-music page
    // else, dispatch receiving empty playlist eetails
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
