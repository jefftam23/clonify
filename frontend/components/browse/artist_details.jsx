import React from 'react';
import ArtistHeader from './artist_header';
import AlbumIndexContainer from './album_index_container';
import LoadingIcon from '../loading_icon';

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

    if (this.props.loading) {
      return (
        <div className="main-content">
          <LoadingIcon />
        </div>
      );
    }

    return (
      <div className="main-content">
        <ArtistHeader name={ name } imageUrl={ imageUrl }/>
        <AlbumIndexContainer albums={ albums }/>
      </div>
    );
  }
}

export default ArtistDetails;
