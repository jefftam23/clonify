import React from 'react';
import { Link } from 'react-router';

const AlbumHeader = ({ name, imageUrl, artist }) => {
  return (
    <div>
      <h1>Album</h1>
      <h2>{ name }</h2>
      {
        <p>By
          <Link to={`/artists/${ artist ? artist.id : "" }`}>
            { artist ? " " + artist.name : "" }
          </Link>
        </p>
      }
    </div>
  );
};

export default AlbumHeader;
