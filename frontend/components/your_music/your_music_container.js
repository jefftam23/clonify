import { connect } from 'react-redux';
import YourMusic from './your_music';
import { fetchPlaylists,
         fetchPlaylistDetails,
         createPlaylist,
         receivePlaylistDetails,
         deletePlaylist,
         updatePlaylist } from '../../actions/playlist_actions';
import { YOUR_MUSIC,
         receiveActiveNavItem } from '../../actions/active_nav_item_actions';

const mapStateToProps = (state) => {
  return {
    playlists: state.yourMusicPlaylists,
    playlistDetails: state.playlistDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylistDetails: (id) => dispatch(fetchPlaylistDetails(id)),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    receivePlaylistDetails: (details) => dispatch(receivePlaylistDetails(details)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    receiveActiveNavItem: () => dispatch(receiveActiveNavItem(YOUR_MUSIC))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourMusic);
