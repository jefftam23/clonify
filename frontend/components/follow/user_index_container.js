import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchAllUsers,
         createUserFollow,
         deleteUserFollow } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    loading: state.loading.userIndexLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createUserFollow: (userFollow) => dispatch(createUserFollow(userFollow)),
    deleteUserFollow: (id) => dispatch(deleteUserFollow(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
