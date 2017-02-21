import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist: { id, name, imageUrl } }) => {

  return (
    <li className="grid-index-item">
      <Link className="index-item-pic" to={ `/artists/${id}` }>
        <img src={ imageUrl } />
      </Link>

      <div className="index-item-details">
        <Link to={ `/artists/${id}` }>{ name }</Link>
      </div>
    </li>
  );
};

export default ArtistIndexItem;
