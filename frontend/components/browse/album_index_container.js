import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { selectArtistAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: selectArtistAlbums(state)
  };
};

const mapDispatchToProps = (state, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
