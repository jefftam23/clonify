import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import Browse from './browse';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
