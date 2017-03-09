import { connect } from 'react-redux';
import UserDetails from './user_details';
import { receiveActiveNavItem,
         FOLLOW } from '../../actions/active_nav_item_actions';
import { fetchUserDetails,
         deleteUserFollow,
         createUserFollow } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.params.userId,
    userDetails: state.userDetails,
    loading: state.loading.userDetailsLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveActiveNavItem: () => dispatch(receiveActiveNavItem(FOLLOW)),
    fetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
    deleteUserFollow: (id) => dispatch(deleteUserFollow(id)),
    createUserFollow: (userFollow) => dispatch(createUserFollow(userFollow))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
