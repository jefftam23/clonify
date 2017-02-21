import React from 'react';

const ArtistHeader = ({ name, imageUrl }) => {
  return (
    <div className="artist-album-header">
      <div className="header-img-wrapper">
        <img src={ imageUrl } />
      </div>
      
      <div className="artist-album-h-details">
        <span>Artist</span>
        <h1>{ name }</h1>
      </div>
    </div>
  );
};

export default ArtistHeader;
