import React from 'react';
import { Link } from 'react-router';

const AlbumHeader = ({ name, imageUrl, artist }) => {
  return (
    <div className="details-header">
      <div className="header-img-wrapper">
        <img src={ imageUrl } />
      </div>

      <div className="details-header-info">
        <span>Album</span>
        <h1>{ name }</h1>
        <h2>By&nbsp;
          <Link to={`/artists/${ artist ? artist.id : "" }`}>
            { artist ? artist.name : "" }
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default AlbumHeader;
