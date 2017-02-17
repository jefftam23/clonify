import React from 'react';

const ArtistHeader = ({ name, imageUrl }) => {
  return (
    <div className="artist-header">
      <img src={ imageUrl } />
      <h2>Artist</h2>
      <h3>{ name }</h3>
    </div>
  );
};

export default ArtistHeader;
