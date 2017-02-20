import React from 'react';

class SongControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: "" };

    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    this.audioEl = document.getElementById('audio');
    this.audioEl.play();
    this.setState({ playing: !this.audioEl.paused });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.nowPlaying.id !== newProps.nowPlaying.id) {
      this.setState({ playing: true }); // autoPlay starts the new song
    }
  }

  togglePlay() {
    if (this.audioEl.paused) {
      this.audioEl.play();
      this.setState({ playing: true });
    } else {
      this.audioEl.pause();
      this.setState({ playing: false });
    }
  }

  render() {
    const { nowPlaying } = this.props;

    return (
      <div className="song-controls">
        <audio
          id="audio"
          controls="controls"
          src={ nowPlaying.audioUrl }
          type="audio/mpeg"
          autoPlay>Your browser does not support the audio element.
        </audio>

        <button
          onClick={ this.togglePlay }>
          { this.state.playing ? "Pause" : "Play" }
        </button>
      </div>
    );
  }
}

export default SongControls;
