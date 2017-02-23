import { connect } from 'react-redux';
import YourMusic from './your_music';
import { fetchPlaylists,
         fetchPlaylistDetails,
         createPlaylist } from '../../actions/playlist_actions';

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
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
