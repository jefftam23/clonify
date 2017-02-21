import { connect } from 'react-redux';
import ArtistDetails from './artist_details';
import { fetchArtistDetails } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    artistDetails: state.artistDetails,
    loading: state.loading.artistDetailsLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArtistDetails: (artistId) => dispatch(fetchArtistDetails(artistId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetails);
