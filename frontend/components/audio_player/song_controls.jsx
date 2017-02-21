import React from 'react';

class SongControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.updateTrackTime = this.updateTrackTime.bind(this);
    this.changeTrackPosition = this.changeTrackPosition.bind(this);
    this.handleTrackEnd = this.handleTrackEnd.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.seekBar = document.getElementById('seek-bar');
    this.audioEl = document.getElementById('audio');

    this.seekBar.setAttribute("max", parseInt(this.audioEl.duration).toString());
    this.audioEl.play();
    this.updateState();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.nowPlaying.id !== newProps.nowPlaying.id) {
      this.seekBar.setAttribute("max", parseInt(this.audioEl.duration).toString());
      this.setState({ currentTime: this.audioEl.currentTime });
      this.setState({ duration: this.audioEl.duration });
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

  updateState() {
    const { currentTime, duration, paused } = this.audioEl;

    this.setState({
      currentTime,
      duration,
      playing: !paused
    });
  }

  updateTrackTime() {
    this.seekBar.value = parseInt(this.audioEl.currentTime).toString();
    this.updateState();
  }

  changeTrackPosition(e) {
    this.audioEl.currentTime = e.currentTarget.value;
  }

  handleTrackEnd(e) {
    this.updateState();
  }

  formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  }

  render() {
    const { nowPlaying } = this.props;
    const currentTime = (this.state.currentTime) ? this.state.currentTime : 0;
    const duration = (this.state.duration) ? this.state.duration : 0;

    return (
      <div className="song-controls">
        {
          <audio
            id="audio"
            src={ nowPlaying.audioUrl }
            type="audio/mpeg"
            onTimeUpdate={ this.updateTrackTime }
            onEnded={ this.handleTrackEnd }
            autoPlay>Your browser does not support the audio element.
          </audio>
        }

        <input
          id="seek-bar"
          type="range"
          min="0"
          max={ this.state.duration }
          onChange={ this.changeTrackPosition } />

        <p className="track-times">
          <span className="track-current-time">
            { this.formatTime(currentTime) }
          </span>

          <span className="track-duration">
            { this.formatTime(duration) }
          </span>
        </p>

        <div className="controls-wrapper">
          <button
            className="toggle-play-button"
            onClick={ this.togglePlay }>
            <img
              src={
                this.state.playing ?
                window.images.pause :
                window.images.play } />
          </button>
        </div>
      </div>
    );
  }
}

export default SongControls;
