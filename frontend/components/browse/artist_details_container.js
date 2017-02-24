import { connect } from 'react-redux';
import ArtistDetails from './artist_details';
import { fetchArtistDetails } from '../../actions/artist_actions';
import { BROWSE,
         receiveActiveNavItem } from '../../actions/active_nav_item_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    artistDetails: state.artistDetails,
    loading: state.loading.artistDetailsLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArtistDetails: (artistId) => dispatch(fetchArtistDetails(artistId)),
    receiveActiveNavItem: () => dispatch(receiveActiveNavItem(BROWSE))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetails);
