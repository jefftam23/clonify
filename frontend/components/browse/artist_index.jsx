import React from 'react';
import GridIndexItem from '../grid_index_item';

class ArtistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllArtists();
  }

  render() {
    const artistIndexItems = this.props.artists.map((artist, idx) => {
      return (
        <GridIndexItem
          key={ idx }
          id={ artist.id }
          name={ artist.name }
          imageUrl={ artist.imageUrl }
          type="artists" />
      );
    });

    return (
      <div className="artist-index">
        <ul className="grid-index">
          { artistIndexItems }
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
