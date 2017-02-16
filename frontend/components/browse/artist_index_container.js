import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { selectAllArtists } from '../../reducers/selectors';
import { fetchAllArtists } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    artists: selectAllArtists(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllArtists: () => dispatch(fetchAllArtists())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
