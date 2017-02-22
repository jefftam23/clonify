import { connect } from 'react-redux';
import YourMusic from './your_music';
import { fetchPlaylists, fetchPlaylistDetails } from '../../actions/playlist_actions';
import { fetchSongDetails } from '../../actions/song_actions';

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
    fetchSongDetails: (id) => dispatch(fetchSongDetails(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
