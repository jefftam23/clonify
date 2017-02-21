import React from 'react';
import { Link } from 'react-router';

const NowPlaying = ({ nowPlaying }) => {
  const { albumId, albumImageUrl, name, artistId, artistName } = nowPlaying;

  return (
    <div className="now-playing">
      <Link className="np-album" to={ `/albums/${albumId}` }>
        <img src={ albumImageUrl }/>
      </Link>

      <h3 className="np-song">{ name }</h3>

      <div className="np-artist-wrapper">
        <Link className="np-artist" to={ `/artists/${artistId}` }>
          { artistName }
        </Link>
      </div>
    </div>
  );
};

export default NowPlaying;
