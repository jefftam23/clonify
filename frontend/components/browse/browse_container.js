import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Browse from './browse';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
