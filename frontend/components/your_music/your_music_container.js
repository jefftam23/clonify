import { connect } from 'react-redux';
import YourMusic from './your_music';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  return {
    playlists: state.yourMusicPlaylists,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
