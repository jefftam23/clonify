import React from 'react';
import AlbumHeader from './album_header';

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
    const { albumDetails: { name, imageUrl, artist } } = this.props;

    return (
      <div className="main-content">
        <AlbumHeader
          name={ name }
          imageUrl={ imageUrl }
          artist={ artist } />

        {
          // <SongTable />
        }
      </div>
    );
  }
}

export default AlbumDetails;
