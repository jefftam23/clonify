import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist: { id, name, imageUrl } }) => {

  return (
    <li>
      <Link to={ `/artists/${id}` }><img src={ imageUrl } /></Link>
      <p>{ name }</p>
    </li>
  );
};

export default ArtistIndexItem;
