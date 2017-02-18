import React from 'react';

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
    const { albumDetails } = this.props;

    return (
      <div className="main-content">
        <h3>{ albumDetails.name }</h3>

        {
          // <AlbumHeader />
          // <SongTable /> 
        }
      </div>
    );
  }
}

export default AlbumDetails;
