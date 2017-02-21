import { connect } from 'react-redux';
import AlbumDetails from './album_details';
import { fetchAlbumDetails } from '../../actions/album_actions';
import { fetchSongDetails } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    albumDetails: state.albumDetails,
    loading: state.loading.albumDetailsLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbumDetails: (albumId) => dispatch(fetchAlbumDetails(albumId)),
    fetchSongDetails: (songId) => dispatch(fetchSongDetails(songId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetails);
