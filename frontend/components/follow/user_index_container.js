import { connect } from 'react-redux';
import UserIndex from './user_index';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
