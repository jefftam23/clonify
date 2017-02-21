import { connect } from 'react-redux';
import YourMusic from './your_music';
import { fetchUserPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  return {
    playlists: state.yourMusicPlaylists,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPlaylists: (id) => dispatch(fetchUserPlaylists(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
