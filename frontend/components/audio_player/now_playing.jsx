import React from 'react';
import { Link } from 'react-router';

const NowPlaying = ({ nowPlaying }) => {
  const { albumId, albumImageUrl, name, artistId, artistName } = nowPlaying;

  return (
    <div className="now-playing">
      <Link to={ `/albums/${albumId}` }>
        <img src={ albumImageUrl }/>
      </Link>

      <h3>{ name }</h3>

      <Link to={ `/artists/${artistId}` }>{ artistName }
      </Link>
    </div>
  );
};

export default NowPlaying;
