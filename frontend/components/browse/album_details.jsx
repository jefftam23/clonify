import React from 'react';
import AlbumHeader from './album_header';
import SongTable from './song_table';

class AlbumDetails extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumDetails(this.props.params.albumId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.albumId !== newProps.params.albumId) {
      this.props.fetchAlbumDetails(newProps.params.albumId);
    }
  }

  render() {
    const { albumDetails: { name, imageUrl, artist, songs } } = this.props;
    const { fetchSongDetails } = this.props;

    return (
      <div className="main-content">
        <AlbumHeader
          name={ name }
          imageUrl={ imageUrl }
          artist={ artist } />

        <SongTable
          songs={ songs }
          fetchSongDetails={ fetchSongDetails } />

      </div>
    );
  }
}

export default AlbumDetails;
