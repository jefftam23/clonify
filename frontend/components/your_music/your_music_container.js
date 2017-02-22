import { connect } from 'react-redux';
import YourMusic from './your_music';
import { fetchPlaylists, fetchPlaylistDetails } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  return {
    playlists: state.yourMusicPlaylists,
    playlistDetails: state.playlistDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylistDetails: (id) => dispatch(fetchPlaylistDetails(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
