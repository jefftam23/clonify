import { connect } from 'react-redux';
import AlbumDetails from './album_details';
import { fetchAlbumDetails } from '../../actions/album_actions';
import { fetchSongDetails } from '../../actions/song_actions';
import { BROWSE,
         receiveActiveNavItem } from '../../actions/active_nav_item_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    albumDetails: state.albumDetails,
    loading: state.loading.albumDetailsLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbumDetails: (albumId) => dispatch(fetchAlbumDetails(albumId)),
    receiveActiveNavItem: () => dispatch(receiveActiveNavItem(BROWSE))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetails);
