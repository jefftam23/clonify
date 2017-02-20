import React from 'react';
import NowPlaying from './now_playing';
import SongControls from './song_controls';

class AudioPlayer extends React.Component {
  render() {
    const { nowPlaying } = this.props;

    if (Boolean(nowPlaying)) {
      return (
        <div className="audio-player">
          <NowPlaying nowPlaying={ nowPlaying } />
          <SongControls nowPlaying={ nowPlaying } />
        </div>
      );
    } else {
      return (
        <div className="no-current-song"></div>
      );
    }

  }
}

export default AudioPlayer;
