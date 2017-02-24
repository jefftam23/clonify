import { connect } from 'react-redux';
import Browse from './browse';
import { BROWSE,
         receiveActiveNavItem } from '../../actions/active_nav_item_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveActiveNavItem: () => dispatch(receiveActiveNavItem(BROWSE))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
