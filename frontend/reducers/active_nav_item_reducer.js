import { RECEIVE_ACTIVE_NAV_ITEM } from '../actions/active_nav_item_actions';
import merge from 'lodash/merge';

const _defaultState = {
  browse: false,
  yourMusic: false,
  follow: false
};

Object.freeze(_defaultState);

const ActiveNavItemReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ACTIVE_NAV_ITEM:
      return merge({}, _defaultState, action.activeNavItem);
    default:
      return oldState;
  }
};

export default ActiveNavItemReducer;
