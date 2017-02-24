import { connect } from 'react-redux';
import Follow from './follow';
import { FOLLOW,
         receiveActiveNavItem } from '../../actions/active_nav_item_actions';

const mapStateToProps = (state) => {
  return {
    // props from state go here
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveActiveNavItem: () => dispatch(receiveActiveNavItem(FOLLOW))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
