import { connect } from 'react-redux';
import YourMusic from './your_music';

const fakeMusicPlaylists = {
  1: {
    name: 'playlist 1'
  },
  2: {
    name: 'playlist 2'
  },
  3: {
    name: 'playlist 3'
  },
};

const mapStateToProps = (state) => {
  return {
    // playlists: this.state.yourMusicPlaylists
    playlists: fakeMusicPlaylists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
