import React from 'react';
import { Link } from 'react-router';

const ArtistIndexItem = ({ artist }) => {
  return (
    <li>
      <Link to="/"><img src={ artist.image_url } /></Link>
      <p>{ artist.name }</p>
    </li>
  );
};

export default ArtistIndexItem;
