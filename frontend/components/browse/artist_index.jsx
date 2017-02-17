import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllArtists();
  }

  render() {
    const artistIndexItems = this.props.artists.map((artist, idx) => {
      return (
        <ArtistIndexItem
          key={ idx }
          artist={ artist } />
      );
    });

    return (
      <div className="artist-index">
        <ul>
          { artistIndexItems }
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;
