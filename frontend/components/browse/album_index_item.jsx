import React from 'react';
import { Link } from 'react-router';

const AlbumIndexItem = ({ album: { id, name, imageUrl } }) => {
  return (
    <li>
      <Link to={ `/albums/${id}` }><img src={ imageUrl } /></Link>
      <p>{ name }</p>
    </li>
  );
};

export default AlbumIndexItem;
