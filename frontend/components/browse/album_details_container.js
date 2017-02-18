import { connect } from 'react-redux';
import AlbumDetails from './album_details';
import { fetchAlbumDetails } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    albumDetails: state.albumDetails,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbumDetails: (albumId) => {
      return dispatch(fetchAlbumDetails(albumId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetails);
