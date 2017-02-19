import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

const mapStateToProps = (state, ownProps) => {
  return {
    nowPlaying: state.nowPlaying
  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
