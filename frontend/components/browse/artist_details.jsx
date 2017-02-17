import React from 'react';
import ArtistHeader from './artist_header';
import AlbumIndexContainer from './album_index_container';

class ArtistDetails extends React.Component {
  componentDidMount() {
    this.props.fetchArtistDetails(this.props.params.artistId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.artistId !== newProps.params.artistId) {
      this.props.fetchArtistDetails(newProps.params.artistId);
    }
  }

  render() {
    const { name, imageUrl, albums } = this.props.artistDetails;
    return (
      <div>
        <ArtistHeader name={ name } imageUrl={ imageUrl }/>
        <AlbumIndexContainer albums={ albums }/>
      </div>
    );
  }
}

export default ArtistDetails;
