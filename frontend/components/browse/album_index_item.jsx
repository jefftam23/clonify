import React from 'react';
import { Link } from 'react-router';

const AlbumIndexItem = ({ album: { id, name, imageUrl } }) => {
  return (
    <li className="grid-index-item">
      <Link className="index-item-pic" to={ `/albums/${id}` }>
        <img src={ imageUrl } />
      </Link>

      <div className="index-item-details">
        <Link to={ `/albums/${id}` }>{ name }</Link>
      </div>
    </li>
  );
};

export default AlbumIndexItem;
