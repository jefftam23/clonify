import React from 'react';
import { Link } from 'react-router';

const GridIndexItem = ({ id, name, imageUrl, type }) => {
  return (
    <li className="grid-index-item">
      <Link className="index-item-pic" to={ `/${type}/${id}` }>
        <img src={ imageUrl } />
      </Link>

      <div className="index-item-details">
        <Link to={ `/${type}/${id}` }>{ name }</Link>
      </div>
    </li>
  );
};

export default GridIndexItem;
