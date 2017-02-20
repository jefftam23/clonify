import React from 'react';
import NowPlaying from './now_playing';
import SongControls from './song_controls';

const AudioPlayer = ({ nowPlaying }) => {
  if (Boolean(nowPlaying)) {
    return (
      <div className="audio-player">
        <NowPlaying nowPlaying={ nowPlaying }/>
        <SongControls />
      </div>
    );
  } else {
    return (
      <div className="no-current-song"></div>
    );
  }
};

export default AudioPlayer;
