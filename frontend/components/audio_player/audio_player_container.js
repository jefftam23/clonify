import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

const mapStateToProps = (state, ownProps) => {
  return {
    nowPlaying: state.nowPlaying
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
